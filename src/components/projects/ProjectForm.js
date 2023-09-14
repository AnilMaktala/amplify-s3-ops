import React, { useState, useEffect } from 'react';
import FormField from "@cloudscape-design/components/form-field";
import Input from "@cloudscape-design/components/input";
import Form from "@cloudscape-design/components/form";
import ColumnLayout from "@cloudscape-design/components/column-layout";
import Textarea from "@cloudscape-design/components/textarea";

import { Button, Header, Container, Select } from '@cloudscape-design/components';
import SpaceBetween from "@cloudscape-design/components/space-between";
import { Cache } from 'aws-amplify'
import { fetchProject, fetchOrganizationsForSelect, fetchInitiativesForSelect, fetchPersonsForSelect, modifyProject, makeProject, fetchProjects } from '../../common/graphqlHelper';
import { checkNotEmpty, checkIsNotNone, checkIsBetween } from '../../common/validationHelper';


export const ProjectForm = ({ setShowForm, trigger, plan, org, isb, editId }) => {
    const [planId, setPlanId] = useState();
    const [id, setId] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [rank, setRank] = useState(9999);
    const [headcount, setHeadcount] = useState(0);
    const [selectedFunding, setSelectedFunding] = React.useState({ label: "FLAT", value: "FLAT" });
    const [selectedInitiative, setSelectedInitiative] = React.useState({ label: "select Initiative", value: "-NONE-" });
    const [selectedOwner, setSelectedOwner] = React.useState({ label: "select Person", value: "-NONE-" });
    const [selectedOrganization, setselectedOrganization] = React.useState({ label: "select Owner", value: "-NONE-" });
    const [selectedGoal, setSelectedGoal] = React.useState({ label: "select Goal", value: "-NONE-" });

    const [initiatives, setInitiatives] = useState([]);
    const [organizations, setOrganizations] = useState([]);
    const [persons, setPersons] = useState([]);

    const [organizationId, setOrganizationId] = useState("");
    const [ownerId, setOwnerId] = useState("");
    const [initiativeId, setInitiativeId] = useState("");
    const [goalId, setGoalId] = useState("");

    const load = async (id) => {
        fetchProject(id).then((res) => { setProjectState(res) });
    };

    async function setProjectState(data) {
        setTitle(data.title);
        setDescription(data.description);
        setRank(data.rank);
        setSelectedFunding({ label: data.funding, value: data.funding });
        if (data.Goal) {
            setSelectedGoal({ label: data.Goal.title, value: data.Goal.id });
            setGoalId(data.Goal.id);
        };
        if (data.Organization) {
            setselectedOrganization({ label: data.Organization.name, value: data.Organization.id });
            setOrganizationId(data.Organization.id);
        };
        if (data.Owner) {
            setSelectedOwner({ label: data.Owner.alias, value: data.Owner.id });
            setOwnerId(data.Owner.id);
        };
        if (data.Initiative) {
            setSelectedInitiative({ label: data.Initiative.title, value: data.Initiative.id });
            setInitiativeId(data.Initiative.id);
        };
    }

    /* fetch plan when component loads if edit */
    useEffect(() => {
        if (!plan) {
            handleCancel();
        }
        if (editId) {
            setId(editId);
            load(editId);
        } else {
            if (Cache.getItem("lastFunding")) setSelectedFunding(Cache.getItem("lastFunding"))
            if (Cache.getItem("lastOwner")) setSelectedOwner(Cache.getItem("lastOwner"))
            if (Cache.getItem("lastInitiative")) setSelectedInitiative(Cache.getItem("lastInitiative"))
        }
        loadOrganizations();
        loadInitiatives();
        loadPersons();
    }, []);

    const handleCancel = () => {
        setShowForm(false) // Hide the form
    };

    function handleChange() {
        if (!(checkNotEmpty(title) && checkNotEmpty(selectedFunding) && checkIsBetween(rank, 0, 10000)
            && checkIsNotNone(selectedOwner) && checkIsNotNone(selectedInitiative))) {
            let update = {
                title: title,
                funding: selectedFunding.value,
                rank: rank,
                headcount: headcount,
                description: (description === "" ? title : description),
                projectPlanId: planId,
                projectInitiativeId: selectedInitiative.value,
                projectOrganizationId: selectedOrganization.value,
                projectOwnerId: selectedOwner.value
            };
            Cache.setItem("lastOwner",selectedOwner);
            Cache.setItem("lastInitiative",selectedInitiative);
            Cache.setItem("lastFunding",selectedFunding);
            
            if (selectedOwner.value === "-NONE") delete update.projectOwnerId;
            if (selectedGoal.value === "-NONE") delete update.projectGoalId;
            if (selectedInitiative.value === "-NONE") delete update.projectInitiativeId;
            if (selectedOrganization.value === "-NONE") delete update.projectOrganizationId;
            try {
                let id = Cache.getItem("editId");
                if (id) { modifyProject({ ...update, id }).then((res) => { console.log(res); }); }
                else { makeProject(update).then((res) => { console.log(res); }); }
            }
            catch (e) { console.log("Make/Update Project: " + e) }
        }
    };
    const loadOrganizations = async () => {
        if (organizations.length === 0) {
            let plan = Cache.getItem("activePlan");
            const res = await fetchOrganizationsForSelect(plan.id);
            setOrganizations([{ label: 'Select organization', value: '' }, ...res])
        }
    };
    const loadPersons = async () => {
        if (persons.length === 0) {
            let orgId = isb ? null : org.id;
            const res = await fetchPersonsForSelect(plan.id, orgId, { isManager: { eq: true } });
            setPersons([{ label: 'Select manager', value: '' }, ...res])
        }
    };

    const loadInitiatives = async () => {
        if (initiatives.length === 0) {
            let plan = Cache.getItem("activePlan");
            const res = await fetchInitiativesForSelect(plan.id);
            setInitiatives([{ label: 'Select initiative', value: '' }, ...res])
        }
    };

    return (

        <form onSubmit={event => {
            event.preventDefault();
            handleChange();
            setShowForm(false);
            trigger();
        }}>
            <Form>
                <Container
                    header={
                        <Header variant="h2"
                            actions={
                                <SpaceBetween direction="horizontal" size="xs">
                                    <Button formAction="submit" type="submit" onClick={handleCancel} variant="link"> Cancel</Button>
                                    <Button formAction="submit" variant="primary">Submit</Button>
                                </SpaceBetween>
                            }
                        >
                            {editId ? "Edit Project" : "Add Project"}
                        </Header>
                    }
                >
                    <ColumnLayout columns={2}>
                        <SpaceBetween direction="vertical" size="l">
                            <FormField label="Title"
                                errorText={checkNotEmpty(title)}
                            >
                                <Input type="text" name="title"
                                    value={title}
                                    onChange={({ detail }) => { setTitle(detail.value); }}
                                />
                            </FormField>
                            <FormField label="Rank"
                                errorText={checkIsBetween(rank, 0, 10000)}
                            >
                                <Input type="number" name="rank" value={rank}
                                    onChange={({ detail }) => { setRank(detail.value); }}
                                />
                            </FormField>
                            <FormField
                                label="Funding"
                            >
                                <Select
                                    selectedOption={selectedFunding}
                                    onChange={({ detail }) =>
                                        setSelectedFunding(detail.selectedOption)
                                    }
                                    options={[
                                        { label: "FLAT", value: "FLAT" },
                                        { label: "INC", value: "INC" },
                                        { label: "CUT", value: "CUT" },
                                        { label: "NA", value: "NA" }
                                    ]}
                                />
                            </FormField>
                            <FormField
                                label="Owner"
                                errorText={checkIsNotNone(selectedOwner)}
                            >
                                <Select
                                    selectedOption={selectedOwner}
                                    onChange={({ detail }) =>
                                        setSelectedOwner(detail.selectedOption)
                                    }
                                    options={persons}
                                />
                            </FormField>
                            <FormField
                                label="Initiative"
                                errorText={checkIsNotNone(selectedInitiative)}
                            >
                                <Select
                                    selectedOption={selectedInitiative}
                                    onChange={({ detail }) =>
                                        setSelectedInitiative(detail.selectedOption)
                                    }
                                    options={initiatives}
                                />
                            </FormField>
                        </SpaceBetween>
                        <SpaceBetween>
                            <FormField label="Description">
                                <Textarea rows={10} name="description" value={description}
                                    onChange={({ detail }) => { setDescription(detail.value); }}
                                />
                            </FormField>
                            <FormField
                                label="Organization"
                                errorText={checkIsNotNone(selectedOrganization)}
                            >
                                <Select
                                    selectedOption={selectedOrganization}
                                    onChange={({ detail }) =>
                                        setselectedOrganization(detail.selectedOption)
                                    }
                                    options={organizations}
                                />
                            </FormField>
                        </SpaceBetween>
                    </ColumnLayout>
                </Container>
            </Form>
        </form>
    );
}
