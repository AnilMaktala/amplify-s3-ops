import React, { useState, useEffect } from 'react';
import FormField from "@cloudscape-design/components/form-field";
import Input from "@cloudscape-design/components/input";
import Form from "@cloudscape-design/components/form";
import ColumnLayout from "@cloudscape-design/components/column-layout";
import Textarea from "@cloudscape-design/components/textarea";

import { Button, Header, Container, Select } from '@cloudscape-design/components';
import SpaceBetween from "@cloudscape-design/components/space-between";
import { Cache } from 'aws-amplify'
import { checkIsBetween, checkNotEmpty, checkIsNotNone } from '../../common/validationHelper';
import { fetchOrganization, fetchOrganizationsForSelect, fetchPersonsForSelect, modifyOrganization, makeOrganization } from '../../common/graphqlHelper';


export const OrganizationForm = ({ setShowForm, trigger, plan, org, isb, editId }) => {
    const [planId, setPlanId] = useState();
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [headcount, setHeadcount] = useState(1);
    const [mgrTarget, setMgrTarget] = useState(1);
    const [incTarget, setIncTarget] = useState(1);
    const [icTarget, setICTarget] = useState(1);
    const [peTarget, setPETarget] = useState(1);
    const [tpmTarget, setTPMTarget] = useState(1);
    const [pmTarget, setPMTarget] = useState(1);
    const [argTarget, setARGTarget] = useState(1);
    const [selectedStatus, setSelectedStatus] = React.useState({ label: "PROPOSED", value: "PROPOSED" });
    const [selectedBucket, setSelectedBucket] = React.useState({ label: "ORGN", value: "ORGN" });
    const [selectedManager, setSelectedManager] = React.useState({ label: "select Manager", value: "-NONE-" });
    const [selectedParent, setSelectedParent] = React.useState({ label: "select Parent", value: "-NONE-" });

    const [organizations, setOrganizations] = useState([]);
    const [persons, setPersons] = useState([]);

    const [parentId, setParentId] = useState("");
    const [managerId, setManagerId] = useState("");

    const load = async (id) => {
        fetchOrganization(id).then((res) => { setOrganizationState(res) });
    };

    async function setOrganizationState(data) {
        setName(data.name);
        setDescription(data.description);
        setHeadcount(data.headcount);
        setIncTarget(data.incTarget);
        setMgrTarget(data.mgrTarget);
        setICTarget(data.icTarget);
        setPETarget(data.peTarget);
        setPMTarget(data.pmTarget);
        setTPMTarget(data.tpmTarget);
        setARGTarget(data.argTarget);
        if (data.Parent) {
            setSelectedParent({ label: data.Parent.name, value: data.Parent.id });
            setParentId(data.Parent.id);
        };
        if (data.Manager) {
            setSelectedManager({ label: data.Manager.alias, value: data.Manager.id });
            setManagerId(data.Manager.id);
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
            setSelectedStatus({ label: "ACTIVE", value: "ACTIVE" });
        }
        loadPersons();
        loadOrganizations();
    }, []);

    const handleCancel = () => {
        setShowForm(false) // Hide the form
    };

    function handleChange() {
        if (!(checkNotEmpty(name) && checkIsBetween(headcount) && checkIsBetween(mgrTarget)
            && checkIsBetween(icTarget) && checkIsBetween(peTarget) && checkIsBetween(pmTarget)
            && checkIsBetween(tpmTarget) && checkIsBetween(argTarget) && checkIsBetween(incTarget)
            && checkIsNotNone(selectedManager))) {
            let update = {
                name: name,
                headcount: Number(headcount),
                incTarget: Number(incTarget),
                mgrTarget: Number(mgrTarget),
                icTarget: Number(icTarget),
                peTarget: Number(peTarget),
                pmTarget: Number(pmTarget),
                tpmTarget: Number(tpmTarget),
                argTarget: Number(argTarget),
                description: description,
                organizationPlanId: planId,
                organizationParentId: selectedParent.value,
                organizationManagerId: selectedManager.value

            };
            if (update.organizationParentId === "-NONE-") delete update.organizationParentId;
            try {
                let id = editId;
                if (id) { modifyOrganization({ ...update, id }).then((res) => { console.log(res); }); }
                else { makeOrganization(update).then((res) => { console.log(res); }); }
            }
            catch (e) { console.log("Make/Update Organization: " + e) }
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
            const res = await fetchPersonsForSelect(plan.id, null, { isManager: { eq: true } });
            setPersons([{ label: 'Select person', value: '' }, ...res])
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
                            {editId ? "Edit Organization" : "Add Organization"}
                        </Header>
                    }
                >
                    <ColumnLayout borders="vertical" columns={2}>
                        <SpaceBetween direction="vertical" size="l">
                            <FormField label="Name"
                                errorText={checkNotEmpty(name)}
                            >
                                <Input type="text" name="name"
                                    value={name}
                                    onChange={({ detail }) => { setName(detail.value); }}
                                />
                            </FormField>
                            <ColumnLayout borders="vertical" columns={2}>
                                <FormField label="FLAT Target"
                                    errorText={checkIsBetween(headcount, 1)}
                                >
                                    <Input type="number" name="headcount" value={headcount}
                                        onChange={({ detail }) => { setHeadcount(detail.value); }}
                                    />
                                </FormField>
                                <FormField label="INC Target"
                                    errorText={checkIsBetween(incTarget, 1)}
                                >
                                    <Input type="number" name="incTarget" value={incTarget}
                                        onChange={({ detail }) => { setIncTarget(detail.value); }}
                                    />
                                </FormField>
                            </ColumnLayout>
                            <ColumnLayout borders="vertical" columns={2}>
                                <SpaceBetween direction="vertical" size="s">
                                    <FormField label="Mgr Target" errorText={checkIsBetween(mgrTarget)}>
                                        <Input type="number" name="mgrTarget" value={mgrTarget}
                                            onChange={({ detail }) => { setMgrTarget(detail.value); }}
                                        />
                                    </FormField>
                                    <FormField label="IC Target" errorText={checkIsBetween(icTarget)}>
                                        <Input type="number" name="icTarget" value={icTarget}
                                            onChange={({ detail }) => { setICTarget(detail.value); }}
                                        />
                                    </FormField>
                                    <FormField label="PE Target" errorText={checkIsBetween(peTarget)}>
                                        <Input type="number" name="peTarget" value={peTarget}
                                            onChange={({ detail }) => { setPETarget(detail.value); }}
                                        />
                                    </FormField>
                                </SpaceBetween>
                                <SpaceBetween direction="vertical" size="s">
                                    <FormField label="PM Target" errorText={checkIsBetween(pmTarget)}>
                                        <Input type="number" name="pmTarget" value={pmTarget}
                                            onChange={({ detail }) => { setPMTarget(detail.value); }}
                                        />
                                    </FormField>
                                    <FormField label="TPM Target" errorText={checkIsBetween(tpmTarget)}>
                                        <Input type="number" name="tpmTarget" value={tpmTarget}
                                            onChange={({ detail }) => { setTPMTarget(detail.value); }}
                                        />
                                    </FormField>
                                    <FormField label="ARG Target" errorText={checkIsBetween(argTarget)}>
                                        <Input type="number" name="argTarget" value={argTarget}
                                            onChange={({ detail }) => { setARGTarget(detail.value); }}
                                        />
                                    </FormField>
                                </SpaceBetween>
                            </ColumnLayout>
                        </SpaceBetween>
                        <SpaceBetween direction="vertical" size="l">
                            <FormField label="Description">
                                <Textarea rows={8} name="description" value={description}
                                    onChange={({ detail }) => { setDescription(detail.value); }}
                                />
                            </FormField>
                            <FormField
                                label="Parent Organization"
                            >
                                <Select
                                    filteringType='auto'
                                    selectedOption={selectedParent}
                                    onChange={({ detail }) =>
                                        setSelectedParent(detail.selectedOption)
                                    }
                                    options={organizations}
                                />
                            </FormField>
                            <FormField
                                label="Manager"
                                errorText={checkIsNotNone(selectedManager)}
                            >
                                <Select
                                    filteringType='auto'
                                    selectedOption={selectedManager}
                                    onChange={({ detail }) =>
                                        setSelectedManager(detail.selectedOption)
                                    }
                                    options={persons}
                                />
                            </FormField>
                        </SpaceBetween>
                    </ColumnLayout>
                </Container>
            </Form>
        </form>
    );
}
