/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type DistributorCreateFormInputValues = {
    banner?: string;
    name?: string;
    contactemail?: string;
    contactphone?: string;
    bio?: string;
    location?: string;
    IPlocatio?: string;
    Availability?: boolean;
};
export declare type DistributorCreateFormValidationValues = {
    banner?: ValidationFunction<string>;
    name?: ValidationFunction<string>;
    contactemail?: ValidationFunction<string>;
    contactphone?: ValidationFunction<string>;
    bio?: ValidationFunction<string>;
    location?: ValidationFunction<string>;
    IPlocatio?: ValidationFunction<string>;
    Availability?: ValidationFunction<boolean>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DistributorCreateFormOverridesProps = {
    DistributorCreateFormGrid?: FormProps<GridProps>;
    banner?: FormProps<TextFieldProps>;
    name?: FormProps<TextFieldProps>;
    contactemail?: FormProps<TextFieldProps>;
    contactphone?: FormProps<TextFieldProps>;
    bio?: FormProps<TextFieldProps>;
    location?: FormProps<TextFieldProps>;
    IPlocatio?: FormProps<TextFieldProps>;
    Availability?: FormProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type DistributorCreateFormProps = React.PropsWithChildren<{
    overrides?: DistributorCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: DistributorCreateFormInputValues) => DistributorCreateFormInputValues;
    onSuccess?: (fields: DistributorCreateFormInputValues) => void;
    onError?: (fields: DistributorCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: DistributorCreateFormInputValues) => DistributorCreateFormInputValues;
    onValidate?: DistributorCreateFormValidationValues;
} & React.CSSProperties>;
export default function DistributorCreateForm(props: DistributorCreateFormProps): React.ReactElement;
