import { StyleSheet, View } from "react-native";

import React from "react";

import { useNavigation } from "@react-navigation/native";

import { useFormik, yupToFormErrors } from "formik";

import TextInput from "../../../../components/TextInput";

import { Button, Checkbox, Text } from "native-base";

import styled from "styled-components/native";

import * as Yup from "yup";

import "yup-phone";
import { updateHousehold } from "../../../../api/household";

export default function Insurance({ formValues, onChange, nextStep }) {
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
      insurance: {
        hasInsurance: formValues.insurance.hasInsurance,
        healthInsuranceType: formValues.insurance.healthInsuranceType,
        membersCovered: formValues.insurance.membersCovered,
      },
    },
    validationSchema: ContactSchema,

    onSubmit: async (insurance) => {
      try {
        let data = await updateHousehold(formValues._id, insurance);
        onChange(data);
        nextStep();
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
        Insurance Information
      </Text>

      <Checkbox
        value="hasInsurance"
        defaultIsChecked={values.insurance.hasInsurance}
        onChange={(e) => setFieldValue("insurance.hasInsurance", e)}
      >
        Do you have health insurance?
      </Checkbox>

      <Spacer />

      {values.insurance.hasInsurance && (
        <>
          <TextInput
            width="100%"
            placeholder="source"
            onChangeText={handleChange("insurance.healthInsuranceType")}
            name="insuranceType"
            onBlur={handleBlur("insurance.healthInsuranceType")}
            error={errors.insurance?.healthInsuranceType}
            touched={touched.insurance?.healthInsuranceType}
            value={values.insurance?.healthInsuranceType}
            label="Health insurance source"
          />

          <TextInput
            width="100%"
            placeholder="covered"
            onChangeText={handleChange("insurance.membersCovered")}
            name="membersCovered"
            onBlur={handleBlur("insurance.membersCovered")}
            error={errors.insurance?.membersCovered}
            touched={touched.insurance?.membersCovered}
            value={values.insurance?.membersCovered}
            label="Household Members covered"
          />
        </>
      )}

      <Button style={{ marginTop: "5%" }} onPress={() => handleSubmit()}>
        Submit
      </Button>
    </View>
  );
}

const ContactSchema = Yup.object().shape({
  insurance: Yup.object().shape({
    hasInsurance: Yup.boolean(),

    healthInsuranceType: Yup.string(),

    membersCovered: Yup.number()
      .typeError("Please type in a number")
      .positive("Must be greater than zero")
      .min(0),
  }),
});

const Spacer = styled.View`
  margin-top: 2%;

  margin-bottom: 2%;
`;
