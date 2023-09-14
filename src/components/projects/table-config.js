import * as React from 'react';
import { Link, Textarea, Box, Input, Select } from '@cloudscape-design/components';
import { sortByFundingAndRank, checkForColor, checkForInitiative, checkForOwner, checkForRank, checkForBucket, checkForOrganization, createLabelFunction, formatDate, checkForGoal } from '../../common/tableHelper';
import { matchesCountText } from '../../common/tableHelper';

export const getMatchesCountText = matchesCountText;

export const columnDefinitions = [
    {
        id: 'id',
        header: 'ID',
        cell: item => <Link href={`#${item.id}`}>{item.id}</Link>,
        ariaLabel: createLabelFunction('id'),
        //sortingField: 'id',
        sortingComparator: sortByFundingAndRank,
        isRowHeader: true,
    },
    {
        id: "inititativeTitle",
        header: "Inititative",
        cell: item => checkForInitiative(item),
        ariaLabel: createLabelFunction('Inititative'),
        sortingField: 'inititativeTitle'
    },
    {
        id: 'title',
        header: 'Title',
        cell: item => item.title,
        ariaLabel: createLabelFunction('Title'),
        sortingField: 'title',
        minWidth: 320,
        editConfig: {
            ariaLabel: "Title",
            editIconAriaLabel: "editable",
            errorIconAriaLabel: "Title Error",
            editingCell: (
                item,
                { currentValue, setValue }
            ) => {
                return (
                    <Input
                        autoFocus={true}
                        value={currentValue ?? item.title}
                        onChange={event =>
                            setValue(event.detail.value)
                        }
                    />
                );
            }
        }
    },
    {
        id: 'description',
        header: 'Description',
        cell: item => <Textarea readOnly rows={2} value={item.description} />,
        ariaLabel: createLabelFunction('Description'),
        sortingField: 'description',
        minWidth: 420,
        editConfig: {
            ariaLabel: "Description",
            editIconAriaLabel: "editable",
            errorIconAriaLabel: "Description Error",
            editingCell: (
                item,
                { currentValue, setValue }
            ) => {
                return (
                    <Textarea rows={5}
                        autoFocus={true}
                        value={currentValue ?? item.description}
                        onChange={event =>
                            setValue(event.detail.value)
                        }
                    />
                );
            }
        }
    },
    {
        id: 'headcount',
        header: 'Headcount',
        cell: item => item.headcount,
        ariaLabel: createLabelFunction('Deadcount'),
        sortingField: 'headcount',
        editConfig: {
            ariaLabel: "Headcount",
            editIconAriaLabel: "editable",
            errorIconAriaLabel: "Headcount Error",
            editingCell: (
                item,
                { currentValue, setValue }
            ) => {
                return (
                    <Input type='number'
                        autoFocus={true}
                        value={currentValue ?? item.headcount}
                        onChange={event =>
                            setValue(event.detail.value)
                        }
                    />
                );
            }
        }
    },
    {
        id: 'rank',
        header: 'Rank',
        cell: item => item.rank,
        ariaLabel: createLabelFunction('Rank'),
        sortingField: 'rank',
        editConfig: {
            ariaLabel: "Rank",
            editIconAriaLabel: "editable",
            errorIconAriaLabel: "Rank Error",
            editingCell: (
                item,
                { currentValue, setValue }
            ) => {
                return (
                    <Input type='number'
                        autoFocus={true}
                        value={currentValue ?? item.rank}
                        onChange={event =>
                            setValue(event.detail.value)
                        }
                    />
                );
            }
        }
    },
    {
        id: 'funding',
        header: 'Funding',
        cell: item => item.funding,
        ariaLabel: createLabelFunction('Funding'),
        sortingField: 'funding',
        editConfig: {
            ariaLabel: "Funding",
            editIconAriaLabel: "editable",
            editingCell: (
                item,
                { currentValue, setValue }
            ) => {
                const value = currentValue ?? item.funding;
                return (
                    <Select
                        autoFocus={true}
                        expandToViewport={true}
                        selectedOption={
                            [
                                { label: "FLAT", value: "FLAT" },
                                { label: "INC", value: "INC" },
                                { label: "CUT", value: "CUT" },
                                { label: "NA", value: "NA" }
                            ].find(
                                option => option.value === value
                            ) ?? null
                        }
                        onChange={event => {
                            setValue(
                                event.detail.selectedOption.value ??
                                item.type
                            );
                        }}
                        options={[
                            { label: "FLAT", value: "FLAT" },
                            { label: "INC", value: "INC" },
                            { label: "CUT", value: "CUT" },
                            { label: "NA", value: "NA" }
                        ]}
                    />
                );
            }
        },
        cell: item => {
            return item.funding;
        }
    },
    {
        id: 'sum',
        header: 'Sum',
        cell: item => <Box color={checkForColor(item)} >{item.sum}</Box>,
        ariaLabel: createLabelFunction('Sum'),
    },
    {
        id: 'ownerAlias',
        header: 'Owner',
        cell: item => <Box color="text-status-info">{checkForOwner(item)}</Box>,
        ariaLabel: createLabelFunction('Owner'),
        sortingComparator: (a, b) => (a.Owner.alias === b.Owner.alias) ? 0 : (a.Owner.alias < b.Owner.alias) ? -1 : 1,
    },
    {
        id: 'initiativeBucket',
        header: 'Bucket',
        cell: item => <Box color="text-status-info">{checkForBucket(item)}</Box>,
        ariaLabel: createLabelFunction('Bucket'),
        sortingComparator: (a, b) => (a.Initiative.bucket === b.Initiative.bucket) ? 0 : (a.Initiative.bucket < b.Initiative.bucket) ? -1 : 1,
    },
    {
        id: 'initiativeRank',
        header: 'S3 Rank',
        cell: item => <Box color="text-status-info">{checkForRank(item)}</Box>,
        ariaLabel: createLabelFunction('Rank'),
        sortingComparator: (a, b) => (a.Initiative.rank === b.Initiative.rank) ? 0 : (a.Initiative.rank < b.Initiative.rank) ? -1 : 1,
    },
    {
        id: 'orgName',
        header: 'Organization',
        cell: item => <Box color="text-status-info">{checkForOrganization(item)}</Box>,
        ariaLabel: createLabelFunction('Organization'),
        sortingComparator: (a, b) => (a.Organization.name === b.Organization.name) ? 0 : (a.Organization.name < b.Organization.name) ? -1 : 1,
    },
    {
        id: 'goalTitle',
        header: 'Goal',
        cell: item => <Box color="text-status-info">{checkForGoal(item)}</Box>,
        ariaLabel: createLabelFunction('Goal'),
        sortingComparator: (a, b) => (!a.Goal || !b.Goal) ? 0 : (a.Organization.name === b.Organization.name) ? 0 : (a.Organization.name < b.Organization.name) ? -1 : 1,
    },
    {
        id: 'createdAt',
        header: 'CreatedAt',
        cell: item => formatDate(item.createdAt),
        ariaLabel: createLabelFunction('Last CreatedAt'),
        sortingComparator: (a, b) => a.createdAt.valueOf() - b.createdAt.valueOf(),
    },
    {
        id: 'updatedAt',
        header: 'Last modified',
        cell: item => formatDate(item.updatedAt),
        ariaLabel: createLabelFunction('Last modified'),
        sortingComparator: (a, b) => a.updatedAt.valueOf() - b.updatedAt.valueOf(),
    },
];

export const paginationLabels = {
    nextPageLabel: 'Next page',
    pageLabel: pageNumber => `Go to page ${pageNumber}`,
    previousPageLabel: 'Previous page',
};

const pageSizePreference = {
    title: 'Select page size',
    options: [
        { value: 10, label: '10 resources' },
        { value: 20, label: '20 resources' },
        { value: 50, label: '50 resources' },
        { value: 100, label: '100 resources' },
    ],
};

const visibleContentPreference = {
    title: 'Select visible content',
    options: [
        {
            label: 'Main properties',
            options: columnDefinitions.map(({ id, header }) => ({ id, label: header, editable: id !== 'id' })),
        },
    ],
};
export const collectionPreferencesProps = {
    pageSizePreference,
    visibleContentPreference,
    cancelLabel: 'Cancel',
    confirmLabel: 'Confirm',
    title: 'Preferences',
};
