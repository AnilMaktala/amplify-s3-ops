import React, { useState, useEffect } from 'react';
import { useCollection } from '@cloudscape-design/collection-hooks';
import {
    Box,
    Button,
    CollectionPreferences,
    Header,
    Pagination,
    Table,
    TextFilter,
    Container,
} from '@cloudscape-design/components';
import SpaceBetween from "@cloudscape-design/components/space-between";
import ButtonDropdown from "@cloudscape-design/components/button-dropdown";
import { columnDefinitions, getMatchesCountText, paginationLabels, collectionPreferencesProps } from './table-config';
import { Amplify, API, graphqlOperation } from 'aws-amplify'
import { listOutputGoals } from "../../graphql/queries";
import { ProjectSampleForm } from '../../ui-components';
import { createPlan } from '../../graphql/mutations'
import Form from "@cloudscape-design/components/form";
import FormField from "@cloudscape-design/components/form-field";
import Input from "@cloudscape-design/components/input";
import InputFrom from './outputgoalform';
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

function OutputGoalList() {
    const [allItems, setAllItems] = useState([]);
    const [showForm, setShowForm] = useState(false);

    //const [selectedItems, setSelectedItems] = useState([]);
    const [preferences, setPreferences] = useState({ pageSize: 10, visibleContent: ['id', 'title', 'description', 'status', 'class', 'start', 'end', 'lastModified'] });
    const { items, actions, filteredItemsCount, collectionProps, filterProps, paginationProps } = useCollection(
        allItems,
        {
            filtering: {
                empty: <EmptyState title="No Themes" action={<Button onClick={() => setShowForm(true)} >Create OutputGoal</Button>} />,
                noMatch: (
                    <EmptyState
                        title="No matches"
                        action={<Button onClick={() => actions.setFiltering('')}>Clear filter</Button>}
                    />
                ),
            },
            pagination: { pageSize: preferences.pageSize },
            sorting: {},
            selection: {},
        }
    );

    function trigger() {
        load();
    }

    const { selectedItems } = collectionProps;
    const load = async () => {
        const res = await API.graphql({
            query: listOutputGoals
        });
        console.log(res.data.listOutputGoals);

        setAllItems(res.data.listOutputGoals.items);
    };
    useEffect(() => {
        load();
    }, []);
    return (
        <>
            <Table
                {...collectionProps}
                selectionType="multi"
                header={
                    <Header
                        counter={selectedItems.length ? `(${selectedItems.length}/${allItems.length})` : `(${allItems.length})`}
                        actions={
                            <SpaceBetween
                                direction="horizontal"
                                size="xs"
                            >



                                <Button variant="primary" onClick={() => setShowForm(true)}>
                                    Create OutputGoal
                                </Button>
                            </SpaceBetween>
                        }
                    >
                        Output Goals
                    </Header>
                }
                columnDefinitions={columnDefinitions}
                visibleColumns={preferences.visibleContent}
                items={items}
                pagination={<Pagination {...paginationProps} ariaLabels={paginationLabels} />}
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
            <React.Fragment>
                {showForm && (
                    <Container
                    >
                        <SpaceBetween direction="vertical" size="l">
                            <InputFrom trigger={trigger} setShowForm={setShowForm} />

                        </SpaceBetween>
                    </Container>
                )}
            </React.Fragment>
        </>
    );

}
export default OutputGoalList;