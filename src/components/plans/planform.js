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
import { createPlan } from '../../graphql/mutations'

function ThemeForm() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [year, setYear] = useState("");
    const [state, setState] = useState({
        title: "",
        description: "",
        year: 1

    });
    function handleChange() {
        state.title = title;
        state.description = description;
        state.year = year;
    };

    return (

        <form onSubmit={event => {
            event.preventDefault();


            try {
                handleChange();
                const response = API.graphql(graphqlOperation(createPlan, { input: state }));
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
                            Add Plan
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
                        <FormField label="Year">
                            <Input type="text" name="year" value={year}
                                onChange={({ detail }) => { setYear(detail.value); }}
                            />
                        </FormField>

                    </SpaceBetween>
                </Container>
            </Form>
        </form>
    );
}

export default ThemeForm;