import * as React from 'react';
import { Link } from '@cloudscape-design/components';
import { createLabelFunction, formatDate, checkForManager} from '../../common/tableHelper';
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
        id: 'name',
        header: 'Name',
        cell: item => item.name,
        ariaLabel: createLabelFunction('Name'),
        sortingField: 'name',
    },
    {
        id: 'headcount',
        header: 'Headcount',
        cell: item => item.headcount,
        ariaLabel: createLabelFunction('headcount'),
        sortingField: 'headcount',
    },
    {
        id: 'managerAlias',
        header: 'Manager',
        cell: item => checkForManager(item),
        ariaLabel: createLabelFunction('Manager'),
        sortingComparator: (a, b) => (a.Manager.name === b.Manager.name) ? 0 : (a.Manager.name < b.Manager.name) ? -1 : 1,
    },
    {
        id: 'description',
        header: 'Description',
        cell: item => item.description,
        ariaLabel: createLabelFunction('Sescription'),
        sortingField: 'description',
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
