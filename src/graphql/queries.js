/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSnapshot = /* GraphQL */ `
  query GetSnapshot($id: ID!) {
    getSnapshot(id: $id) {
      id
      timestamp
      planYear
      planTitle
      projectTitle
      projectDescription
      projectRank
      projectFunding
      projectHeadcount
      initiativeTitle
      initiativeDescription
      organizationName
      organizationManagerAlias
      ownerAlias
      goalTitle
      goalDescription
      snapshotPlanId
      snapshotProjectId
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listSnapshots = /* GraphQL */ `
  query ListSnapshots(
    $filter: ModelSnapshotFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSnapshots(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        timestamp
        planYear
        planTitle
        projectTitle
        projectDescription
        projectRank
        projectFunding
        projectHeadcount
        initiativeTitle
        initiativeDescription
        organizationName
        organizationManagerAlias
        ownerAlias
        goalTitle
        goalDescription
        snapshotPlanId
        snapshotProjectId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const SnapshotByDate = /* GraphQL */ `
  query SnapshotByDate(
    $timestamp: AWSDateTime!
    $planTitle: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelSnapshotFilterInput
    $limit: Int
    $nextToken: String
  ) {
    SnapshotByDate(
      timestamp: $timestamp
      planTitle: $planTitle
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        timestamp
        planYear
        planTitle
        projectTitle
        projectDescription
        projectRank
        projectFunding
        projectHeadcount
        initiativeTitle
        initiativeDescription
        organizationName
        organizationManagerAlias
        ownerAlias
        goalTitle
        goalDescription
        snapshotPlanId
        snapshotProjectId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const SnapshotsByPlan = /* GraphQL */ `
  query SnapshotsByPlan(
    $snapshotPlanId: ID!
    $timestamp: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelSnapshotFilterInput
    $limit: Int
    $nextToken: String
  ) {
    SnapshotsByPlan(
      snapshotPlanId: $snapshotPlanId
      timestamp: $timestamp
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        timestamp
        planYear
        planTitle
        projectTitle
        projectDescription
        projectRank
        projectFunding
        projectHeadcount
        initiativeTitle
        initiativeDescription
        organizationName
        organizationManagerAlias
        ownerAlias
        goalTitle
        goalDescription
        snapshotPlanId
        snapshotProjectId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const SnapshotsByProject = /* GraphQL */ `
  query SnapshotsByProject(
    $snapshotProjectId: ID!
    $timestamp: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelSnapshotFilterInput
    $limit: Int
    $nextToken: String
  ) {
    SnapshotsByProject(
      snapshotProjectId: $snapshotProjectId
      timestamp: $timestamp
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        timestamp
        planYear
        planTitle
        projectTitle
        projectDescription
        projectRank
        projectFunding
        projectHeadcount
        initiativeTitle
        initiativeDescription
        organizationName
        organizationManagerAlias
        ownerAlias
        goalTitle
        goalDescription
        snapshotPlanId
        snapshotProjectId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getGoal = /* GraphQL */ `
  query GetGoal($id: ID!) {
    getGoal(id: $id) {
      id
      title
      description
      status
      type
      class
      start
      end
      Plan {
        id
        title
        description
        year
        ktloTarget
        status
        createdAt
        updatedAt
        __typename
      }
      Organization {
        id
        name
        description
        headcount
        incTarget
        mgrTarget
        icTarget
        peTarget
        pmTarget
        tpmTarget
        argTarget
        Plan {
          id
          title
          description
          year
          ktloTarget
          status
          createdAt
          updatedAt
          __typename
        }
        Manager {
          id
          alias
          name
          email
          status
          sixManagerAlias
          isManager
          isBizOps
          personPlanId
          personManagerId
          personOrganizationId
          createdAt
          updatedAt
          __typename
        }
        Parent {
          id
          name
          description
          headcount
          incTarget
          mgrTarget
          icTarget
          peTarget
          pmTarget
          tpmTarget
          argTarget
          organizationPlanId
          organizationManagerId
          organizationParentId
          createdAt
          updatedAt
          __typename
        }
        organizationPlanId
        organizationManagerId
        organizationParentId
        createdAt
        updatedAt
        __typename
      }
      Owner {
        id
        alias
        name
        email
        status
        sixManagerAlias
        isManager
        isBizOps
        Plan {
          id
          title
          description
          year
          ktloTarget
          status
          createdAt
          updatedAt
          __typename
        }
        Manager {
          id
          alias
          name
          email
          status
          sixManagerAlias
          isManager
          isBizOps
          personPlanId
          personManagerId
          personOrganizationId
          createdAt
          updatedAt
          __typename
        }
        Organization {
          id
          name
          description
          headcount
          incTarget
          mgrTarget
          icTarget
          peTarget
          pmTarget
          tpmTarget
          argTarget
          organizationPlanId
          organizationManagerId
          organizationParentId
          createdAt
          updatedAt
          __typename
        }
        personPlanId
        personManagerId
        personOrganizationId
        createdAt
        updatedAt
        __typename
      }
      Parent {
        id
        title
        description
        status
        type
        class
        start
        end
        Plan {
          id
          title
          description
          year
          ktloTarget
          status
          createdAt
          updatedAt
          __typename
        }
        Organization {
          id
          name
          description
          headcount
          incTarget
          mgrTarget
          icTarget
          peTarget
          pmTarget
          tpmTarget
          argTarget
          organizationPlanId
          organizationManagerId
          organizationParentId
          createdAt
          updatedAt
          __typename
        }
        Owner {
          id
          alias
          name
          email
          status
          sixManagerAlias
          isManager
          isBizOps
          personPlanId
          personManagerId
          personOrganizationId
          createdAt
          updatedAt
          __typename
        }
        Parent {
          id
          title
          description
          status
          type
          class
          start
          end
          goalPlanId
          goalOrganizationId
          goalOwnerId
          goalParentId
          createdAt
          updatedAt
          __typename
        }
        goalPlanId
        goalOrganizationId
        goalOwnerId
        goalParentId
        createdAt
        updatedAt
        __typename
      }
      goalPlanId
      goalOrganizationId
      goalOwnerId
      goalParentId
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listGoals = /* GraphQL */ `
  query ListGoals(
    $filter: ModelGoalFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGoals(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        description
        status
        type
        class
        start
        end
        Plan {
          id
          title
          description
          year
          ktloTarget
          status
          createdAt
          updatedAt
          __typename
        }
        Organization {
          id
          name
          description
          headcount
          incTarget
          mgrTarget
          icTarget
          peTarget
          pmTarget
          tpmTarget
          argTarget
          organizationPlanId
          organizationManagerId
          organizationParentId
          createdAt
          updatedAt
          __typename
        }
        Owner {
          id
          alias
          name
          email
          status
          sixManagerAlias
          isManager
          isBizOps
          personPlanId
          personManagerId
          personOrganizationId
          createdAt
          updatedAt
          __typename
        }
        Parent {
          id
          title
          description
          status
          type
          class
          start
          end
          goalPlanId
          goalOrganizationId
          goalOwnerId
          goalParentId
          createdAt
          updatedAt
          __typename
        }
        goalPlanId
        goalOrganizationId
        goalOwnerId
        goalParentId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const GoalsByPlan = /* GraphQL */ `
  query GoalsByPlan(
    $goalPlanId: ID!
    $type: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelGoalFilterInput
    $limit: Int
    $nextToken: String
  ) {
    GoalsByPlan(
      goalPlanId: $goalPlanId
      type: $type
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
        type
        class
        start
        end
        Plan {
          id
          title
          description
          year
          ktloTarget
          status
          createdAt
          updatedAt
          __typename
        }
        Organization {
          id
          name
          description
          headcount
          incTarget
          mgrTarget
          icTarget
          peTarget
          pmTarget
          tpmTarget
          argTarget
          organizationPlanId
          organizationManagerId
          organizationParentId
          createdAt
          updatedAt
          __typename
        }
        Owner {
          id
          alias
          name
          email
          status
          sixManagerAlias
          isManager
          isBizOps
          personPlanId
          personManagerId
          personOrganizationId
          createdAt
          updatedAt
          __typename
        }
        Parent {
          id
          title
          description
          status
          type
          class
          start
          end
          goalPlanId
          goalOrganizationId
          goalOwnerId
          goalParentId
          createdAt
          updatedAt
          __typename
        }
        goalPlanId
        goalOrganizationId
        goalOwnerId
        goalParentId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const GoalsByOrganization = /* GraphQL */ `
  query GoalsByOrganization(
    $goalOrganizationId: ID!
    $type: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelGoalFilterInput
    $limit: Int
    $nextToken: String
  ) {
    GoalsByOrganization(
      goalOrganizationId: $goalOrganizationId
      type: $type
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
        type
        class
        start
        end
        Plan {
          id
          title
          description
          year
          ktloTarget
          status
          createdAt
          updatedAt
          __typename
        }
        Organization {
          id
          name
          description
          headcount
          incTarget
          mgrTarget
          icTarget
          peTarget
          pmTarget
          tpmTarget
          argTarget
          organizationPlanId
          organizationManagerId
          organizationParentId
          createdAt
          updatedAt
          __typename
        }
        Owner {
          id
          alias
          name
          email
          status
          sixManagerAlias
          isManager
          isBizOps
          personPlanId
          personManagerId
          personOrganizationId
          createdAt
          updatedAt
          __typename
        }
        Parent {
          id
          title
          description
          status
          type
          class
          start
          end
          goalPlanId
          goalOrganizationId
          goalOwnerId
          goalParentId
          createdAt
          updatedAt
          __typename
        }
        goalPlanId
        goalOrganizationId
        goalOwnerId
        goalParentId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const GoalsByOwner = /* GraphQL */ `
  query GoalsByOwner(
    $goalOwnerId: ID!
    $type: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelGoalFilterInput
    $limit: Int
    $nextToken: String
  ) {
    GoalsByOwner(
      goalOwnerId: $goalOwnerId
      type: $type
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
        type
        class
        start
        end
        Plan {
          id
          title
          description
          year
          ktloTarget
          status
          createdAt
          updatedAt
          __typename
        }
        Organization {
          id
          name
          description
          headcount
          incTarget
          mgrTarget
          icTarget
          peTarget
          pmTarget
          tpmTarget
          argTarget
          organizationPlanId
          organizationManagerId
          organizationParentId
          createdAt
          updatedAt
          __typename
        }
        Owner {
          id
          alias
          name
          email
          status
          sixManagerAlias
          isManager
          isBizOps
          personPlanId
          personManagerId
          personOrganizationId
          createdAt
          updatedAt
          __typename
        }
        Parent {
          id
          title
          description
          status
          type
          class
          start
          end
          goalPlanId
          goalOrganizationId
          goalOwnerId
          goalParentId
          createdAt
          updatedAt
          __typename
        }
        goalPlanId
        goalOrganizationId
        goalOwnerId
        goalParentId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const GoalsByParent = /* GraphQL */ `
  query GoalsByParent(
    $goalParentId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelGoalFilterInput
    $limit: Int
    $nextToken: String
  ) {
    GoalsByParent(
      goalParentId: $goalParentId
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
        type
        class
        start
        end
        Plan {
          id
          title
          description
          year
          ktloTarget
          status
          createdAt
          updatedAt
          __typename
        }
        Organization {
          id
          name
          description
          headcount
          incTarget
          mgrTarget
          icTarget
          peTarget
          pmTarget
          tpmTarget
          argTarget
          organizationPlanId
          organizationManagerId
          organizationParentId
          createdAt
          updatedAt
          __typename
        }
        Owner {
          id
          alias
          name
          email
          status
          sixManagerAlias
          isManager
          isBizOps
          personPlanId
          personManagerId
          personOrganizationId
          createdAt
          updatedAt
          __typename
        }
        Parent {
          id
          title
          description
          status
          type
          class
          start
          end
          goalPlanId
          goalOrganizationId
          goalOwnerId
          goalParentId
          createdAt
          updatedAt
          __typename
        }
        goalPlanId
        goalOrganizationId
        goalOwnerId
        goalParentId
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
      funding
      headcount
      Plan {
        id
        title
        description
        year
        ktloTarget
        status
        createdAt
        updatedAt
        __typename
      }
      Initiative {
        id
        title
        description
        rank
        bucket
        status
        Plan {
          id
          title
          description
          year
          ktloTarget
          status
          createdAt
          updatedAt
          __typename
        }
        Theme {
          id
          title
          description
          themePlanId
          createdAt
          updatedAt
          __typename
        }
        Sponsor {
          id
          alias
          name
          email
          status
          sixManagerAlias
          isManager
          isBizOps
          personPlanId
          personManagerId
          personOrganizationId
          createdAt
          updatedAt
          __typename
        }
        initiativePlanId
        initiativeThemeId
        initiativeSponsorId
        createdAt
        updatedAt
        __typename
      }
      Organization {
        id
        name
        description
        headcount
        incTarget
        mgrTarget
        icTarget
        peTarget
        pmTarget
        tpmTarget
        argTarget
        Plan {
          id
          title
          description
          year
          ktloTarget
          status
          createdAt
          updatedAt
          __typename
        }
        Manager {
          id
          alias
          name
          email
          status
          sixManagerAlias
          isManager
          isBizOps
          personPlanId
          personManagerId
          personOrganizationId
          createdAt
          updatedAt
          __typename
        }
        Parent {
          id
          name
          description
          headcount
          incTarget
          mgrTarget
          icTarget
          peTarget
          pmTarget
          tpmTarget
          argTarget
          organizationPlanId
          organizationManagerId
          organizationParentId
          createdAt
          updatedAt
          __typename
        }
        organizationPlanId
        organizationManagerId
        organizationParentId
        createdAt
        updatedAt
        __typename
      }
      Owner {
        id
        alias
        name
        email
        status
        sixManagerAlias
        isManager
        isBizOps
        Plan {
          id
          title
          description
          year
          ktloTarget
          status
          createdAt
          updatedAt
          __typename
        }
        Manager {
          id
          alias
          name
          email
          status
          sixManagerAlias
          isManager
          isBizOps
          personPlanId
          personManagerId
          personOrganizationId
          createdAt
          updatedAt
          __typename
        }
        Organization {
          id
          name
          description
          headcount
          incTarget
          mgrTarget
          icTarget
          peTarget
          pmTarget
          tpmTarget
          argTarget
          organizationPlanId
          organizationManagerId
          organizationParentId
          createdAt
          updatedAt
          __typename
        }
        personPlanId
        personManagerId
        personOrganizationId
        createdAt
        updatedAt
        __typename
      }
      Goal {
        id
        title
        description
        status
        type
        class
        start
        end
        Plan {
          id
          title
          description
          year
          ktloTarget
          status
          createdAt
          updatedAt
          __typename
        }
        Organization {
          id
          name
          description
          headcount
          incTarget
          mgrTarget
          icTarget
          peTarget
          pmTarget
          tpmTarget
          argTarget
          organizationPlanId
          organizationManagerId
          organizationParentId
          createdAt
          updatedAt
          __typename
        }
        Owner {
          id
          alias
          name
          email
          status
          sixManagerAlias
          isManager
          isBizOps
          personPlanId
          personManagerId
          personOrganizationId
          createdAt
          updatedAt
          __typename
        }
        Parent {
          id
          title
          description
          status
          type
          class
          start
          end
          goalPlanId
          goalOrganizationId
          goalOwnerId
          goalParentId
          createdAt
          updatedAt
          __typename
        }
        goalPlanId
        goalOrganizationId
        goalOwnerId
        goalParentId
        createdAt
        updatedAt
        __typename
      }
      projectPlanId
      projectInitiativeId
      projectOrganizationId
      projectOwnerId
      projectGoalId
      createdAt
      updatedAt
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
        funding
        headcount
        Plan {
          id
          title
          description
          year
          ktloTarget
          status
          createdAt
          updatedAt
          __typename
        }
        Initiative {
          id
          title
          description
          rank
          bucket
          status
          initiativePlanId
          initiativeThemeId
          initiativeSponsorId
          createdAt
          updatedAt
          __typename
        }
        Organization {
          id
          name
          description
          headcount
          incTarget
          mgrTarget
          icTarget
          peTarget
          pmTarget
          tpmTarget
          argTarget
          organizationPlanId
          organizationManagerId
          organizationParentId
          createdAt
          updatedAt
          __typename
        }
        Owner {
          id
          alias
          name
          email
          status
          sixManagerAlias
          isManager
          isBizOps
          personPlanId
          personManagerId
          personOrganizationId
          createdAt
          updatedAt
          __typename
        }
        Goal {
          id
          title
          description
          status
          type
          class
          start
          end
          goalPlanId
          goalOrganizationId
          goalOwnerId
          goalParentId
          createdAt
          updatedAt
          __typename
        }
        projectPlanId
        projectInitiativeId
        projectOrganizationId
        projectOwnerId
        projectGoalId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const ProjectsByPlan = /* GraphQL */ `
  query ProjectsByPlan(
    $projectPlanId: ID!
    $projectOrganizationId: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelProjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    ProjectsByPlan(
      projectPlanId: $projectPlanId
      projectOrganizationId: $projectOrganizationId
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
        funding
        headcount
        Plan {
          id
          title
          description
          year
          ktloTarget
          status
          createdAt
          updatedAt
          __typename
        }
        Initiative {
          id
          title
          description
          rank
          bucket
          status
          initiativePlanId
          initiativeThemeId
          initiativeSponsorId
          createdAt
          updatedAt
          __typename
        }
        Organization {
          id
          name
          description
          headcount
          incTarget
          mgrTarget
          icTarget
          peTarget
          pmTarget
          tpmTarget
          argTarget
          organizationPlanId
          organizationManagerId
          organizationParentId
          createdAt
          updatedAt
          __typename
        }
        Owner {
          id
          alias
          name
          email
          status
          sixManagerAlias
          isManager
          isBizOps
          personPlanId
          personManagerId
          personOrganizationId
          createdAt
          updatedAt
          __typename
        }
        Goal {
          id
          title
          description
          status
          type
          class
          start
          end
          goalPlanId
          goalOrganizationId
          goalOwnerId
          goalParentId
          createdAt
          updatedAt
          __typename
        }
        projectPlanId
        projectInitiativeId
        projectOrganizationId
        projectOwnerId
        projectGoalId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const ProjectsByInitiative = /* GraphQL */ `
  query ProjectsByInitiative(
    $projectInitiativeId: ID!
    $funding: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelProjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    ProjectsByInitiative(
      projectInitiativeId: $projectInitiativeId
      funding: $funding
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
        funding
        headcount
        Plan {
          id
          title
          description
          year
          ktloTarget
          status
          createdAt
          updatedAt
          __typename
        }
        Initiative {
          id
          title
          description
          rank
          bucket
          status
          initiativePlanId
          initiativeThemeId
          initiativeSponsorId
          createdAt
          updatedAt
          __typename
        }
        Organization {
          id
          name
          description
          headcount
          incTarget
          mgrTarget
          icTarget
          peTarget
          pmTarget
          tpmTarget
          argTarget
          organizationPlanId
          organizationManagerId
          organizationParentId
          createdAt
          updatedAt
          __typename
        }
        Owner {
          id
          alias
          name
          email
          status
          sixManagerAlias
          isManager
          isBizOps
          personPlanId
          personManagerId
          personOrganizationId
          createdAt
          updatedAt
          __typename
        }
        Goal {
          id
          title
          description
          status
          type
          class
          start
          end
          goalPlanId
          goalOrganizationId
          goalOwnerId
          goalParentId
          createdAt
          updatedAt
          __typename
        }
        projectPlanId
        projectInitiativeId
        projectOrganizationId
        projectOwnerId
        projectGoalId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const ProjectsByOrganization = /* GraphQL */ `
  query ProjectsByOrganization(
    $projectOrganizationId: ID!
    $funding: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelProjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    ProjectsByOrganization(
      projectOrganizationId: $projectOrganizationId
      funding: $funding
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
        funding
        headcount
        Plan {
          id
          title
          description
          year
          ktloTarget
          status
          createdAt
          updatedAt
          __typename
        }
        Initiative {
          id
          title
          description
          rank
          bucket
          status
          initiativePlanId
          initiativeThemeId
          initiativeSponsorId
          createdAt
          updatedAt
          __typename
        }
        Organization {
          id
          name
          description
          headcount
          incTarget
          mgrTarget
          icTarget
          peTarget
          pmTarget
          tpmTarget
          argTarget
          organizationPlanId
          organizationManagerId
          organizationParentId
          createdAt
          updatedAt
          __typename
        }
        Owner {
          id
          alias
          name
          email
          status
          sixManagerAlias
          isManager
          isBizOps
          personPlanId
          personManagerId
          personOrganizationId
          createdAt
          updatedAt
          __typename
        }
        Goal {
          id
          title
          description
          status
          type
          class
          start
          end
          goalPlanId
          goalOrganizationId
          goalOwnerId
          goalParentId
          createdAt
          updatedAt
          __typename
        }
        projectPlanId
        projectInitiativeId
        projectOrganizationId
        projectOwnerId
        projectGoalId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const ProjectsByOwner = /* GraphQL */ `
  query ProjectsByOwner(
    $projectOwnerId: ID!
    $projectPlanId: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelProjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    ProjectsByOwner(
      projectOwnerId: $projectOwnerId
      projectPlanId: $projectPlanId
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
        funding
        headcount
        Plan {
          id
          title
          description
          year
          ktloTarget
          status
          createdAt
          updatedAt
          __typename
        }
        Initiative {
          id
          title
          description
          rank
          bucket
          status
          initiativePlanId
          initiativeThemeId
          initiativeSponsorId
          createdAt
          updatedAt
          __typename
        }
        Organization {
          id
          name
          description
          headcount
          incTarget
          mgrTarget
          icTarget
          peTarget
          pmTarget
          tpmTarget
          argTarget
          organizationPlanId
          organizationManagerId
          organizationParentId
          createdAt
          updatedAt
          __typename
        }
        Owner {
          id
          alias
          name
          email
          status
          sixManagerAlias
          isManager
          isBizOps
          personPlanId
          personManagerId
          personOrganizationId
          createdAt
          updatedAt
          __typename
        }
        Goal {
          id
          title
          description
          status
          type
          class
          start
          end
          goalPlanId
          goalOrganizationId
          goalOwnerId
          goalParentId
          createdAt
          updatedAt
          __typename
        }
        projectPlanId
        projectInitiativeId
        projectOrganizationId
        projectOwnerId
        projectGoalId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const ProjectsByParent = /* GraphQL */ `
  query ProjectsByParent(
    $projectGoalId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelProjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    ProjectsByParent(
      projectGoalId: $projectGoalId
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
        funding
        headcount
        Plan {
          id
          title
          description
          year
          ktloTarget
          status
          createdAt
          updatedAt
          __typename
        }
        Initiative {
          id
          title
          description
          rank
          bucket
          status
          initiativePlanId
          initiativeThemeId
          initiativeSponsorId
          createdAt
          updatedAt
          __typename
        }
        Organization {
          id
          name
          description
          headcount
          incTarget
          mgrTarget
          icTarget
          peTarget
          pmTarget
          tpmTarget
          argTarget
          organizationPlanId
          organizationManagerId
          organizationParentId
          createdAt
          updatedAt
          __typename
        }
        Owner {
          id
          alias
          name
          email
          status
          sixManagerAlias
          isManager
          isBizOps
          personPlanId
          personManagerId
          personOrganizationId
          createdAt
          updatedAt
          __typename
        }
        Goal {
          id
          title
          description
          status
          type
          class
          start
          end
          goalPlanId
          goalOrganizationId
          goalOwnerId
          goalParentId
          createdAt
          updatedAt
          __typename
        }
        projectPlanId
        projectInitiativeId
        projectOrganizationId
        projectOwnerId
        projectGoalId
        createdAt
        updatedAt
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
      status
      sixManagerAlias
      isManager
      isBizOps
      Plan {
        id
        title
        description
        year
        ktloTarget
        status
        createdAt
        updatedAt
        __typename
      }
      Manager {
        id
        alias
        name
        email
        status
        sixManagerAlias
        isManager
        isBizOps
        Plan {
          id
          title
          description
          year
          ktloTarget
          status
          createdAt
          updatedAt
          __typename
        }
        Manager {
          id
          alias
          name
          email
          status
          sixManagerAlias
          isManager
          isBizOps
          personPlanId
          personManagerId
          personOrganizationId
          createdAt
          updatedAt
          __typename
        }
        Organization {
          id
          name
          description
          headcount
          incTarget
          mgrTarget
          icTarget
          peTarget
          pmTarget
          tpmTarget
          argTarget
          organizationPlanId
          organizationManagerId
          organizationParentId
          createdAt
          updatedAt
          __typename
        }
        personPlanId
        personManagerId
        personOrganizationId
        createdAt
        updatedAt
        __typename
      }
      Organization {
        id
        name
        description
        headcount
        incTarget
        mgrTarget
        icTarget
        peTarget
        pmTarget
        tpmTarget
        argTarget
        Plan {
          id
          title
          description
          year
          ktloTarget
          status
          createdAt
          updatedAt
          __typename
        }
        Manager {
          id
          alias
          name
          email
          status
          sixManagerAlias
          isManager
          isBizOps
          personPlanId
          personManagerId
          personOrganizationId
          createdAt
          updatedAt
          __typename
        }
        Parent {
          id
          name
          description
          headcount
          incTarget
          mgrTarget
          icTarget
          peTarget
          pmTarget
          tpmTarget
          argTarget
          organizationPlanId
          organizationManagerId
          organizationParentId
          createdAt
          updatedAt
          __typename
        }
        organizationPlanId
        organizationManagerId
        organizationParentId
        createdAt
        updatedAt
        __typename
      }
      personPlanId
      personManagerId
      personOrganizationId
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
        status
        sixManagerAlias
        isManager
        isBizOps
        Plan {
          id
          title
          description
          year
          ktloTarget
          status
          createdAt
          updatedAt
          __typename
        }
        Manager {
          id
          alias
          name
          email
          status
          sixManagerAlias
          isManager
          isBizOps
          personPlanId
          personManagerId
          personOrganizationId
          createdAt
          updatedAt
          __typename
        }
        Organization {
          id
          name
          description
          headcount
          incTarget
          mgrTarget
          icTarget
          peTarget
          pmTarget
          tpmTarget
          argTarget
          organizationPlanId
          organizationManagerId
          organizationParentId
          createdAt
          updatedAt
          __typename
        }
        personPlanId
        personManagerId
        personOrganizationId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const PersonsByAlias = /* GraphQL */ `
  query PersonsByAlias(
    $alias: String!
    $sortDirection: ModelSortDirection
    $filter: ModelPersonFilterInput
    $limit: Int
    $nextToken: String
  ) {
    PersonsByAlias(
      alias: $alias
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        alias
        name
        email
        status
        sixManagerAlias
        isManager
        isBizOps
        Plan {
          id
          title
          description
          year
          ktloTarget
          status
          createdAt
          updatedAt
          __typename
        }
        Manager {
          id
          alias
          name
          email
          status
          sixManagerAlias
          isManager
          isBizOps
          personPlanId
          personManagerId
          personOrganizationId
          createdAt
          updatedAt
          __typename
        }
        Organization {
          id
          name
          description
          headcount
          incTarget
          mgrTarget
          icTarget
          peTarget
          pmTarget
          tpmTarget
          argTarget
          organizationPlanId
          organizationManagerId
          organizationParentId
          createdAt
          updatedAt
          __typename
        }
        personPlanId
        personManagerId
        personOrganizationId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const PersonsByPlan = /* GraphQL */ `
  query PersonsByPlan(
    $personPlanId: ID!
    $personOrganizationId: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelPersonFilterInput
    $limit: Int
    $nextToken: String
  ) {
    PersonsByPlan(
      personPlanId: $personPlanId
      personOrganizationId: $personOrganizationId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        alias
        name
        email
        status
        sixManagerAlias
        isManager
        isBizOps
        Plan {
          id
          title
          description
          year
          ktloTarget
          status
          createdAt
          updatedAt
          __typename
        }
        Manager {
          id
          alias
          name
          email
          status
          sixManagerAlias
          isManager
          isBizOps
          personPlanId
          personManagerId
          personOrganizationId
          createdAt
          updatedAt
          __typename
        }
        Organization {
          id
          name
          description
          headcount
          incTarget
          mgrTarget
          icTarget
          peTarget
          pmTarget
          tpmTarget
          argTarget
          organizationPlanId
          organizationManagerId
          organizationParentId
          createdAt
          updatedAt
          __typename
        }
        personPlanId
        personManagerId
        personOrganizationId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const PersonsByManager = /* GraphQL */ `
  query PersonsByManager(
    $personManagerId: ID!
    $personPlanId: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelPersonFilterInput
    $limit: Int
    $nextToken: String
  ) {
    PersonsByManager(
      personManagerId: $personManagerId
      personPlanId: $personPlanId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        alias
        name
        email
        status
        sixManagerAlias
        isManager
        isBizOps
        Plan {
          id
          title
          description
          year
          ktloTarget
          status
          createdAt
          updatedAt
          __typename
        }
        Manager {
          id
          alias
          name
          email
          status
          sixManagerAlias
          isManager
          isBizOps
          personPlanId
          personManagerId
          personOrganizationId
          createdAt
          updatedAt
          __typename
        }
        Organization {
          id
          name
          description
          headcount
          incTarget
          mgrTarget
          icTarget
          peTarget
          pmTarget
          tpmTarget
          argTarget
          organizationPlanId
          organizationManagerId
          organizationParentId
          createdAt
          updatedAt
          __typename
        }
        personPlanId
        personManagerId
        personOrganizationId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const PersonsByOrganization = /* GraphQL */ `
  query PersonsByOrganization(
    $personOrganizationId: ID!
    $personManagerId: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelPersonFilterInput
    $limit: Int
    $nextToken: String
  ) {
    PersonsByOrganization(
      personOrganizationId: $personOrganizationId
      personManagerId: $personManagerId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        alias
        name
        email
        status
        sixManagerAlias
        isManager
        isBizOps
        Plan {
          id
          title
          description
          year
          ktloTarget
          status
          createdAt
          updatedAt
          __typename
        }
        Manager {
          id
          alias
          name
          email
          status
          sixManagerAlias
          isManager
          isBizOps
          personPlanId
          personManagerId
          personOrganizationId
          createdAt
          updatedAt
          __typename
        }
        Organization {
          id
          name
          description
          headcount
          incTarget
          mgrTarget
          icTarget
          peTarget
          pmTarget
          tpmTarget
          argTarget
          organizationPlanId
          organizationManagerId
          organizationParentId
          createdAt
          updatedAt
          __typename
        }
        personPlanId
        personManagerId
        personOrganizationId
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
      incTarget
      mgrTarget
      icTarget
      peTarget
      pmTarget
      tpmTarget
      argTarget
      Plan {
        id
        title
        description
        year
        ktloTarget
        status
        createdAt
        updatedAt
        __typename
      }
      Manager {
        id
        alias
        name
        email
        status
        sixManagerAlias
        isManager
        isBizOps
        Plan {
          id
          title
          description
          year
          ktloTarget
          status
          createdAt
          updatedAt
          __typename
        }
        Manager {
          id
          alias
          name
          email
          status
          sixManagerAlias
          isManager
          isBizOps
          personPlanId
          personManagerId
          personOrganizationId
          createdAt
          updatedAt
          __typename
        }
        Organization {
          id
          name
          description
          headcount
          incTarget
          mgrTarget
          icTarget
          peTarget
          pmTarget
          tpmTarget
          argTarget
          organizationPlanId
          organizationManagerId
          organizationParentId
          createdAt
          updatedAt
          __typename
        }
        personPlanId
        personManagerId
        personOrganizationId
        createdAt
        updatedAt
        __typename
      }
      Parent {
        id
        name
        description
        headcount
        incTarget
        mgrTarget
        icTarget
        peTarget
        pmTarget
        tpmTarget
        argTarget
        Plan {
          id
          title
          description
          year
          ktloTarget
          status
          createdAt
          updatedAt
          __typename
        }
        Manager {
          id
          alias
          name
          email
          status
          sixManagerAlias
          isManager
          isBizOps
          personPlanId
          personManagerId
          personOrganizationId
          createdAt
          updatedAt
          __typename
        }
        Parent {
          id
          name
          description
          headcount
          incTarget
          mgrTarget
          icTarget
          peTarget
          pmTarget
          tpmTarget
          argTarget
          organizationPlanId
          organizationManagerId
          organizationParentId
          createdAt
          updatedAt
          __typename
        }
        organizationPlanId
        organizationManagerId
        organizationParentId
        createdAt
        updatedAt
        __typename
      }
      organizationPlanId
      organizationManagerId
      organizationParentId
      createdAt
      updatedAt
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
        incTarget
        mgrTarget
        icTarget
        peTarget
        pmTarget
        tpmTarget
        argTarget
        Plan {
          id
          title
          description
          year
          ktloTarget
          status
          createdAt
          updatedAt
          __typename
        }
        Manager {
          id
          alias
          name
          email
          status
          sixManagerAlias
          isManager
          isBizOps
          personPlanId
          personManagerId
          personOrganizationId
          createdAt
          updatedAt
          __typename
        }
        Parent {
          id
          name
          description
          headcount
          incTarget
          mgrTarget
          icTarget
          peTarget
          pmTarget
          tpmTarget
          argTarget
          organizationPlanId
          organizationManagerId
          organizationParentId
          createdAt
          updatedAt
          __typename
        }
        organizationPlanId
        organizationManagerId
        organizationParentId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const OrganizationsByPlan = /* GraphQL */ `
  query OrganizationsByPlan(
    $organizationPlanId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelOrganizationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    OrganizationsByPlan(
      organizationPlanId: $organizationPlanId
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
        incTarget
        mgrTarget
        icTarget
        peTarget
        pmTarget
        tpmTarget
        argTarget
        Plan {
          id
          title
          description
          year
          ktloTarget
          status
          createdAt
          updatedAt
          __typename
        }
        Manager {
          id
          alias
          name
          email
          status
          sixManagerAlias
          isManager
          isBizOps
          personPlanId
          personManagerId
          personOrganizationId
          createdAt
          updatedAt
          __typename
        }
        Parent {
          id
          name
          description
          headcount
          incTarget
          mgrTarget
          icTarget
          peTarget
          pmTarget
          tpmTarget
          argTarget
          organizationPlanId
          organizationManagerId
          organizationParentId
          createdAt
          updatedAt
          __typename
        }
        organizationPlanId
        organizationManagerId
        organizationParentId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const OrganizationsByManager = /* GraphQL */ `
  query OrganizationsByManager(
    $organizationManagerId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelOrganizationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    OrganizationsByManager(
      organizationManagerId: $organizationManagerId
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
        incTarget
        mgrTarget
        icTarget
        peTarget
        pmTarget
        tpmTarget
        argTarget
        Plan {
          id
          title
          description
          year
          ktloTarget
          status
          createdAt
          updatedAt
          __typename
        }
        Manager {
          id
          alias
          name
          email
          status
          sixManagerAlias
          isManager
          isBizOps
          personPlanId
          personManagerId
          personOrganizationId
          createdAt
          updatedAt
          __typename
        }
        Parent {
          id
          name
          description
          headcount
          incTarget
          mgrTarget
          icTarget
          peTarget
          pmTarget
          tpmTarget
          argTarget
          organizationPlanId
          organizationManagerId
          organizationParentId
          createdAt
          updatedAt
          __typename
        }
        organizationPlanId
        organizationManagerId
        organizationParentId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const OrganizationsByParent = /* GraphQL */ `
  query OrganizationsByParent(
    $organizationParentId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelOrganizationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    OrganizationsByParent(
      organizationParentId: $organizationParentId
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
        incTarget
        mgrTarget
        icTarget
        peTarget
        pmTarget
        tpmTarget
        argTarget
        Plan {
          id
          title
          description
          year
          ktloTarget
          status
          createdAt
          updatedAt
          __typename
        }
        Manager {
          id
          alias
          name
          email
          status
          sixManagerAlias
          isManager
          isBizOps
          personPlanId
          personManagerId
          personOrganizationId
          createdAt
          updatedAt
          __typename
        }
        Parent {
          id
          name
          description
          headcount
          incTarget
          mgrTarget
          icTarget
          peTarget
          pmTarget
          tpmTarget
          argTarget
          organizationPlanId
          organizationManagerId
          organizationParentId
          createdAt
          updatedAt
          __typename
        }
        organizationPlanId
        organizationManagerId
        organizationParentId
        createdAt
        updatedAt
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
      bucket
      status
      Plan {
        id
        title
        description
        year
        ktloTarget
        status
        createdAt
        updatedAt
        __typename
      }
      Theme {
        id
        title
        description
        Plan {
          id
          title
          description
          year
          ktloTarget
          status
          createdAt
          updatedAt
          __typename
        }
        themePlanId
        createdAt
        updatedAt
        __typename
      }
      Sponsor {
        id
        alias
        name
        email
        status
        sixManagerAlias
        isManager
        isBizOps
        Plan {
          id
          title
          description
          year
          ktloTarget
          status
          createdAt
          updatedAt
          __typename
        }
        Manager {
          id
          alias
          name
          email
          status
          sixManagerAlias
          isManager
          isBizOps
          personPlanId
          personManagerId
          personOrganizationId
          createdAt
          updatedAt
          __typename
        }
        Organization {
          id
          name
          description
          headcount
          incTarget
          mgrTarget
          icTarget
          peTarget
          pmTarget
          tpmTarget
          argTarget
          organizationPlanId
          organizationManagerId
          organizationParentId
          createdAt
          updatedAt
          __typename
        }
        personPlanId
        personManagerId
        personOrganizationId
        createdAt
        updatedAt
        __typename
      }
      initiativePlanId
      initiativeThemeId
      initiativeSponsorId
      createdAt
      updatedAt
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
        bucket
        status
        Plan {
          id
          title
          description
          year
          ktloTarget
          status
          createdAt
          updatedAt
          __typename
        }
        Theme {
          id
          title
          description
          themePlanId
          createdAt
          updatedAt
          __typename
        }
        Sponsor {
          id
          alias
          name
          email
          status
          sixManagerAlias
          isManager
          isBizOps
          personPlanId
          personManagerId
          personOrganizationId
          createdAt
          updatedAt
          __typename
        }
        initiativePlanId
        initiativeThemeId
        initiativeSponsorId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const InitiativesByPlan = /* GraphQL */ `
  query InitiativesByPlan(
    $initiativePlanId: ID!
    $bucket: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelInitiativeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    InitiativesByPlan(
      initiativePlanId: $initiativePlanId
      bucket: $bucket
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
        bucket
        status
        Plan {
          id
          title
          description
          year
          ktloTarget
          status
          createdAt
          updatedAt
          __typename
        }
        Theme {
          id
          title
          description
          themePlanId
          createdAt
          updatedAt
          __typename
        }
        Sponsor {
          id
          alias
          name
          email
          status
          sixManagerAlias
          isManager
          isBizOps
          personPlanId
          personManagerId
          personOrganizationId
          createdAt
          updatedAt
          __typename
        }
        initiativePlanId
        initiativeThemeId
        initiativeSponsorId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const InitiativesByTheme = /* GraphQL */ `
  query InitiativesByTheme(
    $initiativeThemeId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelInitiativeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    InitiativesByTheme(
      initiativeThemeId: $initiativeThemeId
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
        bucket
        status
        Plan {
          id
          title
          description
          year
          ktloTarget
          status
          createdAt
          updatedAt
          __typename
        }
        Theme {
          id
          title
          description
          themePlanId
          createdAt
          updatedAt
          __typename
        }
        Sponsor {
          id
          alias
          name
          email
          status
          sixManagerAlias
          isManager
          isBizOps
          personPlanId
          personManagerId
          personOrganizationId
          createdAt
          updatedAt
          __typename
        }
        initiativePlanId
        initiativeThemeId
        initiativeSponsorId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const InitiativesBySponsor = /* GraphQL */ `
  query InitiativesBySponsor(
    $initiativeSponsorId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelInitiativeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    InitiativesBySponsor(
      initiativeSponsorId: $initiativeSponsorId
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
        bucket
        status
        Plan {
          id
          title
          description
          year
          ktloTarget
          status
          createdAt
          updatedAt
          __typename
        }
        Theme {
          id
          title
          description
          themePlanId
          createdAt
          updatedAt
          __typename
        }
        Sponsor {
          id
          alias
          name
          email
          status
          sixManagerAlias
          isManager
          isBizOps
          personPlanId
          personManagerId
          personOrganizationId
          createdAt
          updatedAt
          __typename
        }
        initiativePlanId
        initiativeThemeId
        initiativeSponsorId
        createdAt
        updatedAt
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
      Plan {
        id
        title
        description
        year
        ktloTarget
        status
        createdAt
        updatedAt
        __typename
      }
      themePlanId
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
        Plan {
          id
          title
          description
          year
          ktloTarget
          status
          createdAt
          updatedAt
          __typename
        }
        themePlanId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const ThemesByPlan = /* GraphQL */ `
  query ThemesByPlan(
    $themePlanId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelThemeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    ThemesByPlan(
      themePlanId: $themePlanId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        title
        description
        Plan {
          id
          title
          description
          year
          ktloTarget
          status
          createdAt
          updatedAt
          __typename
        }
        themePlanId
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
      ktloTarget
      status
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
        ktloTarget
        status
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const PlansByStatus = /* GraphQL */ `
  query PlansByStatus(
    $status: Status!
    $sortDirection: ModelSortDirection
    $filter: ModelPlanFilterInput
    $limit: Int
    $nextToken: String
  ) {
    PlansByStatus(
      status: $status
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        title
        description
        year
        ktloTarget
        status
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
