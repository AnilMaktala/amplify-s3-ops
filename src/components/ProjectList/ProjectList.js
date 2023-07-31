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
import { listProjects } from "../../graphql/queries";
import { ProjectSampleForm } from '../../ui-components';
import { createProject } from '../../graphql/mutations'
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
    const [allItems, setAllItems] = useState([]);
    const [showForm, setShowForm] = useState(false);

    //const [selectedItems, setSelectedItems] = useState([]);
    const [preferences, setPreferences] = useState({ pageSize: 10, visibleContent: ['id', 'title', 'description', 'rank', 'priority', 'headcount', 'createdAt', 'updatedAt'] });
    const { items, actions, filteredItemsCount, collectionProps, filterProps, paginationProps } = useCollection(
        allItems,
        {
            filtering: {
                empty: <EmptyState title="No projects" action={<Button>Create project</Button>} />,
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

    const { selectedItems } = collectionProps;
    const load = async () => {
        const todoData = await API.graphql({
            query: listProjects
        });
        console.log(todoData.data.listProjects);
        // const items = JSON.parse(todoData.listProjects.items);
        setAllItems(todoData.data.listProjects.items);
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
                                    Create Project
                                </Button>
                            </SpaceBetween>
                        }
                    >
                        Projects
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
                        filteringAriaLabel="Filter projects"
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
                        header={
                            <Header
                                variant="h2"

                            >
                                Add Project
                            </Header>
                        }>
                        <SpaceBetween direction="vertical" size="l">
                            <ProjectSampleForm width="30%" align="right" onSubmit={async (fields) => {
                                try {
                                    const response = await API.graphql(graphqlOperation(createProject, { input: fields }));
                                    setShowForm(false);
                                    load();
                                } catch {
                                    console.log("error");
                                }
                            }} />
                        </SpaceBetween>
                    </Container>
                )}
            </React.Fragment>
        </>
    );

}
export default ProjectList;