/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Store } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type StoreUpdateFormInputValues = {
    brandimage?: string;
    brandprimary?: string;
    brandsecondary?: string;
    brandbio?: string;
    brandphone?: string;
    brandemail?: string;
    location?: string;
    brandcreated?: string;
    membersince?: string;
    banner?: string;
    TCGlink?: string;
    TTlink?: string;
    YTlink?: string;
    FBlink?: string;
    IGlink?: string;
    TWEETlin?: string;
    GSlink?: string;
    storelocation?: string;
};
export declare type StoreUpdateFormValidationValues = {
    brandimage?: ValidationFunction<string>;
    brandprimary?: ValidationFunction<string>;
    brandsecondary?: ValidationFunction<string>;
    brandbio?: ValidationFunction<string>;
    brandphone?: ValidationFunction<string>;
    brandemail?: ValidationFunction<string>;
    location?: ValidationFunction<string>;
    brandcreated?: ValidationFunction<string>;
    membersince?: ValidationFunction<string>;
    banner?: ValidationFunction<string>;
    TCGlink?: ValidationFunction<string>;
    TTlink?: ValidationFunction<string>;
    YTlink?: ValidationFunction<string>;
    FBlink?: ValidationFunction<string>;
    IGlink?: ValidationFunction<string>;
    TWEETlin?: ValidationFunction<string>;
    GSlink?: ValidationFunction<string>;
    storelocation?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type StoreUpdateFormOverridesProps = {
    StoreUpdateFormGrid?: FormProps<GridProps>;
    brandimage?: FormProps<TextFieldProps>;
    brandprimary?: FormProps<TextFieldProps>;
    brandsecondary?: FormProps<TextFieldProps>;
    brandbio?: FormProps<TextFieldProps>;
    brandphone?: FormProps<TextFieldProps>;
    brandemail?: FormProps<TextFieldProps>;
    location?: FormProps<TextFieldProps>;
    brandcreated?: FormProps<TextFieldProps>;
    membersince?: FormProps<TextFieldProps>;
    banner?: FormProps<TextFieldProps>;
    TCGlink?: FormProps<TextFieldProps>;
    TTlink?: FormProps<TextFieldProps>;
    YTlink?: FormProps<TextFieldProps>;
    FBlink?: FormProps<TextFieldProps>;
    IGlink?: FormProps<TextFieldProps>;
    TWEETlin?: FormProps<TextFieldProps>;
    GSlink?: FormProps<TextFieldProps>;
    storelocation?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type StoreUpdateFormProps = React.PropsWithChildren<{
    overrides?: StoreUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    store?: Store;
    onSubmit?: (fields: StoreUpdateFormInputValues) => StoreUpdateFormInputValues;
    onSuccess?: (fields: StoreUpdateFormInputValues) => void;
    onError?: (fields: StoreUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: StoreUpdateFormInputValues) => StoreUpdateFormInputValues;
    onValidate?: StoreUpdateFormValidationValues;
} & React.CSSProperties>;
export default function StoreUpdateForm(props: StoreUpdateFormProps): React.ReactElement;
