import { useEffect, useState } from "react";

import "@cloudscape-design/global-styles/index.css"
import { Box, Button, SpaceBetween, Table, TextFilter } from "@cloudscape-design/components"
import { useCollection } from '@cloudscape-design/collection-hooks';
import Header from "@cloudscape-design/components/header";
import { Storage } from 'aws-amplify';
import { Amplify, API, graphqlOperation } from 'aws-amplify'
import { listProjects } from "../../graphql/queries";

const columnDefinitions = [
    {
        id: 'id',
        cell: item => item.id,
        header: 'Title',
    },
    {
        id: 'description',
        header: 'Description',
        cell: item => item.description,
        minWidth: 10,
    },
    {
        id: 'rank',
        cell: item => item.rank,
        header: 'Rank',
    },
    {
        id: 'priority',
        cell: item => item.priority,
        header: 'Priority',
    },
    {
        id: 'priority',
        cell: item => item.headcount,
        header: 'Headcount',
    },
    {
        id: 'lastModified',
        header: 'Last Modified',
        cell: item => item.updatedAt.toString(),
    },
];

function ProjectList(props) {

    const [items, setItems] = useState();
    const [selectedItems, setSelectedItems] = useState([]);

    const { actions, filteredItemsCount, collectionProps, filterProps, paginationProps } = useCollection(
        items,
        {

            pagination: { pageSize: 5 },
            sorting: { defaultState: { sortingColumn: columnDefinitions[0] } },
            selection: {},
        }
    );

    const load = async () => {
        const todoData = await API.graphql({
            query: listProjects
        });
        console.log(todoData.data.listProjects);
        // const items = JSON.parse(todoData.listProjects.items);
        setItems(todoData.data.listProjects.items);
    };

    useEffect(() => {
        load();
    }, []);

    function downloadFile(filename) {
        Storage.get(filename, {
            level: props.level
        }).then(
            (result) => {
                openInNewTab(result);
            }
        )
    }

    function deleteFile(filename) {
        Storage.remove(filename, { level: props.level }).then(
            (ok) => {
                load().then(
                    // alert("File deleted.")
                );
            }
        ).catch((error) => {
            console.log(error);
        });
    }

    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }

    return (
        <Table
            items={items}
            // resizableColumns
            columnDefinitions={columnDefinitions}

            header={
                <Header
                    actions={
                        <SpaceBetween size="xs" direction="horizontal">
                            <Button onClick={() => load()}>Refresh</Button>
                            <Button disabled={selectedItems.length == 0} onClick={() => downloadFile(selectedItems[0].id)}>Download</Button>
                            <Button disabled={selectedItems.length == 0} onClick={() => deleteFile(selectedItems[0].id)}>Delete</Button>
                        </SpaceBetween>
                    }
                >

                </Header>
            }

            filter={
                <TextFilter
                    {...filterProps}
                    filteringAriaLabel="Filter distributions"
                    filteringPlaceholder="Find distributions"
                    filteringClearAriaLabel="Clear"
                    countText={filteredItemsCount}
                />
            }
            selectionType="single"
            selectedItems={selectedItems}
            empty={
                <Box margin={{ vertical: 'xs' }} textAlign="center" color="inherit">
                    <SpaceBetween size="xxs">
                        <div>
                            <b>No files uploaded yet</b>
                            <Box variant="p" color="inherit">
                                You don't have any files uploaded yet.
                            </Box>
                        </div>
                    </SpaceBetween>
                </Box>
            }
        />
    );

}

export default ProjectList;
