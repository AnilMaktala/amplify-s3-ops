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
import { fetchInitiative, fetchPersonsForSelect, fetchThemesForSelect, modifyInitiative, makeInitiative } from '../../common/graphqlHelper';

export const InitiativeForm = ({ setShowForm, trigger, plan, org, isb, editId }) => {
    const [planId, setPlanId] = useState();
    const [id, setId] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [rank, setRank] = useState(1);
    const [selectedStatus, setSelectedStatus] = React.useState({ label: "PROPOSED", value: "PROPOSED" });
    const [selectedBucket, setSelectedBucket] = React.useState({ label: "ORGN", value: "ORGN" });
    const [selectedSponsor, setSelectedSponsor] = React.useState({ label: "select Sponsor", value: "-NONE-" });
    const [selectedTheme, setSelectedTheme] = React.useState({ label: "select Theme", value: "-NONE-" });
    const [selectedBucketOptions, setSelectedBucketOptions] =
         React.useState([
            { label: "ORGN", value: "ORGN" },{ label: "CUT", value: "CUT" }]);

    const [themes, setThemes] = useState([]);
    const [persons, setPersons] = useState([]);

    const [themeId, setThemeId] = useState("");
    const [sponsorId, setSponsorId] = useState("");

    const load = async (id) => {
        fetchInitiative(id).then((res) => { setInitiativeState(res) });
    };

    async function setInitiativeState(data) {
        setTitle(data.title);
        setDescription(data.description);
        setRank(data.rank);
        setSelectedBucket({ label: data.bucket, value: data.value });
        setSelectedStatus({ label: data.status, value: data.status });
        if (data.Theme) {
            setSelectedTheme({ label: data.Theme.title, value: data.Theme.id });
            setThemeId(data.Theme.id);
        };
        if (data.Sponsor) {
            setSelectedSponsor({ label: data.Sponsor.alias, value: data.Sponsor.id });
            setSponsorId(data.Sponsor.id);
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
        loadThemes();

        if (isb) {
            setSelectedBucketOptions(
                [
                    { label: "KTLO", value: "KTLO" },
                    { label: "ORGN", value: "ORGN" },
                    { label: "TOPN", value: "TOPN" },
                    { label: "XORG", value: "XORG" },
                    { label: "CUT", value: "CUT" }
                ]
            )
        }
    }, []);

    const handleCancel = () => {
        setShowForm(false) // Hide the form
    };

    function handleChange() {
        if (!(checkNotEmpty(title) && checkIsBetween(rank, 0, 1000)
            && checkIsNotNone(selectedSponsor) && checkIsNotNone(selectedTheme))) {
            let update = {
                title: title,
                rank: Number(rank),
                status: selectedStatus.value,
                bucket: selectedBucket.value,
                description: (description === "" ? title : description),
                initiativePlanId: planId,
                initiativeThemeId: selectedTheme.value,
                initiativeSponsorId: selectedSponsor.value
            };
            try {
                let id = editId;
                if (id) { modifyInitiative({ ...update, id }).then((res) => { console.log(res); }); }
                else { makeInitiative(update).then((res) => { console.log(res); }); }
            }
            catch (e) { console.log("Make/Update Initiative: " + e) }
        }
        return null;
    };
    const loadThemes = async () => {
        if (themes.length === 0) {
            let plan = Cache.getItem("activePlan");
            const res = await fetchThemesForSelect(plan.id);
            setThemes([{ label: 'Select person', value: '' }, ...res])
        }
    };
    const loadPersons = async () => {
        if (persons.length === 0) {
            let orgId = isb ? null : org.id;
            const res = await fetchPersonsForSelect(plan.id, orgId, {isManager : {eq:true}});
            setPersons([{ label: 'Select theme', value: '' }, ...res])
        }
    };

    return (

        <form onSubmit={event => {
            event.preventDefault();
            handleChange();
            setShowForm(false);
            trigger();
        }
        }
        >
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
                            {editId ? "Edit Initiative" : "Add Initiative"}
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
                            <FormField label="Rank"
                                errorText={checkIsBetween(rank, 0, 1000)}
                            >
                                <Input type="number" name="rank" value={rank}
                                    onChange={({ detail }) => { setRank(detail.value); }}
                                />
                            </FormField>
                            <FormField
                                label="Bucket"
                            >
                                <Select
                                    selectedOption={selectedBucket}
                                    disabled={!isb && (selectedBucket.value == "TOPN" || selectedBucket.value == "XORG")}
                                    onChange={({ detail }) =>
                                        setSelectedBucket(detail.selectedOption)
                                    }
                                    options={selectedBucketOptions}
                                />
                            </FormField>
                            <FormField
                                label="Status"
                            >
                                <Select
                                    selectedOption={selectedStatus}
                                    disabled={!isb && (selectedBucket.value == "TOPN" || selectedBucket.value == "XORG")}
                                    onChange={({ detail }) =>
                                        setSelectedStatus(detail.selectedOption)
                                    }
                                    options={[
                                        { label: "PROPOSED", value: "PROPOSED" },
                                        { label: "ACTIVE", value: "ACTIVE" },
                                        { label: "DELETED", value: "DELETED" },
                                        { label: "LOCKED", value: "LOCKED" }
                                    ]}
                                />
                            </FormField>
                        </SpaceBetween>
                        <SpaceBetween direction="vertical" size="l">
                            <FormField label="Description">
                                <Textarea rows={8} name="description" value={description}
                                    onChange={({ detail }) => { setDescription(detail.value); }}
                                />
                            </FormField>
                            <FormField
                                label="Theme"
                                errorText={checkIsNotNone(selectedTheme)}
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
                                label="Sponsor"
                                errorText={checkIsNotNone(selectedSponsor)}
                            >
                                <Select
                                filteringType='auto'
                                selectedOption={selectedSponsor}
                                    onChange={({ detail }) =>
                                        setSelectedSponsor(detail.selectedOption)
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
};
