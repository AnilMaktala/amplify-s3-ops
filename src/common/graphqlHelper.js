import { Cache, API, Logger } from "aws-amplify";
import {
    PlansByStatus, OrganizationsByPlan, GoalsByPlan, InitiativesByPlan,
    ThemesByPlan, ProjectsByPlan, PersonsByPlan, listPlans, PersonsByAlias
} from '../graphql/queries'
import { getGoal, getTheme, getInitiative, getOrganization, getPlan, getPerson, getProject } from '../graphql/queries'
import { createSnapshot, createGoal, createTheme, createInitiative, createOrganization, createPlan, createPerson, createProject } from '../graphql/mutations'
import { updateGoal, updateTheme, updateInitiative, updateOrganization, updatePlan, updatePerson, updateProject } from '../graphql/mutations'
import { deleteGoal, deleteTheme, deleteInitiative, deleteOrganization, deletePlan, deletePerson, deleteProject } from '../graphql/mutations'

const logger = new Logger('graphqlHelper', 'INFO');

export const fetchActivePlan = async () => {

    /* query the API, ask for 100 items */
    const res = await API.graphql({ query: PlansByStatus, variables: { status: "ACTIVE" } });
    logger.debug(res.data.PlansByStatus);
    try {
        Cache.setItem("activePlan", res.data.PlansByStatus.items[0]);
        logger.debug("set active plan");
        return res.data.PlansByStatus.items[0];
    } catch { logger.debug("No Active Plan") }
};

export const fetchOrganizations = async (planId, token) => {

    let plan = Cache.getItem("activePlan");
    let variables = { organizationPlanId: plan.id }
    const res = await API.graphql({ query: OrganizationsByPlan, variables: variables })
    try {
        logger.debug(res.data.OrganizationsByPlan);
        return res.data.OrganizationsByPlan.items;
    } catch (e) { logger.debug("Fetch Organizations: " + e) }
};

export const fetchOrganizationsForSelect = async (planId, token) => {
    var res = {};
    if (token) {
        res = await API.graphql({ query: OrganizationsByPlan, variables: { organizationPlanId: planId, nextToken: token } });
    } else {
        res = await API.graphql({ query: OrganizationsByPlan, variables: { organizationPlanId: planId } });
    }
    try {
        logger.debug(res.data.OrganizationsByPlan);
        let it = [];
        res.data.OrganizationsByPlan.items.forEach((value) => {
            it.push({
                label: value.name,
                value: value.id,
                headcount: value.headcount,
                incTarget: value.incTarget,
            });
        });
        it.sort((a, b) => { if (a.label < b.label) return -1; if (a.label > b.label) return 1; return 0; })
        return it;
    } catch (e) { logger.debug("Fetch Organizations: " + e) }
};

export const fetchGoals = async (planId, goalType, token) => {
    var res = {};
    if (token) {
        res = await API.graphql({ query: GoalsByPlan, variables: { goalPlanId: planId, nextToken: token, type: { eq: goalType } } });
    } else {
        res = await API.graphql({ query: GoalsByPlan, variables: { goalPlanId: planId, type: { eq: goalType } } });
    }
    try {
        if (res.data.GoalsByPlan.nextToken) {
            Cache.setItem("nextToken", res.data.GoalsByPlan.nextToken);
        } else {
            Cache.removeItem("nextToken");
        }
        logger.debug(res);
        return (res.data.GoalsByPlan.items);
    } catch (e) { logger.debug("Fetch Goals: " + e) }
};

