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
export declare type ProjectSampleFormInputValues = {
    title?: string;
    description?: string;
    rank?: string;
    priority?: string[];
    headcount?: string;
};
export declare type ProjectSampleFormValidationValues = {
    title?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    rank?: ValidationFunction<string>;
    priority?: ValidationFunction<string>;
    headcount?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProjectSampleFormOverridesProps = {
    ProjectSampleFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    rank?: PrimitiveOverrideProps<TextFieldProps>;
    priority?: PrimitiveOverrideProps<TextFieldProps>;
    headcount?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ProjectSampleFormProps = React.PropsWithChildren<{
    overrides?: ProjectSampleFormOverridesProps | undefined | null;
} & {
    onSubmit: (fields: ProjectSampleFormInputValues) => void;
    onChange?: (fields: ProjectSampleFormInputValues) => ProjectSampleFormInputValues;
    onValidate?: ProjectSampleFormValidationValues;
} & React.CSSProperties>;
export default function ProjectSampleForm(props: ProjectSampleFormProps): React.ReactElement;
