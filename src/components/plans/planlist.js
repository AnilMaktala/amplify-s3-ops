import React, { useState, useEffect } from "react";
import { Cache, Logger } from 'aws-amplify'

import { useCollection } from "@cloudscape-design/collection-hooks";
import { Box, Button, CollectionPreferences, Header, Pagination, Table, TextFilter, Container, } from "@cloudscape-design/components";
import SpaceBetween from "@cloudscape-design/components/space-between";
import { columnDefinitions, getMatchesCountText, paginationLabels, collectionPreferencesProps, } from "./table-config";
import { fetchActivePlan, fetchPlans, fetchProjects, makeSnapshot } from '../../common/graphqlHelper'
import { PlanForm } from "./PlanForm";
import { OP2Cache } from '../../common/cacheHelper';

const logger = new Logger('PlanList', 'INFO');

function EmptyState({ title, subtitle, action }) {
    return (
        <Box textAlign="center" color="inherit">
            <Box variant="strong" textAlign="center" color="inherit">
                {title}
            </Box>
            <Box variant="p" padding={{ bottom: "s" }} color="inherit">
                {subtitle}
            </Box>
            {action}
        </Box>
    );
}

function PlanList() {
    const [activeIsb, setActiveIsb] = useState(Cache.getItem("isBizOps"));
    const [overActiveIsb, setOverActiveIsb] = useState(OP2Cache.getItem("overIsBizOps"));
    const [activeOrg, setActiveOrg] = useState(Cache.getItem("activeOrg"));
    const [activePlan, setActivePlan] = useState({});
    const [editId, setEditId] = useState(null);
    const [loading, setLoading] = useState(false);
    const [loadingText, setLoadText] = useState(false);
  
    const [allItems, setAllItems] = useState([]);
    const [showForm, setShowForm] = useState(false);

    const [preferences, setPreferences] = useState({
        pageSize: 20,
        visibleContent: [
            "title",
            "year",
            "status",
            "ktloTarget",
        ],
    });
    const {
        items,
        actions,
        filteredItemsCount,
        collectionProps,
        filterProps,
        paginationProps,
    } = useCollection(allItems, {
        filtering: {
            empty: (
                <EmptyState title="No Plans" action={<Button>Create Plan</Button>} />
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
        },
        pagination: { pageSize: preferences.pageSize },
        sorting: { defaultState: { sortingColumn: columnDefinitions[2], isDescending: true } },
        selection: {},
    });

    const { selectedItems } = collectionProps;

    function trigger() {
        let plan = activePlan;
        if (plan) {
            load(plan.id);
        }
    };

    const load = async (planId) => {
        let token = Cache.getItem("nextToken");

        setLoading(true);
        var items = []
        do {
            const res = await fetchPlans(planId, token);
            items = [...items, ...res]
            token = Cache.getItem("nextToken")
        }
        while (token);

        items.map((it) => { return { ...it, sum: 0 } });
        if (token) {
            setAllItems([...allItems, ...items]);
        } else {
            setAllItems([...items]);
        }
        console.log(allItems);
        setLoading(false);
    };

    useEffect(() => {
        const res = fetchActivePlan().then((res) => {
            setActivePlan(res);
            if (res) {
                load(res.id);
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
    const handleSnapshot = async () => {
        if (selectedItems.length === 1) {
            let plan = selectedItems[0];
            try {
                setLoading(true);
                setLoadText(`Creating snapshot for ${plan.year}...`);

                let token = null;

                var items = []
                do {
                    const res = await fetchProjects(plan.id, null, token);
                    items = [...items, ...res]
                    token = Cache.getItem("nextToken")
                }
                while (token);

                const date = new Date().toISOString();
                const snaps = items.map((it) => {
                    return {
                        timestamp: date,
                        planYear: plan.year,
                        planTitle: plan.description,
                        projectTitle: it.title,
                        projectDescription: it.description,
                        projectRank: it.rank,
                        projectFunding: it.funding,
                        projectHeadcount: it.headcount,
                        initiativeTitle: (it.Initiative) ? it.Initiative.title : "",
                        initiativeDescription: (it.Initiative) ? it.Initiative.description : "",
                        organizationName: (it.Organization) ? it.Organization.name : "",
                        //                organizationManagerAlias: (it.Organization) ? it.Organization.name : "",
                        ownerAlias: (it.Owner) ? it.Owner.alias : "",
                        goalTitle: (it.Goal) ? it.Goal.title : "",
                        goalDescription: (it.Goal) ? it.Goal.description : "",
                        snapshotPlanId: plan.id,
                        snapshotProjectId: it.id
                    }
                });
                console.log(snaps);
                //await makeSnapshot(snaps).then((res) => { console.log(res) })
                setLoading(false);
                setLoadText("Loading plans...");
            } catch (e) {
                setLoading(false);
                setLoadText("Loading plans...");
            }
        };
    };
    return (
        <>
            <React.Fragment>
                {showForm && (
                    <Container>
                        <SpaceBetween direction="vertical" size="l">
                        <PlanForm setShowForm={setShowForm} trigger={trigger}
                plan={activePlan}
                org={activeOrg}
                isb={(activeIsb || overActiveIsb)}
                editId={editId} />
                        </SpaceBetween>
                    </Container>
                )}
            </React.Fragment>

            <Table
                {...collectionProps}
                loading={loading}
                loadingText={loadingText}
                selectionType="multi"
                header={
                    <Header
                        counter={
                            selectedItems.length
                                ? `(${selectedItems.length}/${allItems.length})`
                                : `(${allItems.length})`
                        }
                        actions={
                            <SpaceBetween direction="horizontal" size="xs">
                                <Button onClick={event => load()} iconName="refresh" />
                                <Button disabled={!(activeIsb || overActiveIsb) || selectedItems.length != 1} onClick={() => handleSnapshot()} >
                                    Snapshot Plan
                                </Button>
                                <Button disabled={!(activeIsb || overActiveIsb) || selectedItems.length != 1} onClick={() => handleEdit()} >
                                    Edit Plan
                                </Button>
                                <Button disabled={!(activeIsb || overActiveIsb)} variant="primary" onClick={() => handleCreate()}>
                                    Create Plan
                                </Button>
                            </SpaceBetween>
                        }
                    >
                        Plans
                    </Header>
                }
                columnDefinitions={columnDefinitions}
                visibleColumns={preferences.visibleContent}
                items={items}
                pagination={
                    <Pagination {...paginationProps} ariaLabels={paginationLabels} />
                }
                filter={
                    <TextFilter
                        {...filterProps}
                        countText={getMatchesCountText(filteredItemsCount)}
                        filteringAriaLabel="Filter Plans"
                    />
                }
                preferences={
                    <CollectionPreferences
                        {...collectionPreferencesProps}
                        preferences={preferences}
                        onConfirm={({ detail }) => setPreferences(detail)}
                    />
                }
            />
        </>
    );
}
export default PlanList;

/*
{
  timestamp: "2023-09-07T04:17:14.453Z",
  planYear: 2024,
  planTitle: "OP2 2024",
  projectTitle: "S3 DIME support for Public marketplace Flat Rate",
  projectDescription: "Storage metering support",
  projectRank: 9999,
  projectFunding: "CUT",
  projectHeadcount: 1.5,
  initiativeTitle: "Public Flat Rate Offer",
  initiativeDescription: "-",
  organizationName: "cbarte",
  ownerAlias: "grantds",
  goalTitle: "Placeholder Input Goal",
  goalDescription: "Placeholder Input Goal",
  snapshotPlanId: "c7676a33-a9ce-4ac4-9c55-b256403dbd97",
  snapshotProjectId: "4b72b6ed-4710-4c37-9c37-a40a8698b58d",
}
*/