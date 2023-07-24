/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateOutputGoal = /* GraphQL */ `
  subscription OnCreateOutputGoal(
    $filter: ModelSubscriptionOutputGoalFilterInput
  ) {
    onCreateOutputGoal(filter: $filter) {
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
export const onUpdateOutputGoal = /* GraphQL */ `
  subscription OnUpdateOutputGoal(
    $filter: ModelSubscriptionOutputGoalFilterInput
  ) {
    onUpdateOutputGoal(filter: $filter) {
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
export const onDeleteOutputGoal = /* GraphQL */ `
  subscription OnDeleteOutputGoal(
    $filter: ModelSubscriptionOutputGoalFilterInput
  ) {
    onDeleteOutputGoal(filter: $filter) {
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
export const onCreateInputGoal = /* GraphQL */ `
  subscription OnCreateInputGoal(
    $filter: ModelSubscriptionInputGoalFilterInput
  ) {
    onCreateInputGoal(filter: $filter) {
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
export const onUpdateInputGoal = /* GraphQL */ `
  subscription OnUpdateInputGoal(
    $filter: ModelSubscriptionInputGoalFilterInput
  ) {
    onUpdateInputGoal(filter: $filter) {
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
export const onDeleteInputGoal = /* GraphQL */ `
  subscription OnDeleteInputGoal(
    $filter: ModelSubscriptionInputGoalFilterInput
  ) {
    onDeleteInputGoal(filter: $filter) {
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
export const onCreateProject = /* GraphQL */ `
  subscription OnCreateProject($filter: ModelSubscriptionProjectFilterInput) {
    onCreateProject(filter: $filter) {
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
export const onUpdateProject = /* GraphQL */ `
  subscription OnUpdateProject($filter: ModelSubscriptionProjectFilterInput) {
    onUpdateProject(filter: $filter) {
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
export const onDeleteProject = /* GraphQL */ `
  subscription OnDeleteProject($filter: ModelSubscriptionProjectFilterInput) {
    onDeleteProject(filter: $filter) {
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
export const onCreateTeam = /* GraphQL */ `
  subscription OnCreateTeam($filter: ModelSubscriptionTeamFilterInput) {
    onCreateTeam(filter: $filter) {
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
export const onUpdateTeam = /* GraphQL */ `
  subscription OnUpdateTeam($filter: ModelSubscriptionTeamFilterInput) {
    onUpdateTeam(filter: $filter) {
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
export const onDeleteTeam = /* GraphQL */ `
  subscription OnDeleteTeam($filter: ModelSubscriptionTeamFilterInput) {
    onDeleteTeam(filter: $filter) {
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
export const onCreatePerson = /* GraphQL */ `
  subscription OnCreatePerson($filter: ModelSubscriptionPersonFilterInput) {
    onCreatePerson(filter: $filter) {
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
export const onUpdatePerson = /* GraphQL */ `
  subscription OnUpdatePerson($filter: ModelSubscriptionPersonFilterInput) {
    onUpdatePerson(filter: $filter) {
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
export const onDeletePerson = /* GraphQL */ `
  subscription OnDeletePerson($filter: ModelSubscriptionPersonFilterInput) {
    onDeletePerson(filter: $filter) {
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
export const onCreateOrganization = /* GraphQL */ `
  subscription OnCreateOrganization(
    $filter: ModelSubscriptionOrganizationFilterInput
  ) {
    onCreateOrganization(filter: $filter) {
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
export const onUpdateOrganization = /* GraphQL */ `
  subscription OnUpdateOrganization(
    $filter: ModelSubscriptionOrganizationFilterInput
  ) {
    onUpdateOrganization(filter: $filter) {
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
export const onDeleteOrganization = /* GraphQL */ `
  subscription OnDeleteOrganization(
    $filter: ModelSubscriptionOrganizationFilterInput
  ) {
    onDeleteOrganization(filter: $filter) {
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
export const onCreateInitiative = /* GraphQL */ `
  subscription OnCreateInitiative(
    $filter: ModelSubscriptionInitiativeFilterInput
  ) {
    onCreateInitiative(filter: $filter) {
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
export const onUpdateInitiative = /* GraphQL */ `
  subscription OnUpdateInitiative(
    $filter: ModelSubscriptionInitiativeFilterInput
  ) {
    onUpdateInitiative(filter: $filter) {
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
export const onDeleteInitiative = /* GraphQL */ `
  subscription OnDeleteInitiative(
    $filter: ModelSubscriptionInitiativeFilterInput
  ) {
    onDeleteInitiative(filter: $filter) {
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
export const onCreateTheme = /* GraphQL */ `
  subscription OnCreateTheme($filter: ModelSubscriptionThemeFilterInput) {
    onCreateTheme(filter: $filter) {
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
export const onUpdateTheme = /* GraphQL */ `
  subscription OnUpdateTheme($filter: ModelSubscriptionThemeFilterInput) {
    onUpdateTheme(filter: $filter) {
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
export const onDeleteTheme = /* GraphQL */ `
  subscription OnDeleteTheme($filter: ModelSubscriptionThemeFilterInput) {
    onDeleteTheme(filter: $filter) {
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
export const onCreatePlan = /* GraphQL */ `
  subscription OnCreatePlan($filter: ModelSubscriptionPlanFilterInput) {
    onCreatePlan(filter: $filter) {
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
export const onUpdatePlan = /* GraphQL */ `
  subscription OnUpdatePlan($filter: ModelSubscriptionPlanFilterInput) {
    onUpdatePlan(filter: $filter) {
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
export const onDeletePlan = /* GraphQL */ `
  subscription OnDeletePlan($filter: ModelSubscriptionPlanFilterInput) {
    onDeletePlan(filter: $filter) {
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
