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
export declare type ProductCreateFormInputValues = {
    title?: string;
    description?: string;
    yearcreated?: string;
    marketprice?: number;
    set?: string;
    untitledfield?: string;
    askingprice?: number;
    numberavailable?: number;
    uniqueid?: string;
};
export declare type ProductCreateFormValidationValues = {
    title?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    yearcreated?: ValidationFunction<string>;
    marketprice?: ValidationFunction<number>;
    set?: ValidationFunction<string>;
    untitledfield?: ValidationFunction<string>;
    askingprice?: ValidationFunction<number>;
    numberavailable?: ValidationFunction<number>;
    uniqueid?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProductCreateFormOverridesProps = {
    ProductCreateFormGrid?: FormProps<GridProps>;
    title?: FormProps<TextFieldProps>;
    description?: FormProps<TextFieldProps>;
    yearcreated?: FormProps<TextFieldProps>;
    marketprice?: FormProps<TextFieldProps>;
    set?: FormProps<TextFieldProps>;
    untitledfield?: FormProps<TextFieldProps>;
    askingprice?: FormProps<TextFieldProps>;
    numberavailable?: FormProps<TextFieldProps>;
    uniqueid?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ProductCreateFormProps = React.PropsWithChildren<{
    overrides?: ProductCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ProductCreateFormInputValues) => ProductCreateFormInputValues;
    onSuccess?: (fields: ProductCreateFormInputValues) => void;
    onError?: (fields: ProductCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: ProductCreateFormInputValues) => ProductCreateFormInputValues;
    onValidate?: ProductCreateFormValidationValues;
} & React.CSSProperties>;
export default function ProductCreateForm(props: ProductCreateFormProps): React.ReactElement;
