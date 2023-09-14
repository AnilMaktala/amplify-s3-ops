import * as React from 'react';
import { Link, StatusIndicator } from '@cloudscape-design/components';
import { checkForManager, checkForOrganization } from '../../common/tableHelper';

export function getMatchesCountText(count) {
    return count === 1 ? `1 match` : `${count} matches`;
}

function formatDate(date) {
    const formattedDate = new Date(date).toLocaleString();
    return formattedDate;
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
        id: 'organizationName',
        header: 'Organization',
        cell: item => checkForOrganization(item),
        ariaLabel: createLabelFunction('Organization'),
        sortingComparator: (a, b) => (a.Organization.name === b.Organization.name) ? 0 : (a.Organization.name < b.Organization.name) ? -1 : 1,
    },
    {
        id: 'alias',
        header: 'Alias',
        cell: item => item.alias,
        ariaLabel: createLabelFunction('Alias'),
        sortingField: 'alias',
    },
    {
        id: 'name',
        header: 'Name',
        cell: item => item.name,
        ariaLabel: createLabelFunction('Name'),
        sortingField: 'name',
    },
    {
        id: 'managerAlias',
        header: 'Manager',
        cell: item => checkForManager(item),
        ariaLabel: createLabelFunction('Manager'),
        sortingComparator: (a, b) => (a.Manager.name === b.Manager.name) ? 0 : (a.Manager.name < b.Manager.name) ? -1 : 1,
    },
    {
        id: 'isManager',
        header: 'Is Manager',
        cell: item => <StatusIndicator type={(item.isManager) ? "success":"error"}></StatusIndicator>,
        ariaLabel: createLabelFunction('Is Manager'),
        sortingComparator: (a, b) => (a.isManager === b.isManager) ? 0 : (b.isManager) ? 1 : -1,
    },
    {
        id: 'isBizOps',
        header: 'Is BizOps',
        cell: item => <StatusIndicator type={(item.isBizOps) ? "success":"error"}></StatusIndicator>,
        ariaLabel: createLabelFunction('Is BizOps'),
        sortingComparator: (a, b) => (a.isBizOps === b.isBizOps) ? 0 : (b.isBizOps) ? 1 : -1,
    },
    {
        id: 'sixManagerAlias',
        header: 'L6 Manager',
        cell: item => item.sixManagerAlias,
        ariaLabel: createLabelFunction('L6 Manager'),
        sortingField: 'sixManagerAlias',
    },
    {
        id: 'email',
        header: 'Email',
        cell: item => item.email,
        ariaLabel: createLabelFunction('email'),
        sortingField: 'email',
    },
    {
        id: 'status',
        header: 'Status',
        cell: item => item.status,
        ariaLabel: createLabelFunction('Sescription'),
        sortingField: 'status',
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