export const fetchGoalsForSelect = async (planId, goalType, token) => {
    var res = {};
    if (token) {
        res = await API.graphql({ query: GoalsByPlan, variables: { goalPlanId: planId, nextToken: token, type: { eq: goalType } } });
    } else {
        res = await API.graphql({ query: GoalsByPlan, variables: { goalPlanId: planId, type: { eq: goalType } } });
    }
    try {
        logger.debug(res.data.GoalsByPlan);
        let it = [];
        res.data.GoalsByPlan.items.forEach((value) => {
            it.push({
                label: value.title,
                value: value.id,
            });
        });
        it.sort((a, b) => { if (a.label < b.label) return -1; if (a.label > b.label) return 1; return 0; })
        return it;
    } catch (e) { logger.debug("Fetch Goals: " + e) }
};

export const fetchInitiatives = async (planId, token) => {
    var res = {};
    if (token) {
        res = await API.graphql({ query: InitiativesByPlan, variables: { initiativePlanId: planId, nextToken: token } });
    } else {
        res = await API.graphql({ query: InitiativesByPlan, variables: { initiativePlanId: planId } });
    }
    try {
        if (res.data.InitiativesByPlan.nextToken) {
            Cache.setItem("nextToken", res.data.InitiativesByPlan.nextToken);
        } else {
            Cache.removeItem("nextToken");
        }
        logger.debug(res);
        return (res.data.InitiativesByPlan.items);
    } catch (e) { logger.debug("Fetch Initiatives: " + e) }
};

export const fetchThemes = async (planId, token) => {
    var res = {};
    if (token) {
        res = await API.graphql({ query: ThemesByPlan, variables: { themePlanId: planId, nextToken: token } });
    } else {
        res = await API.graphql({ query: ThemesByPlan, variables: { themePlanId: planId } });
    }
    try {
        if (res.data.ThemesByPlan.nextToken) {
            Cache.setItem("nextToken", res.data.ThemesByPlan.nextToken);
        } else {
            Cache.removeItem("nextToken");
        }
        logger.debug(res);
        return (res.data.ThemesByPlan.items);
    } catch (e) { logger.debug(e) }
}

export const fetchThemesForSelect = async (planId, token) => {
    var res = {};
    if (token) {
        res = await API.graphql({ query: ThemesByPlan, variables: { themePlanId: planId, nextToken: token } });
    } else {
        res = await API.graphql({ query: ThemesByPlan, variables: { themePlanId: planId } });
    }
    try {
        logger.debug(res.data.ThemesByPlan);
        let it = [];
        res.data.ThemesByPlan.items.forEach((value) => {
            it.push({
                label: value.title,
                value: value.id,
            });
        });
        it.sort((a, b) => { if (a.label < b.label) return -1; if (a.label > b.label) return 1; return 0; })
        return it;
    } catch (e) { logger.debug(e) }
}

export const fetchInitiativesForSelect = async (planId, token) => {
    var res = {};
    if (token) {
        res = await API.graphql({ query: InitiativesByPlan, variables: { initiativePlanId: planId, nextToken: token } });
    } else {
        res = await API.graphql({ query: InitiativesByPlan, variables: { initiativePlanId: planId } });
    }
    try {
        logger.debug(res.data.InitiativesByPlan);
        let it = [];
        res.data.InitiativesByPlan.items.forEach((value) => {
            it.push({
                label: value.title,
                value: value.id,
            });
        });
        it.sort((a, b) => { if (a.label < b.label) return -1; if (a.label > b.label) return 1; return 0; })
        return it;
    } catch (e) { logger.debug(e) }
}

export const fetchProjects = async (planId, orgId, token) => {
    var res = {};
    if (token) {
        res = (orgId)
            ? await API.graphql({ query: ProjectsByPlan, variables: { projectPlanId: planId, nextToken: token, projectOrganizationId: { eq: orgId } } })
            : await API.graphql({ query: ProjectsByPlan, variables: { projectPlanId: planId, nextToken: token } });
    } else {
        res = (orgId)
            ? await API.graphql({ query: ProjectsByPlan, variables: { projectPlanId: planId, projectOrganizationId: { eq: orgId } } })
            : await API.graphql({ query: ProjectsByPlan, variables: { projectPlanId: planId } });
    }
    try {
        if (res.data.ProjectsByPlan.nextToken) {
            Cache.setItem("nextToken", res.data.ProjectsByPlan.nextToken);
        } else {
            Cache.removeItem("nextToken");
        }
        logger.debug(res);
        return (res.data.ProjectsByPlan.items);
    } catch (e) { logger.debug("Fetch Projects: " + e) }
};

