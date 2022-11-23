/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { fetchByPath, validateField } from "./utils";
import { ADplaceholder } from "../models";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
export default function ADplaceholderUpdateForm(props) {
  const {
    id,
    aDplaceholder,
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
    subtitle: undefined,
    image: undefined,
    link: undefined,
    createdby: undefined,
    locationcreated: undefined,
    usericon: undefined,
    userID: undefined,
    streamerID: undefined,
    storeID: undefined,
  };
  const [title, setTitle] = React.useState(initialValues.title);
  const [subtitle, setSubtitle] = React.useState(initialValues.subtitle);
  const [image, setImage] = React.useState(initialValues.image);
  const [link, setLink] = React.useState(initialValues.link);
  const [createdby, setCreatedby] = React.useState(initialValues.createdby);
  const [locationcreated, setLocationcreated] = React.useState(
    initialValues.locationcreated
  );
  const [usericon, setUsericon] = React.useState(initialValues.usericon);
  const [userID, setUserID] = React.useState(initialValues.userID);
  const [streamerID, setStreamerID] = React.useState(initialValues.streamerID);
  const [storeID, setStoreID] = React.useState(initialValues.storeID);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = { ...initialValues, ...aDplaceholderRecord };
    setTitle(cleanValues.title);
    setSubtitle(cleanValues.subtitle);
    setImage(cleanValues.image);
    setLink(cleanValues.link);
    setCreatedby(cleanValues.createdby);
    setLocationcreated(cleanValues.locationcreated);
    setUsericon(cleanValues.usericon);
    setUserID(cleanValues.userID);
    setStreamerID(cleanValues.streamerID);
    setStoreID(cleanValues.storeID);
    setErrors({});
  };
  const [aDplaceholderRecord, setADplaceholderRecord] =
    React.useState(aDplaceholder);
  React.useEffect(() => {
    const queryData = async () => {
      const record = id
        ? await DataStore.query(ADplaceholder, id)
        : aDplaceholder;
      setADplaceholderRecord(record);
    };
    queryData();
  }, [id, aDplaceholder]);
  React.useEffect(resetStateValues, [aDplaceholderRecord]);
  const validations = {
    title: [],
    subtitle: [],
    image: [{ type: "URL" }],
    link: [{ type: "URL" }],
    createdby: [{ type: "URL" }],
    locationcreated: [{ type: "IpAddress" }],
    usericon: [{ type: "URL" }],
    userID: [{ type: "Required" }],
    streamerID: [{ type: "Required" }],
    storeID: [{ type: "Required" }],
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
          subtitle,
          image: image || undefined,
          link: link || undefined,
          createdby: createdby || undefined,
          locationcreated,
          usericon: usericon || undefined,
          userID,
          streamerID,
          storeID,
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
            ADplaceholder.copyOf(aDplaceholderRecord, (updated) => {
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
      {...getOverrideProps(overrides, "ADplaceholderUpdateForm")}
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
              subtitle,
              image,
              link,
              createdby,
              locationcreated,
              usericon,
              userID,
              streamerID,
              storeID,
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
        label="Subtitle"
        isRequired={false}
        isReadOnly={false}
        defaultValue={subtitle}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              subtitle: value,
              image,
              link,
              createdby,
              locationcreated,
              usericon,
              userID,
              streamerID,
              storeID,
            };
            const result = onChange(modelFields);
            value = result?.subtitle ?? value;
          }
          if (errors.subtitle?.hasError) {
            runValidationTasks("subtitle", value);
          }
          setSubtitle(value);
        }}
        onBlur={() => runValidationTasks("subtitle", subtitle)}
        errorMessage={errors.subtitle?.errorMessage}
        hasError={errors.subtitle?.hasError}
        {...getOverrideProps(overrides, "subtitle")}
      ></TextField>
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
              subtitle,
              image: value,
              link,
              createdby,
              locationcreated,
              usericon,
              userID,
              streamerID,
              storeID,
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
      <TextField
        label="Link"
        isRequired={false}
        isReadOnly={false}
        defaultValue={link}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              subtitle,
              image,
              link: value,
              createdby,
              locationcreated,
              usericon,
              userID,
              streamerID,
              storeID,
            };
            const result = onChange(modelFields);
            value = result?.link ?? value;
          }
          if (errors.link?.hasError) {
            runValidationTasks("link", value);
          }
          setLink(value);
        }}
        onBlur={() => runValidationTasks("link", link)}
        errorMessage={errors.link?.errorMessage}
        hasError={errors.link?.hasError}
        {...getOverrideProps(overrides, "link")}
      ></TextField>
      <TextField
        label="Createdby"
        isRequired={false}
        isReadOnly={false}
        defaultValue={createdby}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              subtitle,
              image,
              link,
              createdby: value,
              locationcreated,
              usericon,
              userID,
              streamerID,
              storeID,
            };
            const result = onChange(modelFields);
            value = result?.createdby ?? value;
          }
          if (errors.createdby?.hasError) {
            runValidationTasks("createdby", value);
          }
          setCreatedby(value);
        }}
        onBlur={() => runValidationTasks("createdby", createdby)}
        errorMessage={errors.createdby?.errorMessage}
        hasError={errors.createdby?.hasError}
        {...getOverrideProps(overrides, "createdby")}
      ></TextField>
      <TextField
        label="Locationcreated"
        isRequired={false}
        isReadOnly={false}
        defaultValue={locationcreated}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              subtitle,
              image,
              link,
              createdby,
              locationcreated: value,
              usericon,
              userID,
              streamerID,
              storeID,
            };
            const result = onChange(modelFields);
            value = result?.locationcreated ?? value;
          }
          if (errors.locationcreated?.hasError) {
            runValidationTasks("locationcreated", value);
          }
          setLocationcreated(value);
        }}
        onBlur={() => runValidationTasks("locationcreated", locationcreated)}
        errorMessage={errors.locationcreated?.errorMessage}
        hasError={errors.locationcreated?.hasError}
        {...getOverrideProps(overrides, "locationcreated")}
      ></TextField>
      <TextField
        label="Usericon"
        isRequired={false}
        isReadOnly={false}
        defaultValue={usericon}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              subtitle,
              image,
              link,
              createdby,
              locationcreated,
              usericon: value,
              userID,
              streamerID,
              storeID,
            };
            const result = onChange(modelFields);
            value = result?.usericon ?? value;
          }
          if (errors.usericon?.hasError) {
            runValidationTasks("usericon", value);
          }
          setUsericon(value);
        }}
        onBlur={() => runValidationTasks("usericon", usericon)}
        errorMessage={errors.usericon?.errorMessage}
        hasError={errors.usericon?.hasError}
        {...getOverrideProps(overrides, "usericon")}
      ></TextField>
      <TextField
        label="User id"
        isRequired={true}
        isReadOnly={false}
        defaultValue={userID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              subtitle,
              image,
              link,
              createdby,
              locationcreated,
              usericon,
              userID: value,
              streamerID,
              storeID,
            };
            const result = onChange(modelFields);
            value = result?.userID ?? value;
          }
          if (errors.userID?.hasError) {
            runValidationTasks("userID", value);
          }
          setUserID(value);
        }}
        onBlur={() => runValidationTasks("userID", userID)}
        errorMessage={errors.userID?.errorMessage}
        hasError={errors.userID?.hasError}
        {...getOverrideProps(overrides, "userID")}
      ></TextField>
      <TextField
        label="Streamer id"
        isRequired={true}
        isReadOnly={false}
        defaultValue={streamerID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              subtitle,
              image,
              link,
              createdby,
              locationcreated,
              usericon,
              userID,
              streamerID: value,
              storeID,
            };
            const result = onChange(modelFields);
            value = result?.streamerID ?? value;
          }
          if (errors.streamerID?.hasError) {
            runValidationTasks("streamerID", value);
          }
          setStreamerID(value);
        }}
        onBlur={() => runValidationTasks("streamerID", streamerID)}
        errorMessage={errors.streamerID?.errorMessage}
        hasError={errors.streamerID?.hasError}
        {...getOverrideProps(overrides, "streamerID")}
      ></TextField>
      <TextField
        label="Store id"
        isRequired={true}
        isReadOnly={false}
        defaultValue={storeID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              subtitle,
              image,
              link,
              createdby,
              locationcreated,
              usericon,
              userID,
              streamerID,
              storeID: value,
            };
            const result = onChange(modelFields);
            value = result?.storeID ?? value;
          }
          if (errors.storeID?.hasError) {
            runValidationTasks("storeID", value);
          }
          setStoreID(value);
        }}
        onBlur={() => runValidationTasks("storeID", storeID)}
        errorMessage={errors.storeID?.errorMessage}
        hasError={errors.storeID?.hasError}
        {...getOverrideProps(overrides, "storeID")}
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
