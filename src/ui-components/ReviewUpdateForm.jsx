/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { fetchByPath, validateField } from "./utils";
import { Review } from "../models";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import {
  Button,
  Flex,
  Grid,
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
export default function ReviewUpdateForm(props) {
  const {
    id,
    review,
    onSuccess,
    onError,
    onSubmit,
    onCancel,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    title: undefined,
    reviewedby: undefined,
    reviewdate: undefined,
    reviewbody: undefined,
    reviewrating: undefined,
    reviewapproved: false,
    image: undefined,
  };
  const [title, setTitle] = React.useState(initialValues.title);
  const [reviewedby, setReviewedby] = React.useState(initialValues.reviewedby);
  const [reviewdate, setReviewdate] = React.useState(initialValues.reviewdate);
  const [reviewbody, setReviewbody] = React.useState(initialValues.reviewbody);
  const [reviewrating, setReviewrating] = React.useState(
    initialValues.reviewrating
  );
  const [reviewapproved, setReviewapproved] = React.useState(
    initialValues.reviewapproved
  );
  const [image, setImage] = React.useState(initialValues.image);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = { ...initialValues, ...reviewRecord };
    setTitle(cleanValues.title);
    setReviewedby(cleanValues.reviewedby);
    setReviewdate(cleanValues.reviewdate);
    setReviewbody(cleanValues.reviewbody);
    setReviewrating(cleanValues.reviewrating);
    setReviewapproved(cleanValues.reviewapproved);
    setImage(cleanValues.image);
    setErrors({});
  };
  const [reviewRecord, setReviewRecord] = React.useState(review);
  React.useEffect(() => {
    const queryData = async () => {
      const record = id ? await DataStore.query(Review, id) : review;
      setReviewRecord(record);
    };
    queryData();
  }, [id, review]);
  React.useEffect(resetStateValues, [reviewRecord]);
  const validations = {
    title: [],
    reviewedby: [{ type: "URL" }],
    reviewdate: [],
    reviewbody: [],
    reviewrating: [],
    reviewapproved: [],
    image: [{ type: "URL" }],
  };
  const runValidationTasks = async (fieldName, value) => {
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          title,
          reviewedby: reviewedby || undefined,
          reviewdate,
          reviewbody,
          reviewrating,
          reviewapproved,
          image: image || undefined,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          await DataStore.save(
            Review.copyOf(reviewRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...rest}
      {...getOverrideProps(overrides, "ReviewUpdateForm")}
    >
      <TextField
        label="Title"
        isRequired={false}
        isReadOnly={false}
        defaultValue={title}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title: value,
              reviewedby,
              reviewdate,
              reviewbody,
              reviewrating,
              reviewapproved,
              image,
            };
            const result = onChange(modelFields);
            value = result?.title ?? value;
          }
          if (errors.title?.hasError) {
            runValidationTasks("title", value);
          }
          setTitle(value);
        }}
        onBlur={() => runValidationTasks("title", title)}
        errorMessage={errors.title?.errorMessage}
        hasError={errors.title?.hasError}
        {...getOverrideProps(overrides, "title")}
      ></TextField>
      <TextField
        label="Reviewedby"
        isRequired={false}
        isReadOnly={false}
        defaultValue={reviewedby}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              reviewedby: value,
              reviewdate,
              reviewbody,
              reviewrating,
              reviewapproved,
              image,
            };
            const result = onChange(modelFields);
            value = result?.reviewedby ?? value;
          }
          if (errors.reviewedby?.hasError) {
            runValidationTasks("reviewedby", value);
          }
          setReviewedby(value);
        }}
        onBlur={() => runValidationTasks("reviewedby", reviewedby)}
        errorMessage={errors.reviewedby?.errorMessage}
        hasError={errors.reviewedby?.hasError}
        {...getOverrideProps(overrides, "reviewedby")}
      ></TextField>
      <TextField
        label="Reviewdate"
        isRequired={false}
        isReadOnly={false}
        type="date"
        defaultValue={reviewdate}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              reviewedby,
              reviewdate: value,
              reviewbody,
              reviewrating,
              reviewapproved,
              image,
            };
            const result = onChange(modelFields);
            value = result?.reviewdate ?? value;
          }
          if (errors.reviewdate?.hasError) {
            runValidationTasks("reviewdate", value);
          }
          setReviewdate(value);
        }}
        onBlur={() => runValidationTasks("reviewdate", reviewdate)}
        errorMessage={errors.reviewdate?.errorMessage}
        hasError={errors.reviewdate?.hasError}
        {...getOverrideProps(overrides, "reviewdate")}
      ></TextField>
      <TextField
        label="Reviewbody"
        isRequired={false}
        isReadOnly={false}
        defaultValue={reviewbody}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              reviewedby,
              reviewdate,
              reviewbody: value,
              reviewrating,
              reviewapproved,
              image,
            };
            const result = onChange(modelFields);
            value = result?.reviewbody ?? value;
          }
          if (errors.reviewbody?.hasError) {
            runValidationTasks("reviewbody", value);
          }
          setReviewbody(value);
        }}
        onBlur={() => runValidationTasks("reviewbody", reviewbody)}
        errorMessage={errors.reviewbody?.errorMessage}
        hasError={errors.reviewbody?.hasError}
        {...getOverrideProps(overrides, "reviewbody")}
      ></TextField>
      <TextField
        label="Reviewrating"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        defaultValue={reviewrating}
        onChange={(e) => {
          let value = parseInt(e.target.value);
          if (isNaN(value)) {
            setErrors((errors) => ({
              ...errors,
              reviewrating: "Value must be a valid number",
            }));
            return;
          }
          if (onChange) {
            const modelFields = {
              title,
              reviewedby,
              reviewdate,
              reviewbody,
              reviewrating: value,
              reviewapproved,
              image,
            };
            const result = onChange(modelFields);
            value = result?.reviewrating ?? value;
          }
          if (errors.reviewrating?.hasError) {
            runValidationTasks("reviewrating", value);
          }
          setReviewrating(value);
        }}
        onBlur={() => runValidationTasks("reviewrating", reviewrating)}
        errorMessage={errors.reviewrating?.errorMessage}
        hasError={errors.reviewrating?.hasError}
        {...getOverrideProps(overrides, "reviewrating")}
      ></TextField>
      <SwitchField
        label="Reviewapproved"
        defaultChecked={false}
        isDisabled={false}
        isChecked={reviewapproved}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              title,
              reviewedby,
              reviewdate,
              reviewbody,
              reviewrating,
              reviewapproved: value,
              image,
            };
            const result = onChange(modelFields);
            value = result?.reviewapproved ?? value;
          }
          if (errors.reviewapproved?.hasError) {
            runValidationTasks("reviewapproved", value);
          }
          setReviewapproved(value);
        }}
        onBlur={() => runValidationTasks("reviewapproved", reviewapproved)}
        errorMessage={errors.reviewapproved?.errorMessage}
        hasError={errors.reviewapproved?.hasError}
        {...getOverrideProps(overrides, "reviewapproved")}
      ></SwitchField>
      <TextField
        label="Image"
        isRequired={false}
        isReadOnly={false}
        defaultValue={image}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              reviewedby,
              reviewdate,
              reviewbody,
              reviewrating,
              reviewapproved,
              image: value,
            };
            const result = onChange(modelFields);
            value = result?.image ?? value;
          }
          if (errors.image?.hasError) {
            runValidationTasks("image", value);
          }
          setImage(value);
        }}
        onBlur={() => runValidationTasks("image", image)}
        errorMessage={errors.image?.errorMessage}
        hasError={errors.image?.hasError}
        {...getOverrideProps(overrides, "image")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={resetStateValues}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Cancel"
            type="button"
            onClick={() => {
              onCancel && onCancel();
            }}
            {...getOverrideProps(overrides, "CancelButton")}
          ></Button>
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
