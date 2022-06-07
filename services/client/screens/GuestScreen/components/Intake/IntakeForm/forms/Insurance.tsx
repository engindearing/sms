import { View } from "react-native";

import React from "react";

import { useFormik } from "formik";

import TextInput from "../../../../../../components/TextInput";

import { Button, Checkbox, Text } from "native-base";

import styled from "styled-components/native";

import * as Yup from "yup";

import "yup-phone";

import { useDispatch, useSelector } from "react-redux";
import { updateHouseholdById } from "../../../../../../state/slices/householdSlice";
import Navigation from "../Navigation";

export default function Insurance({ nextStep, prevStep }) {
  const { household } = useSelector((state: any) => state.household);

  const dispatch = useDispatch();

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
        hasInsurance: household.insurance.hasInsurance,
        healthInsuranceType: household.insurance.healthInsuranceType,
        membersCovered: household.insurance.membersCovered,
      },
    },
    validationSchema: ContactSchema,

    onSubmit: async (insurance) => {
      dispatch(
        updateHouseholdById({ householdId: household._id, payload: insurance })
      );

      nextStep()
    },
  });

  return (
    <View style={{ padding: 10, width: "100%" }}>
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

      <Navigation prevStep={prevStep} handleSubmit={handleSubmit} />
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