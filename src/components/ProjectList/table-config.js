import * as React from 'react';
import { Link } from '@cloudscape-design/components';

export function getMatchesCountText(count) {
    return count === 1 ? `1 match` : `${count} matches`;
}

function formatDate(date) {
    const dateFormatter = new Intl.DateTimeFormat('en-US', { dateStyle: 'long' });
    const timeFormatter = new Intl.DateTimeFormat('en-US', { timeStyle: 'short', hour12: false });
    return `${dateFormatter.format(date)}, ${timeFormatter.format(date)}`;
}

function createLabelFunction(columnName) {
    return ({ sorted, descending }) => {
        const sortState = sorted ? `sorted ${descending ? 'descending' : 'ascending'}` : 'not sorted';
        return `${columnName}, ${sortState}.`;
    };
}

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
        ariaLabel: createLabelFunction('Availability zone'),
        sortingField: 'title',
    },
    {
        id: 'description',
        header: 'Description',
        cell: item => item.description,
        ariaLabel: createLabelFunction('Description'),
        sortingField: 'description',
    },
    {
        id: 'rank',
        header: 'Rank',
        cell: item => item.rank,
        ariaLabel: createLabelFunction('Rank'),
        sortingField: 'rank',
    },
    {
        id: 'headcount',
        header: 'Headcount',
        cell: item => item.headcount,
        ariaLabel: createLabelFunction('Headcount'),
        sortingField: 'headcount',
    },
    {
        id: 'priority',
        header: 'Priority',
        cell: item => item.priority,
        ariaLabel: createLabelFunction('Priority'),
        sortingField: 'priority',
    },
    {
        id: 'lastUpdated',
        header: 'Last modified',
        cell: item => formatDate(item.lastUpdated),
        ariaLabel: createLabelFunction('Last modified'),
        sortingComparator: (a, b) => a.lastUpdated.valueOf() - b.lastUpdated.valueOf(),
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
