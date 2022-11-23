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
export declare type StreamerCreateFormInputValues = {
    username?: string;
    name?: string;
    contactemail?: string;
    channel?: string;
    bio?: string;
    image?: string;
    membersince?: string;
    location?: string;
    channelcreated?: string;
    banner?: string;
    FBlink?: string;
    YTlink?: string;
    IGlink?: string;
    TWEETlink?: string;
    DRlink?: string;
};
export declare type StreamerCreateFormValidationValues = {
    username?: ValidationFunction<string>;
    name?: ValidationFunction<string>;
    contactemail?: ValidationFunction<string>;
    channel?: ValidationFunction<string>;
    bio?: ValidationFunction<string>;
    image?: ValidationFunction<string>;
    membersince?: ValidationFunction<string>;
    location?: ValidationFunction<string>;
    channelcreated?: ValidationFunction<string>;
    banner?: ValidationFunction<string>;
    FBlink?: ValidationFunction<string>;
    YTlink?: ValidationFunction<string>;
    IGlink?: ValidationFunction<string>;
    TWEETlink?: ValidationFunction<string>;
    DRlink?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type StreamerCreateFormOverridesProps = {
    StreamerCreateFormGrid?: FormProps<GridProps>;
    username?: FormProps<TextFieldProps>;
    name?: FormProps<TextFieldProps>;
    contactemail?: FormProps<TextFieldProps>;
    channel?: FormProps<TextFieldProps>;
    bio?: FormProps<TextFieldProps>;
    image?: FormProps<TextFieldProps>;
    membersince?: FormProps<TextFieldProps>;
    location?: FormProps<TextFieldProps>;
    channelcreated?: FormProps<TextFieldProps>;
    banner?: FormProps<TextFieldProps>;
    FBlink?: FormProps<TextFieldProps>;
    YTlink?: FormProps<TextFieldProps>;
    IGlink?: FormProps<TextFieldProps>;
    TWEETlink?: FormProps<TextFieldProps>;
    DRlink?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type StreamerCreateFormProps = React.PropsWithChildren<{
    overrides?: StreamerCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: StreamerCreateFormInputValues) => StreamerCreateFormInputValues;
    onSuccess?: (fields: StreamerCreateFormInputValues) => void;
    onError?: (fields: StreamerCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: StreamerCreateFormInputValues) => StreamerCreateFormInputValues;
    onValidate?: StreamerCreateFormValidationValues;
} & React.CSSProperties>;
export default function StreamerCreateForm(props: StreamerCreateFormProps): React.ReactElement;
