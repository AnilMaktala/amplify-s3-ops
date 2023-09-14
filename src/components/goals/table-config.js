import * as React from 'react';
import { Link, Textarea } from '@cloudscape-design/components';
import { createLabelFunction, formatDate, checkForOwner} from '../../common/tableHelper';
import { matchesCountText } from '../../common/tableHelper';

export const getMatchesCountText = matchesCountText;

export const columnDefinitions = [
    {
        id: 'id',
        header: 'ID',
        cell: item => <Link href={`#${item.id}`}>{item.id}</Link>,
        ariaLabel: createLabelFunction('id'),
        sortingField: 'id',
        isRowHeader: true,
    },
    {
        id: 'title',
        header: 'Title',
        cell: item => item.title,
        ariaLabel: createLabelFunction('Title'),
        sortingField: 'title',
    },
    {
        id: 'description',
        header: 'Description',
        cell: item => <Textarea readOnly rows={2} value={item.description}/>,
        ariaLabel: createLabelFunction('Description'),
        sortingField: 'description',
    },
    {
        id: 'status',
        header: 'Status',
        cell: item => item.status,
        ariaLabel: createLabelFunction('Sescription'),
        sortingField: 'status',
    },
    {
        id: 'class',
        header: 'Class',
        cell: item => item.class,
        ariaLabel: createLabelFunction('Class'),
        sortingField: 'class',
    },
    {
        id: 'start',
        header: 'Start Date',
        cell: item => item.start,
        ariaLabel: createLabelFunction('Start Date'),
        sortingField: 'start'
    },
    {
        id: 'end',
        header: 'End Date',
        cell: item => item.end,
        ariaLabel: createLabelFunction('End Date'),
        sortingField: 'end'
    },
    {
        id: 'ownerAlias',
        header: 'Owner',
        cell: item => checkForOwner(item),
        ariaLabel: createLabelFunction('Owner'),
        sortingComparator: (a, b) => (a.Owner.name === b.Owner.name) ? 0 : (a.Owner.name < b.Owner.name) ? -1 : 1,
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
