/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Review } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ReviewUpdateFormInputValues = {
    title?: string;
    reviewedby?: string;
    reviewdate?: string;
    reviewbody?: string;
    reviewrating?: number;
    reviewapproved?: boolean;
    image?: string;
};
export declare type ReviewUpdateFormValidationValues = {
    title?: ValidationFunction<string>;
    reviewedby?: ValidationFunction<string>;
    reviewdate?: ValidationFunction<string>;
    reviewbody?: ValidationFunction<string>;
    reviewrating?: ValidationFunction<number>;
    reviewapproved?: ValidationFunction<boolean>;
    image?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ReviewUpdateFormOverridesProps = {
    ReviewUpdateFormGrid?: FormProps<GridProps>;
    title?: FormProps<TextFieldProps>;
    reviewedby?: FormProps<TextFieldProps>;
    reviewdate?: FormProps<TextFieldProps>;
    reviewbody?: FormProps<TextFieldProps>;
    reviewrating?: FormProps<TextFieldProps>;
    reviewapproved?: FormProps<SwitchFieldProps>;
    image?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ReviewUpdateFormProps = React.PropsWithChildren<{
    overrides?: ReviewUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    review?: Review;
    onSubmit?: (fields: ReviewUpdateFormInputValues) => ReviewUpdateFormInputValues;
    onSuccess?: (fields: ReviewUpdateFormInputValues) => void;
    onError?: (fields: ReviewUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: ReviewUpdateFormInputValues) => ReviewUpdateFormInputValues;
    onValidate?: ReviewUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ReviewUpdateForm(props: ReviewUpdateFormProps): React.ReactElement;
