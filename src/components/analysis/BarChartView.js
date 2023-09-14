import React, { useState, useEffect } from 'react';
import { useCollection } from '@cloudscape-design/collection-hooks';
import { Box, Button, Header, Table, TextFilter, Container, Select, BarChart, FormField, ColumnLayout } from '@cloudscape-design/components';
import SpaceBetween from "@cloudscape-design/components/space-between";
import { Cache } from 'aws-amplify'
import { fetchActivePlan, fetchOrganizationsForSelect, fetchProjects, fetchPersonsForSelect } from '../../common/graphqlHelper'
import { modesFilter } from '../../common/tableHelper'
import { OP2Cache } from '../../common/cacheHelper';


function EmptyState({ title, subtitle, action }) {
    return (
        <Box textAlign="center" color="inherit">
            <Box variant="strong" textAlign="center" color="inherit">
                {title}
            </Box>
            <Box variant="p" padding={{ bottom: 's' }} color="inherit">
                {subtitle}
            </Box>
            {action}
        </Box>
    );
}

export const BarChartView = ({ chartMode }) => {
    const [activeIsb, setActiveIsb] = useState(Cache.getItem("isBizOps"));
    const [overActiveIsb, setOverActiveIsb] = useState(OP2Cache.getItem("overIsBizOps"));
    const [activeOrg, setActiveOrg] = useState(Cache.getItem("activeOrg"));
    const [chartItems, setChartItems] = useState({ top: [], other: [] });

    const [activePlan, setActivePlan] = useState({});
    const [loading, setLoading] = useState(false);
    const [allItems, setAllItems] = useState([]);
    const [filteredText, setFilteredText] = useState("");
    const [filteredItemSize, setFilteredItemSize] = useState(0);

    const [showForm, setShowForm] = useState(false);
    const [showNoMatch, setShowNoMatch] = useState(false);

    const optionDefault = { label: "Choose option", value: "-NONE-", headcount: 0, incTarget: 0 };
    const [selectedOrganization, setSelectedOrganization] = useState(optionDefault);
    const [selectedOwner, setSelectedOwner] = useState(optionDefault);
    const [selectedBucket, setSelectedBucket] = useState(optionDefault);
    const [selectedFunding, setSelectedFunding] = useState(optionDefault);

    const [buckets, setBuckets] = useState([]);
    const [organizations, setOrganizations] = useState([]);
    const [owners, setOwners] = useState([]);

    const load = async (planId) => {
        let orgId = null;
        const it = Cache.getItem("selectedOrg")
        const ot = Cache.getItem("activeOrg")
        if (it != null) {
            if (it.label != "ALL S3G") orgId = it.value;
            setSelectedOrganization(it)
        }
        else if (ot) {
            orgId = ot.id;
            setSelectedOrganization({ label: ot.name, value: ot.id, incTarget: ot.incTarget, headcount: ot.headcount })
        }
        let token = Cache.getItem("nextToken");

        setLoading(true);
        var items = []
        do {
            const res = await fetchProjects(planId, orgId, token);
            items = [...items, ...res]
            token = Cache.getItem("nextToken")
        }
        while (token);

        if (token) {
            setAllItems([...allItems, ...items]);
        } else {
            setAllItems([...items]);
        }
        loadOwners(planId, orgId);
        setLoading(false);
        return items;
    };

    function trigger() {
        Cache.removeItem("nextToken");
        setShowForm(false);
        let plan = activePlan;
        if (plan) {
            load(plan.id).then((res) => {
                loadChart(res);
            });
        }
    }

    const loadOwners = async (id, orgId) => {
        const res = await fetchPersonsForSelect(id, orgId, { isManager: { eq: true } });
        setOwners([{ label: 'Select owner', value: '' }, ...res])
    };

    const loadOrganizations = async () => {
        if (organizations.length === 0) {
            let plan = Cache.getItem("activePlan");
            let res = await fetchOrganizationsForSelect(plan.id);

            setOrganizations([{ label: 'Select organization', value: '' }, ...res])
        }
    };

    useEffect(() => {
        setShowForm(false);
        const res = fetchActivePlan().then((res) => {
            setActivePlan(res);
            if (res) {
                load(res.id).then((res) => {
                    loadChart(res);
                });
            }
            loadOrganizations();
        });
    }, []);

    const fixup = (o) => {
        var res = Object.keys(o).map(it => {
            var t1 = Object.entries(o[it]).map(([k, v]) => {
                return { x: k, y: Math.round(v) }
            });
            t1 = t1.sort((a, b) => {
                return b.y - a.y
            })
            return { [it]: t1 }
        });
        res = res.map(it => {
            var a = Object.entries(it);
            var t = 0;
            a[0][1].map(b => { t += b.y });
            return { type: "bar", data: a[0][1], title: a[0][0], value: Math.round(t) }
        });
        res = res.sort((a, b) => {
            return b.value - a.value
        })

        if (res.length > 30) {
            var t = 0;
            res.slice(30).map(it => { t += it.y })
            res = { top: res.slice(0, 29), other: { type: "bar", data: [], title: "Other", value: t } }
        } else {
            res = { top: res.slice(0, 29), other: { type: "bar", data: [], title: "Other", value: 0 } }
        }
        return res
    };

    function loadChart(data) {
        var x = {};
        setShowForm(false);
        if (chartMode == "Initiatives") {
            var o = data.map(b => {
                x[b.Initiative.title] = x[b.Initiative.title] || [];
                var s = (x[b.Initiative.title][b.Organization.name]) ? x[b.Initiative.title][b.Organization.name] : 0;
                x[b.Initiative.title][b.Organization.name]
                    = s + (['FLAT', 'INC'].includes(b.funding)) ? b.headcount : 0;
            }, {});
            x = fixup(x)
            setShowForm(true)
        } else if (chartMode == "Buckets") {
            var p = data.map(b => {
                x[b.Initiative.bucket] = x[b.Initiative.bucket] || [];
                var s = (x[b.Initiative.bucket][b.Organization.name]) ? x[b.Initiative.bucket][b.Organization.name] : 0;
                x[b.Initiative.bucket][b.Organization.name]
                    = s + ((['FLAT', 'INC'].includes(b.funding)) ? b.headcount : 0);
            }, {});
            x = fixup(x)
        }
        setChartItems(x)
    };

    function handleFilterAction(source, option) {
        var text = "";
        var f = (source === 'funding') ? option.label : selectedFunding.label;
        var b = (source === 'bucket') ? option.label : selectedBucket.label;
        var o = (source === 'owner') ? option.label : selectedOwner.label;

        if (b !== optionDefault.label) text = text + `&b:${b}`
        if (o !== optionDefault.label) text = text + `&p:${o}`
        if (f !== optionDefault.label) text = text + `&f:${f}`

        if (text === filteredText) return;

        if (text != "") {
            const res = allItems.reduce((acc, it) => {
                if (modesFilter(it, text)) {
                    acc.push(it)
                }
                return acc
            }, []);
            console.log(`F: ${text} - ${res.length}`)
            if (res.length > 0) {
                setFilteredItemSize(res.length)
                loadChart(res)
            }
            else {
                setShowForm(false)
                setShowNoMatch(true)
                setFilteredItemSize(0)
            }
        } else {
            console.log(`N: ${text}`)
            loadChart(allItems)
        }
        setFilteredText(text);
    };

    function handleClearAction() {
        console.log(`C:`)
        setSelectedOwner(optionDefault);
        setSelectedBucket(optionDefault);
        setSelectedFunding(optionDefault);
        setShowNoMatch(false)
        loadChart(allItems)
    }

    return (
        <>
            <Container variant='stacked'>
                <Header
                    counter={filteredItemSize > 0 ? `(${filteredItemSize}/${allItems.length})` : `(${allItems.length})`}
                    actions={
                        <SpaceBetween direction="horizontal" size="l">
                            <FormField
                                label="Organization"
                            >
                                <Select
                                    expandToViewport
                                    disabled={!overActiveIsb && !activeIsb}
                                    selectedOption={selectedOrganization}
                                    onChange={({ detail }) => {
                                        setSelectedOrganization(detail.selectedOption);
                                        Cache.setItem("selectedOrg", detail.selectedOption);
                                        Cache.removeItem("nextToken");
                                        trigger();
                                    }
                                    }
                                    options={organizations}
                                />
                            </FormField>
                            <FormField
                                label="Funding"
                            >
                                <Select
                                    selectedOption={selectedFunding}
                                    onChange={({ detail }) => {
                                        setSelectedFunding(detail.selectedOption)
                                        handleFilterAction('funding', detail.selectedOption)
                                    }
                                    }
                                    options={[
                                        optionDefault,
                                        { label: "FLAT", value: "FLAT" },
                                        { label: "INC", value: "INC" },
                                        { label: "CUT", value: "CUT" },
                                        { label: "NA", value: "NA" }
                                    ]}
                                />
                            </FormField>
                            <FormField
                                label="Owner" >
                                <Select
                                    selectedOption={selectedOwner}
                                    onChange={({ detail }) => {
                                        setSelectedOwner(detail.selectedOption)
                                        handleFilterAction('owner', detail.selectedOption)
                                    }
                                    }
                                    options={[optionDefault, ...owners]}
                                    expandToViewport={true}
                                />
                            </FormField>
                            <FormField
                                label="Bucket" >
                                <Select
                                    selectedOption={selectedBucket}
                                    onChange={({ detail }) => {
                                        setSelectedBucket(detail.selectedOption);
                                        handleFilterAction('bucket', detail.selectedOption)
                                    }
                                    }
                                    options={[
                                        optionDefault,
                                        { label: "KTLO", value: "KTLO" },
                                        { label: "ORGN", value: "ORGN" },
                                        { label: "TOPN", value: "TOPN" },
                                        { label: "XORG", value: "XORG" },
                                    ]}
                                />
                            </FormField>
                            <Button onClick={event => trigger(event)} iconName="refresh" />
                            <Button onClick={event => handleClearAction()} >Clear Filter</Button>
                        </SpaceBetween>
                    }
                >
                    Projects
                </Header>
            </Container>
            <React.Fragment>
                {showForm && (
                    <Container variant='stacked'>
                        <SpaceBetween direction="vertical" size="l">
                            <Box variant="h1">{`${chartMode} Headcount Distribution`}</Box>
                            <BarChart
                                height={300}
                                stackedBars
                                hideFilter={true}
                                loadingText='Loading analysis...'
                                series={chartItems.top}
                                xTitle="Organization"
                                yTitle="Headcount"
                                legendTitle={`${chartMode}`}
                                ariaDescription={`${chartMode} Headcount Distribution`}
                                ariaLabel={`${chartMode} Headcount Distribution`}
                            />
                        </SpaceBetween>
                    </Container>
                )}
            </React.Fragment>
            <React.Fragment>
                {showNoMatch && (
                    <Container variant='stacked'>
                        <EmptyState
                            title="No matches"
                            action={
                                <Button onClick={() => handleClearAction()}>
                                    Clear filter
                                </Button>
                            }
                        />
                    </Container>
                )}
            </React.Fragment>
        </>
    );

}
