import { StyleSheet, View } from "react-native";

import React from "react";

import { useNavigation } from "@react-navigation/native";

import { useFormik } from "formik";

import TextInput from "../../../../components/TextInput";

import { Button, Checkbox, Text } from "native-base";

import styled from "styled-components/native";

import * as Yup from "yup";

import "yup-phone";

import { updateHouseholdContacts } from "../../../../api/household";

export default function ContactInfo({ formValues, onChange, nextStep }) {
  const { contact } = formValues;

  const {
    handleChange,
    handleSubmit,
    handleBlur,
    errors,
    touched,
    values,
    setFieldValue,
  } = useFormik({
    initialValues: {
      contact: {
        phoneOne: {
          name: formValues.contact.phoneOne.name,
          number: formValues.contact.phoneOne.number,
          safeToLeaveMsg: formValues.contact.phoneOne.safeToLeaveMsg,
        },

        phoneTwo: {
          name: formValues.contact.phoneTwo.name,
          number: formValues.contact.phoneTwo.number,
          safeToLeaveMsg: formValues.contact.phoneTwo.emergencyContact,
        },

        emergencyContact: {
          name: formValues.contact.emergencyContact.name,
          number: formValues.contact.emergencyContact.number,
        },
      },
    },
    validationSchema: ContactSchema,
    isInitialValid: true,

    onSubmit: async (contacts) => {
      try {
        // let data = await updateHouseholdContacts(formValues._id, contacts);

        alert("SUCCESS!! :-)\n\n" + JSON.stringify(contacts, null, 4));

        // await updateHouseholdContacts()
      } catch (error) {
        // #TODO
        // Handle specific errors, use a popup instead of alert
        alert("Invalid username or password");
      }
    },
  });

  return (
    <View style={{ width: "100%" }}>
      <Text
        style={{
          textAlign: "center",
          marginBottom: "2%",
        }}
        fontSize={"2xl"}
      >
        Contact Information
      </Text>

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
        placeholder="Number"
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
        placeholder="Phone number"
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
        placeholder="Number"
        onChangeText={handleChange("contact.emergencyContact.number")}
        onBlur={handleBlur("contact.emergencyContact.number")}
        error={errors?.contact?.emergencyContact?.number}
        touched={touched?.contact?.emergencyContact?.number}
        value={values?.contact?.emergencyContact?.number}
      />
   
      <Button
        style={{ marginTop: "5%" }}
        onPress={() => {
          console.log(values);
          handleSubmit();
        }}
      >
        Submit
      </Button>
    </View>
  );
}

const ContactSchema = Yup.object().shape({
  contact: Yup.object().shape({
    phoneOne: Yup.object().shape({
      name: Yup.string().nullable().required(),
      number: Yup.string().phone().nullable().required(),
      safeToLeaveMsg: Yup.boolean().nullable(),
    }),

    phoneTwo: Yup.object().shape({
      name: Yup.string().nullable().required(),
      number: Yup.string().phone().nullable().required(),
      safeToLeaveMsg: Yup.string().nullable(),
    }),

    emergencyContact: Yup.object().shape({
      name: Yup.string().nullable().required(),
      number: Yup.string().phone().nullable().required(),
    }),
  }),
});

const Spacer = styled.View`
  margin-top: 2%;

  margin-bottom: 2%;
`;

// contactOneName: "",
// contactOneNumber: "",
// contactOneSafeToLeaveMsg: true,
// contactTwoName: "",
// contactTwoNumber: "",
// contactTwoSafeToLeaveMsg: true,
// emergencyContactName: "",
// emergencyContactNumber: "",
