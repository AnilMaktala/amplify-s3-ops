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
export declare type SampleFormInputValues = {
    Field0?: string;
};
export declare type SampleFormValidationValues = {
    Field0?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SampleFormOverridesProps = {
    SampleFormGrid?: PrimitiveOverrideProps<GridProps>;
    Field0?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SampleFormProps = React.PropsWithChildren<{
    overrides?: SampleFormOverridesProps | undefined | null;
} & {
    onSubmit: (fields: SampleFormInputValues) => void;
    onChange?: (fields: SampleFormInputValues) => SampleFormInputValues;
    onValidate?: SampleFormValidationValues;
} & React.CSSProperties>;
export default function SampleForm(props: SampleFormProps): React.ReactElement;
