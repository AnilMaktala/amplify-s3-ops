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
import { createTeam } from '../../graphql/mutations'
import { listOrganizations } from "../../graphql/queries";
function TeamForm({ setShowForm, trigger }) {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [headcount, setHeadcount] = useState();
    const [
        selectedOrg,
        setSelectedOrg
    ] = React.useState({ label: "select Plan", value: "0" });
    const [organizations, setOrganizations] = useState([]);
    const [state, setState] = useState({
        name: "",
        description: "",
        headcount: 0,
        organizationID: 0

    });
    function handleChange() {
        state.name = name;
        state.description = description;
        state.headcount = headcount;
        state.organizationID = selectedOrg.value;
    };
    const loadOrgs = async () => {
        const res = await API.graphql({
            query: listOrganizations
        });
        console.log(res.data.listOrganizations);
        res.data.listOrganizations.items.forEach((value) => {
            organizations.push({
                key: value.id,
                value: value.name,
            });
        });
        // Update the options state
        setOrganizations([
            { key: 'Select a Organization', value: '' },
            ...organizations
        ])
        //setAllItems(res.data.listPlans.items);
    };
    useEffect(() => {
        loadOrgs();
    }, []);

    return (

        <form onSubmit={event => {
            event.preventDefault();


            try {
                handleChange();
                const response = API.graphql(graphqlOperation(createTeam, { input: state }));
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
                            Add Team
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
                        </FormField>

                    </SpaceBetween>
                </Container>
            </Form>
        </form>
    );
}

export default TeamForm;