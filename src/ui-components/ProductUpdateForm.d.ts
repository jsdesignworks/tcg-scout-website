/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Product } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ProductUpdateFormInputValues = {
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
export declare type ProductUpdateFormValidationValues = {
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
export declare type ProductUpdateFormOverridesProps = {
    ProductUpdateFormGrid?: FormProps<GridProps>;
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
export declare type ProductUpdateFormProps = React.PropsWithChildren<{
    overrides?: ProductUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    product?: Product;
    onSubmit?: (fields: ProductUpdateFormInputValues) => ProductUpdateFormInputValues;
    onSuccess?: (fields: ProductUpdateFormInputValues) => void;
    onError?: (fields: ProductUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: ProductUpdateFormInputValues) => ProductUpdateFormInputValues;
    onValidate?: ProductUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ProductUpdateForm(props: ProductUpdateFormProps): React.ReactElement;
