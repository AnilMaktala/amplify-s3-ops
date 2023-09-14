import React, { useState, useEffect } from 'react';
import FormField from "@cloudscape-design/components/form-field";
import Input from "@cloudscape-design/components/input";
import Form from "@cloudscape-design/components/form";
import ColumnLayout from "@cloudscape-design/components/column-layout";
import Textarea from "@cloudscape-design/components/textarea";

import { Button, Header, Container, Select, } from '@cloudscape-design/components'; import SpaceBetween from "@cloudscape-design/components/space-between";
import { API, Cache, graphqlOperation } from 'aws-amplify'
import { createPlan, updatePlan } from '../../graphql/mutations'
import { fetchPlan, makePlan, modifyPlan } from '../../common/graphqlHelper';
import { checkIsPercent, checkIsYear, checkNotEmpty } from '../../common/validationHelper';

export const PlanForm = ({ setShowForm, trigger, plan, org, isb, editId }) => {
    const [planId, setThemeId] = useState();
    const [id, setId] = useState(editId);

    const [selectedStatus, setSelectedStatus] = useState({ label: "PROPOSED", value: "PROPOSED" });
    const [activePlanId, setActivePlanId] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [year, setYear] = useState(new Date().getFullYear() + 1);
    const [ktloTarget, setKtloTarget] = useState(0);

    const load = async (id) => {
        fetchPlan(id).then((res) => { setPlanState(res) });
    };

    /* fetch plan when component loads if edit */
    useEffect(() => {
        if (plan) {
            setActivePlanId(plan.id);
        } else {
            handleCancel();
        }
        if (editId) {
            setId(editId);
            load(editId);
        }
        else {
            setSelectedStatus({ label: "PROPOSED", value: "PROPOSED" });
        }
    }, []);
    async function setPlanState(planData) {
        setTitle(planData.title);
        setYear(planData.year);
        setSelectedStatus({ label: planData.status, value: planData.status });
        setKtloTarget(planData.ktloTarget);
        setDescription(planData.description);
    }
    const handleCancel = () => {
        setShowForm(false) // Hide the form
    };
    function handleChange() {
        if (!(checkIsYear(year) || checkIsPercent(ktloTarget) || checkNotEmpty(title))) {
            let update = {
                title: title,
                description: description,
                year: year,
                status: selectedStatus.value,
                ktloTarget: ktloTarget
            };
            try {
                if (id) { modifyPlan({ ...update, id }).then((res) => { console.log(res); }); }
                else { makePlan(update).then((res) => { console.log(res); }); }
            }
            catch (e) { console.log("Make/Update Plan: " + e) }
        }
    };
    return (

        <form onSubmit={event => {
            event.preventDefault();
            handleChange();
            setShowForm(false);
            trigger();
        }} >
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
                            {editId ? "Edit Plan" : "Add Plan"}
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
                            <FormField label="Year"
                                errorText={checkIsYear(year)} >
                                <Input type="number" name="year" value={year}
                                    onChange={({ detail }) => { setYear(detail.value); }}
                                />
                            </FormField>
                            <FormField label="KTLO Target"
                                errorText={checkIsPercent(ktloTarget)} >
                                <Input type="number" name="ktloTarget" value={ktloTarget}
                                    onChange={({ detail }) => { setKtloTarget(detail.value); }}
                                />
                            </FormField>
                            <FormField readOnly
                                label="Status">
                                <Select
                                    selectedOption={selectedStatus}
                                    onChange={({ detail }) =>
                                        setSelectedStatus(detail.selectedOption)
                                    }
                                    options={id === "" ? [
                                        { label: "PROPOSED", value: "PROPOSED" },
                                    ] : selectedStatus.value === "ACTIVE" ? [
                                        { label: "DELETED", value: "DELETED" },
                                        { label: "LOCKED", value: "LOCKED" }
                                    ] : [
                                        { label: "PROPOSED", value: "PROPOSED" },
                                        { label: "ACTIVE", value: "ACTIVE" },
                                        { label: "DELETED", value: "DELETED" },
                                        { label: "LOCKED", value: "LOCKED" }
                                    ]}
                                />
                            </FormField>
                        </SpaceBetween>
                        <FormField label="Description">
                            <Textarea rows={14} name="description" value={description}
                                onChange={({ detail }) => { setDescription(detail.value); }}
                            />
                        </FormField>
                    </ColumnLayout>
                </Container>
            </Form>
        </form>
    )
}
