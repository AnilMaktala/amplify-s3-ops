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
    DateInput

} from '@cloudscape-design/components';
import SpaceBetween from "@cloudscape-design/components/space-between";
import { Amplify, API, graphqlOperation } from 'aws-amplify'
import { createInputGoal } from '../../graphql/mutations'
import { listOrganizations } from "../../graphql/queries";
function InputGoalForm() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [headcount, setHeadcount] = useState();
    const [
        selectedStatus,
        setSelectedStatus
    ] = React.useState({ label: "select status", value: "0" });
    const [
        selectedClass,
        setSelectedClass
    ] = React.useState({ label: "select class", value: "0" });


    const [startDate, setStartDate] = React.useState("");
    const [endDate, setEndDate] = React.useState("");

    const [state, setState] = useState({
        title: "",
        description: "",
        status: "",
        class: "",
        start: "",
        end: "",
        outputgoalID: 0

    });
    function handleChange() {
        state.title = title;
        state.description = description;
        state.status = selectedStatus.value;
        state.class = selectedClass.value;
        state.start = startDate;
        state.end = endDate;
    };
    // const loadOrgs = async () => {
    //     const res = await API.graphql({
    //         query: listOrganizations
    //     });
    //     console.log(res.data.listOrganizations);
    //     res.data.listOrganizations.items.forEach((value) => {
    //         organizations.push({
    //             key: value.id,
    //             value: value.name,
    //         });
    //     });
    //     // Update the options state
    //     setOrganizations([
    //         { key: 'Select a Organization', value: '' },
    //         ...organizations
    //     ])
    //     //setAllItems(res.data.listPlans.items);
    // };
    useEffect(() => {
        // loadOrgs();
    }, []);

    return (

        <form onSubmit={event => {
            event.preventDefault();


            try {
                handleChange();
                const response = API.graphql(graphqlOperation(createInputGoal, { input: state }));
                //setShowForm(false);
                //load();
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
                            Add InputGoal
                        </Header>
                    }
                >
                    <SpaceBetween direction="vertical" size="l">
                        <FormField label="Title">
                            <Input type="text" name="title"
                                value={title}
                                onChange={({ detail }) => { setTitle(detail.value); }}
                            />
                        </FormField>
                        <FormField label="Description">
                            <Input type="text" name="description" value={description}
                                onChange={({ detail }) => { setDescription(detail.value); }}
                            />
                        </FormField>
                        <FormField
                            label="Status"
                        >
                            <Select
                                selectedOption={selectedStatus}
                                onChange={({ detail }) =>
                                    setSelectedStatus(detail.selectedOption)
                                }
                                options={[
                                    { label: "PROPOSED", id: "PROPOSED" },
                                    { label: "ACTIVE", id: "ACTIVE" },
                                    { label: "CANCELLED", id: "CANCELLED" }
                                ]}
                            />
                        </FormField>
                        <FormField
                            label="Class"
                        >
                            <Select
                                selectedOption={selectedClass}
                                onChange={({ detail }) =>
                                    setSelectedClass(detail.selectedOption)
                                }
                                options={[
                                    { label: "STEAM", id: "STEAM" },
                                    { label: "AWS", id: "AWS" },
                                    { label: "S3", id: "S3" },
                                    { label: "TEAM", id: "TEAM" }
                                ]}
                            />
                        </FormField>
                        <FormField
                            label="Start Date"
                            constraintText="Use YYYY/MM/DD format."
                        >
                            <DateInput
                                onChange={({ detail }) => setStartDate(detail.value)}
                                value={startDate}
                                placeholder="YYYY/MM/DD"
                            />
                        </FormField>
                        <FormField
                            label="End Date"
                            constraintText="Use YYYY/MM/DD format."
                        >
                            <DateInput
                                onChange={({ detail }) => setEndDate(detail.value)}
                                value={endDate}
                                placeholder="YYYY/MM/DD"
                            />
                        </FormField>
                        {/* <FormField
                            label="Organization"
                            secondaryControl={<Button onClick="loadOrgs" iconName="refresh" />}
                        >
                            <Select
                                selectedOption={selectedOrg}
                                onChange={({ detail }) =>
                                    setSelectedOrg(detail.selectedOption)
                                }
                                options={organizations}
                            />
                        </FormField> */}

                    </SpaceBetween>
                </Container>
            </Form>
        </form>
    );
}

export default InputGoalForm;