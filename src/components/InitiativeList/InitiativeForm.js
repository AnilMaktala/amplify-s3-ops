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
import { createInitiative } from '../../graphql/mutations'

function IntiativeForm({ setShowForm, trigger }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [rank, setRank] = useState("");
    const [themeID, setThemeID] = useState("");
    const [planID, setPlanID] = useState(1);
    const [status, setStatus] = useState(2);
    const [state, setState] = useState({
        title: "intiative2",
        description: "intiative2",
        rank: 3,
        themeID: 2,
        planID: 2,
        status: "ACTIVE"


    });
    function handleChange() {
        // const name = evt.target.name;

        // const value =
        //     evt.target.type === "checkbox" ? evt.target.checked : evt.target.value;
        // setState({
        //     ...state,
        //     [name]: evt.target.value
        // })

        state.title = title;
        state.description = description;
        state.rank = rank;
        // state.themeID = themeID;
        // state.planID = planID;
        // state.status = status;

    };

    return (

        <form onSubmit={event => {
            event.preventDefault();


            try {
                handleChange();
                const response = API.graphql(graphqlOperation(createInitiative, { input: state }));
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
                            Add Initiative
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
                        <FormField label="Rank">
                            <Input type="text" name="rank" value={rank}
                                onChange={({ detail }) => { setRank(detail.value); }}
                            />
                        </FormField>
                        <FormField
                            label="Theme"
                            secondaryControl={<Button iconName="refresh" />}
                        >
                            <Select
                                options={[
                                    { label: "sg-00dcd368", id: "1" },
                                    { label: "sg-02dcd36a", id: "2" },
                                    { label: "sg-04dcd36c", id: "3" },
                                    { label: "sg-05fa4668", id: "4" },
                                    { label: "sg-064a9062", id: "5" }
                                ]}
                            />
                        </FormField>
                    </SpaceBetween>
                </Container>
            </Form>
        </form>
    );
}

export default IntiativeForm;