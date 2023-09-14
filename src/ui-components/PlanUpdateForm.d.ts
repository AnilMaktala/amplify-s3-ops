/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Plan } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PlanUpdateFormInputValues = {
    title?: string;
    description?: string;
    year?: number;
    ktloTarget?: number;
    status?: string;
};
export declare type PlanUpdateFormValidationValues = {
    title?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    year?: ValidationFunction<number>;
    ktloTarget?: ValidationFunction<number>;
    status?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PlanUpdateFormOverridesProps = {
    PlanUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    year?: PrimitiveOverrideProps<TextFieldProps>;
    ktloTarget?: PrimitiveOverrideProps<TextFieldProps>;
    status?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type PlanUpdateFormProps = React.PropsWithChildren<{
    overrides?: PlanUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    plan?: Plan;
    onSubmit?: (fields: PlanUpdateFormInputValues) => PlanUpdateFormInputValues;
    onSuccess?: (fields: PlanUpdateFormInputValues) => void;
    onError?: (fields: PlanUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PlanUpdateFormInputValues) => PlanUpdateFormInputValues;
    onValidate?: PlanUpdateFormValidationValues;
} & React.CSSProperties>;
export default function PlanUpdateForm(props: PlanUpdateFormProps): React.ReactElement;
