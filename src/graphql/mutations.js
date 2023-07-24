/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createOutputGoal = /* GraphQL */ `
  mutation CreateOutputGoal(
    $input: CreateOutputGoalInput!
    $condition: ModelOutputGoalConditionInput
  ) {
    createOutputGoal(input: $input, condition: $condition) {
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
export const updateOutputGoal = /* GraphQL */ `
  mutation UpdateOutputGoal(
    $input: UpdateOutputGoalInput!
    $condition: ModelOutputGoalConditionInput
  ) {
    updateOutputGoal(input: $input, condition: $condition) {
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
export const deleteOutputGoal = /* GraphQL */ `
  mutation DeleteOutputGoal(
    $input: DeleteOutputGoalInput!
    $condition: ModelOutputGoalConditionInput
  ) {
    deleteOutputGoal(input: $input, condition: $condition) {
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
export const createInputGoal = /* GraphQL */ `
  mutation CreateInputGoal(
    $input: CreateInputGoalInput!
    $condition: ModelInputGoalConditionInput
  ) {
    createInputGoal(input: $input, condition: $condition) {
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
export const updateInputGoal = /* GraphQL */ `
  mutation UpdateInputGoal(
    $input: UpdateInputGoalInput!
    $condition: ModelInputGoalConditionInput
  ) {
    updateInputGoal(input: $input, condition: $condition) {
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
export const deleteInputGoal = /* GraphQL */ `
  mutation DeleteInputGoal(
    $input: DeleteInputGoalInput!
    $condition: ModelInputGoalConditionInput
  ) {
    deleteInputGoal(input: $input, condition: $condition) {
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
export const createProject = /* GraphQL */ `
  mutation CreateProject(
    $input: CreateProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    createProject(input: $input, condition: $condition) {
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
export const updateProject = /* GraphQL */ `
  mutation UpdateProject(
    $input: UpdateProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    updateProject(input: $input, condition: $condition) {
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
export const deleteProject = /* GraphQL */ `
  mutation DeleteProject(
    $input: DeleteProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    deleteProject(input: $input, condition: $condition) {
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
export const createTeam = /* GraphQL */ `
  mutation CreateTeam(
    $input: CreateTeamInput!
    $condition: ModelTeamConditionInput
  ) {
    createTeam(input: $input, condition: $condition) {
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
export const updateTeam = /* GraphQL */ `
  mutation UpdateTeam(
    $input: UpdateTeamInput!
    $condition: ModelTeamConditionInput
  ) {
    updateTeam(input: $input, condition: $condition) {
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
export const deleteTeam = /* GraphQL */ `
  mutation DeleteTeam(
    $input: DeleteTeamInput!
    $condition: ModelTeamConditionInput
  ) {
    deleteTeam(input: $input, condition: $condition) {
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
export const createPerson = /* GraphQL */ `
  mutation CreatePerson(
    $input: CreatePersonInput!
    $condition: ModelPersonConditionInput
  ) {
    createPerson(input: $input, condition: $condition) {
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
export const updatePerson = /* GraphQL */ `
  mutation UpdatePerson(
    $input: UpdatePersonInput!
    $condition: ModelPersonConditionInput
  ) {
    updatePerson(input: $input, condition: $condition) {
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
export const deletePerson = /* GraphQL */ `
  mutation DeletePerson(
    $input: DeletePersonInput!
    $condition: ModelPersonConditionInput
  ) {
    deletePerson(input: $input, condition: $condition) {
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
export const createOrganization = /* GraphQL */ `
  mutation CreateOrganization(
    $input: CreateOrganizationInput!
    $condition: ModelOrganizationConditionInput
  ) {
    createOrganization(input: $input, condition: $condition) {
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
export const updateOrganization = /* GraphQL */ `
  mutation UpdateOrganization(
    $input: UpdateOrganizationInput!
    $condition: ModelOrganizationConditionInput
  ) {
    updateOrganization(input: $input, condition: $condition) {
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
export const deleteOrganization = /* GraphQL */ `
  mutation DeleteOrganization(
    $input: DeleteOrganizationInput!
    $condition: ModelOrganizationConditionInput
  ) {
    deleteOrganization(input: $input, condition: $condition) {
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
export const createInitiative = /* GraphQL */ `
  mutation CreateInitiative(
    $input: CreateInitiativeInput!
    $condition: ModelInitiativeConditionInput
  ) {
    createInitiative(input: $input, condition: $condition) {
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
export const updateInitiative = /* GraphQL */ `
  mutation UpdateInitiative(
    $input: UpdateInitiativeInput!
    $condition: ModelInitiativeConditionInput
  ) {
    updateInitiative(input: $input, condition: $condition) {
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
export const deleteInitiative = /* GraphQL */ `
  mutation DeleteInitiative(
    $input: DeleteInitiativeInput!
    $condition: ModelInitiativeConditionInput
  ) {
    deleteInitiative(input: $input, condition: $condition) {
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
export const createTheme = /* GraphQL */ `
  mutation CreateTheme(
    $input: CreateThemeInput!
    $condition: ModelThemeConditionInput
  ) {
    createTheme(input: $input, condition: $condition) {
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
export const updateTheme = /* GraphQL */ `
  mutation UpdateTheme(
    $input: UpdateThemeInput!
    $condition: ModelThemeConditionInput
  ) {
    updateTheme(input: $input, condition: $condition) {
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
export const deleteTheme = /* GraphQL */ `
  mutation DeleteTheme(
    $input: DeleteThemeInput!
    $condition: ModelThemeConditionInput
  ) {
    deleteTheme(input: $input, condition: $condition) {
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
export const createPlan = /* GraphQL */ `
  mutation CreatePlan(
    $input: CreatePlanInput!
    $condition: ModelPlanConditionInput
  ) {
    createPlan(input: $input, condition: $condition) {
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
export const updatePlan = /* GraphQL */ `
  mutation UpdatePlan(
    $input: UpdatePlanInput!
    $condition: ModelPlanConditionInput
  ) {
    updatePlan(input: $input, condition: $condition) {
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
export const deletePlan = /* GraphQL */ `
  mutation DeletePlan(
    $input: DeletePlanInput!
    $condition: ModelPlanConditionInput
  ) {
    deletePlan(input: $input, condition: $condition) {
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
