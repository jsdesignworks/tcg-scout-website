/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { fetchByPath, validateField } from "./utils";
import { Product } from "../models";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
export default function ProductCreateForm(props) {
  const {
    clearOnSuccess = true,
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
    description: undefined,
    yearcreated: undefined,
    marketprice: undefined,
    set: undefined,
    untitledfield: undefined,
    askingprice: undefined,
    numberavailable: undefined,
    uniqueid: undefined,
  };
  const [title, setTitle] = React.useState(initialValues.title);
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [yearcreated, setYearcreated] = React.useState(
    initialValues.yearcreated
  );
  const [marketprice, setMarketprice] = React.useState(
    initialValues.marketprice
  );
  const [set, setSet] = React.useState(initialValues.set);
  const [untitledfield, setUntitledfield] = React.useState(
    initialValues.untitledfield
  );
  const [askingprice, setAskingprice] = React.useState(
    initialValues.askingprice
  );
  const [numberavailable, setNumberavailable] = React.useState(
    initialValues.numberavailable
  );
  const [uniqueid, setUniqueid] = React.useState(initialValues.uniqueid);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setTitle(initialValues.title);
    setDescription(initialValues.description);
    setYearcreated(initialValues.yearcreated);
    setMarketprice(initialValues.marketprice);
    setSet(initialValues.set);
    setUntitledfield(initialValues.untitledfield);
    setAskingprice(initialValues.askingprice);
    setNumberavailable(initialValues.numberavailable);
    setUniqueid(initialValues.uniqueid);
    setErrors({});
  };
  const validations = {
    title: [],
    description: [],
    yearcreated: [],
    marketprice: [],
    set: [],
    untitledfield: [],
    askingprice: [],
    numberavailable: [],
    uniqueid: [],
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
          description,
          yearcreated,
          marketprice,
          set,
          untitledfield,
          askingprice,
          numberavailable,
          uniqueid,
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
          await DataStore.save(new Product(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...rest}
      {...getOverrideProps(overrides, "ProductCreateForm")}
    >
      <TextField
        label="Title"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title: value,
              description,
              yearcreated,
              marketprice,
              set,
              untitledfield,
              askingprice,
              numberavailable,
              uniqueid,
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
        label="Description"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              description: value,
              yearcreated,
              marketprice,
              set,
              untitledfield,
              askingprice,
              numberavailable,
              uniqueid,
            };
            const result = onChange(modelFields);
            value = result?.description ?? value;
          }
          if (errors.description?.hasError) {
            runValidationTasks("description", value);
          }
          setDescription(value);
        }}
        onBlur={() => runValidationTasks("description", description)}
        errorMessage={errors.description?.errorMessage}
        hasError={errors.description?.hasError}
        {...getOverrideProps(overrides, "description")}
      ></TextField>
      <TextField
        label="Yearcreated"
        isRequired={false}
        isReadOnly={false}
        type="date"
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              description,
              yearcreated: value,
              marketprice,
              set,
              untitledfield,
              askingprice,
              numberavailable,
              uniqueid,
            };
            const result = onChange(modelFields);
            value = result?.yearcreated ?? value;
          }
          if (errors.yearcreated?.hasError) {
            runValidationTasks("yearcreated", value);
          }
          setYearcreated(value);
        }}
        onBlur={() => runValidationTasks("yearcreated", yearcreated)}
        errorMessage={errors.yearcreated?.errorMessage}
        hasError={errors.yearcreated?.hasError}
        {...getOverrideProps(overrides, "yearcreated")}
      ></TextField>
      <TextField
        label="Marketprice"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        onChange={(e) => {
          let value = parseInt(e.target.value);
          if (isNaN(value)) {
            setErrors((errors) => ({
              ...errors,
              marketprice: "Value must be a valid number",
            }));
            return;
          }
          if (onChange) {
            const modelFields = {
              title,
              description,
              yearcreated,
              marketprice: value,
              set,
              untitledfield,
              askingprice,
              numberavailable,
              uniqueid,
            };
            const result = onChange(modelFields);
            value = result?.marketprice ?? value;
          }
          if (errors.marketprice?.hasError) {
            runValidationTasks("marketprice", value);
          }
          setMarketprice(value);
        }}
        onBlur={() => runValidationTasks("marketprice", marketprice)}
        errorMessage={errors.marketprice?.errorMessage}
        hasError={errors.marketprice?.hasError}
        {...getOverrideProps(overrides, "marketprice")}
      ></TextField>
      <TextField
        label="Set"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              description,
              yearcreated,
              marketprice,
              set: value,
              untitledfield,
              askingprice,
              numberavailable,
              uniqueid,
            };
            const result = onChange(modelFields);
            value = result?.set ?? value;
          }
          if (errors.set?.hasError) {
            runValidationTasks("set", value);
          }
          setSet(value);
        }}
        onBlur={() => runValidationTasks("set", set)}
        errorMessage={errors.set?.errorMessage}
        hasError={errors.set?.hasError}
        {...getOverrideProps(overrides, "set")}
      ></TextField>
      <TextField
        label="Untitledfield"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              description,
              yearcreated,
              marketprice,
              set,
              untitledfield: value,
              askingprice,
              numberavailable,
              uniqueid,
            };
            const result = onChange(modelFields);
            value = result?.untitledfield ?? value;
          }
          if (errors.untitledfield?.hasError) {
            runValidationTasks("untitledfield", value);
          }
          setUntitledfield(value);
        }}
        onBlur={() => runValidationTasks("untitledfield", untitledfield)}
        errorMessage={errors.untitledfield?.errorMessage}
        hasError={errors.untitledfield?.hasError}
        {...getOverrideProps(overrides, "untitledfield")}
      ></TextField>
      <TextField
        label="Askingprice"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        onChange={(e) => {
          let value = parseInt(e.target.value);
          if (isNaN(value)) {
            setErrors((errors) => ({
              ...errors,
              askingprice: "Value must be a valid number",
            }));
            return;
          }
          if (onChange) {
            const modelFields = {
              title,
              description,
              yearcreated,
              marketprice,
              set,
              untitledfield,
              askingprice: value,
              numberavailable,
              uniqueid,
            };
            const result = onChange(modelFields);
            value = result?.askingprice ?? value;
          }
          if (errors.askingprice?.hasError) {
            runValidationTasks("askingprice", value);
          }
          setAskingprice(value);
        }}
        onBlur={() => runValidationTasks("askingprice", askingprice)}
        errorMessage={errors.askingprice?.errorMessage}
        hasError={errors.askingprice?.hasError}
        {...getOverrideProps(overrides, "askingprice")}
      ></TextField>
      <TextField
        label="Numberavailable"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        onChange={(e) => {
          let value = parseInt(e.target.value);
          if (isNaN(value)) {
            setErrors((errors) => ({
              ...errors,
              numberavailable: "Value must be a valid number",
            }));
            return;
          }
          if (onChange) {
            const modelFields = {
              title,
              description,
              yearcreated,
              marketprice,
              set,
              untitledfield,
              askingprice,
              numberavailable: value,
              uniqueid,
            };
            const result = onChange(modelFields);
            value = result?.numberavailable ?? value;
          }
          if (errors.numberavailable?.hasError) {
            runValidationTasks("numberavailable", value);
          }
          setNumberavailable(value);
        }}
        onBlur={() => runValidationTasks("numberavailable", numberavailable)}
        errorMessage={errors.numberavailable?.errorMessage}
        hasError={errors.numberavailable?.hasError}
        {...getOverrideProps(overrides, "numberavailable")}
      ></TextField>
      <TextField
        label="Uniqueid"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              description,
              yearcreated,
              marketprice,
              set,
              untitledfield,
              askingprice,
              numberavailable,
              uniqueid: value,
            };
            const result = onChange(modelFields);
            value = result?.uniqueid ?? value;
          }
          if (errors.uniqueid?.hasError) {
            runValidationTasks("uniqueid", value);
          }
          setUniqueid(value);
        }}
        onBlur={() => runValidationTasks("uniqueid", uniqueid)}
        errorMessage={errors.uniqueid?.errorMessage}
        hasError={errors.uniqueid?.hasError}
        {...getOverrideProps(overrides, "uniqueid")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={resetStateValues}
          {...getOverrideProps(overrides, "ClearButton")}
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
