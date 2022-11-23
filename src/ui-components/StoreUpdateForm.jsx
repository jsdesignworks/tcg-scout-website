/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { fetchByPath, validateField } from "./utils";
import { Store } from "../models";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
export default function StoreUpdateForm(props) {
  const {
    id,
    store,
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
    brandimage: undefined,
    brandprimary: undefined,
    brandsecondary: undefined,
    brandbio: undefined,
    brandphone: undefined,
    brandemail: undefined,
    location: undefined,
    brandcreated: undefined,
    membersince: undefined,
    banner: undefined,
    TCGlink: undefined,
    TTlink: undefined,
    YTlink: undefined,
    FBlink: undefined,
    IGlink: undefined,
    TWEETlin: undefined,
    GSlink: undefined,
  };
  const [brandimage, setBrandimage] = React.useState(initialValues.brandimage);
  const [brandprimary, setBrandprimary] = React.useState(
    initialValues.brandprimary
  );
  const [brandsecondary, setBrandsecondary] = React.useState(
    initialValues.brandsecondary
  );
  const [brandbio, setBrandbio] = React.useState(initialValues.brandbio);
  const [brandphone, setBrandphone] = React.useState(initialValues.brandphone);
  const [brandemail, setBrandemail] = React.useState(initialValues.brandemail);
  const [location, setLocation] = React.useState(initialValues.location);
  const [brandcreated, setBrandcreated] = React.useState(
    initialValues.brandcreated
  );
  const [membersince, setMembersince] = React.useState(
    initialValues.membersince
  );
  const [banner, setBanner] = React.useState(initialValues.banner);
  const [TCGlink, setTCGlink] = React.useState(initialValues.TCGlink);
  const [TTlink, setTTlink] = React.useState(initialValues.TTlink);
  const [YTlink, setYTlink] = React.useState(initialValues.YTlink);
  const [FBlink, setFBlink] = React.useState(initialValues.FBlink);
  const [IGlink, setIGlink] = React.useState(initialValues.IGlink);
  const [TWEETlin, setTWEETlin] = React.useState(initialValues.TWEETlin);
  const [GSlink, setGSlink] = React.useState(initialValues.GSlink);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = { ...initialValues, ...storeRecord };
    setBrandimage(cleanValues.brandimage);
    setBrandprimary(cleanValues.brandprimary);
    setBrandsecondary(cleanValues.brandsecondary);
    setBrandbio(cleanValues.brandbio);
    setBrandphone(cleanValues.brandphone);
    setBrandemail(cleanValues.brandemail);
    setLocation(cleanValues.location);
    setBrandcreated(cleanValues.brandcreated);
    setMembersince(cleanValues.membersince);
    setBanner(cleanValues.banner);
    setTCGlink(cleanValues.TCGlink);
    setTTlink(cleanValues.TTlink);
    setYTlink(cleanValues.YTlink);
    setFBlink(cleanValues.FBlink);
    setIGlink(cleanValues.IGlink);
    setTWEETlin(cleanValues.TWEETlin);
    setGSlink(cleanValues.GSlink);
    setErrors({});
  };
  const [storeRecord, setStoreRecord] = React.useState(store);
  React.useEffect(() => {
    const queryData = async () => {
      const record = id ? await DataStore.query(Store, id) : store;
      setStoreRecord(record);
    };
    queryData();
  }, [id, store]);
  React.useEffect(resetStateValues, [storeRecord]);
  const validations = {
    brandimage: [],
    brandprimary: [],
    brandsecondary: [],
    brandbio: [],
    brandphone: [{ type: "Phone" }],
    brandemail: [{ type: "Email" }],
    location: [{ type: "IpAddress" }],
    brandcreated: [],
    membersince: [],
    banner: [{ type: "URL" }],
    TCGlink: [{ type: "URL" }],
    TTlink: [{ type: "URL" }],
    YTlink: [{ type: "URL" }],
    FBlink: [{ type: "URL" }],
    IGlink: [{ type: "URL" }],
    TWEETlin: [{ type: "URL" }],
    GSlink: [{ type: "URL" }],
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
  const convertToLocal = (date) => {
    const df = new Intl.DateTimeFormat("default", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      calendar: "iso8601",
      numberingSystem: "latn",
      hour12: false,
    });
    const parts = df.formatToParts(date).reduce((acc, part) => {
      acc[part.type] = part.value;
      return acc;
    }, {});
    return `${parts.year}-${parts.month}-${parts.day}T${parts.hour}:${parts.minute}`;
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
          brandimage,
          brandprimary,
          brandsecondary,
          brandbio,
          brandphone,
          brandemail,
          location,
          brandcreated,
          membersince,
          banner: banner || undefined,
          TCGlink: TCGlink || undefined,
          TTlink: TTlink || undefined,
          YTlink: YTlink || undefined,
          FBlink: FBlink || undefined,
          IGlink: IGlink || undefined,
          TWEETlin: TWEETlin || undefined,
          GSlink: GSlink || undefined,
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
            Store.copyOf(storeRecord, (updated) => {
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
      {...getOverrideProps(overrides, "StoreUpdateForm")}
    >
      <TextField
        label="Brandimage"
        isRequired={false}
        isReadOnly={false}
        defaultValue={brandimage}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              brandimage: value,
              brandprimary,
              brandsecondary,
              brandbio,
              brandphone,
              brandemail,
              location,
              brandcreated,
              membersince,
              banner,
              TCGlink,
              TTlink,
              YTlink,
              FBlink,
              IGlink,
              TWEETlin,
              GSlink,
            };
            const result = onChange(modelFields);
            value = result?.brandimage ?? value;
          }
          if (errors.brandimage?.hasError) {
            runValidationTasks("brandimage", value);
          }
          setBrandimage(value);
        }}
        onBlur={() => runValidationTasks("brandimage", brandimage)}
        errorMessage={errors.brandimage?.errorMessage}
        hasError={errors.brandimage?.hasError}
        {...getOverrideProps(overrides, "brandimage")}
      ></TextField>
      <TextField
        label="Brandprimary"
        isRequired={false}
        isReadOnly={false}
        defaultValue={brandprimary}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              brandimage,
              brandprimary: value,
              brandsecondary,
              brandbio,
              brandphone,
              brandemail,
              location,
              brandcreated,
              membersince,
              banner,
              TCGlink,
              TTlink,
              YTlink,
              FBlink,
              IGlink,
              TWEETlin,
              GSlink,
            };
            const result = onChange(modelFields);
            value = result?.brandprimary ?? value;
          }
          if (errors.brandprimary?.hasError) {
            runValidationTasks("brandprimary", value);
          }
          setBrandprimary(value);
        }}
        onBlur={() => runValidationTasks("brandprimary", brandprimary)}
        errorMessage={errors.brandprimary?.errorMessage}
        hasError={errors.brandprimary?.hasError}
        {...getOverrideProps(overrides, "brandprimary")}
      ></TextField>
      <TextField
        label="Brandsecondary"
        isRequired={false}
        isReadOnly={false}
        defaultValue={brandsecondary}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              brandimage,
              brandprimary,
              brandsecondary: value,
              brandbio,
              brandphone,
              brandemail,
              location,
              brandcreated,
              membersince,
              banner,
              TCGlink,
              TTlink,
              YTlink,
              FBlink,
              IGlink,
              TWEETlin,
              GSlink,
            };
            const result = onChange(modelFields);
            value = result?.brandsecondary ?? value;
          }
          if (errors.brandsecondary?.hasError) {
            runValidationTasks("brandsecondary", value);
          }
          setBrandsecondary(value);
        }}
        onBlur={() => runValidationTasks("brandsecondary", brandsecondary)}
        errorMessage={errors.brandsecondary?.errorMessage}
        hasError={errors.brandsecondary?.hasError}
        {...getOverrideProps(overrides, "brandsecondary")}
      ></TextField>
      <TextField
        label="Brandbio"
        isRequired={false}
        isReadOnly={false}
        defaultValue={brandbio}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              brandimage,
              brandprimary,
              brandsecondary,
              brandbio: value,
              brandphone,
              brandemail,
              location,
              brandcreated,
              membersince,
              banner,
              TCGlink,
              TTlink,
              YTlink,
              FBlink,
              IGlink,
              TWEETlin,
              GSlink,
            };
            const result = onChange(modelFields);
            value = result?.brandbio ?? value;
          }
          if (errors.brandbio?.hasError) {
            runValidationTasks("brandbio", value);
          }
          setBrandbio(value);
        }}
        onBlur={() => runValidationTasks("brandbio", brandbio)}
        errorMessage={errors.brandbio?.errorMessage}
        hasError={errors.brandbio?.hasError}
        {...getOverrideProps(overrides, "brandbio")}
      ></TextField>
      <TextField
        label="Brandphone"
        isRequired={false}
        isReadOnly={false}
        type="tel"
        defaultValue={brandphone}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              brandimage,
              brandprimary,
              brandsecondary,
              brandbio,
              brandphone: value,
              brandemail,
              location,
              brandcreated,
              membersince,
              banner,
              TCGlink,
              TTlink,
              YTlink,
              FBlink,
              IGlink,
              TWEETlin,
              GSlink,
            };
            const result = onChange(modelFields);
            value = result?.brandphone ?? value;
          }
          if (errors.brandphone?.hasError) {
            runValidationTasks("brandphone", value);
          }
          setBrandphone(value);
        }}
        onBlur={() => runValidationTasks("brandphone", brandphone)}
        errorMessage={errors.brandphone?.errorMessage}
        hasError={errors.brandphone?.hasError}
        {...getOverrideProps(overrides, "brandphone")}
      ></TextField>
      <TextField
        label="Brandemail"
        isRequired={false}
        isReadOnly={false}
        defaultValue={brandemail}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              brandimage,
              brandprimary,
              brandsecondary,
              brandbio,
              brandphone,
              brandemail: value,
              location,
              brandcreated,
              membersince,
              banner,
              TCGlink,
              TTlink,
              YTlink,
              FBlink,
              IGlink,
              TWEETlin,
              GSlink,
            };
            const result = onChange(modelFields);
            value = result?.brandemail ?? value;
          }
          if (errors.brandemail?.hasError) {
            runValidationTasks("brandemail", value);
          }
          setBrandemail(value);
        }}
        onBlur={() => runValidationTasks("brandemail", brandemail)}
        errorMessage={errors.brandemail?.errorMessage}
        hasError={errors.brandemail?.hasError}
        {...getOverrideProps(overrides, "brandemail")}
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
              brandimage,
              brandprimary,
              brandsecondary,
              brandbio,
              brandphone,
              brandemail,
              location: value,
              brandcreated,
              membersince,
              banner,
              TCGlink,
              TTlink,
              YTlink,
              FBlink,
              IGlink,
              TWEETlin,
              GSlink,
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
        label="Brandcreated"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        defaultValue={brandcreated && convertToLocal(new Date(brandcreated))}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              brandimage,
              brandprimary,
              brandsecondary,
              brandbio,
              brandphone,
              brandemail,
              location,
              brandcreated: value,
              membersince,
              banner,
              TCGlink,
              TTlink,
              YTlink,
              FBlink,
              IGlink,
              TWEETlin,
              GSlink,
            };
            const result = onChange(modelFields);
            value = result?.brandcreated ?? value;
          }
          if (errors.brandcreated?.hasError) {
            runValidationTasks("brandcreated", value);
          }
          setBrandcreated(new Date(value).toISOString());
        }}
        onBlur={() => runValidationTasks("brandcreated", brandcreated)}
        errorMessage={errors.brandcreated?.errorMessage}
        hasError={errors.brandcreated?.hasError}
        {...getOverrideProps(overrides, "brandcreated")}
      ></TextField>
      <TextField
        label="Membersince"
        isRequired={false}
        isReadOnly={false}
        type="date"
        defaultValue={membersince}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              brandimage,
              brandprimary,
              brandsecondary,
              brandbio,
              brandphone,
              brandemail,
              location,
              brandcreated,
              membersince: value,
              banner,
              TCGlink,
              TTlink,
              YTlink,
              FBlink,
              IGlink,
              TWEETlin,
              GSlink,
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
        label="Banner"
        isRequired={false}
        isReadOnly={false}
        defaultValue={banner}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              brandimage,
              brandprimary,
              brandsecondary,
              brandbio,
              brandphone,
              brandemail,
              location,
              brandcreated,
              membersince,
              banner: value,
              TCGlink,
              TTlink,
              YTlink,
              FBlink,
              IGlink,
              TWEETlin,
              GSlink,
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
        label="Tc glink"
        isRequired={false}
        isReadOnly={false}
        defaultValue={TCGlink}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              brandimage,
              brandprimary,
              brandsecondary,
              brandbio,
              brandphone,
              brandemail,
              location,
              brandcreated,
              membersince,
              banner,
              TCGlink: value,
              TTlink,
              YTlink,
              FBlink,
              IGlink,
              TWEETlin,
              GSlink,
            };
            const result = onChange(modelFields);
            value = result?.TCGlink ?? value;
          }
          if (errors.TCGlink?.hasError) {
            runValidationTasks("TCGlink", value);
          }
          setTCGlink(value);
        }}
        onBlur={() => runValidationTasks("TCGlink", TCGlink)}
        errorMessage={errors.TCGlink?.errorMessage}
        hasError={errors.TCGlink?.hasError}
        {...getOverrideProps(overrides, "TCGlink")}
      ></TextField>
      <TextField
        label="T tlink"
        isRequired={false}
        isReadOnly={false}
        defaultValue={TTlink}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              brandimage,
              brandprimary,
              brandsecondary,
              brandbio,
              brandphone,
              brandemail,
              location,
              brandcreated,
              membersince,
              banner,
              TCGlink,
              TTlink: value,
              YTlink,
              FBlink,
              IGlink,
              TWEETlin,
              GSlink,
            };
            const result = onChange(modelFields);
            value = result?.TTlink ?? value;
          }
          if (errors.TTlink?.hasError) {
            runValidationTasks("TTlink", value);
          }
          setTTlink(value);
        }}
        onBlur={() => runValidationTasks("TTlink", TTlink)}
        errorMessage={errors.TTlink?.errorMessage}
        hasError={errors.TTlink?.hasError}
        {...getOverrideProps(overrides, "TTlink")}
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
              brandimage,
              brandprimary,
              brandsecondary,
              brandbio,
              brandphone,
              brandemail,
              location,
              brandcreated,
              membersince,
              banner,
              TCGlink,
              TTlink,
              YTlink: value,
              FBlink,
              IGlink,
              TWEETlin,
              GSlink,
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
              brandimage,
              brandprimary,
              brandsecondary,
              brandbio,
              brandphone,
              brandemail,
              location,
              brandcreated,
              membersince,
              banner,
              TCGlink,
              TTlink,
              YTlink,
              FBlink: value,
              IGlink,
              TWEETlin,
              GSlink,
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
              brandimage,
              brandprimary,
              brandsecondary,
              brandbio,
              brandphone,
              brandemail,
              location,
              brandcreated,
              membersince,
              banner,
              TCGlink,
              TTlink,
              YTlink,
              FBlink,
              IGlink: value,
              TWEETlin,
              GSlink,
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
        label="Twee tlin"
        isRequired={false}
        isReadOnly={false}
        defaultValue={TWEETlin}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              brandimage,
              brandprimary,
              brandsecondary,
              brandbio,
              brandphone,
              brandemail,
              location,
              brandcreated,
              membersince,
              banner,
              TCGlink,
              TTlink,
              YTlink,
              FBlink,
              IGlink,
              TWEETlin: value,
              GSlink,
            };
            const result = onChange(modelFields);
            value = result?.TWEETlin ?? value;
          }
          if (errors.TWEETlin?.hasError) {
            runValidationTasks("TWEETlin", value);
          }
          setTWEETlin(value);
        }}
        onBlur={() => runValidationTasks("TWEETlin", TWEETlin)}
        errorMessage={errors.TWEETlin?.errorMessage}
        hasError={errors.TWEETlin?.hasError}
        {...getOverrideProps(overrides, "TWEETlin")}
      ></TextField>
      <TextField
        label="G slink"
        isRequired={false}
        isReadOnly={false}
        defaultValue={GSlink}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              brandimage,
              brandprimary,
              brandsecondary,
              brandbio,
              brandphone,
              brandemail,
              location,
              brandcreated,
              membersince,
              banner,
              TCGlink,
              TTlink,
              YTlink,
              FBlink,
              IGlink,
              TWEETlin,
              GSlink: value,
            };
            const result = onChange(modelFields);
            value = result?.GSlink ?? value;
          }
          if (errors.GSlink?.hasError) {
            runValidationTasks("GSlink", value);
          }
          setGSlink(value);
        }}
        onBlur={() => runValidationTasks("GSlink", GSlink)}
        errorMessage={errors.GSlink?.errorMessage}
        hasError={errors.GSlink?.hasError}
        {...getOverrideProps(overrides, "GSlink")}
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
