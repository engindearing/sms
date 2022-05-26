import { StyleSheet, View } from "react-native";

import React from "react";

import { useNavigation } from "@react-navigation/native";

import { useFormik, yupToFormErrors } from "formik";

import TextInput from "../../../../components/TextInput";

import { Button, Checkbox, Text } from "native-base";

import styled from "styled-components/native";

import * as Yup from "yup";

import "yup-phone";

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
      hasInsurance: formValues.hasInsurance,
      insuranceType: formValues.insuranceType,
      membersCovered: formValues.membersCovered,
    },
    validationSchema: ContactSchema,

    onSubmit: async (newValues) => {
      try {
        onChange(newValues);

        alert("finished");
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
          textAlign: "center",
          marginBottom: "2%",
        }}
        fontSize={"2xl"}
      >
        Insurance Information
      </Text>

      <Checkbox
        value="hasInsurance"
        defaultIsChecked={values.hasInsurance}
        onChange={(e) => setFieldValue("hasInsurance", e)}
      >
        Do you have health insurance?
      </Checkbox>

      <Spacer />

      {values.hasInsurance && (
        <>
          <TextInput
            width="100%"
            placeholder="source"
            onChangeText={handleChange("insuranceType")}
            name="insuranceType"
            onBlur={handleBlur("insuranceType")}
            error={errors.insuranceType}
            touched={touched.insuranceType}
            value={values.insuranceType}
            label="Health insurance source"
          />

          <TextInput
            width="100%"
            placeholder="covered"
            onChangeText={handleChange("membersCovered")}
            name="membersCovered"
            onBlur={handleBlur("membersCovered")}
            error={errors.membersCovered}
            touched={touched.membersCovered}
            value={values.membersCovered}
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
  hasInsurance: Yup.boolean(),

  insuranceType: Yup.string(),

  membersCovered: Yup.number()
    .typeError("Please type in a number")
    .positive("Must be greater than zero")
    .min(0)
 
});

const Spacer = styled.View`
  margin-top: 2%;

  margin-bottom: 2%;
`;
