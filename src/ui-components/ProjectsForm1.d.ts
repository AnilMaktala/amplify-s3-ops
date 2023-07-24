/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ProjectsForm1InputValues = {
    Field3?: string;
    Field2?: string;
    Field1?: string;
    Field0?: string;
    Field4?: string;
};
export declare type ProjectsForm1ValidationValues = {
    Field3?: ValidationFunction<string>;
    Field2?: ValidationFunction<string>;
    Field1?: ValidationFunction<string>;
    Field0?: ValidationFunction<string>;
    Field4?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProjectsForm1OverridesProps = {
    ProjectsForm1Grid?: PrimitiveOverrideProps<GridProps>;
    Field3?: PrimitiveOverrideProps<TextFieldProps>;
    Field2?: PrimitiveOverrideProps<TextFieldProps>;
    Field1?: PrimitiveOverrideProps<SelectFieldProps>;
    Field0?: PrimitiveOverrideProps<TextFieldProps>;
    Field4?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type ProjectsForm1Props = React.PropsWithChildren<{
    overrides?: ProjectsForm1OverridesProps | undefined | null;
} & {
    onSubmit: (fields: ProjectsForm1InputValues) => void;
    onChange?: (fields: ProjectsForm1InputValues) => ProjectsForm1InputValues;
    onValidate?: ProjectsForm1ValidationValues;
} & React.CSSProperties>;
export default function ProjectsForm1(props: ProjectsForm1Props): React.ReactElement;