export const fetchPersons = async (planId, orgId, token) => {
    var res = {};
    if (token) {
        res = (orgId)
            ? await API.graphql({ query: PersonsByPlan, variables: { personPlanId: planId, nextToken: token, personOrganizationId: { eq: orgId } } })
            : await API.graphql({ query: PersonsByPlan, variables: { personPlanId: planId, nextToken: token } });
    } else {
        res = (orgId)
            ? await API.graphql({ query: PersonsByPlan, variables: { personPlanId: planId, personOrganizationId: { eq: orgId } } })
            : await API.graphql({ query: PersonsByPlan, variables: { personPlanId: planId } });
    }
    try {
        if (res.data.PersonsByPlan.nextToken) {
            Cache.setItem("nextToken", res.data.PersonsByPlan.nextToken);
        } else {
            Cache.removeItem("nextToken");
        }
        logger.debug(res);
        return (res.data.PersonsByPlan.items);
    } catch (e) { logger.debug("Fetch Persons: " + e) }
};

export const fetchPersonsForSelect = async (planId, orgId, filter, token) => {
    var items = []
    do {
        var vars = { personPlanId: planId };
        if (token) vars = { ...vars, nextToken: token };
        if (orgId) vars = { ...vars, personOrganizationId: { eq: orgId } }
        if (filter) vars = { ...vars, filter }
        const res = await API.graphql({ query: PersonsByPlan, variables: vars })
        logger.debug(res.data.PersonsByPlan);
        items = [...items, ...res.data.PersonsByPlan.items]
        token = res.data.PersonsByPlan.nextToken
    }
    while (token);

    try {
        let it = [];
        items.forEach((value) => {
            it.push({
                label: value.alias,
                value: value.id,
            });
        });

        /*
        
            var vars = {personPlanId: planId};
            if (token) vars = { ...vars, nextToken: token};
            if (orgId) vars = {...vars, personOrganizationId: { eq: orgId } }
            if  (filter) vars = {...vars, filter}
            res = await API.graphql({ query: PersonsByPlan, variables: vars})
            try {
                logger.debug  (res.data.PersonsByPlan);
                let it = [];
                res.data.PersonsByPlan.items.forEach((value) => {
                    it.push({
                        label: value.alias,
                        value: value.id,
                    });
                });
        */
        it.sort((a, b) => { if (a.label < b.label) return -1; if (a.label > b.label) return 1; return 0; })
        return it;
    } catch (e) { logger.debug("Fetch PersonsForSelect: " + e) }
};

export const fetchPlans = async (planId, token) => {
    var res = {};
    if (token) {
        res = await API.graphql({ query: listPlans, variables: { nextToken: token } });
    } else {
        res = await API.graphql({ query: listPlans });
    }
    try {
        if (res.data.listPlans.nextToken) {
            Cache.setItem("nextToken", res.data.listPlans.nextToken);
        } else {
            Cache.removeItem("nextToken");
        }
        logger.debug(res);
        return (res.data.listPlans.items);
    } catch (e) { logger.debug("Fetch Plans: " + e) }
};

export const fetchGoal = async (id) => {
    const res = await API.graphql({ query: getGoal, variables: { id: id } });
    try {
        logger.debug(res);
        return (res.data.getGoal);
    } catch (e) { logger.debug("Fetch Goal: " + e) }
};

export const fetchTheme = async (id) => {
    const res = await API.graphql({ query: getTheme, variables: { id: id } });
    try {
        logger.debug(res);
        return (res.data.getTheme);
    } catch (e) { logger.debug("Fetch Theme: " + e) }
};

