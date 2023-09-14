import React, { useState, useEffect } from "react";
import { useCollection } from "@cloudscape-design/collection-hooks";
import {
  Box,
  Button,
  CollectionPreferences,
  Header,
  Pagination,
  Table,
  TextFilter,
  Container,
} from "@cloudscape-design/components";
import SpaceBetween from "@cloudscape-design/components/space-between";
import {
  columnDefinitions,
  getMatchesCountText,
  paginationLabels,
  collectionPreferencesProps,
} from "./table-config";
import { Cache } from "aws-amplify";
import { OrganizationForm } from "./OrganizationForm";
import {
  fetchActivePlan,
  fetchOrganizations,
  removeOrganization,
} from "../../common/graphqlHelper";
import { modesFilter } from "../../common/tableHelper";
import { OP2Cache } from "../../common/cacheHelper";

function EmptyState({ title, subtitle, action }) {
  return (
    <Box textAlign="center" color="inherit">
      <Box variant="strong" textAlign="center" color="inherit">
        {title}
      </Box>
      <Box variant="p" padding={{ bottom: "s" }} color="inherit">
        {subtitle}
      </Box>
      {action}
    </Box>
  );
}

function OrganizationList() {
  const [activeIsb, setActiveIsb] = useState(Cache.getItem("isBizOps"));
  const [overActiveIsb, setOverActiveIsb] = useState(
    OP2Cache.getItem("overIsBizOps")
  );
  const [activeOrg, setActiveOrg] = useState(Cache.getItem("activeOrg"));
  const [activePlan, setActivePlan] = useState({});
  const [editId, setEditId] = useState(null);
  const [loading, setLoading] = useState(false);

  const [allItems, setAllItems] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const [preferences, setPreferences] = useState({
    pageSize: 20,
    visibleContent: ["name", "description", "headcount", "managerAlias"],
  });
  const {
    items,
    actions,
    filteredItemsCount,
    collectionProps,
    filterProps,
    paginationProps,
  } = useCollection(allItems, {
    filtering: {
      empty: (
        <EmptyState
          title="No Organizations"
          action={<Button>Create Organization</Button>}
        />
      ),
      noMatch: (
        <EmptyState
          title="No matches"
          action={
            <Button onClick={() => actions.setFiltering("")}>
              Clear filter
            </Button>
          }
        />
      ),
      filteringFunction: modesFilter,
    },
    pagination: { pageSize: preferences.pageSize },
    sorting: { defaultState: { sortingColumn: columnDefinitions[1] } },
    selection: {},
  });
  const { selectedItems } = collectionProps;

  const load = async (planId) => {
    let token = Cache.getItem("nextToken");

    setLoading(true);
    var items = [];
    do {
      const res = await fetchOrganizations(planId, token);
      items = [...items, ...res];
      token = Cache.getItem("nextToken");
    } while (token);

    if (token) {
      setAllItems([...allItems, ...items]);
    } else {
      setAllItems([...items]);
    }
    setLoading(false);
  };

  function trigger() {
    let plan = activePlan;
    if (plan) {
      load(plan.id);
    }
  }

  useEffect(() => {
    const res = fetchActivePlan().then((res) => {
      setActivePlan(res);
      if (res) {
        load(res.id);
      }
    });
  }, []);

  function handleCreate() {
    setEditId(null);
    Cache.removeItem("editId");
    setShowForm(true);
  }
  function handleEdit() {
    if (selectedItems.length === 1) {
      setEditId(selectedItems[0].id);
      setShowForm(true);
    }
  }
  function handleDelete() {
    if (selectedItems.length === 1) {
      let id = selectedItems[0].id;
      if (id)
        removeOrganization(id).then((res) => {
          console.log(res);
        });
    }
  }

  return (
    <>
      <React.Fragment>
        {showForm && (
          <Container>
            <SpaceBetween direction="vertical" size="l">
              <OrganizationForm
                setShowForm={setShowForm}
                trigger={trigger}
                plan={activePlan}
                org={activeOrg}
                isb={activeIsb || overActiveIsb}
                editId={editId}
              />
            </SpaceBetween>
          </Container>
        )}
      </React.Fragment>
      <Table
        {...collectionProps}
        loading={loading}
        loadingText="Loading Organzations..."
        selectionType="multi"
        header={
          <Header
            counter={
              selectedItems.length
                ? `(${selectedItems.length}/${allItems.length})`
                : `(${allItems.length})`
            }
            actions={
              <SpaceBetween direction="horizontal" size="xs">
                <Button onClick={(event) => trigger()} iconName="refresh" />
                <Button
                  disabled={!Cache.getItem("nextToken")}
                  onClick={(event) => trigger()}
                  iconName="add-plus"
                />
                <Button
                  disabled={
                    !(activeIsb || overActiveIsb) || selectedItems.length != 1
                  }
                  onClick={() => handleEdit()}
                >
                  Edit Organization
                </Button>
                <Button
                  disabled={
                    !(activeIsb || overActiveIsb) || selectedItems.length != 1
                  }
                  onClick={() => handleDelete()}
                >
                  Delete Organization
                </Button>
                <Button
                  disabled={!(activeIsb || overActiveIsb)}
                  variant="primary"
                  onClick={() => handleCreate()}
                >
                  Create Organization
                </Button>
              </SpaceBetween>
            }
          >
            Organizations
          </Header>
        }
        resizableColumns
        columnDefinitions={columnDefinitions}
        visibleColumns={preferences.visibleContent}
        items={items}
        pagination={
          <Pagination {...paginationProps} ariaLabels={paginationLabels} />
        }
        filter={
          <TextFilter
            {...filterProps}
            countText={getMatchesCountText(filteredItemsCount)}
            filteringAriaLabel="Filter intiatives"
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
    </>
  );
}
export default OrganizationList;
