/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ADplaceholderCreateFormInputValues = {
    title?: string;
    subtitle?: string;
    image?: string;
    link?: string;
    createdby?: string;
    locationcreated?: string;
    usericon?: string;
    userID?: string;
    streamerID?: string;
    storeID?: string;
};
export declare type ADplaceholderCreateFormValidationValues = {
    title?: ValidationFunction<string>;
    subtitle?: ValidationFunction<string>;
    image?: ValidationFunction<string>;
    link?: ValidationFunction<string>;
    createdby?: ValidationFunction<string>;
    locationcreated?: ValidationFunction<string>;
    usericon?: ValidationFunction<string>;
    userID?: ValidationFunction<string>;
    streamerID?: ValidationFunction<string>;
    storeID?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ADplaceholderCreateFormOverridesProps = {
    ADplaceholderCreateFormGrid?: FormProps<GridProps>;
    title?: FormProps<TextFieldProps>;
    subtitle?: FormProps<TextFieldProps>;
    image?: FormProps<TextFieldProps>;
    link?: FormProps<TextFieldProps>;
    createdby?: FormProps<TextFieldProps>;
    locationcreated?: FormProps<TextFieldProps>;
    usericon?: FormProps<TextFieldProps>;
    userID?: FormProps<TextFieldProps>;
    streamerID?: FormProps<TextFieldProps>;
    storeID?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ADplaceholderCreateFormProps = React.PropsWithChildren<{
    overrides?: ADplaceholderCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ADplaceholderCreateFormInputValues) => ADplaceholderCreateFormInputValues;
    onSuccess?: (fields: ADplaceholderCreateFormInputValues) => void;
    onError?: (fields: ADplaceholderCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: ADplaceholderCreateFormInputValues) => ADplaceholderCreateFormInputValues;
    onValidate?: ADplaceholderCreateFormValidationValues;
} & React.CSSProperties>;
export default function ADplaceholderCreateForm(props: ADplaceholderCreateFormProps): React.ReactElement;
