import React, { useState, useEffect } from 'react';
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

} from '@cloudscape-design/components';
import SpaceBetween from "@cloudscape-design/components/space-between";
import { Amplify, API, graphqlOperation } from 'aws-amplify'
import { createOrganization } from '../../graphql/mutations'
import { listPlans } from "../../graphql/queries";
function ThemeForm({ setShowForm, trigger }) {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [headcount, setHeadcount] = useState();
    const [
        selectedPlan,
        setSelectedPlan
    ] = React.useState({ label: "select Plan", value: "0" });
    const [plans, setPlans] = useState([]);
    const [state, setState] = useState({
        name: "",
        description: "",
        headcount: 0,
        planID: 0

    });
    function handleChange() {
        state.name = name;
        state.description = description;
        state.headcount = headcount;
        state.planID = selectedPlan.value;
    };
    const loadPlans = async () => {
        const res = await API.graphql({
            query: listPlans
        });
        console.log(res.data.listPlans);
        res.data.listPlans.items.forEach((value) => {
            plans.push({
                key: value.id,
                value: value.title,
            });
        });
        // Update the options state
        setPlans([
            { key: 'Select a plan', value: '' },
            ...plans
        ])
        //setAllItems(res.data.listPlans.items);
    };
    useEffect(() => {
        loadPlans();
    }, []);

    return (

        <form onSubmit={event => {
            event.preventDefault();


            try {
                handleChange();
                const response = API.graphql(graphqlOperation(createOrganization, { input: state }));
                setShowForm(false);
                trigger();
            } catch {
                console.log("error");
            }

        }
        }>
            <Form
                actions={
                    <SpaceBetween direction="horizontal" size="xs">
                        <Button formAction="none" variant="link">
                            Cancel
                        </Button>
                        <Button formAction="submit" variant="primary">Submit</Button>
                    </SpaceBetween>
                }

            >
                <Container
                    header={
                        <Header variant="h2">
                            Add Organization
                        </Header>
                    }
                >
                    <SpaceBetween direction="vertical" size="l">
                        <FormField label="Name">
                            <Input type="text" name="name"
                                value={name}
                                onChange={({ detail }) => { setName(detail.value); }}
                            />
                        </FormField>
                        <FormField label="Description">
                            <Input type="text" name="description" value={description}
                                onChange={({ detail }) => { setDescription(detail.value); }}
                            />
                        </FormField>
                        <FormField label="Headcount">
                            <Input type="text" name="headcount" value={headcount}
                                onChange={({ detail }) => { setHeadcount(detail.value); }}
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