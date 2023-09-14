/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const batchCreateSnapshots = /* GraphQL */ `
  mutation BatchCreateSnapshots($input: [BatchCreateSnapshotInput!]) {
    batchCreateSnapshots(input: $input) {
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
export const createSnapshot = /* GraphQL */ `
  mutation CreateSnapshot(
    $input: CreateSnapshotInput!
    $condition: ModelSnapshotConditionInput
  ) {
    createSnapshot(input: $input, condition: $condition) {
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
export const updateSnapshot = /* GraphQL */ `
  mutation UpdateSnapshot(
    $input: UpdateSnapshotInput!
    $condition: ModelSnapshotConditionInput
  ) {
    updateSnapshot(input: $input, condition: $condition) {
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
export const deleteSnapshot = /* GraphQL */ `
  mutation DeleteSnapshot(
    $input: DeleteSnapshotInput!
    $condition: ModelSnapshotConditionInput
  ) {
    deleteSnapshot(input: $input, condition: $condition) {
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
export const createGoal = /* GraphQL */ `
  mutation CreateGoal(
    $input: CreateGoalInput!
    $condition: ModelGoalConditionInput
  ) {
    createGoal(input: $input, condition: $condition) {
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
export const updateGoal = /* GraphQL */ `
  mutation UpdateGoal(
    $input: UpdateGoalInput!
    $condition: ModelGoalConditionInput
  ) {
    updateGoal(input: $input, condition: $condition) {
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
export const deleteGoal = /* GraphQL */ `
  mutation DeleteGoal(
    $input: DeleteGoalInput!
    $condition: ModelGoalConditionInput
  ) {
    deleteGoal(input: $input, condition: $condition) {
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
export const createTheme = /* GraphQL */ `
  mutation CreateTheme(
    $input: CreateThemeInput!
    $condition: ModelThemeConditionInput
  ) {
    createTheme(input: $input, condition: $condition) {
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
export const updateTheme = /* GraphQL */ `
  mutation UpdateTheme(
    $input: UpdateThemeInput!
    $condition: ModelThemeConditionInput
  ) {
    updateTheme(input: $input, condition: $condition) {
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
export const deleteTheme = /* GraphQL */ `
  mutation DeleteTheme(
    $input: DeleteThemeInput!
    $condition: ModelThemeConditionInput
  ) {
    deleteTheme(input: $input, condition: $condition) {
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
      ktloTarget
      status
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
      ktloTarget
      status
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
      ktloTarget
      status
      createdAt
      updatedAt
      __typename
    }
  }
`;
