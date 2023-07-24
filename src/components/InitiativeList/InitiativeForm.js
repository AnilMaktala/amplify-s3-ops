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
} from '@cloudscape-design/components';
import SpaceBetween from "@cloudscape-design/components/space-between";
import { Amplify, API, graphqlOperation } from 'aws-amplify'
import { createInitiative } from '../../graphql/mutations'

function IntiativeForm() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [rank, setRank] = useState("");
    const [priority, setPriority] = useState("");
    const [state, setState] = useState({
        title: "intiative2",
        description: "intiative2",
        rank: 3,
        themeID: 2,
        planID: 2,
        status: "ACTIVE"


    });
    function handleChange(event) {
        // const name = evt.target.name;
        console.log(event);
        // const value =
        //     evt.target.type === "checkbox" ? evt.target.checked : evt.target.value;
        // setState({
        //     ...state,
        //     [name]: evt.target.value
        // })
    };

    return (

        <form onSubmit={event => {
            event.preventDefault();


            try {
                const response = API.graphql(graphqlOperation(createInitiative, { input: state }));
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
                            Add Initiative
                        </Header>
                    }
                >
                    <SpaceBetween direction="vertical" size="l">
                        <FormField label="Title">
                            <Input type="text" name="title"
                                value={state.title}
                                onChange={handleChange}
                            />
                        </FormField>
                        <FormField label="Description">
                            <Input type="text" name="description" value={state.description}
                                onChange={handleChange}
                            />
                        </FormField>
                        <FormField label="Rank">
                            <Input type="text" name="rank" value={state.rank}
                                onChange={handleChange}
                            />
                        </FormField>
                    </SpaceBetween>
                </Container>
            </Form>
        </form>
    );
}

export default IntiativeForm;