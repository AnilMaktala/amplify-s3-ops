import React, { useState, useEffect } from 'react';
import { useCollection } from '@cloudscape-design/collection-hooks';
import { Box, Button, CollectionPreferences, Header, Pagination, Table, TextFilter, Container, } from '@cloudscape-design/components'; import SpaceBetween from "@cloudscape-design/components/space-between";
import { columnDefinitions, getMatchesCountText, paginationLabels, collectionPreferencesProps } from './table-config';
import { Cache } from 'aws-amplify'
import { GoalForm } from './GoalForm';
import { fetchActivePlan, fetchGoals, removeGoal } from '../../common/graphqlHelper'
import { modesFilter } from '../../common/tableHelper';
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

function GoalList({ goalMode }) {
    const [activeIsb, setActiveIsb] = useState(Cache.getItem("isBizOps"));
    const [overActiveIsb, setOverActiveIsb] = useState(OP2Cache.getItem("overIsBizOps"));
    const [activeOrg, setActiveOrg] = useState(Cache.getItem("activeOrg"));

    const [activePlan, setActivePlan] = useState({});
    const [editId, setEditId] = useState(null);
    const [loading, setLoading] = useState(false);

    const [allItems, setAllItems] = useState([]);
    const [showForm, setShowForm] = useState(false);

    const [preferences, setPreferences] = useState({
        pageSize: 50,
        visibleContent: ["title", "description", "class", "end", "ownerAlias"
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
                <EmptyState title="No Goals" action={<Button>Create Goal</Button>} />
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
        pagination: { pageSize: preferences.pageSize },
        sorting: { defaultState: { sortingColumn: columnDefinitions[7] } },
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
            const res = await fetchGoals(planId, goalMode, token);
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

    useEffect(() => {
        Cache.removeItem("nextToken");

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
    function handleDelete() {
        if (selectedItems.length === 1) {
            let id = selectedItems[0].id;
            if (id) removeGoal(id).then((res) => { console.log(res); })
        }
    }
    return (
        <>
            <React.Fragment>
                {showForm && (
                    <Container
                    >
                        <SpaceBetween direction="vertical" size="l">
                            <GoalForm goalMode={goalMode} setShowForm={setShowForm} trigger={trigger}
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
                loadingText="Loading goals..."
                selectionType="multi"
                header={
                    <Header
                        counter={selectedItems.length ? `(${selectedItems.length}/${allItems.length})` : `(${allItems.length})`}
                        actions={
                            <SpaceBetween direction="horizontal" size="xs">
                                <Button onClick={event => trigger()} iconName="refresh" />
                                <Button disabled={!Cache.getItem("nextToken")} onClick={event => trigger()} iconName="add-plus" />
                                <Button disabled={selectedItems.length != 1
                                    || (!(activeIsb || overActiveIsb) && (goalMode == "OUTCOME" || goalMode == "OUTPUT"))}
                                    onClick={() => handleEdit()} >
                                    Edit Goal
                                </Button>
                                <Button disabled={selectedItems.length != 1
                                    || (!(activeIsb || overActiveIsb) && (goalMode == "OUTCOME" || goalMode == "OUTPUT"))}
                                    onClick={() => handleDelete()} >
                                    Delete Goal
                                </Button>
                                <Button variant="primary"
                                    disabled={(!(activeIsb || overActiveIsb) && (goalMode == "OUTCOME" || goalMode == "OUTPUT"))}
                                    onClick={() => handleCreate()}>
                                    Create Goal
                                </Button>
                            </SpaceBetween>
                        }
                    >
                        {goalMode ? (goalMode + " Goals") : "Goal"}
                    </Header>
                }
                resizableColumns
                columnDefinitions={columnDefinitions}
                visibleColumns={preferences.visibleContent}
                items={items}
                pagination={<Pagination {...paginationProps} ariaLabels={paginationLabels} />}
                filter={
                    <TextFilter
                        {...filterProps}
                        countText={getMatchesCountText(filteredItemsCount)}
                        filteringAriaLabel="Filter intiatives"
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
export default GoalList;