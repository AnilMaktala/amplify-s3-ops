import React, { useState, useEffect } from 'react';
import { useCollection } from '@cloudscape-design/collection-hooks';
import { Box, Button, CollectionPreferences, Header, Pagination, Table, TextFilter, Container, Select, ButtonDropdown } from '@cloudscape-design/components';
import SpaceBetween from "@cloudscape-design/components/space-between";
import { columnDefinitions, getMatchesCountText, paginationLabels, collectionPreferencesProps } from './table-config';
import { Cache } from 'aws-amplify'
import { ProjectForm } from './ProjectForm';
import { fetchActivePlan, fetchOrganizationsForSelect, fetchProjects, removeProject, modifyProject } from '../../common/graphqlHelper'
import { modesFilter } from '../../common/tableHelper'
import { OP2Cache } from '../../common/cacheHelper';

function EmptyState({ title, subtitle, action }) {
    return (
        <Box textAlign="center" color="inherit">
            <Box variant="strong" textAlign="center" color="inherit">
                {title}
            </Box>
            <Box variant="p" padding={{ bottom: 's' }} color="inherit">
                {subtitle}
            </Box>
            {action}
        </Box>
    );
}

function ProjectList() {
    const [activeIsb, setActiveIsb] = useState(Cache.getItem("isBizOps"));
    const [overActiveIsb, setOverActiveIsb] = useState(OP2Cache.getItem("overIsBizOps"));
    const [activeOrg, setActiveOrg] = useState(Cache.getItem("activeOrg"));

    const [activePlan, setActivePlan] = useState({});
    const [editId, setEditId] = useState(null);
    const [loading, setLoading] = useState(false);

    const [allItems, setAllItems] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [selectedOrganization, setselectedOrganization] = React.useState({ label: "select Organization", value: "-NONE-", headcount: 0, incTarget: 0 });
    const [organizations, setOrganizations] = useState([]);

    const [preferences, setPreferences] = useState({
        pageSize: 100,
        visibleContent: ["initiativeTitle", "title", "description", "rank", "headcount",
            "funding", "initiativeBucket", "initiativeRank", "ownerAlias", "orgName", "sum"
        ],
    });
    const {
        items,
        actions,
        filteredItemsCount,
        collectionProps,
        filterProps,
        paginationProps,
        allPageItems
    } = useCollection(allItems, {
        loading: true,
        filtering: {
            empty: (
                <EmptyState title="No Projects" />
            ),
            noMatch: (
                <EmptyState
                    title="No matches"
                    action={
                        <Button onClick={() => actions.setFiltering("")}>
                            Clear filter
                        </Button>
                    }
                />
            ),
            filteringFunction: modesFilter
        },
        pagination: { pageSize: allItems.length == 0 ? preferences.pageSize : allItems.length },
        sorting: { defaultState: { sortingColumn: columnDefinitions[0] } },
        selection: {},
    });

    const { selectedItems } = collectionProps;

    const load = async (planId) => {
        let orgId = null;
        const it = Cache.getItem("selectedOrg")
        const ot = Cache.getItem("activeOrg")
        if (it != null) {
            if (it.label != "ALL S3G") orgId = it.value;
            setselectedOrganization(it)
        }
        else if (ot) {
            orgId = ot.id;
            setselectedOrganization({ label: ot.name, value: ot.id, incTarget: ot.incTarget, headcount: ot.headcount })
        }
        let token = Cache.getItem("nextToken");

        setLoading(true);
        var items = []
        do {
            const res = await fetchProjects(planId, orgId, token);
            items = [...items, ...res]
            token = Cache.getItem("nextToken")
        }
        while (token);

        if (token) {
            setAllItems([...allItems, ...items]);
        } else {
            setAllItems([...items]);
        }
        setLoading(false);
    };

    function trigger(event) {
        if (event) event.preventDefault();
        Cache.removeItem("nextToken");
        let plan = activePlan;
        if (plan) {
            load(plan.id);
        }
    }

    const loadOrganizations = async () => {
        if (organizations.length === 0) {
            let plan = Cache.getItem("activePlan");
            let res = await fetchOrganizationsForSelect(plan.id);

            setOrganizations([{ label: 'Select organization', value: '' }, ...res])
        }
    };

    useEffect(() => {
        const res = fetchActivePlan().then((res) => {
            setActivePlan(res);
            if (res) {
                load(res.id);
                loadOrganizations();
            }
        });
    }, []);

    function handleCreate() {
        setEditId(null);
        Cache.removeItem("editId");
        setShowForm(true);
    };
    function handleEdit() {
        if (selectedItems.length === 1) {
            setEditId(selectedItems[0].id);
            setShowForm(true);
        }
    };
    function handleDelete() {
        if (selectedItems.length === 1) {
            let id = selectedItems[0].id;
            if (id) removeProject(id).then((res) => { console.log(res); })
        }
    }


    function runningSum(items) {
        var sum;
        var res = items.map((sum = 0, it => {
            sum += it.headcount;
            it.sum = Math.round(sum);
            return it
        }))
        setAllItems([...res]);
    }
    function handleAction(event) {
        event.preventDefault();
        console.log(`Handle Action: ${event}`);
        if (event.detail.id === "RESET") {
            actions.setSorting({ sortingColumn: columnDefinitions[0] });
        }
        if (event.detail.id === "SUM") {
            runningSum(items);
        }
    };

    const handleSubmit = async (currentItem, column, value) => {

        const update = { ...currentItem, [column.id]: value };
        delete update.Goal;
        delete update.Owner;
        delete update.Plan;
        delete update.Initiative;
        delete update.Organization;
        delete update.createdAt;
        delete update.updatedAt;
        delete update.__typename;
        const res = modifyProject(update);
        await res.then(newItem => {
            let fullCollection = allItems;

            if (collectionProps.sortingColumn === column) {
                actions.setSorting(null);
                fullCollection = allPageItems;
            }
            if (filterProps.filteringText) {
                fullCollection = allItems;
            }
            setAllItems(fullCollection.map(item => {
                if (item === currentItem) {
                    return newItem
                } else {
                    return item
                };
            }));

            return res;

        });
    }

    return (
        <>
            <React.Fragment>
                {showForm && (
                    <Container>
                        <SpaceBetween direction="vertical" size="l">
                            <ProjectForm setShowForm={setShowForm} trigger={trigger}
                                plan={activePlan}
                                org={activeOrg}
                                isb={activeIsb || overActiveIsb}
                                editId={editId} />
                        </SpaceBetween>
                    </Container>
                )}
            </React.Fragment>
            <Table
                {...collectionProps}
                submitEdit={handleSubmit}
                loading={loading}
                loadingText='Loading projects...'
                selectionType="multi"
                contentDensity="compact"
                stickyHeader
                //stickyColumns={{ first: 1 }}
                header={
                    <Header
                        counter={selectedItems.length ? `(${selectedItems.length}/${allItems.length})` : `(${allItems.length})`}
                        actions={
                            <SpaceBetween direction="horizontal" size="l">
                                <Button onClick={event => trigger(event)} iconName="refresh" />
                                <Button disabled={!Cache.getItem("nextToken")} onClick={event => trigger()} iconName="add-plus" />
                                <Button disabled={selectedItems.length != 1} onClick={(event) => handleEdit(event)} >
                                    Edit Project
                                </Button>
                                <Button disabled={selectedItems.length == 0} onClick={(event) => handleDelete(event)} >
                                    Delete Project
                                </Button>
                                <Button variant="primary" onClick={(event) => handleCreate(event)}>
                                    Create Project
                                </Button>
                            </SpaceBetween>
                        }
                    >
                        Projects
                    </Header>
                }
                resizableColumns
                columnDefinitions={columnDefinitions}
                visibleColumns={preferences.visibleContent}
                items={items}
                pagination={<Pagination {...paginationProps} ariaLabels={paginationLabels} />}
                filter={
                    <SpaceBetween direction='horizontal' size='s'>
                        <Select
                            expandToViewport
                            disabled={!overActiveIsb && !activeIsb}
                            selectedOption={selectedOrganization}
                            onChange={({ detail }) => {
                                setselectedOrganization(detail.selectedOption);
                                Cache.setItem("selectedOrg", detail.selectedOption);
                                Cache.removeItem("nextToken");
                                trigger();
                            }
                            }
                            options={organizations}
                        />
                        <Box>
                            <Header
                                counter={`(${selectedOrganization.headcount}+${selectedOrganization.incTarget - selectedOrganization.headcount})`}
                                variant="h3"
                            >
                                Budget
                            </Header>
                        </Box>
                        <ButtonDropdown
                            items={[
                                { text: "Sum HC", id: "SUM", disabled: false },
                                { text: "Resort", id: "RESET", disabled: false },
                                { text: "Export", id: "EXPORT", disabled: false },
                            ]}
                            onItemClick={(event) => handleAction(event)}
                            variant="icon"
                        >
                            Sort
                        </ButtonDropdown>
                        <TextFilter
                            {...filterProps}
                            countText={getMatchesCountText(filteredItemsCount)}
                            filteringAriaLabel="Filter intiatives"
                        />
                    </SpaceBetween >
                }
                preferences={
                    < CollectionPreferences
                        {...collectionPreferencesProps}
                        preferences={preferences}
                        onConfirm={({ detail }) => setPreferences(detail)}
                    />
                }
            />
        </>
    );

}
export default ProjectList;