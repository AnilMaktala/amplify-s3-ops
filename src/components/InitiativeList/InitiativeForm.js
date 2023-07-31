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
import { listPlans, listThemes } from "../../graphql/queries";
function IntiativeForm({ setShowForm, trigger }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [rank, setRank] = useState("");
    const [themeID, setThemeID] = useState("");
    const [planID, setPlanID] = useState(1);
    const [status, setStatus] = useState(2);
    const [
        selectedPlan,
        setSelectedPlan
    ] = React.useState({ label: "select Plan", value: "0" });
    const [
        selectedTheme,
        setSelectedTheme
    ] = React.useState({ label: "select Theme", value: "0" });
    const [plans, setPlans] = useState([]);
    const [themes, setThemes] = useState([]);
    const [state, setState] = useState({
        title: "intiative2",
        description: "intiative2",
        rank: 3,
        themeID: 2,
        planID: 2,
        bucket: "",
        status: "ACTIVE"


    });
    const [
        selectedStatus,
        setSelectedStatus
    ] = React.useState({ label: "select status", value: "0" });
    const loadPlans = async () => {
        const res = await API.graphql({
            query: listPlans
        });
        console.log(res.data.listThemes);
        res.data.listPlans.items.forEach((value) => {
            themes.push({
                key: value.id,
                value: value.title,
            });
        });
        // Update the options state
        setPlans([
            { key: 'Select a plan', value: '' },
            ...themes
        ])
        //setAllItems(res.data.listPlans.items);
    };
    const loadThemes = async () => {
        const res = await API.graphql({
            query: listThemes
        });
        console.log(res.data.listThemes);
        res.data.listThemes.items.forEach((value) => {
            themes.push({
                key: value.id,
                value: value.title,
            });
        });
        // Update the options state
        setThemes([
            { key: 'Select a theme', value: '' },
            ...themes
        ])
        //setAllItems(res.data.listPlans.items);
    };
    const [
        selectedBucket,
        setSelectedBucket
    ] = React.useState({ label: "Select Bucket", value: "0" });
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
        state.planID = selectedPlan.value;
        state.themeID = selectedTheme.value;
        state.bucket = selectedBucket.id;
        state.status = selectedStatus.id;
        console.log(state);
    };
    useEffect(() => {
        loadPlans();
        loadThemes();
    }, []);

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
                                selectedOption={selectedTheme}
                                onChange={({ detail }) =>
                                    setSelectedTheme(detail.selectedOption)
                                }
                                options={themes}
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
                            label="Bucket"
                        >
                            <Select
                                selectedOption={selectedBucket}
                                onChange={({ detail }) =>
                                    setSelectedBucket(detail.selectedOption)
                                }
                                options={[
                                    { label: "TOPN", id: "TOPN" },
                                    { label: "XORG", id: "XORG" },
                                    { label: "CUT", id: "CUT" }
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