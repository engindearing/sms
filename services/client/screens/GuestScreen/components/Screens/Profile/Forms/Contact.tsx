import React from "react";

import { useFormik } from "formik";

import TextInput from "../../../../../../components/TextInput";

import { Button, Checkbox, Text, useToast } from "native-base";

import styled from "styled-components/native";

import * as Yup from "yup";

import "yup-phone";

import isValidPhoneNumber from "../../../../../../utils/isValidPhoneNumber";

import { useSelector, useDispatch } from "react-redux";

import { ScrollView } from "react-native-gesture-handler";

import { updateHouseholdById } from "../../../../../../state/slices/householdSlice";

import { useCurrentHousehold } from "../../../../../../api/hooks";
import useUpdateHousehold from "../../../../../../api/hooks/useUpdateHousehold";

export default function ContactInfo({ navigation }) {
  const { mutate: updateHousehold } = useUpdateHousehold();

  const {
    data: { household },
  } = useCurrentHousehold();

  const {
    handleChange,
    handleBlur,
    errors,
    touched,
    values,
    setFieldValue,
    handleSubmit,
  } = useFormik({
    initialValues: {
      contact: {
        phoneOne: {
          name: household.contact?.phoneOne.name,
          number: household.contact?.phoneOne.number,
          safeToLeaveMsg: household.contact?.phoneOne.safeToLeaveMsg,
        },

        phoneTwo: {
          name: household.contact?.phoneTwo.name,
          number: household.contact?.phoneTwo.number,
          safeToLeaveMsg: household.contact?.phoneTwo.safeToLeaveMsg,
        },

        emergencyContact: {
          name: household.contact?.emergencyContact.name,
          number: household.contact?.emergencyContact.number,
        },
      },
    },
    validationSchema: ContactSchema,
    isInitialValid: true,

    onSubmit: (contact) => {
      updateHousehold(
        { householdId: household._id, info: contact },
        { onSuccess: () => navigation.navigate("Profile") }
      );
    },
  });

  return (
    <ScrollView
      style={{ padding: 10 }}
      showsVerticalScrollIndicator={true}
      persistentScrollbar={true}
    >
      <Text fontSize={"2xl"}>First contact</Text>
      <TextInput
        width="100%"
        placeholder="Full name"
        onChangeText={handleChange("contact.phoneOne.name")}
        name="contactOneName"
        onBlur={handleBlur("contact.phoneOne.name")}
        error={errors?.contact?.phoneOne?.name}
        touched={touched?.contact?.phoneOne?.name}
        value={values?.contact?.phoneOne?.name}
      />
      <TextInput
        placeholder="(123) 456 7890"
        onChangeText={handleChange("contact.phoneOne.number")}
        onBlur={handleBlur("contact.phoneOne.number")}
        error={errors?.contact?.phoneOne?.number}
        touched={touched?.contact?.phoneOne?.number}
        value={values?.contact?.phoneOne?.number}
      />

      <Checkbox
        value="safeToLeaveMsg"
        defaultIsChecked={values.contact?.phoneOne.safeToLeaveMsg}
        onChange={(e) => setFieldValue("contact.phoneOne.safeToLeaveMsg", e)}
      >
        Safe to leave msg
      </Checkbox>

      <Spacer />

      <Text fontSize={"2xl"}>Second contact</Text>

      <TextInput
        placeholder="Full name"
        onChangeText={handleChange("contact.phoneTwo.name")}
        onBlur={handleBlur("contact.phoneTwo.name")}
        error={errors?.contact?.phoneTwo?.name}
        touched={touched?.contact?.phoneTwo?.name}
        value={values?.contact?.phoneTwo?.name}
      />
      <TextInput
        placeholder="(123) 456 7890"
        onChangeText={handleChange("contact.phoneTwo.number")}
        onBlur={handleBlur("contact.phoneTwo.number")}
        error={errors?.contact?.phoneTwo?.number}
        touched={touched?.contact?.phoneTwo?.number}
        value={values?.contact?.phoneTwo?.number}
      />

      <Checkbox
        value={"false"}
        defaultIsChecked={values?.contact?.phoneTwo?.safeToLeaveMsg}
        onChange={(e) => setFieldValue("contact.phoneTwo.safeToLeaveMsg", e)}
      >
        Safe to leave msg
      </Checkbox>
      <Spacer />

      <Text fontSize={"2xl"}>Emergency contact</Text>
      <TextInput
        placeholder="Full name"
        onChangeText={handleChange("contact.emergencyContact.name")}
        onBlur={handleBlur("contact.emergencyContact.name")}
        error={errors?.contact?.emergencyContact?.name}
        touched={touched?.contact?.emergencyContact?.name}
        value={values?.contact?.emergencyContact?.name}
      />
      <TextInput
        placeholder="(123) 456 7890"
        onChangeText={handleChange("contact.emergencyContact.number")}
        onBlur={handleBlur("contact.emergencyContact.number")}
        error={errors?.contact?.emergencyContact?.number}
        touched={touched?.contact?.emergencyContact?.number}
        value={values?.contact?.emergencyContact?.number}
      />

      <Button onPress={() => handleSubmit()}>Update</Button>
    </ScrollView>
  );
}

const ContactSchema = Yup.object().shape({
  contact: Yup.object().shape({
    phoneOne: Yup.object().shape({
      name: Yup.string().nullable().required("Required"),
      number: Yup.string()
        .nullable()
        .required("Required")
        .test("is-valid-phone", "Invalid phone number", isValidPhoneNumber),
      safeToLeaveMsg: Yup.boolean().nullable(),
    }),

    phoneTwo: Yup.object().shape({
      name: Yup.string().nullable().required("Required"),
      number: Yup.string()
        .nullable()
        .required("Required")
        .test("is-valid-phone", "Invalid phone number", isValidPhoneNumber),
      safeToLeaveMsg: Yup.string().nullable(),
    }),

    emergencyContact: Yup.object().shape({
      name: Yup.string().nullable().required("Required"),
      number: Yup.string()
        .nullable()
        .required("Required")
        .test("is-valid-phone", "Invalid phone number", isValidPhoneNumber),
    }),
  }),
});

const Spacer = styled.View`
  margin-top: 2%;

  margin-bottom: 2%;
`;
