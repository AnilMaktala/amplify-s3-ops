import * as React from "react";
import Table from "@cloudscape-design/components/table";
import Box from "@cloudscape-design/components/box";
import SpaceBetween from "@cloudscape-design/components/space-between";
import Button from "@cloudscape-design/components/button";
import TextFilter from "@cloudscape-design/components/text-filter";
import Header from "@cloudscape-design/components/header";
import ButtonDropdown from "@cloudscape-design/components/button-dropdown";
import Pagination from "@cloudscape-design/components/pagination";
import CollectionPreferences from "@cloudscape-design/components/collection-preferences";
import { Amplify, API, graphqlOperation } from 'aws-amplify'
import { listProjects } from "../../graphql/queries";

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


function ProjectList(props) {
    const [
        selectedItems,
        setSelectedItems
    ] = React.useState([{ name: "Item 2" }]);
    const [items, setItems] = React.useState();
    const [
        currentPageIndex,
        setCurrentPageIndex
    ] = React.useState(1);
    const load = async () => {
        const projectList = await API.graphql({
            query: listProjects
        });
        console.log(projectList.data.listProjects);
        //const items = JSON.parse(projectList.listProjects.items);
        setItems(projectList.data.listProjects.items);
        setCurrentPageIndex(projectList.data.listProjects.items.length);
    };
    React.useEffect(() => {
        load();
    }, []);
    return (
        <Table
            onSelectionChange={({ detail }) =>
                setSelectedItems(detail.selectedItems)
            }
            selectedItems={selectedItems}
            ariaLabels={{
                selectionGroupLabel: "Items selection",
                allItemsSelectionLabel: ({ selectedItems }) =>
                    `${selectedItems.length} ${selectedItems.length === 1 ? "item" : "items"
                    } selected`,
                itemSelectionLabel: ({ selectedItems }, item) =>
                    item.id
            }}
            columnDefinitions={[
                { id: "id", header: "Id", cell: e => e.id },
                {
                    id: "title",
                    header: "Title",
                    cell: e => e.title,
                    sortingField: "title",
                    isRowHeader: true
                },
                {
                    id: "description",
                    header: "Description",
                    cell: e => e.description,
                    sortingField: "alt"
                },
                { id: "rank", header: "Type", cell: e => e.rank },
                {
                    id: "headcount",
                    header: "Headcount",
                    cell: e => e.headcount
                }
            ]}
            columnDisplay={[
                { id: "id", visible: true },
                { id: "title", visible: true },
                { id: "description", visible: true },
                { id: "rank", visible: true },
                { id: "headcount", visible: true }
            ]}
            items={items}
            loadingText="Loading projects"
            selectionType="multi"
            trackBy="name"
            empty={
                <Box
                    margin={{ vertical: "xs" }}
                    textAlign="center"
                    color="inherit"
                >
                    <SpaceBetween size="m">
                        <b>No projects</b>
                        <Button>Create project</Button>
                    </SpaceBetween>
                </Box>
            }
            filter={
                <TextFilter
                    filteringPlaceholder="Find projects"
                    filteringText=""
                />
            }
            header={
                <Header
                    counter={
                        selectedItems.length
                            ? "(" + selectedItems.length + "/10)"
                            : "(10)"
                    }
                    actions={
                        <SpaceBetween
                            direction="horizontal"
                            size="xs"
                        >
                            <ButtonDropdown
                                items={[
                                    {
                                        text: "Deactivate",
                                        id: "rm",
                                        disabled: false
                                    },
                                    {
                                        text: "Activate",
                                        id: "mv",
                                        disabled: false
                                    },
                                    {
                                        text: "Status 3",
                                        id: "rn",
                                        disabled: false
                                    },
                                    {
                                        text: "View details",
                                        id: "rm",
                                        disabled: false
                                    },
                                    {
                                        text: "Edit",
                                        id: "mv",
                                        disabled: false
                                    },
                                    {
                                        text: "Delete",
                                        id: "rn",
                                        disabled: false
                                    }
                                ]}
                            >
                                Actions
                            </ButtonDropdown>
                            <Button>Secondary button</Button>
                            <Button variant="primary">
                                Create Project
                            </Button>
                        </SpaceBetween>
                    }
                >
                    Projects
                </Header>
            }
            pagination={
                <Pagination
                    currentPageIndex={currentPageIndex}
                    onChange={({ detail }) =>
                        setCurrentPageIndex(detail.currentPageIndex)
                    }
                    pagesCount={5}
                />
            }
            preferences={
                <CollectionPreferences
                    title="Preferences"
                    confirmLabel="Confirm"
                    cancelLabel="Cancel"
                    preferences={{
                        pageSize: 1,
                        contentDisplay: [
                            { id: "id", visible: true },
                            { id: "title", visible: true },
                            { id: "description", visible: true },
                            { id: "rank", visible: true },
                            { id: "headcount", visible: true }
                        ]
                    }}
                    pageSizePreference={{
                        title: "Page size",
                        options: [
                            { value: 1, label: "10 projects" },
                            { value: 2, label: "20 projects" }
                        ]
                    }}
                    wrapLinesPreference={{}}
                    stripedRowsPreference={{}}
                    contentDensityPreference={{}}
                    contentDisplayPreference={{
                        options: [
                            { id: "id", label: "Id" },
                            {
                                id: "title",
                                label: "Title",
                                alwaysVisible: true
                            },
                            { id: "description", label: "Description" },
                            { id: "rank", label: "Rank" },
                            { id: "headcount", label: "Headcount" }
                        ]
                    }}
                    stickyColumnsPreference={{
                        firstColumns: {
                            title: "Stick first column(s)",
                            description:
                                "Keep the first column(s) visible while horizontally scrolling the table content.",
                            options: [
                                { label: "None", value: 0 },
                                { label: "First column", value: 1 },
                                { label: "First two columns", value: 2 }
                            ]
                        },
                        lastColumns: {
                            title: "Stick last column",
                            description:
                                "Keep the last column visible while horizontally scrolling the table content.",
                            options: [
                                { label: "None", value: 0 },
                                { label: "Last column", value: 1 }
                            ]
                        }
                    }}
                />
            }
        />
    );
}

export default ProjectList;