export const fetchInitiative = async (id) => {
    const res = await API.graphql({ query: getInitiative, variables: { id: id } });
    try {
        logger.debug(res);
        return (res.data.getInitiative);
    } catch (e) { logger.debug("Fetch Initiative: " + e) }
};

export const fetchOrganization = async (id) => {
    const res = await API.graphql({ query: getOrganization, variables: { id: id } });
    try {
        logger.debug(res);
        return (res.data.getOrganization);
    } catch (e) { logger.debug("Fetch Organization: " + e) }
};

export const fetchPlan = async (id) => {
    const res = await API.graphql({ query: getPlan, variables: { id: id } });
    try {
        logger.debug(res);
        return (res.data.getPlan);
    } catch (e) { logger.debug("Fetch Plan: " + e) }
};

export const fetchPersonByAlias = async (alias) => {
    const res = await API.graphql({ query: PersonsByAlias, variables: { alias: alias } });
    try {
        logger.debug(res);
        return (res.data.PersonsByAlias);
    } catch (e) { logger.debug("Fetch PersonByAlias: " + e) }
};

export const fetchPerson = async (id) => {
    const res = await API.graphql({ query: getPerson, variables: { id: id } });
    try {
        logger.debug(res);
        return (res.data.getPerson);
    } catch (e) { logger.debug("Fetch Person: " + e) }
};

export const fetchProject = async (id) => {
    const res = await API.graphql({ query: getProject, variables: { id: id } });
    try {
        logger.debug(res);
        return (res.data.getProject);
    } catch (e) { logger.debug("Fetch Project: " + e) }
};

export const removeGoal = async (id) => {
    const res = await API.graphql({ query: deleteGoal, variables: { id: id } });
    try {
        logger.debug(res);
        return (res.data.deleteGoal);
    } catch (e) { logger.debug("Remove Goal: " + e) }
};

export const removeTheme = async (id) => {
    const res = await API.graphql({ query: deleteTheme, variables: { id: id } });
    try {
        logger.debug(res);
        return (res.data.deleteTheme);
    } catch (e) { logger.debug("Remove Theme: " + e) }
};

export const removeInitiative = async (id) => {
    const res = await API.graphql({ query: deleteInitiative, variables: { id: id } });
    try {
        logger.debug(res);
        return (res.data.deleteInitiative);
    } catch (e) { logger.debug("Remove Initiative: " + e) }
};

export const removeOrganization = async (id) => {
    const res = await API.graphql({ query: deleteOrganization, variables: { id: id } });
    try {
        logger.debug(res);
        return (res.data.deleteOrganization);
    } catch (e) { logger.debug("Remove Organization: " + e) }
};

export const removePlan = async (id) => {
    const res = await API.graphql({ query: deletePlan, variables: { id: id } });
    try {
        logger.debug(res);
        return (res.data.deletePlan);
    } catch (e) { logger.debug("Remove Plan: " + e) }
};

export const removePerson = async (id) => {
    const res = await API.graphql({ query: deletePerson, variables: { id: id } });
    try {
        logger.debug(res);
        return (res.data.deletePerson);
    } catch (e) { logger.debug("Remove Person: " + e) }
};

export const removeProject = async (id) => {
    const res = await API.graphql({ query: deleteProject, variables: { id: id } });
    try {
        logger.debug(res);
        return (res.data.deleteProject);
    } catch (e) { logger.debug("Remove Project: " + e) }
};

export const modifyGoal = async (update) => {
    const res = await API.graphql({ query: updateGoal, variables: { input: update } });
    try {
        logger.debug(res);
        return (res.data.updateGoal);
    } catch (e) { logger.debug("Modify Goal: " + e) }
};

export const modifyTheme = async (update) => {
    const res = await API.graphql({ query: updateTheme, variables: { input: update } });
    try {
        logger.debug(res);
        return (res.data.updateTheme);
    } catch (e) { logger.debug("Modify Theme: " + e) }
};

