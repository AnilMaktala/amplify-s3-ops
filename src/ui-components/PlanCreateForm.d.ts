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
export declare type PlanCreateFormInputValues = {
    title?: string;
    description?: string;
    year?: number;
    ktloTarget?: number;
    status?: string;
};
export declare type PlanCreateFormValidationValues = {
    title?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    year?: ValidationFunction<number>;
    ktloTarget?: ValidationFunction<number>;
    status?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PlanCreateFormOverridesProps = {
    PlanCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    year?: PrimitiveOverrideProps<TextFieldProps>;
    ktloTarget?: PrimitiveOverrideProps<TextFieldProps>;
    status?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type PlanCreateFormProps = React.PropsWithChildren<{
    overrides?: PlanCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: PlanCreateFormInputValues) => PlanCreateFormInputValues;
    onSuccess?: (fields: PlanCreateFormInputValues) => void;
    onError?: (fields: PlanCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PlanCreateFormInputValues) => PlanCreateFormInputValues;
    onValidate?: PlanCreateFormValidationValues;
} & React.CSSProperties>;
export default function PlanCreateForm(props: PlanCreateFormProps): React.ReactElement;
