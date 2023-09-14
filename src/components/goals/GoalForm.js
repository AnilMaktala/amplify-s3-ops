import React, { useState, useEffect } from 'react';

import { FormField, Input, Form, ColumnLayout, Textarea, DatePicker } from "@cloudscape-design/components";
import { Button, Header, Container, Select, SpaceBetween } from '@cloudscape-design/components';

import { Cache } from 'aws-amplify'
import { fetchGoal, fetchOrganizationsForSelect, fetchPersonsForSelect, fetchGoalsForSelect, modifyGoal, makeGoal } from '../../common/graphqlHelper';
import { checkNotEmpty, checkIsNotNone } from '../../common/validationHelper';

export const GoalForm = ({ goalMode, setShowForm, trigger, plan, org, isb, editId }) => {
    const [planId, setPlanId] = useState();
    const [id, setId] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [start, setStart] = useState("");
    const [end, setEnd] = useState("");
    const [selectedStatus, setSelectedStatus] = React.useState({ label: "PROPOSED", value: "PROPOSED" });
    const [selectedClass, setSelectedClass] = React.useState({ label: "TEAM", value: "TEAM" });
    const [selectedType, setSelectedType] = React.useState({ label: "-NONE-", value: "-NONE-" });
    const [selectedOwner, setSelectedOwner] = React.useState({ label: "select Owner", value: "-NONE-" });
    const [selectedOrganization, setSelectedOrganization] = React.useState({ label: "select Organization", value: "-NONE-" });
    const [selectedParent, setSelectedParent] = React.useState({ label: "select Goal", value: "-NONE-" });
    const [selectedClassOptions, setSelectedClassOptions]
        = React.useState([{ label: "TEAM", value: "TEAM" }, { label: "S3", value: "S3" }]);

    const [organizations, setOrganizations] = useState([]);
    const [persons, setPersons] = useState([]);
    const [goals, setGoals] = useState([]);

    const [organizationId, setOrganizationId] = useState("");
    const [ownerId, setOwnerId] = useState("");

    const load = async (id) => {
        fetchGoal(id).then((res) => { setGoalState(res) });
    };
    async function setGoalState(data) {
        setTitle(data.title);
        setDescription(data.description);
        setStart(data.start);
        setEnd(data.end);
        setSelectedStatus({ label: data.status, value: data.status });
        setSelectedType({ label: data.type, value: data.value });
        setSelectedClass({ label: data.class, value: data.class });
        if (data.Parent) {
            setSelectedParent({ label: data.Parent.title, value: data.Parent.id });
            setOrganizationId(data.Parent.id);
        };
        if (data.Organization) {
            setSelectedOrganization({ label: data.Organization.name, value: data.Organization.id });
            setOrganizationId(data.Organization.id);
        };
        if (data.Owner) {
            setSelectedOwner({ label: data.Owner.alias, value: data.Owner.id });
            setOwnerId(data.Owner.id);
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
        }
        else {
            setSelectedClass({ label: "TEAM", value: "TEAM" });
        }
        loadPersons();
        loadOrganizations();
        loadGoals(goalMode);

        if (isb) {
            setSelectedClassOptions(
                [
                    { label: "S3", value: "S3" },
                    { label: "STEAM", value: "STEAM" },
                    { label: "AWS", value: "AWS" },
                    { label: "TEAM", value: "TEAM" }
                ]
            )
        }
    }, []);

    const handleCancel = () => {
        setShowForm(false) // Hide the form
    };

    function handleChange() {
        if (!(checkNotEmpty(title) && checkNotEmpty(end)
            && checkIsNotNone(selectedOwner) && checkIsNotNone(selectedOrganization))) {
            let update = {
                title: title,
                status: selectedStatus.value,
                class: selectedClass.value,
                type: goalMode,
                start: start,
                end: end,
                description: (description === "" ? title : description),
                goalPlanId: planId,
                goalParentId: selectedParent.value,
                goalOrganizationId: selectedOrganization.value,
                goalOwnerId: selectedOwner.value
            };
            if (selectedParent.value === "-NONE") delete update.goalParentId;
            try {
                let id = Cache.getItem("editId");
                if (id) { modifyGoal({ ...update, id }).then((res) => { console.log(res); }); }
                else { makeGoal(update).then((res) => { console.log(res); }); }
            }
            catch (e) { console.log("Make/Update Goal: " + e) }
        }
    };
    const loadOrganizations = async () => {
        if (organizations.length === 0) {
            const res = await fetchOrganizationsForSelect(plan.id);
            setOrganizations([{ label: 'Select organization', value: '' }, ...res])
        }
    };
    const loadPersons = async () => {
        if (persons.length === 0) {
            let orgId = isb ? null : org.id;
            const res = await fetchPersonsForSelect(plan.id, orgId, { isManager: { eq: true } });
            setPersons([{ label: 'Select theme', value: '' }, ...res])
        }
    };

    const loadGoals = async (goalMode) => {
        if (goals.length === 0) {
            let plan = Cache.getItem("activePlan");
            goalMode = (goalMode === "OUTPUT") ? "OUTCOME" : (goalMode === "INPUT") ? "OUTPUT" : "OUTCOME";
            const res = await fetchGoalsForSelect(plan.id, goalMode);
            setGoals([{ label: 'Select goaL', value: '' }, ...res])
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
                            {editId ? "Edit Goal" : "Add Goal"}
                        </Header>
                    }
                >
                    <ColumnLayout borders="vertical" columns={2}>
                        <SpaceBetween direction="vertical" size="l">
                            <FormField label="Title"
                                errorText={checkNotEmpty(title)}
                            >
                                <Input type="text" name="title"
                                    value={title}
                                    onChange={({ detail }) => { setTitle(detail.value); }}
                                />
                            </FormField>
                            <FormField label="Class">
                                <Select
                                    selectedOption={selectedClass}
                                    onChange={({ detail }) =>
                                        setSelectedClass(detail.selectedOption)
                                    }
                                    options={[
                                        { label: "S3", value: "S3" },
                                        { label: "STEAM", value: "STEAM" },
                                        { label: "AWS", value: "AWS" },
                                        { label: "TEAM", value: "TEAM" }
                                    ]}
                                />
                            </FormField>
                            <FormField label="Status">
                                <Select
                                    selectedOption={selectedStatus}
                                    onChange={({ detail }) =>
                                        setSelectedClass(detail.selectedOption)
                                    }
                                    options={selectedClassOptions}
                                />
                            </FormField>
                            <FormField label="Start Date" constraintText="Use YYYY/MM/DD format."
                                errorText={checkNotEmpty(start)}
                            >
                                <DatePicker onChange={({ detail }) => setStart(detail.value)} value={start}
                                    placeholder="YYYY/MM/DD" />
                            </FormField>
                            <FormField label="End Date" constraintText="Use YYYY/MM/DD format."
                                errorText={checkNotEmpty(end)}
                            >
                                <DatePicker onChange={({ detail }) => setEnd(detail.value)} value={end}
                                    placeholder="YYYY/MM/DD" />
                            </FormField>
                        </SpaceBetween>
                        <SpaceBetween direction="vertical" size="l">
                            <FormField label="Description">
                                <Textarea rows={8} name="description" value={description}
                                    onChange={({ detail }) => { setDescription(detail.value); }}
                                />
                            </FormField>
                            <FormField
                                label="Organization"
                                errorText={checkIsNotNone(selectedOrganization)}
                            >
                                <Select
                                    filteringType='auto'
                                    selectedOption={selectedOrganization}
                                    onChange={({ detail }) =>
                                        setSelectedOrganization(detail.selectedOption)
                                    }
                                    options={organizations}
                                />
                            </FormField>
                            <FormField
                                label="Owner"
                                errorText={checkIsNotNone(selectedOwner)}
                            >
                                <Select
                                    filteringType='auto'
                                    selectedOption={selectedOwner}
                                    onChange={({ detail }) =>
                                        setSelectedOwner(detail.selectedOption)
                                    }
                                    options={persons}
                                />
                            </FormField>
                            <FormField
                                label={goalMode === "OUTCOME" ? "Parent Goal" :
                                    (goalMode === "OUTPUT" ? "Parent Outcome Goal" : "Parent Output Goal")}
                            >
                                <Select
                                    selectedOption={selectedParent}
                                    onChange={({ detail }) =>
                                        setSelectedParent(detail.selectedOption)
                                    }
                                    options={goals}
                                />
                            </FormField>
                        </SpaceBetween>
                    </ColumnLayout>
                </Container>
            </Form>
        </form>
    );
}
