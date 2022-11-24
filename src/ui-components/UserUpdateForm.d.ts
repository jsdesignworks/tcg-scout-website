/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { User } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type UserUpdateFormInputValues = {
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
    userlocation?: string;
};
export declare type UserUpdateFormValidationValues = {
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
    userlocation?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UserUpdateFormOverridesProps = {
    UserUpdateFormGrid?: FormProps<GridProps>;
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
    userlocation?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type UserUpdateFormProps = React.PropsWithChildren<{
    overrides?: UserUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    user?: User;
    onSubmit?: (fields: UserUpdateFormInputValues) => UserUpdateFormInputValues;
    onSuccess?: (fields: UserUpdateFormInputValues) => void;
    onError?: (fields: UserUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: UserUpdateFormInputValues) => UserUpdateFormInputValues;
    onValidate?: UserUpdateFormValidationValues;
} & React.CSSProperties>;
export default function UserUpdateForm(props: UserUpdateFormProps): React.ReactElement;
