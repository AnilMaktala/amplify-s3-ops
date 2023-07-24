/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getOutputGoal = /* GraphQL */ `
  query GetOutputGoal($id: ID!) {
    getOutputGoal(id: $id) {
      id
      title
      description
      status
      class
      start
      end
      organizationID
      InputGoals {
        items {
          id
          title
          description
          status
          class
          start
          end
          outputgoalID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listOutputGoals = /* GraphQL */ `
  query ListOutputGoals(
    $filter: ModelOutputGoalFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOutputGoals(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        description
        status
        class
        start
        end
        organizationID
        InputGoals {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getInputGoal = /* GraphQL */ `
  query GetInputGoal($id: ID!) {
    getInputGoal(id: $id) {
      id
      title
      description
      status
      class
      start
      end
      outputgoalID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listInputGoals = /* GraphQL */ `
  query ListInputGoals(
    $filter: ModelInputGoalFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listInputGoals(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        description
        status
        class
        start
        end
        outputgoalID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getProject = /* GraphQL */ `
  query GetProject($id: ID!) {
    getProject(id: $id) {
      id
      title
      description
      rank
      priority
      headcount
      Owner {
        id
        alias
        name
        email
        createdAt
        updatedAt
        __typename
      }
      Sponsor {
        id
        alias
        name
        email
        createdAt
        updatedAt
        __typename
      }
      Initiative {
        id
        title
        description
        rank
        themeID
        planID
        status
        Sponsor {
          id
          alias
          name
          email
          createdAt
          updatedAt
          __typename
        }
        bucket
        createdAt
        updatedAt
        initiativeSponsorId
        __typename
      }
      createdAt
      updatedAt
      projectOwnerId
      projectSponsorId
      projectInitiativeId
      __typename
    }
  }
`;
export const listProjects = /* GraphQL */ `
  query ListProjects(
    $filter: ModelProjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProjects(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        description
        rank
        priority
        headcount
        Owner {
          id
          alias
          name
          email
          createdAt
          updatedAt
          __typename
        }
        Sponsor {
          id
          alias
          name
          email
          createdAt
          updatedAt
          __typename
        }
        Initiative {
          id
          title
          description
          rank
          themeID
          planID
          status
          bucket
          createdAt
          updatedAt
          initiativeSponsorId
          __typename
        }
        createdAt
        updatedAt
        projectOwnerId
        projectSponsorId
        projectInitiativeId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getTeam = /* GraphQL */ `
  query GetTeam($id: ID!) {
    getTeam(id: $id) {
      id
      name
      description
      headcount
      organizationID
      Manager {
        id
        alias
        name
        email
        createdAt
        updatedAt
        __typename
      }
      InputGoal {
        id
        title
        description
        status
        class
        start
        end
        outputgoalID
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      teamManagerId
      teamInputGoalId
      __typename
    }
  }
`;
export const listTeams = /* GraphQL */ `
  query ListTeams(
    $filter: ModelTeamFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTeams(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        headcount
        organizationID
        Manager {
          id
          alias
          name
          email
          createdAt
          updatedAt
          __typename
        }
        InputGoal {
          id
          title
          description
          status
          class
          start
          end
          outputgoalID
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        teamManagerId
        teamInputGoalId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getPerson = /* GraphQL */ `
  query GetPerson($id: ID!) {
    getPerson(id: $id) {
      id
      alias
      name
      email
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listPeople = /* GraphQL */ `
  query ListPeople(
    $filter: ModelPersonFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPeople(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        alias
        name
        email
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getOrganization = /* GraphQL */ `
  query GetOrganization($id: ID!) {
    getOrganization(id: $id) {
      id
      name
      description
      headcount
      Teams {
        items {
          id
          name
          description
          headcount
          organizationID
          createdAt
          updatedAt
          teamManagerId
          teamInputGoalId
          __typename
        }
        nextToken
        __typename
      }
      Manager {
        id
        alias
        name
        email
        createdAt
        updatedAt
        __typename
      }
      OutputGoals {
        items {
          id
          title
          description
          status
          class
          start
          end
          organizationID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      planID
      createdAt
      updatedAt
      organizationManagerId
      __typename
    }
  }
`;
export const listOrganizations = /* GraphQL */ `
  query ListOrganizations(
    $filter: ModelOrganizationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrganizations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        headcount
        Teams {
          nextToken
          __typename
        }
        Manager {
          id
          alias
          name
          email
          createdAt
          updatedAt
          __typename
        }
        OutputGoals {
          nextToken
          __typename
        }
        planID
        createdAt
        updatedAt
        organizationManagerId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getInitiative = /* GraphQL */ `
  query GetInitiative($id: ID!) {
    getInitiative(id: $id) {
      id
      title
      description
      rank
      themeID
      planID
      status
      Sponsor {
        id
        alias
        name
        email
        createdAt
        updatedAt
        __typename
      }
      bucket
      createdAt
      updatedAt
      initiativeSponsorId
      __typename
    }
  }
`;
export const listInitiatives = /* GraphQL */ `
  query ListInitiatives(
    $filter: ModelInitiativeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listInitiatives(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        description
        rank
        themeID
        planID
        status
        Sponsor {
          id
          alias
          name
          email
          createdAt
          updatedAt
          __typename
        }
        bucket
        createdAt
        updatedAt
        initiativeSponsorId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getTheme = /* GraphQL */ `
  query GetTheme($id: ID!) {
    getTheme(id: $id) {
      id
      title
      description
      planID
      Initiatives {
        items {
          id
          title
          description
          rank
          themeID
          planID
          status
          bucket
          createdAt
          updatedAt
          initiativeSponsorId
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listThemes = /* GraphQL */ `
  query ListThemes(
    $filter: ModelThemeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listThemes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        description
        planID
        Initiatives {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getPlan = /* GraphQL */ `
  query GetPlan($id: ID!) {
    getPlan(id: $id) {
      id
      title
      description
      year
      Themes {
        items {
          id
          title
          description
          planID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      Initiatives {
        items {
          id
          title
          description
          rank
          themeID
          planID
          status
          bucket
          createdAt
          updatedAt
          initiativeSponsorId
          __typename
        }
        nextToken
        __typename
      }
      Organizations {
        items {
          id
          name
          description
          headcount
          planID
          createdAt
          updatedAt
          organizationManagerId
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listPlans = /* GraphQL */ `
  query ListPlans(
    $filter: ModelPlanFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPlans(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        description
        year
        Themes {
          nextToken
          __typename
        }
        Initiatives {
          nextToken
          __typename
        }
        Organizations {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const outputGoalsByOrganizationID = /* GraphQL */ `
  query OutputGoalsByOrganizationID(
    $organizationID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelOutputGoalFilterInput
    $limit: Int
    $nextToken: String
  ) {
    outputGoalsByOrganizationID(
      organizationID: $organizationID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        title
        description
        status
        class
        start
        end
        organizationID
        InputGoals {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const inputGoalsByOutputgoalID = /* GraphQL */ `
  query InputGoalsByOutputgoalID(
    $outputgoalID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelInputGoalFilterInput
    $limit: Int
    $nextToken: String
  ) {
    inputGoalsByOutputgoalID(
      outputgoalID: $outputgoalID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        title
        description
        status
        class
        start
        end
        outputgoalID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const teamsByOrganizationID = /* GraphQL */ `
  query TeamsByOrganizationID(
    $organizationID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelTeamFilterInput
    $limit: Int
    $nextToken: String
  ) {
    teamsByOrganizationID(
      organizationID: $organizationID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        description
        headcount
        organizationID
        Manager {
          id
          alias
          name
          email
          createdAt
          updatedAt
          __typename
        }
        InputGoal {
          id
          title
          description
          status
          class
          start
          end
          outputgoalID
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        teamManagerId
        teamInputGoalId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const organizationsByPlanID = /* GraphQL */ `
  query OrganizationsByPlanID(
    $planID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelOrganizationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    organizationsByPlanID(
      planID: $planID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        description
        headcount
        Teams {
          nextToken
          __typename
        }
        Manager {
          id
          alias
          name
          email
          createdAt
          updatedAt
          __typename
        }
        OutputGoals {
          nextToken
          __typename
        }
        planID
        createdAt
        updatedAt
        organizationManagerId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const initiativesByThemeID = /* GraphQL */ `
  query InitiativesByThemeID(
    $themeID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelInitiativeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    initiativesByThemeID(
      themeID: $themeID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        title
        description
        rank
        themeID
        planID
        status
        Sponsor {
          id
          alias
          name
          email
          createdAt
          updatedAt
          __typename
        }
        bucket
        createdAt
        updatedAt
        initiativeSponsorId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const initiativesByPlanID = /* GraphQL */ `
  query InitiativesByPlanID(
    $planID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelInitiativeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    initiativesByPlanID(
      planID: $planID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        title
        description
        rank
        themeID
        planID
        status
        Sponsor {
          id
          alias
          name
          email
          createdAt
          updatedAt
          __typename
        }
        bucket
        createdAt
        updatedAt
        initiativeSponsorId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const themesByPlanID = /* GraphQL */ `
  query ThemesByPlanID(
    $planID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelThemeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    themesByPlanID(
      planID: $planID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        title
        description
        planID
        Initiatives {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
