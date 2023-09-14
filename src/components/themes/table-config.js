import * as React from "react";
import { Link } from "@cloudscape-design/components";

export function getMatchesCountText(count) {
  return count === 1 ? `1 match` : `${count} matches`;
}

function formatDate(date) {
  const formattedDate = new Date(date).toLocaleString();
  return formattedDate;
}
function createLabelFunction(columnName) {
  return ({ sorted, descending }) => {
    const sortState = sorted
      ? `sorted ${descending ? "descending" : "ascending"}`
      : "not sorted";
    return `${columnName}, ${sortState}.`;
  };
}

export const columnDefinitions = [
  {
    id: "id",
    header: "ID",
    cell: (item) => <Link href={`#${item.id}`}>{item.id}</Link>,
    ariaLabel: createLabelFunction("id"),
    sortingField: "id",
    isRowHeader: true,
  },
  {
    id: "title",
    header: "Title",
    cell: (item) => item.title,
    ariaLabel: createLabelFunction("Availability zone"),
    sortingField: "title",
  },
  {
    id: "description",
    header: "Description",
    cell: (item) => item.description,
    ariaLabel: createLabelFunction("Sescription"),
    sortingField: "description",
  },
  {
    id: "planTitle",
    header: "Plan",
    cell: (item) => item.Plan.title,
    ariaLabel: createLabelFunction("Sescription"),
    sortingField: "planTitle",
  },
  {
    id: "createdAt",
    header: "CreatedAt",
    cell: (item) => formatDate(item.createdAt),
    ariaLabel: createLabelFunction("Last CreatedAt"),
    sortingComparator: (a, b) => a.createdAt.valueOf() - b.createdAt.valueOf(),
  },
  {
    id: "updatedAt",
    header: "Last modified",
    cell: (item) => formatDate(item.updatedAt),
    ariaLabel: createLabelFunction("Last modified"),
    sortingComparator: (a, b) => a.updatedAt.valueOf() - b.updatedAt.valueOf(),
  },
];

export const paginationLabels = {
  nextPageLabel: "Next page",
  pageLabel: (pageNumber) => `Go to page ${pageNumber}`,
  previousPageLabel: "Previous page",
};

const pageSizePreference = {
  title: "Select page size",
  options: [
    { value: 10, label: "10 resources" },
    { value: 20, label: "20 resources" }
  ],
};

const visibleContentPreference = {
  title: "Select visible content",
  options: [
    {
      label: "Main properties",
      options: columnDefinitions.map(({ id, header }) => ({
        id,
        label: header,
        editable: id !== "id"
      })),
    },
  ],
};
export const collectionPreferencesProps = {
  pageSizePreference,
  visibleContentPreference,
  cancelLabel: "Cancel",
  confirmLabel: "Confirm",
  title: "Preferences",
};
