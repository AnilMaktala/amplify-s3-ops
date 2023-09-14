/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Snapshot } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function SnapshotUpdateForm(props) {
  const {
    id: idProp,
    snapshot: snapshotModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    timestamp: "",
    planYear: "",
    planTitle: "",
    projectTitle: "",
    projectDescription: "",
    projectRank: "",
    projectFunding: "",
    projectHeadcount: "",
    initiativeTitle: "",
    initiativeDescription: "",
    organizationName: "",
    organizationManagerAlias: "",
    ownerAlias: "",
    goalTitle: "",
    goalDescription: "",
    snapshotPlanId: "",
    snapshotProjectId: "",
  };
  const [timestamp, setTimestamp] = React.useState(initialValues.timestamp);
  const [planYear, setPlanYear] = React.useState(initialValues.planYear);
  const [planTitle, setPlanTitle] = React.useState(initialValues.planTitle);
  const [projectTitle, setProjectTitle] = React.useState(
    initialValues.projectTitle
  );
  const [projectDescription, setProjectDescription] = React.useState(
    initialValues.projectDescription
  );
  const [projectRank, setProjectRank] = React.useState(
    initialValues.projectRank
  );
  const [projectFunding, setProjectFunding] = React.useState(
    initialValues.projectFunding
  );
  const [projectHeadcount, setProjectHeadcount] = React.useState(
    initialValues.projectHeadcount
  );
  const [initiativeTitle, setInitiativeTitle] = React.useState(
    initialValues.initiativeTitle
  );
  const [initiativeDescription, setInitiativeDescription] = React.useState(
    initialValues.initiativeDescription
  );
  const [organizationName, setOrganizationName] = React.useState(
    initialValues.organizationName
  );
  const [organizationManagerAlias, setOrganizationManagerAlias] =
    React.useState(initialValues.organizationManagerAlias);
  const [ownerAlias, setOwnerAlias] = React.useState(initialValues.ownerAlias);
  const [goalTitle, setGoalTitle] = React.useState(initialValues.goalTitle);
  const [goalDescription, setGoalDescription] = React.useState(
    initialValues.goalDescription
  );
  const [snapshotPlanId, setSnapshotPlanId] = React.useState(
    initialValues.snapshotPlanId
  );
  const [snapshotProjectId, setSnapshotProjectId] = React.useState(
    initialValues.snapshotProjectId
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = snapshotRecord
      ? { ...initialValues, ...snapshotRecord }
      : initialValues;
    setTimestamp(cleanValues.timestamp);
    setPlanYear(cleanValues.planYear);
    setPlanTitle(cleanValues.planTitle);
    setProjectTitle(cleanValues.projectTitle);
    setProjectDescription(cleanValues.projectDescription);
    setProjectRank(cleanValues.projectRank);
    setProjectFunding(cleanValues.projectFunding);
    setProjectHeadcount(cleanValues.projectHeadcount);
    setInitiativeTitle(cleanValues.initiativeTitle);
    setInitiativeDescription(cleanValues.initiativeDescription);
    setOrganizationName(cleanValues.organizationName);
    setOrganizationManagerAlias(cleanValues.organizationManagerAlias);
    setOwnerAlias(cleanValues.ownerAlias);
    setGoalTitle(cleanValues.goalTitle);
    setGoalDescription(cleanValues.goalDescription);
    setSnapshotPlanId(cleanValues.snapshotPlanId);
    setSnapshotProjectId(cleanValues.snapshotProjectId);
    setErrors({});
  };
  const [snapshotRecord, setSnapshotRecord] = React.useState(snapshotModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Snapshot, idProp)
        : snapshotModelProp;
      setSnapshotRecord(record);
    };
    queryData();
  }, [idProp, snapshotModelProp]);
  React.useEffect(resetStateValues, [snapshotRecord]);
  const validations = {
    timestamp: [{ type: "Required" }],
    planYear: [],
    planTitle: [],
    projectTitle: [],
    projectDescription: [],
    projectRank: [],
    projectFunding: [],
    projectHeadcount: [],
    initiativeTitle: [],
    initiativeDescription: [],
    organizationName: [],
    organizationManagerAlias: [],
    ownerAlias: [],
    goalTitle: [],
    goalDescription: [],
    snapshotPlanId: [{ type: "Required" }],
    snapshotProjectId: [{ type: "Required" }],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  const convertToLocal = (date) => {
    const df = new Intl.DateTimeFormat("default", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      calendar: "iso8601",
      numberingSystem: "latn",
      hourCycle: "h23",
    });
    const parts = df.formatToParts(date).reduce((acc, part) => {
      acc[part.type] = part.value;
      return acc;
    }, {});
    return `${parts.year}-${parts.month}-${parts.day}T${parts.hour}:${parts.minute}`;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          timestamp,
          planYear,
          planTitle,
          projectTitle,
          projectDescription,
          projectRank,
          projectFunding,
          projectHeadcount,
          initiativeTitle,
          initiativeDescription,
          organizationName,
          organizationManagerAlias,
          ownerAlias,
          goalTitle,
          goalDescription,
          snapshotPlanId,
          snapshotProjectId,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await DataStore.save(
            Snapshot.copyOf(snapshotRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "SnapshotUpdateForm")}
      {...rest}
    >
      <TextField
        label="Timestamp"
        isRequired={true}
        isReadOnly={false}
        type="datetime-local"
        value={timestamp && convertToLocal(new Date(timestamp))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              timestamp: value,
              planYear,
              planTitle,
              projectTitle,
              projectDescription,
              projectRank,
              projectFunding,
              projectHeadcount,
              initiativeTitle,
              initiativeDescription,
              organizationName,
              organizationManagerAlias,
              ownerAlias,
              goalTitle,
              goalDescription,
              snapshotPlanId,
              snapshotProjectId,
            };
            const result = onChange(modelFields);
            value = result?.timestamp ?? value;
          }
          if (errors.timestamp?.hasError) {
            runValidationTasks("timestamp", value);
          }
          setTimestamp(value);
        }}
        onBlur={() => runValidationTasks("timestamp", timestamp)}
        errorMessage={errors.timestamp?.errorMessage}
        hasError={errors.timestamp?.hasError}
        {...getOverrideProps(overrides, "timestamp")}
      ></TextField>
      <TextField
        label="Plan year"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={planYear}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              timestamp,
              planYear: value,
              planTitle,
              projectTitle,
              projectDescription,
              projectRank,
              projectFunding,
              projectHeadcount,
              initiativeTitle,
              initiativeDescription,
              organizationName,
              organizationManagerAlias,
              ownerAlias,
              goalTitle,
              goalDescription,
              snapshotPlanId,
              snapshotProjectId,
            };
            const result = onChange(modelFields);
            value = result?.planYear ?? value;
          }
          if (errors.planYear?.hasError) {
            runValidationTasks("planYear", value);
          }
          setPlanYear(value);
        }}
        onBlur={() => runValidationTasks("planYear", planYear)}
        errorMessage={errors.planYear?.errorMessage}
        hasError={errors.planYear?.hasError}
        {...getOverrideProps(overrides, "planYear")}
      ></TextField>
      <TextField
        label="Plan title"
        isRequired={false}
        isReadOnly={false}
        value={planTitle}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              timestamp,
              planYear,
              planTitle: value,
              projectTitle,
              projectDescription,
              projectRank,
              projectFunding,
              projectHeadcount,
              initiativeTitle,
              initiativeDescription,
              organizationName,
              organizationManagerAlias,
              ownerAlias,
              goalTitle,
              goalDescription,
              snapshotPlanId,
              snapshotProjectId,
            };
            const result = onChange(modelFields);
            value = result?.planTitle ?? value;
          }
          if (errors.planTitle?.hasError) {
            runValidationTasks("planTitle", value);
          }
          setPlanTitle(value);
        }}
        onBlur={() => runValidationTasks("planTitle", planTitle)}
        errorMessage={errors.planTitle?.errorMessage}
        hasError={errors.planTitle?.hasError}
        {...getOverrideProps(overrides, "planTitle")}
      ></TextField>
      <TextField
        label="Project title"
        isRequired={false}
        isReadOnly={false}
        value={projectTitle}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              timestamp,
              planYear,
              planTitle,
              projectTitle: value,
              projectDescription,
              projectRank,
              projectFunding,
              projectHeadcount,
              initiativeTitle,
              initiativeDescription,
              organizationName,
              organizationManagerAlias,
              ownerAlias,
              goalTitle,
              goalDescription,
              snapshotPlanId,
              snapshotProjectId,
            };
            const result = onChange(modelFields);
            value = result?.projectTitle ?? value;
          }
          if (errors.projectTitle?.hasError) {
            runValidationTasks("projectTitle", value);
          }
          setProjectTitle(value);
        }}
        onBlur={() => runValidationTasks("projectTitle", projectTitle)}
        errorMessage={errors.projectTitle?.errorMessage}
        hasError={errors.projectTitle?.hasError}
        {...getOverrideProps(overrides, "projectTitle")}
      ></TextField>
      <TextField
        label="Project description"
        isRequired={false}
        isReadOnly={false}
        value={projectDescription}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              timestamp,
              planYear,
              planTitle,
              projectTitle,
              projectDescription: value,
              projectRank,
              projectFunding,
              projectHeadcount,
              initiativeTitle,
              initiativeDescription,
              organizationName,
              organizationManagerAlias,
              ownerAlias,
              goalTitle,
              goalDescription,
              snapshotPlanId,
              snapshotProjectId,
            };
            const result = onChange(modelFields);
            value = result?.projectDescription ?? value;
          }
          if (errors.projectDescription?.hasError) {
            runValidationTasks("projectDescription", value);
          }
          setProjectDescription(value);
        }}
        onBlur={() =>
          runValidationTasks("projectDescription", projectDescription)
        }
        errorMessage={errors.projectDescription?.errorMessage}
        hasError={errors.projectDescription?.hasError}
        {...getOverrideProps(overrides, "projectDescription")}
      ></TextField>
      <TextField
        label="Project rank"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={projectRank}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              timestamp,
              planYear,
              planTitle,
              projectTitle,
              projectDescription,
              projectRank: value,
              projectFunding,
              projectHeadcount,
              initiativeTitle,
              initiativeDescription,
              organizationName,
              organizationManagerAlias,
              ownerAlias,
              goalTitle,
              goalDescription,
              snapshotPlanId,
              snapshotProjectId,
            };
            const result = onChange(modelFields);
            value = result?.projectRank ?? value;
          }
          if (errors.projectRank?.hasError) {
            runValidationTasks("projectRank", value);
          }
          setProjectRank(value);
        }}
        onBlur={() => runValidationTasks("projectRank", projectRank)}
        errorMessage={errors.projectRank?.errorMessage}
        hasError={errors.projectRank?.hasError}
        {...getOverrideProps(overrides, "projectRank")}
      ></TextField>
      <TextField
        label="Project funding"
        isRequired={false}
        isReadOnly={false}
        value={projectFunding}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              timestamp,
              planYear,
              planTitle,
              projectTitle,
              projectDescription,
              projectRank,
              projectFunding: value,
              projectHeadcount,
              initiativeTitle,
              initiativeDescription,
              organizationName,
              organizationManagerAlias,
              ownerAlias,
              goalTitle,
              goalDescription,
              snapshotPlanId,
              snapshotProjectId,
            };
            const result = onChange(modelFields);
            value = result?.projectFunding ?? value;
          }
          if (errors.projectFunding?.hasError) {
            runValidationTasks("projectFunding", value);
          }
          setProjectFunding(value);
        }}
        onBlur={() => runValidationTasks("projectFunding", projectFunding)}
        errorMessage={errors.projectFunding?.errorMessage}
        hasError={errors.projectFunding?.hasError}
        {...getOverrideProps(overrides, "projectFunding")}
      ></TextField>
      <TextField
        label="Project headcount"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={projectHeadcount}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              timestamp,
              planYear,
              planTitle,
              projectTitle,
              projectDescription,
              projectRank,
              projectFunding,
              projectHeadcount: value,
              initiativeTitle,
              initiativeDescription,
              organizationName,
              organizationManagerAlias,
              ownerAlias,
              goalTitle,
              goalDescription,
              snapshotPlanId,
              snapshotProjectId,
            };
            const result = onChange(modelFields);
            value = result?.projectHeadcount ?? value;
          }
          if (errors.projectHeadcount?.hasError) {
            runValidationTasks("projectHeadcount", value);
          }
          setProjectHeadcount(value);
        }}
        onBlur={() => runValidationTasks("projectHeadcount", projectHeadcount)}
        errorMessage={errors.projectHeadcount?.errorMessage}
        hasError={errors.projectHeadcount?.hasError}
        {...getOverrideProps(overrides, "projectHeadcount")}
      ></TextField>
      <TextField
        label="Initiative title"
        isRequired={false}
        isReadOnly={false}
        value={initiativeTitle}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              timestamp,
              planYear,
              planTitle,
              projectTitle,
              projectDescription,
              projectRank,
              projectFunding,
              projectHeadcount,
              initiativeTitle: value,
              initiativeDescription,
              organizationName,
              organizationManagerAlias,
              ownerAlias,
              goalTitle,
              goalDescription,
              snapshotPlanId,
              snapshotProjectId,
            };
            const result = onChange(modelFields);
            value = result?.initiativeTitle ?? value;
          }
          if (errors.initiativeTitle?.hasError) {
            runValidationTasks("initiativeTitle", value);
          }
          setInitiativeTitle(value);
        }}
        onBlur={() => runValidationTasks("initiativeTitle", initiativeTitle)}
        errorMessage={errors.initiativeTitle?.errorMessage}
        hasError={errors.initiativeTitle?.hasError}
        {...getOverrideProps(overrides, "initiativeTitle")}
      ></TextField>
      <TextField
        label="Initiative description"
        isRequired={false}
        isReadOnly={false}
        value={initiativeDescription}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              timestamp,
              planYear,
              planTitle,
              projectTitle,
              projectDescription,
              projectRank,
              projectFunding,
              projectHeadcount,
              initiativeTitle,
              initiativeDescription: value,
              organizationName,
              organizationManagerAlias,
              ownerAlias,
              goalTitle,
              goalDescription,
              snapshotPlanId,
              snapshotProjectId,
            };
            const result = onChange(modelFields);
            value = result?.initiativeDescription ?? value;
          }
          if (errors.initiativeDescription?.hasError) {
            runValidationTasks("initiativeDescription", value);
          }
          setInitiativeDescription(value);
        }}
        onBlur={() =>
          runValidationTasks("initiativeDescription", initiativeDescription)
        }
        errorMessage={errors.initiativeDescription?.errorMessage}
        hasError={errors.initiativeDescription?.hasError}
        {...getOverrideProps(overrides, "initiativeDescription")}
      ></TextField>
      <TextField
        label="Organization name"
        isRequired={false}
        isReadOnly={false}
        value={organizationName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              timestamp,
              planYear,
              planTitle,
              projectTitle,
              projectDescription,
              projectRank,
              projectFunding,
              projectHeadcount,
              initiativeTitle,
              initiativeDescription,
              organizationName: value,
              organizationManagerAlias,
              ownerAlias,
              goalTitle,
              goalDescription,
              snapshotPlanId,
              snapshotProjectId,
            };
            const result = onChange(modelFields);
            value = result?.organizationName ?? value;
          }
          if (errors.organizationName?.hasError) {
            runValidationTasks("organizationName", value);
          }
          setOrganizationName(value);
        }}
        onBlur={() => runValidationTasks("organizationName", organizationName)}
        errorMessage={errors.organizationName?.errorMessage}
        hasError={errors.organizationName?.hasError}
        {...getOverrideProps(overrides, "organizationName")}
      ></TextField>
      <TextField
        label="Organization manager alias"
        isRequired={false}
        isReadOnly={false}
        value={organizationManagerAlias}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              timestamp,
              planYear,
              planTitle,
              projectTitle,
              projectDescription,
              projectRank,
              projectFunding,
              projectHeadcount,
              initiativeTitle,
              initiativeDescription,
              organizationName,
              organizationManagerAlias: value,
              ownerAlias,
              goalTitle,
              goalDescription,
              snapshotPlanId,
              snapshotProjectId,
            };
            const result = onChange(modelFields);
            value = result?.organizationManagerAlias ?? value;
          }
          if (errors.organizationManagerAlias?.hasError) {
            runValidationTasks("organizationManagerAlias", value);
          }
          setOrganizationManagerAlias(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "organizationManagerAlias",
            organizationManagerAlias
          )
        }
        errorMessage={errors.organizationManagerAlias?.errorMessage}
        hasError={errors.organizationManagerAlias?.hasError}
        {...getOverrideProps(overrides, "organizationManagerAlias")}
      ></TextField>
      <TextField
        label="Owner alias"
        isRequired={false}
        isReadOnly={false}
        value={ownerAlias}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              timestamp,
              planYear,
              planTitle,
              projectTitle,
              projectDescription,
              projectRank,
              projectFunding,
              projectHeadcount,
              initiativeTitle,
              initiativeDescription,
              organizationName,
              organizationManagerAlias,
              ownerAlias: value,
              goalTitle,
              goalDescription,
              snapshotPlanId,
              snapshotProjectId,
            };
            const result = onChange(modelFields);
            value = result?.ownerAlias ?? value;
          }
          if (errors.ownerAlias?.hasError) {
            runValidationTasks("ownerAlias", value);
          }
          setOwnerAlias(value);
        }}
        onBlur={() => runValidationTasks("ownerAlias", ownerAlias)}
        errorMessage={errors.ownerAlias?.errorMessage}
        hasError={errors.ownerAlias?.hasError}
        {...getOverrideProps(overrides, "ownerAlias")}
      ></TextField>
      <TextField
        label="Goal title"
        isRequired={false}
        isReadOnly={false}
        value={goalTitle}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              timestamp,
              planYear,
              planTitle,
              projectTitle,
              projectDescription,
              projectRank,
              projectFunding,
              projectHeadcount,
              initiativeTitle,
              initiativeDescription,
              organizationName,
              organizationManagerAlias,
              ownerAlias,
              goalTitle: value,
              goalDescription,
              snapshotPlanId,
              snapshotProjectId,
            };
            const result = onChange(modelFields);
            value = result?.goalTitle ?? value;
          }
          if (errors.goalTitle?.hasError) {
            runValidationTasks("goalTitle", value);
          }
          setGoalTitle(value);
        }}
        onBlur={() => runValidationTasks("goalTitle", goalTitle)}
        errorMessage={errors.goalTitle?.errorMessage}
        hasError={errors.goalTitle?.hasError}
        {...getOverrideProps(overrides, "goalTitle")}
      ></TextField>
      <TextField
        label="Goal description"
        isRequired={false}
        isReadOnly={false}
        value={goalDescription}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              timestamp,
              planYear,
              planTitle,
              projectTitle,
              projectDescription,
              projectRank,
              projectFunding,
              projectHeadcount,
              initiativeTitle,
              initiativeDescription,
              organizationName,
              organizationManagerAlias,
              ownerAlias,
              goalTitle,
              goalDescription: value,
              snapshotPlanId,
              snapshotProjectId,
            };
            const result = onChange(modelFields);
            value = result?.goalDescription ?? value;
          }
          if (errors.goalDescription?.hasError) {
            runValidationTasks("goalDescription", value);
          }
          setGoalDescription(value);
        }}
        onBlur={() => runValidationTasks("goalDescription", goalDescription)}
        errorMessage={errors.goalDescription?.errorMessage}
        hasError={errors.goalDescription?.hasError}
        {...getOverrideProps(overrides, "goalDescription")}
      ></TextField>
      <TextField
        label="Snapshot plan id"
        isRequired={true}
        isReadOnly={false}
        value={snapshotPlanId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              timestamp,
              planYear,
              planTitle,
              projectTitle,
              projectDescription,
              projectRank,
              projectFunding,
              projectHeadcount,
              initiativeTitle,
              initiativeDescription,
              organizationName,
              organizationManagerAlias,
              ownerAlias,
              goalTitle,
              goalDescription,
              snapshotPlanId: value,
              snapshotProjectId,
            };
            const result = onChange(modelFields);
            value = result?.snapshotPlanId ?? value;
          }
          if (errors.snapshotPlanId?.hasError) {
            runValidationTasks("snapshotPlanId", value);
          }
          setSnapshotPlanId(value);
        }}
        onBlur={() => runValidationTasks("snapshotPlanId", snapshotPlanId)}
        errorMessage={errors.snapshotPlanId?.errorMessage}
        hasError={errors.snapshotPlanId?.hasError}
        {...getOverrideProps(overrides, "snapshotPlanId")}
      ></TextField>
      <TextField
        label="Snapshot project id"
        isRequired={true}
        isReadOnly={false}
        value={snapshotProjectId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              timestamp,
              planYear,
              planTitle,
              projectTitle,
              projectDescription,
              projectRank,
              projectFunding,
              projectHeadcount,
              initiativeTitle,
              initiativeDescription,
              organizationName,
              organizationManagerAlias,
              ownerAlias,
              goalTitle,
              goalDescription,
              snapshotPlanId,
              snapshotProjectId: value,
            };
            const result = onChange(modelFields);
            value = result?.snapshotProjectId ?? value;
          }
          if (errors.snapshotProjectId?.hasError) {
            runValidationTasks("snapshotProjectId", value);
          }
          setSnapshotProjectId(value);
        }}
        onBlur={() =>
          runValidationTasks("snapshotProjectId", snapshotProjectId)
        }
        errorMessage={errors.snapshotProjectId?.errorMessage}
        hasError={errors.snapshotProjectId?.hasError}
        {...getOverrideProps(overrides, "snapshotProjectId")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || snapshotModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || snapshotModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
