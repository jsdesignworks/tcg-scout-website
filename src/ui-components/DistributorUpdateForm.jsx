/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { fetchByPath, validateField } from "./utils";
import { Distributor } from "../models";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import {
  Button,
  Flex,
  Grid,
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
export default function DistributorUpdateForm(props) {
  const {
    id,
    distributor,
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
    banner: undefined,
    name: undefined,
    contactemail: undefined,
    contactphone: undefined,
    bio: undefined,
    location: undefined,
    IPlocatio: undefined,
    Availability: false,
  };
  const [banner, setBanner] = React.useState(initialValues.banner);
  const [name, setName] = React.useState(initialValues.name);
  const [contactemail, setContactemail] = React.useState(
    initialValues.contactemail
  );
  const [contactphone, setContactphone] = React.useState(
    initialValues.contactphone
  );
  const [bio, setBio] = React.useState(initialValues.bio);
  const [location, setLocation] = React.useState(initialValues.location);
  const [IPlocatio, setIPlocatio] = React.useState(initialValues.IPlocatio);
  const [Availability, setAvailability] = React.useState(
    initialValues.Availability
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = { ...initialValues, ...distributorRecord };
    setBanner(cleanValues.banner);
    setName(cleanValues.name);
    setContactemail(cleanValues.contactemail);
    setContactphone(cleanValues.contactphone);
    setBio(cleanValues.bio);
    setLocation(cleanValues.location);
    setIPlocatio(cleanValues.IPlocatio);
    setAvailability(cleanValues.Availability);
    setErrors({});
  };
  const [distributorRecord, setDistributorRecord] = React.useState(distributor);
  React.useEffect(() => {
    const queryData = async () => {
      const record = id ? await DataStore.query(Distributor, id) : distributor;
      setDistributorRecord(record);
    };
    queryData();
  }, [id, distributor]);
  React.useEffect(resetStateValues, [distributorRecord]);
  const validations = {
    banner: [{ type: "URL" }],
    name: [],
    contactemail: [{ type: "Email" }],
    contactphone: [{ type: "Phone" }],
    bio: [],
    location: [],
    IPlocatio: [{ type: "IpAddress" }],
    Availability: [],
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
          banner: banner || undefined,
          name,
          contactemail,
          contactphone,
          bio,
          location,
          IPlocatio,
          Availability,
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
            Distributor.copyOf(distributorRecord, (updated) => {
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
      {...getOverrideProps(overrides, "DistributorUpdateForm")}
    >
      <TextField
        label="Banner"
        isRequired={false}
        isReadOnly={false}
        defaultValue={banner}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              banner: value,
              name,
              contactemail,
              contactphone,
              bio,
              location,
              IPlocatio,
              Availability,
            };
            const result = onChange(modelFields);
            value = result?.banner ?? value;
          }
          if (errors.banner?.hasError) {
            runValidationTasks("banner", value);
          }
          setBanner(value);
        }}
        onBlur={() => runValidationTasks("banner", banner)}
        errorMessage={errors.banner?.errorMessage}
        hasError={errors.banner?.hasError}
        {...getOverrideProps(overrides, "banner")}
      ></TextField>
      <TextField
        label="Name"
        isRequired={false}
        isReadOnly={false}
        defaultValue={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              banner,
              name: value,
              contactemail,
              contactphone,
              bio,
              location,
              IPlocatio,
              Availability,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Contactemail"
        isRequired={false}
        isReadOnly={false}
        defaultValue={contactemail}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              banner,
              name,
              contactemail: value,
              contactphone,
              bio,
              location,
              IPlocatio,
              Availability,
            };
            const result = onChange(modelFields);
            value = result?.contactemail ?? value;
          }
          if (errors.contactemail?.hasError) {
            runValidationTasks("contactemail", value);
          }
          setContactemail(value);
        }}
        onBlur={() => runValidationTasks("contactemail", contactemail)}
        errorMessage={errors.contactemail?.errorMessage}
        hasError={errors.contactemail?.hasError}
        {...getOverrideProps(overrides, "contactemail")}
      ></TextField>
      <TextField
        label="Contactphone"
        isRequired={false}
        isReadOnly={false}
        type="tel"
        defaultValue={contactphone}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              banner,
              name,
              contactemail,
              contactphone: value,
              bio,
              location,
              IPlocatio,
              Availability,
            };
            const result = onChange(modelFields);
            value = result?.contactphone ?? value;
          }
          if (errors.contactphone?.hasError) {
            runValidationTasks("contactphone", value);
          }
          setContactphone(value);
        }}
        onBlur={() => runValidationTasks("contactphone", contactphone)}
        errorMessage={errors.contactphone?.errorMessage}
        hasError={errors.contactphone?.hasError}
        {...getOverrideProps(overrides, "contactphone")}
      ></TextField>
      <TextField
        label="Bio"
        isRequired={false}
        isReadOnly={false}
        defaultValue={bio}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              banner,
              name,
              contactemail,
              contactphone,
              bio: value,
              location,
              IPlocatio,
              Availability,
            };
            const result = onChange(modelFields);
            value = result?.bio ?? value;
          }
          if (errors.bio?.hasError) {
            runValidationTasks("bio", value);
          }
          setBio(value);
        }}
        onBlur={() => runValidationTasks("bio", bio)}
        errorMessage={errors.bio?.errorMessage}
        hasError={errors.bio?.hasError}
        {...getOverrideProps(overrides, "bio")}
      ></TextField>
      <TextField
        label="Location"
        isRequired={false}
        isReadOnly={false}
        defaultValue={location}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              banner,
              name,
              contactemail,
              contactphone,
              bio,
              location: value,
              IPlocatio,
              Availability,
            };
            const result = onChange(modelFields);
            value = result?.location ?? value;
          }
          if (errors.location?.hasError) {
            runValidationTasks("location", value);
          }
          setLocation(value);
        }}
        onBlur={() => runValidationTasks("location", location)}
        errorMessage={errors.location?.errorMessage}
        hasError={errors.location?.hasError}
        {...getOverrideProps(overrides, "location")}
      ></TextField>
      <TextField
        label="I plocatio"
        isRequired={false}
        isReadOnly={false}
        defaultValue={IPlocatio}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              banner,
              name,
              contactemail,
              contactphone,
              bio,
              location,
              IPlocatio: value,
              Availability,
            };
            const result = onChange(modelFields);
            value = result?.IPlocatio ?? value;
          }
          if (errors.IPlocatio?.hasError) {
            runValidationTasks("IPlocatio", value);
          }
          setIPlocatio(value);
        }}
        onBlur={() => runValidationTasks("IPlocatio", IPlocatio)}
        errorMessage={errors.IPlocatio?.errorMessage}
        hasError={errors.IPlocatio?.hasError}
        {...getOverrideProps(overrides, "IPlocatio")}
      ></TextField>
      <SwitchField
        label="Availability"
        defaultChecked={false}
        isDisabled={false}
        isChecked={Availability}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              banner,
              name,
              contactemail,
              contactphone,
              bio,
              location,
              IPlocatio,
              Availability: value,
            };
            const result = onChange(modelFields);
            value = result?.Availability ?? value;
          }
          if (errors.Availability?.hasError) {
            runValidationTasks("Availability", value);
          }
          setAvailability(value);
        }}
        onBlur={() => runValidationTasks("Availability", Availability)}
        errorMessage={errors.Availability?.errorMessage}
        hasError={errors.Availability?.hasError}
        {...getOverrideProps(overrides, "Availability")}
      ></SwitchField>
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