export const modifyInitiative = async (update) => {
    const res = await API.graphql({ query: updateInitiative, variables: { input: update } });
    try {
        logger.debug(res);
        return (res.data.updateInitiative);
    } catch (e) { logger.debug("Modify Initiative: " + e) }
};

export const modifyOrganization = async (update) => {
    const res = await API.graphql({ query: updateOrganization, variables: { input: update } });
    try {
        logger.debug(res);
        return (res.data.updateOrganization);
    } catch (e) { logger.debug("Modify Organization: " + e) }
};

export const modifyPlan = async (update) => {
    const res = await API.graphql({ query: updatePlan, variables: { input: update } });
    try {
        logger.debug(res);
        return (res.data.updatePlan);
    } catch (e) { logger.debug("Modify Plan: " + e) }
};

export const modifyPerson = async (update) => {
    const res = await API.graphql({ query: updatePerson, variables: { input: update } });
    try {
        logger.debug(res);
        return (res.data.updatePerson);
    } catch (e) { logger.debug("Modify Person: " + e) }
};

export const modifyProject = async (update) => {
    const res = await API.graphql({ query: updateProject, variables: { input: update } });
    try {
        logger.debug(res);
        return (res.data.updateProject);
    } catch (e) { logger.debug("Modify Project: " + e) }
};

export const makeGoal = async (update) => {
    const res = await API.graphql({ query: createGoal, variables: { input: update } });
    try {
        logger.debug(res);
        return (res.data.createGoal);
    } catch (e) { logger.debug("Create Goal: " + e) }
};

export const makeTheme = async (update) => {
    const res = await API.graphql({ query: createTheme, variables: { input: update } });
    try {
        logger.debug(res);
        return (res.data.createTheme);
    } catch (e) { logger.debug("Create Theme: " + e) }
};

export const makeInitiative = async (update) => {
    const res = await API.graphql({ query: createInitiative, variables: { input: update } });
    try {
        logger.debug(res);
        return (res.data.createInitiative);
    } catch (e) { logger.debug("Create Initiative: " + e) }
};

export const makeOrganization = async (update) => {
    const res = await API.graphql({ query: createOrganization, variables: { input: update } });
    try {
        logger.debug(res);
        return (res.data.createOrganization);
    } catch (e) { logger.debug("Create Organization: " + e) }
};

export const makePlan = async (update) => {
    const res = await API.graphql({ query: createPlan, variables: { input: update } });
    try {
        logger.debug(res);
        return (res.data.createPlan);
    } catch (e) { logger.debug("Create Plan: " + e) }
};

export const makePerson = async (update) => {
    const res = await API.graphql({ query: createPerson, variables: { input: update } });
    try {
        logger.debug(res);
        return (res.data.createPerson);
    } catch (e) { logger.debug("Create Person: " + e) }
};
export const makeProject = async (update) => {
    const res = await API.graphql({ query: createProject, variables: { input: update } });
    try {
        logger.debug(res);
        return (res.data.createProject);
    } catch (e) { logger.debug("Create Project: " + e) }
};

export const makeSnapshot = async (update) => {
    try {
        let res = [];
        if (Array.isArray(update)) {

            let chunks = []
            for (let i = 0; i < update.length; i += 100) {
                const chunk = update.slice(i, i + 100);
                chunks.push(chunk);
            }
            chunks.forEach(async (c) => {
                var r = await Promise.all(c.map((it) => API.graphql({ query: createSnapshot, variables: { input: it } })))
                res = [...res, r]
            }
            )

        } else {
            const res = await API.graphql({ query: createSnapshot, variables: { input: update } });
            return (res.data.createSnapshot);
        }
        logger.debug(res);
        return res;
    } catch (e) { logger.debug("Create Snapshot: " + e) }
};

