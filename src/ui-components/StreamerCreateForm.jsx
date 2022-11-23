/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { fetchByPath, validateField } from "./utils";
import { Streamer } from "../models";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
export default function StreamerCreateForm(props) {
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
    username: undefined,
    name: undefined,
    contactemail: undefined,
    channel: undefined,
    bio: undefined,
    image: undefined,
    membersince: undefined,
    location: undefined,
    channelcreated: undefined,
    banner: undefined,
    FBlink: undefined,
    YTlink: undefined,
    IGlink: undefined,
    TWEETlink: undefined,
    DRlink: undefined,
  };
  const [username, setUsername] = React.useState(initialValues.username);
  const [name, setName] = React.useState(initialValues.name);
  const [contactemail, setContactemail] = React.useState(
    initialValues.contactemail
  );
  const [channel, setChannel] = React.useState(initialValues.channel);
  const [bio, setBio] = React.useState(initialValues.bio);
  const [image, setImage] = React.useState(initialValues.image);
  const [membersince, setMembersince] = React.useState(
    initialValues.membersince
  );
  const [location, setLocation] = React.useState(initialValues.location);
  const [channelcreated, setChannelcreated] = React.useState(
    initialValues.channelcreated
  );
  const [banner, setBanner] = React.useState(initialValues.banner);
  const [FBlink, setFBlink] = React.useState(initialValues.FBlink);
  const [YTlink, setYTlink] = React.useState(initialValues.YTlink);
  const [IGlink, setIGlink] = React.useState(initialValues.IGlink);
  const [TWEETlink, setTWEETlink] = React.useState(initialValues.TWEETlink);
  const [DRlink, setDRlink] = React.useState(initialValues.DRlink);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setUsername(initialValues.username);
    setName(initialValues.name);
    setContactemail(initialValues.contactemail);
    setChannel(initialValues.channel);
    setBio(initialValues.bio);
    setImage(initialValues.image);
    setMembersince(initialValues.membersince);
    setLocation(initialValues.location);
    setChannelcreated(initialValues.channelcreated);
    setBanner(initialValues.banner);
    setFBlink(initialValues.FBlink);
    setYTlink(initialValues.YTlink);
    setIGlink(initialValues.IGlink);
    setTWEETlink(initialValues.TWEETlink);
    setDRlink(initialValues.DRlink);
    setErrors({});
  };
  const validations = {
    username: [],
    name: [],
    contactemail: [{ type: "Email" }],
    channel: [{ type: "URL" }],
    bio: [],
    image: [{ type: "URL" }],
    membersince: [],
    location: [{ type: "IpAddress" }],
    channelcreated: [],
    banner: [{ type: "URL" }],
    FBlink: [{ type: "URL" }],
    YTlink: [{ type: "URL" }],
    IGlink: [{ type: "URL" }],
    TWEETlink: [{ type: "URL" }],
    DRlink: [{ type: "URL" }],
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
          username,
          name,
          contactemail,
          channel: channel || undefined,
          bio,
          image: image || undefined,
          membersince,
          location,
          channelcreated,
          banner: banner || undefined,
          FBlink: FBlink || undefined,
          YTlink: YTlink || undefined,
          IGlink: IGlink || undefined,
          TWEETlink: TWEETlink || undefined,
          DRlink: DRlink || undefined,
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
          await DataStore.save(new Streamer(modelFields));
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
      {...getOverrideProps(overrides, "StreamerCreateForm")}
    >
      <TextField
        label="Username"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              username: value,
              name,
              contactemail,
              channel,
              bio,
              image,
              membersince,
              location,
              channelcreated,
              banner,
              FBlink,
              YTlink,
              IGlink,
              TWEETlink,
              DRlink,
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
        label="Name"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              username,
              name: value,
              contactemail,
              channel,
              bio,
              image,
              membersince,
              location,
              channelcreated,
              banner,
              FBlink,
              YTlink,
              IGlink,
              TWEETlink,
              DRlink,
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
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              username,
              name,
              contactemail: value,
              channel,
              bio,
              image,
              membersince,
              location,
              channelcreated,
              banner,
              FBlink,
              YTlink,
              IGlink,
              TWEETlink,
              DRlink,
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
        label="Channel"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              username,
              name,
              contactemail,
              channel: value,
              bio,
              image,
              membersince,
              location,
              channelcreated,
              banner,
              FBlink,
              YTlink,
              IGlink,
              TWEETlink,
              DRlink,
            };
            const result = onChange(modelFields);
            value = result?.channel ?? value;
          }
          if (errors.channel?.hasError) {
            runValidationTasks("channel", value);
          }
          setChannel(value);
        }}
        onBlur={() => runValidationTasks("channel", channel)}
        errorMessage={errors.channel?.errorMessage}
        hasError={errors.channel?.hasError}
        {...getOverrideProps(overrides, "channel")}
      ></TextField>
      <TextField
        label="Bio"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              username,
              name,
              contactemail,
              channel,
              bio: value,
              image,
              membersince,
              location,
              channelcreated,
              banner,
              FBlink,
              YTlink,
              IGlink,
              TWEETlink,
              DRlink,
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
        label="Image"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              username,
              name,
              contactemail,
              channel,
              bio,
              image: value,
              membersince,
              location,
              channelcreated,
              banner,
              FBlink,
              YTlink,
              IGlink,
              TWEETlink,
              DRlink,
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
        label="Membersince"
        isRequired={false}
        isReadOnly={false}
        type="date"
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              username,
              name,
              contactemail,
              channel,
              bio,
              image,
              membersince: value,
              location,
              channelcreated,
              banner,
              FBlink,
              YTlink,
              IGlink,
              TWEETlink,
              DRlink,
            };
            const result = onChange(modelFields);
            value = result?.membersince ?? value;
          }
          if (errors.membersince?.hasError) {
            runValidationTasks("membersince", value);
          }
          setMembersince(value);
        }}
        onBlur={() => runValidationTasks("membersince", membersince)}
        errorMessage={errors.membersince?.errorMessage}
        hasError={errors.membersince?.hasError}
        {...getOverrideProps(overrides, "membersince")}
      ></TextField>
      <TextField
        label="Location"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              username,
              name,
              contactemail,
              channel,
              bio,
              image,
              membersince,
              location: value,
              channelcreated,
              banner,
              FBlink,
              YTlink,
              IGlink,
              TWEETlink,
              DRlink,
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
        label="Channelcreated"
        isRequired={false}
        isReadOnly={false}
        type="date"
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              username,
              name,
              contactemail,
              channel,
              bio,
              image,
              membersince,
              location,
              channelcreated: value,
              banner,
              FBlink,
              YTlink,
              IGlink,
              TWEETlink,
              DRlink,
            };
            const result = onChange(modelFields);
            value = result?.channelcreated ?? value;
          }
          if (errors.channelcreated?.hasError) {
            runValidationTasks("channelcreated", value);
          }
          setChannelcreated(value);
        }}
        onBlur={() => runValidationTasks("channelcreated", channelcreated)}
        errorMessage={errors.channelcreated?.errorMessage}
        hasError={errors.channelcreated?.hasError}
        {...getOverrideProps(overrides, "channelcreated")}
      ></TextField>
      <TextField
        label="Banner"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              username,
              name,
              contactemail,
              channel,
              bio,
              image,
              membersince,
              location,
              channelcreated,
              banner: value,
              FBlink,
              YTlink,
              IGlink,
              TWEETlink,
              DRlink,
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
        label="F blink"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              username,
              name,
              contactemail,
              channel,
              bio,
              image,
              membersince,
              location,
              channelcreated,
              banner,
              FBlink: value,
              YTlink,
              IGlink,
              TWEETlink,
              DRlink,
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
        label="Y tlink"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              username,
              name,
              contactemail,
              channel,
              bio,
              image,
              membersince,
              location,
              channelcreated,
              banner,
              FBlink,
              YTlink: value,
              IGlink,
              TWEETlink,
              DRlink,
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
        label="I glink"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              username,
              name,
              contactemail,
              channel,
              bio,
              image,
              membersince,
              location,
              channelcreated,
              banner,
              FBlink,
              YTlink,
              IGlink: value,
              TWEETlink,
              DRlink,
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
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              username,
              name,
              contactemail,
              channel,
              bio,
              image,
              membersince,
              location,
              channelcreated,
              banner,
              FBlink,
              YTlink,
              IGlink,
              TWEETlink: value,
              DRlink,
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
      <TextField
        label="D rlink"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              username,
              name,
              contactemail,
              channel,
              bio,
              image,
              membersince,
              location,
              channelcreated,
              banner,
              FBlink,
              YTlink,
              IGlink,
              TWEETlink,
              DRlink: value,
            };
            const result = onChange(modelFields);
            value = result?.DRlink ?? value;
          }
          if (errors.DRlink?.hasError) {
            runValidationTasks("DRlink", value);
          }
          setDRlink(value);
        }}
        onBlur={() => runValidationTasks("DRlink", DRlink)}
        errorMessage={errors.DRlink?.errorMessage}
        hasError={errors.DRlink?.hasError}
        {...getOverrideProps(overrides, "DRlink")}
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
