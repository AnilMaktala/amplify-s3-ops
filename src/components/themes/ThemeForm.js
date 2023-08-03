import React, { useState, useEffect } from "react";
import FormField from "@cloudscape-design/components/form-field";
import Input from "@cloudscape-design/components/input";
import Form from "@cloudscape-design/components/form";
import {
  Box,
  Button,
  CollectionPreferences,
  Header,
  Pagination,
  Table,
  TextFilter,
  Container,
  Select,
} from "@cloudscape-design/components";
import SpaceBetween from "@cloudscape-design/components/space-between";
import { Amplify, API, graphqlOperation } from "aws-amplify";
import { createTheme } from "../../graphql/mutations";
import { listPlans } from "../../graphql/queries";

function ThemeForm({ setShowForm, trigger }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selectedPlan, setSelectedPlan] = React.useState({
    label: "Option 1",
    value: "1",
  });
  const [plans, setPlans] = useState([]);

  const [state, setState] = useState({
    title: "",
    description: "",
    planID: 0,
  });
  function handleChange() {
    state.title = title;
    state.description = description;
    state.planID = selectedPlan.value;
  }
  const load = async () => {
    const res = await API.graphql({
      query: listPlans,
    });
    console.log(res.data.listPlans);
    res.data.listPlans.items.forEach((value) => {
      plans.push({
        key: value.id,
        value: value.title,
      });
    });
    // Update the options state
    setPlans([{ key: "Select a plan", value: "" }, ...plans]);
    //setAllItems(res.data.listPlans.items);
  };
  useEffect(() => {
    load();
  }, []);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        try {
          handleChange();
          const response = API.graphql(
            graphqlOperation(createTheme, { input: state })
          );
          setShowForm(false);
          trigger();
        } catch {
          console.log("error");
        }
      }}
    >
      <Form
        actions={
          <SpaceBetween direction="horizontal" size="xs">
            <Button formAction="none" variant="link">
              Cancel
            </Button>
            <Button formAction="submit" variant="primary">
              Submit
            </Button>
          </SpaceBetween>
        }
      >
        <Container header={<Header variant="h2">Add Theme</Header>}>
          <SpaceBetween direction="vertical" size="l">
            <FormField label="Title">
              <Input
                type="text"
                name="title"
                value={title}
                onChange={({ detail }) => {
                  setTitle(detail.value);
                }}
              />
            </FormField>
            <FormField label="Description">
              <Input
                type="text"
                name="description"
                value={description}
                onChange={({ detail }) => {
                  setDescription(detail.value);
                }}
              />
            </FormField>
            <FormField
              label="PlanID"
              secondaryControl={<Button iconName="refresh" />}
            >
              <Select
                selectedOption={selectedPlan}
                onChange={({ detail }) =>
                  setSelectedPlan(detail.selectedOption)
                }
                options={plans}
              />
            </FormField>
          </SpaceBetween>
        </Container>
      </Form>
    </form>
  );
}

export default ThemeForm;
