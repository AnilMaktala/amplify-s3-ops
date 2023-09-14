import React, { useState, useEffect } from 'react';
import { FormField, Input, Form, ColumnLayout, Toggle } from "@cloudscape-design/components";
import { Button, Header, Container, Select, SpaceBetween } from '@cloudscape-design/components';
import { Cache } from 'aws-amplify'
import { fetchPerson, makePerson, modifyPerson, fetchOrganizationsForSelect, fetchPersonsForSelect } from '../../common/graphqlHelper';
import { checkNotEmpty, checkIsNotNone } from '../../common/validationHelper';

export const PersonForm = ({ setShowForm, trigger, plan, org, isb, editId }) => {

    const [selectedStatus, setSelectedStatus] = useState({ label: "ACTIVE", value: "ACTIVE" });
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [alias, setAlias] = useState("");
    const [email, setEmail] = useState("");
    const [isManager, setIsManager] = useState(false);
    const [isBizOps, setIsBizOps] = useState(false);
    const [sixManagerAlias, setSixManagerAlias] = useState("");

    const [selectedSixManager, setSelectedSixManager] = React.useState({ label: "select Manager", value: "-NONE-" });
    const [selectedManager, setSelectedManager] = React.useState({ label: "select Manager", value: "-NONE-" });
    const [selectedOrganization, setSelectedOrganization] = React.useState({ label: "select Organization", value: "-NONE-" });

    const [organizations, setOrganizations] = useState([]);
    const [persons, setPersons] = useState([]);
    const [managerId, setManagerId] = useState("");
    const [organizationId, setOrganizationId] = useState("");


    const load = async (id) => {
        fetchPerson(id).then((res) => { setPersonState(res) });
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
            setPersons([{ label: 'Select manager', value: '' }, ...res])
        }
    };


    /* fetch person when component loads if edit */
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

    async function setPersonState(data) {
        setAlias(data.alias);
        setName(data.name);
        setEmail(data.email);
        setIsBizOps(data.isBizOps);
        setIsManager(data.isManager);
        setSixManagerAlias(data.sixManagerAlias);
        setSelectedStatus({ label: data.status, value: data.status });
        if (data.Organization) {
            setSelectedOrganization({ label: data.Organization.title, value: data.Organization.id });
            setOrganizationId(data.Organization.id);
        };
        if (data.Manager) {
            setSelectedManager({ label: data.Manager.alias, value: data.Manager.id });
            setManagerId(data.Manager.id);
        };
        if (data.sixManagerAlias) {
            setSelectedSixManager({ label: data.sixManagerAlias, value: data.sixManagerAlias });
            setSixManagerAlias(data.sixManagerAlias);
        };
    }

    const handleCancel = () => {
        setShowForm(false) // Hide the form
    };
    function handleChange() {

        if (!(checkNotEmpty(alias) || checkNotEmpty(name)
            || checkIsNotNone(selectedSixManager) || checkIsNotNone(selectedManager))) {
            let update = {
                name: name,
                alias: alias,
                email: email,
                status: selectedStatus.value,
                isBizOps: isBizOps,
                isManager: isManager,
                sixManagerAlias: selectedSixManager.label,
                personPlanId: plan.id,
                personOrganizationId: (!isb) ? selectedOrganization.value : org.id,
                personManagerId: selectedManager.value
            };
            try {
                let id = editId;
                if (id) { modifyPerson({ ...update, id }).then((res) => { console.log(res); }); }
                else { makePerson(update).then((res) => { console.log(res); }); }
            }
            catch (e) { console.log("Make/Update Person: " + e) }
        }
    };

    return (

        <form onSubmit={event => {
            event.preventDefault();
            handleChange();
            setShowForm(false);
            trigger();
        }
        }>
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
                            {editId ? "Edit Person" : "Add Person"}
                        </Header>
                    }
                >
                    <ColumnLayout borders="vertical" columns={2}>
                        <SpaceBetween direction="vertical" size="l">
                            <FormField label="Alias"
                                errorText={checkNotEmpty(alias)}
                            >
                                <Input type="text" name="alias" value={alias}
                                    onChange={({ detail }) => { setAlias(detail.value); }}
                                />
                            </FormField>
                            <FormField label="Name">
                                <Input type="text" name="name"
                                    value={name}
                                    onChange={({ detail }) => { setName(detail.value); }}
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
                        <SpaceBetween direction="vertical" size="l">
                            <FormField label="L6 Manager"
                                errorText={checkIsNotNone(selectedSixManager)}
                            >
                                <Select
                                    filteringType='auto'
                                    selectedOption={selectedSixManager}
                                    onChange={({ detail }) =>
                                        setSelectedSixManager(detail.selectedOption)
                                    }
                                    options={persons}
                                />
                            </FormField>
                            <FormField label="Email">
                                <Input type="text" name="email"
                                    value={email}
                                    onChange={({ detail }) => { setEmail(detail.value); }}
                                />
                            </FormField>
                            <ColumnLayout borders="vertical" columns={2}>
                                <FormField readOnly
                                    label="Status">
                                    <Select
                                        selectedOption={selectedStatus}
                                        onChange={({ detail }) =>
                                            setSelectedStatus(detail.selectedOption)
                                        }
                                        options={[
                                            { label: "DELETED", value: "DELETED" },
                                            { label: "ACTIVE", value: "ACTIVE" }
                                        ]}
                                    />
                                </FormField>
                                <SpaceBetween direction="horizontal" size="l">
                                    <FormField label="Is Manager">
                                        <Toggle checked={isManager}
                                            onChange={({ detail }) => { setIsManager(detail.checked); }}
                                        />
                                    </FormField>
                                    <FormField label="Is BizOps">
                                        <Toggle checked={isBizOps}
                                            onChange={({ detail }) => { setIsBizOps(detail.checked); }}
                                        />
                                    </FormField>
                                </SpaceBetween>
                            </ColumnLayout>
                        </SpaceBetween>
                    </ColumnLayout>
                </Container>
            </Form>
        </form >
    );
}
