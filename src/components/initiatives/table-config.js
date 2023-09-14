import * as React from 'react';
import { Link, Button, Textarea } from '@cloudscape-design/components';
import { createLabelFunction, formatDate, checkForTheme, checkForSponsor} from '../../common/tableHelper';
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
        ariaLabel: createLabelFunction('Availability zone'),
        sortingField: 'title',
    },
    {
        id: 'description',
        header: 'Description',
        cell: item => <Textarea readOnly rows={2} value={item.description}/>,
        ariaLabel: createLabelFunction('Description'),
        sortingField: 'description',
        minWidth: 420
    },
    {
        id: 'rank',
        header: 'Rank',
        cell: item => item.rank,
        ariaLabel: createLabelFunction('Rank'),
        sortingField: 'rank',
    },
    {
        id: 'bucket',
        header: 'Bucket',
        cell: item => item.bucket,
        ariaLabel: createLabelFunction('Bucket'),
        sortingField: 'bucket',
    },
    {
        id: 'status',
        header: 'Status',
        cell: item => item.status,
        ariaLabel: createLabelFunction('Status'),
        sortingField: 'status',
    },
    {
        id: "themeTitle",
        header: "Theme",
        cell: item =>  checkForTheme(item),
        ariaLabel: createLabelFunction('Theme'),
        sortingComparator: (a, b) => (a.Theme.title === b.Theme.title) ? 0 : (a.Theme.title < b.Theme.title) ? -1 : 1,
    },
    {
        id: 'Sponsor',
        header: 'Sponsor',
        cell: item => checkForSponsor(item),
        ariaLabel: createLabelFunction('Sponsor'),
        sortingComparator: (a, b) => (a.Sponsor.name === b.Sponsor.name) ? 0 : (a.Sponsor.name < b.Sponsor.name) ? -1 : 1,
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
