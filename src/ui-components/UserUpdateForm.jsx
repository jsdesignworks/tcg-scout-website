/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { fetchByPath, validateField } from "./utils";
import { User } from "../models";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
export default function UserUpdateForm(props) {
  const {
    id,
    user,
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
    memberstart: undefined,
    username: undefined,
    image: undefined,
    brandingname: undefined,
    brandingimage: undefined,
    bio: undefined,
    name: undefined,
    location: undefined,
    banner: undefined,
    YTlink: undefined,
    FBlink: undefined,
    IGlink: undefined,
    TWEETlink: undefined,
  };
  const [memberstart, setMemberstart] = React.useState(
    initialValues.memberstart
  );
  const [username, setUsername] = React.useState(initialValues.username);
  const [image, setImage] = React.useState(initialValues.image);
  const [brandingname, setBrandingname] = React.useState(
    initialValues.brandingname
  );
  const [brandingimage, setBrandingimage] = React.useState(
    initialValues.brandingimage
  );
  const [bio, setBio] = React.useState(initialValues.bio);
  const [name, setName] = React.useState(initialValues.name);
  const [location, setLocation] = React.useState(initialValues.location);
  const [banner, setBanner] = React.useState(initialValues.banner);
  const [YTlink, setYTlink] = React.useState(initialValues.YTlink);
  const [FBlink, setFBlink] = React.useState(initialValues.FBlink);
  const [IGlink, setIGlink] = React.useState(initialValues.IGlink);
  const [TWEETlink, setTWEETlink] = React.useState(initialValues.TWEETlink);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = { ...initialValues, ...userRecord };
    setMemberstart(cleanValues.memberstart);
    setUsername(cleanValues.username);
    setImage(cleanValues.image);
    setBrandingname(cleanValues.brandingname);
    setBrandingimage(cleanValues.brandingimage);
    setBio(cleanValues.bio);
    setName(cleanValues.name);
    setLocation(cleanValues.location);
    setBanner(cleanValues.banner);
    setYTlink(cleanValues.YTlink);
    setFBlink(cleanValues.FBlink);
    setIGlink(cleanValues.IGlink);
    setTWEETlink(cleanValues.TWEETlink);
    setErrors({});
  };
  const [userRecord, setUserRecord] = React.useState(user);
  React.useEffect(() => {
    const queryData = async () => {
      const record = id ? await DataStore.query(User, id) : user;
      setUserRecord(record);
    };
    queryData();
  }, [id, user]);
  React.useEffect(resetStateValues, [userRecord]);
  const validations = {
    memberstart: [],
    username: [],
    image: [{ type: "URL" }],
    brandingname: [],
    brandingimage: [{ type: "URL" }],
    bio: [],
    name: [],
    location: [{ type: "IpAddress" }],
    banner: [{ type: "URL" }],
    YTlink: [{ type: "URL" }],
    FBlink: [{ type: "URL" }],
    IGlink: [{ type: "URL" }],
    TWEETlink: [{ type: "URL" }],
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
          memberstart,
          username,
          image: image || undefined,
          brandingname,
          brandingimage: brandingimage || undefined,
          bio,
          name,
          location,
          banner: banner || undefined,
          YTlink: YTlink || undefined,
          FBlink: FBlink || undefined,
          IGlink: IGlink || undefined,
          TWEETlink: TWEETlink || undefined,
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
            User.copyOf(userRecord, (updated) => {
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
      {...getOverrideProps(overrides, "UserUpdateForm")}
    >
      <TextField
        label="Memberstart"
        isRequired={false}
        isReadOnly={false}
        type="date"
        defaultValue={memberstart}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              memberstart: value,
              username,
              image,
              brandingname,
              brandingimage,
              bio,
              name,
              location,
              banner,
              YTlink,
              FBlink,
              IGlink,
              TWEETlink,
            };
            const result = onChange(modelFields);
            value = result?.memberstart ?? value;
          }
          if (errors.memberstart?.hasError) {
            runValidationTasks("memberstart", value);
          }
          setMemberstart(value);
        }}
        onBlur={() => runValidationTasks("memberstart", memberstart)}
        errorMessage={errors.memberstart?.errorMessage}
        hasError={errors.memberstart?.hasError}
        {...getOverrideProps(overrides, "memberstart")}
      ></TextField>
      <TextField
        label="Username"
        isRequired={false}
        isReadOnly={false}
        defaultValue={username}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              memberstart,
              username: value,
              image,
              brandingname,
              brandingimage,
              bio,
              name,
              location,
              banner,
              YTlink,
              FBlink,
              IGlink,
              TWEETlink,
            };
            const result = onChange(modelFields);
            value = result?.username ?? value;
          }
          if (errors.username?.hasError) {
            runValidationTasks("username", value);
          }
          setUsername(value);
        }}
        onBlur={() => runValidationTasks("username", username)}
        errorMessage={errors.username?.errorMessage}
        hasError={errors.username?.hasError}
        {...getOverrideProps(overrides, "username")}
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
              memberstart,
              username,
              image: value,
              brandingname,
              brandingimage,
              bio,
              name,
              location,
              banner,
              YTlink,
              FBlink,
              IGlink,
              TWEETlink,
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
        label="Brandingname"
        isRequired={false}
        isReadOnly={false}
        defaultValue={brandingname}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              memberstart,
              username,
              image,
              brandingname: value,
              brandingimage,
              bio,
              name,
              location,
              banner,
              YTlink,
              FBlink,
              IGlink,
              TWEETlink,
            };
            const result = onChange(modelFields);
            value = result?.brandingname ?? value;
          }
          if (errors.brandingname?.hasError) {
            runValidationTasks("brandingname", value);
          }
          setBrandingname(value);
        }}
        onBlur={() => runValidationTasks("brandingname", brandingname)}
        errorMessage={errors.brandingname?.errorMessage}
        hasError={errors.brandingname?.hasError}
        {...getOverrideProps(overrides, "brandingname")}
      ></TextField>
      <TextField
        label="Brandingimage"
        isRequired={false}
        isReadOnly={false}
        defaultValue={brandingimage}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              memberstart,
              username,
              image,
              brandingname,
              brandingimage: value,
              bio,
              name,
              location,
              banner,
              YTlink,
              FBlink,
              IGlink,
              TWEETlink,
            };
            const result = onChange(modelFields);
            value = result?.brandingimage ?? value;
          }
          if (errors.brandingimage?.hasError) {
            runValidationTasks("brandingimage", value);
          }
          setBrandingimage(value);
        }}
        onBlur={() => runValidationTasks("brandingimage", brandingimage)}
        errorMessage={errors.brandingimage?.errorMessage}
        hasError={errors.brandingimage?.hasError}
        {...getOverrideProps(overrides, "brandingimage")}
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
              memberstart,
              username,
              image,
              brandingname,
              brandingimage,
              bio: value,
              name,
              location,
              banner,
              YTlink,
              FBlink,
              IGlink,
              TWEETlink,
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
        label="Name"
        isRequired={false}
        isReadOnly={false}
        defaultValue={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              memberstart,
              username,
              image,
              brandingname,
              brandingimage,
              bio,
              name: value,
              location,
              banner,
              YTlink,
              FBlink,
              IGlink,
              TWEETlink,
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
        label="Location"
        isRequired={false}
        isReadOnly={false}
        defaultValue={location}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              memberstart,
              username,
              image,
              brandingname,
              brandingimage,
              bio,
              name,
              location: value,
              banner,
              YTlink,
              FBlink,
              IGlink,
              TWEETlink,
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
        label="Banner"
        isRequired={false}
        isReadOnly={false}
        defaultValue={banner}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              memberstart,
              username,
              image,
              brandingname,
              brandingimage,
              bio,
              name,
              location,
              banner: value,
              YTlink,
              FBlink,
              IGlink,
              TWEETlink,
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
        label="Y tlink"
        isRequired={false}
        isReadOnly={false}
        defaultValue={YTlink}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              memberstart,
              username,
              image,
              brandingname,
              brandingimage,
              bio,
              name,
              location,
              banner,
              YTlink: value,
              FBlink,
              IGlink,
              TWEETlink,
            };
            const result = onChange(modelFields);
            value = result?.YTlink ?? value;
          }
          if (errors.YTlink?.hasError) {
            runValidationTasks("YTlink", value);
          }
          setYTlink(value);
        }}
        onBlur={() => runValidationTasks("YTlink", YTlink)}
        errorMessage={errors.YTlink?.errorMessage}
        hasError={errors.YTlink?.hasError}
        {...getOverrideProps(overrides, "YTlink")}
      ></TextField>
      <TextField
        label="F blink"
        isRequired={false}
        isReadOnly={false}
        defaultValue={FBlink}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              memberstart,
              username,
              image,
              brandingname,
              brandingimage,
              bio,
              name,
              location,
              banner,
              YTlink,
              FBlink: value,
              IGlink,
              TWEETlink,
            };
            const result = onChange(modelFields);
            value = result?.FBlink ?? value;
          }
          if (errors.FBlink?.hasError) {
            runValidationTasks("FBlink", value);
          }
          setFBlink(value);
        }}
        onBlur={() => runValidationTasks("FBlink", FBlink)}
        errorMessage={errors.FBlink?.errorMessage}
        hasError={errors.FBlink?.hasError}
        {...getOverrideProps(overrides, "FBlink")}
      ></TextField>
      <TextField
        label="I glink"
        isRequired={false}
        isReadOnly={false}
        defaultValue={IGlink}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              memberstart,
              username,
              image,
              brandingname,
              brandingimage,
              bio,
              name,
              location,
              banner,
              YTlink,
              FBlink,
              IGlink: value,
              TWEETlink,
            };
            const result = onChange(modelFields);
            value = result?.IGlink ?? value;
          }
          if (errors.IGlink?.hasError) {
            runValidationTasks("IGlink", value);
          }
          setIGlink(value);
        }}
        onBlur={() => runValidationTasks("IGlink", IGlink)}
        errorMessage={errors.IGlink?.errorMessage}
        hasError={errors.IGlink?.hasError}
        {...getOverrideProps(overrides, "IGlink")}
      ></TextField>
      <TextField
        label="Twee tlink"
        isRequired={false}
        isReadOnly={false}
        defaultValue={TWEETlink}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              memberstart,
              username,
              image,
              brandingname,
              brandingimage,
              bio,
              name,
              location,
              banner,
              YTlink,
              FBlink,
              IGlink,
              TWEETlink: value,
            };
            const result = onChange(modelFields);
            value = result?.TWEETlink ?? value;
          }
          if (errors.TWEETlink?.hasError) {
            runValidationTasks("TWEETlink", value);
          }
          setTWEETlink(value);
        }}
        onBlur={() => runValidationTasks("TWEETlink", TWEETlink)}
        errorMessage={errors.TWEETlink?.errorMessage}
        hasError={errors.TWEETlink?.hasError}
        {...getOverrideProps(overrides, "TWEETlink")}
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
