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
export declare type UserCreateFormInputValues = {
    memberstart?: string;
    username?: string;
    image?: string;
    brandingname?: string;
    brandingimage?: string;
    bio?: string;
    name?: string;
    location?: string;
    banner?: string;
    YTlink?: string;
    FBlink?: string;
    IGlink?: string;
    TWEETlink?: string;
};
export declare type UserCreateFormValidationValues = {
    memberstart?: ValidationFunction<string>;
    username?: ValidationFunction<string>;
    image?: ValidationFunction<string>;
    brandingname?: ValidationFunction<string>;
    brandingimage?: ValidationFunction<string>;
    bio?: ValidationFunction<string>;
    name?: ValidationFunction<string>;
    location?: ValidationFunction<string>;
    banner?: ValidationFunction<string>;
    YTlink?: ValidationFunction<string>;
    FBlink?: ValidationFunction<string>;
    IGlink?: ValidationFunction<string>;
    TWEETlink?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UserCreateFormOverridesProps = {
    UserCreateFormGrid?: FormProps<GridProps>;
    memberstart?: FormProps<TextFieldProps>;
    username?: FormProps<TextFieldProps>;
    image?: FormProps<TextFieldProps>;
    brandingname?: FormProps<TextFieldProps>;
    brandingimage?: FormProps<TextFieldProps>;
    bio?: FormProps<TextFieldProps>;
    name?: FormProps<TextFieldProps>;
    location?: FormProps<TextFieldProps>;
    banner?: FormProps<TextFieldProps>;
    YTlink?: FormProps<TextFieldProps>;
    FBlink?: FormProps<TextFieldProps>;
    IGlink?: FormProps<TextFieldProps>;
    TWEETlink?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type UserCreateFormProps = React.PropsWithChildren<{
    overrides?: UserCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: UserCreateFormInputValues) => UserCreateFormInputValues;
    onSuccess?: (fields: UserCreateFormInputValues) => void;
    onError?: (fields: UserCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: UserCreateFormInputValues) => UserCreateFormInputValues;
    onValidate?: UserCreateFormValidationValues;
} & React.CSSProperties>;
export default function UserCreateForm(props: UserCreateFormProps): React.ReactElement;
