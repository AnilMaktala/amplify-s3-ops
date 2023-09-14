/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type SnapshotCreateFormInputValues = {
    timestamp?: string;
    planYear?: number;
    planTitle?: string;
    projectTitle?: string;
    projectDescription?: string;
    projectRank?: number;
    projectFunding?: string;
    projectHeadcount?: number;
    initiativeTitle?: string;
    initiativeDescription?: string;
    organizationName?: string;
    organizationManagerAlias?: string;
    ownerAlias?: string;
    goalTitle?: string;
    goalDescription?: string;
    snapshotPlanId?: string;
    snapshotProjectId?: string;
};
export declare type SnapshotCreateFormValidationValues = {
    timestamp?: ValidationFunction<string>;
    planYear?: ValidationFunction<number>;
    planTitle?: ValidationFunction<string>;
    projectTitle?: ValidationFunction<string>;
    projectDescription?: ValidationFunction<string>;
    projectRank?: ValidationFunction<number>;
    projectFunding?: ValidationFunction<string>;
    projectHeadcount?: ValidationFunction<number>;
    initiativeTitle?: ValidationFunction<string>;
    initiativeDescription?: ValidationFunction<string>;
    organizationName?: ValidationFunction<string>;
    organizationManagerAlias?: ValidationFunction<string>;
    ownerAlias?: ValidationFunction<string>;
    goalTitle?: ValidationFunction<string>;
    goalDescription?: ValidationFunction<string>;
    snapshotPlanId?: ValidationFunction<string>;
    snapshotProjectId?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SnapshotCreateFormOverridesProps = {
    SnapshotCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    timestamp?: PrimitiveOverrideProps<TextFieldProps>;
    planYear?: PrimitiveOverrideProps<TextFieldProps>;
    planTitle?: PrimitiveOverrideProps<TextFieldProps>;
    projectTitle?: PrimitiveOverrideProps<TextFieldProps>;
    projectDescription?: PrimitiveOverrideProps<TextFieldProps>;
    projectRank?: PrimitiveOverrideProps<TextFieldProps>;
    projectFunding?: PrimitiveOverrideProps<TextFieldProps>;
    projectHeadcount?: PrimitiveOverrideProps<TextFieldProps>;
    initiativeTitle?: PrimitiveOverrideProps<TextFieldProps>;
    initiativeDescription?: PrimitiveOverrideProps<TextFieldProps>;
    organizationName?: PrimitiveOverrideProps<TextFieldProps>;
    organizationManagerAlias?: PrimitiveOverrideProps<TextFieldProps>;
    ownerAlias?: PrimitiveOverrideProps<TextFieldProps>;
    goalTitle?: PrimitiveOverrideProps<TextFieldProps>;
    goalDescription?: PrimitiveOverrideProps<TextFieldProps>;
    snapshotPlanId?: PrimitiveOverrideProps<TextFieldProps>;
    snapshotProjectId?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SnapshotCreateFormProps = React.PropsWithChildren<{
    overrides?: SnapshotCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: SnapshotCreateFormInputValues) => SnapshotCreateFormInputValues;
    onSuccess?: (fields: SnapshotCreateFormInputValues) => void;
    onError?: (fields: SnapshotCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SnapshotCreateFormInputValues) => SnapshotCreateFormInputValues;
    onValidate?: SnapshotCreateFormValidationValues;
} & React.CSSProperties>;
export default function SnapshotCreateForm(props: SnapshotCreateFormProps): React.ReactElement;
