/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { User } from "../models";
import {
  getOverrideProps,
  useDataStoreUpdateAction,
  useStateMutationAction,
} from "@aws-amplify/ui-react/internal";
import { schema } from "../models/schema";
import { useEffect } from "react";
import {
  Button,
  Divider,
  Flex,
  Icon,
  Image,
  Text,
  TextField,
  View,
} from "@aws-amplify/ui-react";
export default function EditProfile(props) {
  const { user, overrides, ...rest } = props;
  const [
    imageTwoNineSevenSixSixNineOneNineSrc,
    setImageTwoNineSevenSixSixNineOneNineSrc,
  ] = useStateMutationAction(undefined);
  const imageTwoNineSevenSixSixNineOneNineOnClick = () => {
    setImageTwoNineSevenSixSixNineOneNineSrc(user?.image);
  };
  const uploadNewImageOnClick = useDataStoreUpdateAction({
    fields: {},
    id: user?.image,
    model: User,
    schema: schema,
  });
  const buttonOnClick = useDataStoreUpdateAction({
    fields: {},
    id: user?.id,
    model: User,
    schema: schema,
  });
  useEffect(() => {
    if (
      imageTwoNineSevenSixSixNineOneNineSrc === undefined &&
      user !== undefined &&
      user?.image !== undefined
    )
      setImageTwoNineSevenSixSixNineOneNineSrc(user?.image);
  }, [user]);
  return (
    <Flex
      gap="16px"
      direction="column"
      width="640px"
      height="1268px"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 135px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "EditProfile")}
    >
      <Flex
        gap="24px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="24px 24px 24px 24px"
        {...getOverrideProps(overrides, "Content")}
      >
        <Flex
          gap="16px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Edit Profile29766913")}
        >
          <View
            width="24px"
            height="24px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            overflow="hidden"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Icon")}
          >
            <Icon
              width="14px"
              height="14px"
              viewBox={{ minX: 0, minY: 0, width: 14, height: 14 }}
              paths={[
                {
                  d: "M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z",
                  fill: "rgba(13,26,38,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="20.83%"
              bottom="20.83%"
              left="20.83%"
              right="20.83%"
              {...getOverrideProps(overrides, "Vector")}
            ></Icon>
          </View>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="700"
            color="rgba(13,26,38,1)"
            lineHeight="20px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Edit Profile"
            {...getOverrideProps(overrides, "Edit Profile29766916")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="700"
            color="rgba(13,26,38,1)"
            lineHeight="20px"
            textAlign="right"
            display="block"
            direction="column"
            justifyContent="unset"
            width="313px"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Member Since:"
            {...getOverrideProps(overrides, "Member Since:")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="700"
            color="rgba(13,26,38,1)"
            lineHeight="20px"
            textAlign="right"
            display="block"
            direction="column"
            justifyContent="unset"
            width="118px"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={user?.memberstart}
            {...getOverrideProps(overrides, "--/--/----")}
          ></Text>
        </Flex>
        <Divider
          width="unset"
          shrink="0"
          alignSelf="stretch"
          size="small"
          orientation="horizontal"
          {...getOverrideProps(overrides, "Divider29766917")}
        ></Divider>
        <Flex
          gap="16px"
          direction="row"
          width="unset"
          height="176px"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Profile29766918")}
        >
          <Image
            width="239px"
            height="160px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            borderRadius="18px"
            padding="0px 0px 0px 0px"
            objectFit="cover"
            src={imageTwoNineSevenSixSixNineOneNineSrc}
            onClick={() => {
              imageTwoNineSevenSixSixNineOneNineOnClick();
            }}
            {...getOverrideProps(overrides, "image29766919")}
          ></Image>
          <TextField
            label="Name"
            placeholder={user?.name}
            width="329px"
            height="79px"
            shrink="0"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "TextField34492711")}
          ></TextField>
        </Flex>
        <Text
          fontFamily="Inter"
          fontSize="18px"
          fontWeight="400"
          color="rgba(13,26,38,1)"
          lineHeight="22px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          textDecoration="underline"
          width="239px"
          height="20px"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Upload New Image"
          onClick={() => {
            uploadNewImageOnClick();
          }}
          {...getOverrideProps(overrides, "Upload New Image")}
        ></Text>
        <Flex
          gap="16px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Forms29766921")}
        >
          <TextField
            label=""
            placeholder="john.doe@email.com"
            width="unset"
            shrink="0"
            alignSelf="stretch"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "TextField29766924")}
          ></TextField>
          <TextField
            label="@Username (Name will be used as default)"
            placeholder={user?.username}
            width="unset"
            shrink="0"
            alignSelf="stretch"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "TextField29766923")}
          ></TextField>
        </Flex>
        <Flex
          gap="16px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Forms34492689")}
        >
          <TextField
            label="State, Country or ZIP"
            placeholder="xx, xxx or 12345"
            width="unset"
            shrink="0"
            alignSelf="stretch"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "TextField34492690")}
          ></TextField>
          <TextField
            label="Facebook Link"
            placeholder={user?.FBlink}
            width="unset"
            shrink="0"
            alignSelf="stretch"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "TextField34492691")}
          ></TextField>
          <TextField
            label="YouTube Link"
            placeholder={user?.YTlink}
            width="unset"
            shrink="0"
            alignSelf="stretch"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "TextField34492692")}
          ></TextField>
        </Flex>
        <Flex
          gap="16px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Forms34492731")}
        >
          <TextField
            label="Instagram Link"
            placeholder={user?.IGlink}
            width="unset"
            shrink="0"
            alignSelf="stretch"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "TextField34492732")}
          ></TextField>
          <TextField
            label="Twitter Link"
            placeholder={user?.TWEETlink}
            width="unset"
            shrink="0"
            alignSelf="stretch"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "TextField34492733")}
          ></TextField>
        </Flex>
        <Flex
          gap="16px"
          direction="row"
          width="unset"
          height="164px"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Profile34492722")}
        >
          <TextField
            label="Set Profile Banner"
            placeholder={user?.banner}
            width="265px"
            height="67px"
            shrink="0"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "TextField34492724")}
          ></TextField>
          <Image
            width="311px"
            height="160px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            borderRadius="18px"
            padding="0px 0px 0px 0px"
            objectFit="cover"
            src={user?.banner}
            {...getOverrideProps(overrides, "image34492723")}
          ></Image>
        </Flex>
        <Divider
          width="unset"
          shrink="0"
          alignSelf="stretch"
          size="small"
          orientation="horizontal"
          {...getOverrideProps(overrides, "Divider29766925")}
        ></Divider>
        <Button
          width="592px"
          height="50px"
          shrink="0"
          size="default"
          isDisabled={false}
          variation="primary"
          children="SAVE"
          onClick={() => {
            buttonOnClick();
          }}
          {...getOverrideProps(overrides, "Button")}
        ></Button>
      </Flex>
    </Flex>
  );
}
