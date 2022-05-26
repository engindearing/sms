import { StyleSheet, View } from "react-native";

import React from "react";

import { useNavigation } from "@react-navigation/native";

import { useFormik } from "formik";

import TextInput from "../../../../components/TextInput";

import { Button, Checkbox, Text } from "native-base";

import styled from "styled-components/native";

import * as Yup from "yup";

import "yup-phone";

export default function ContactInfo({ formValues, onChange, nextStep }) {
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
      fleeingDv: formValues.fleeingDv,
      anonymityPreferred: formValues.anonymityPreferred,
      dateLastIncident: "",
      hasCourtOrder: formValues.hasCourtOrder,
      ywcaContacted: formValues.ywcaContacted,
    },
    validationSchema: ContactSchema,

    onSubmit: async (newValues) => {
      try {
        alert("submitted");
        console.log(newValues);
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
          marginBottom: "2%",
        }}
        fontSize={"2xl"}
      >
        Domestic Violence
      </Text>

      <Checkbox
        value="fleeingDv"
        defaultIsChecked={values.anonymityPreferred}
        onChange={(e) => setFieldValue("fleeingDv", e)}
      >
        Are you currently fleeing a DV situation?
      </Checkbox>

      {values.fleeingDv && (
        <>
          <Spacer />
          <TextInput
            width="100%"
            placeholder="Date of last incident"
            onChangeText={handleChange("dateLastIncident")}
            name="dateLastIncident"
            onBlur={handleBlur("dateLastIncident")}
            error={errors.dateLastIncident}
            touched={touched.dateLastIncident}
            value={values.dateLastIncident}
            marginBottom={"20px"}
          />

          <Checkbox
            value="fleeingDv"
            defaultIsChecked={values.anonymityPreferred}
            onChange={(e) => setFieldValue("anonymityPreferred", e)}
          >
            Do you wish to be entered in HMIS anonymously?
          </Checkbox>

          <Checkbox
            value="fleeingDv"
            defaultIsChecked={values.hasCourtOrder}
            onChange={(e) => setFieldValue("hasCourtOrder", e)}
          >
            Is there a No Contact or any other Court Order in place?
          </Checkbox>

          <Checkbox
            value="ywcaContacted"
            defaultIsChecked={values.ywcaContacted}
            onChange={(e) => setFieldValue("ywcaContacted", e)}
          >
            If you are fleeing DV, have you contacted the YWCA?
          </Checkbox>
          <Spacer />
          <Text>
            If not, please ask supervisor for the YWCA phone number to call.
          </Text>
          <Spacer />
          <Text>
            If you wish to be anonymous AND you have registered with the HFCA,
            we will need your HMIS # - This number is assigned to you by the
            HFCA - if you have not registered with the HFCA we can assign you an
            anonymous HMIS.
          </Text>
        </>
      )}

      <Button style={{ marginTop: "5%" }} onPress={() => handleSubmit()}>
        Submit
      </Button>
    </View>
  );
}

const ContactSchema = Yup.object().shape({
  fleeingDv: Yup.boolean(),
  anonymityPreferred: Yup.boolean(),
  dateLastIncident: Yup.string(),
  hasCourtOrder: Yup.boolean(),
  ywcaContacted: Yup.boolean(),
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
