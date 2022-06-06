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

export default function DomesticViolence({ nextStep, prevStep }) {
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
      domesticViolence: {
        fleeingDv: household?.domesticViolence?.fleeingDv,
        anonymityPreferred: household?.domesticViolence?.anonymityPreferred,
        dateLastIncident: household?.domesticViolence?.dateLastIncident,
        hasCourtOrder: household?.domesticViolence?.hasCourtOrder,
        YWCAcontacted: household?.domesticViolence?.YWCAcontacted,
      },
    },
    validationSchema: ContactSchema,

    onSubmit: async (domesticViolence) => {
      dispatch(
        updateHouseholdById({
          householdId: household._id,
          payload: domesticViolence,
        })
      );

      nextStep();
    },
  });

  return (
    <View style={{ padding: 10, height: "100%", width: "100%" }}>
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
        defaultIsChecked={values.domesticViolence.fleeingDv}
        onChange={(e) => setFieldValue("domesticViolence.fleeingDv", e)}
      >
        Are you currently fleeing a DV situation?
      </Checkbox>

      {values.domesticViolence.fleeingDv && (
        <>
          <Spacer />
          <TextInput
            width="100%"
            placeholder="Date of last incident"
            onChangeText={handleChange("domesticViolence.dateLastIncident")}
            name="dateLastIncident"
            onBlur={handleBlur("dateLastIncident")}
            error={errors.domesticViolence?.dateLastIncident}
            touched={touched.domesticViolence?.dateLastIncident}
            value={values.domesticViolence?.dateLastIncident}
            marginBottom={"20px"}
          />

          <Checkbox
            value="domesticViolence"
            defaultIsChecked={values.domesticViolence?.anonymityPreferred}
            onChange={(e) =>
              setFieldValue("domesticViolence.anonymityPreferred", e)
            }
          >
            Do you wish to be entered in HMIS anonymously?
          </Checkbox>

          <Checkbox
            value="fleeingDv"
            defaultIsChecked={values.domesticViolence?.hasCourtOrder}
            onChange={(e) => setFieldValue("domesticViolence.hasCourtOrder", e)}
          >
            Is there a No Contact or any other Court Order in place?
          </Checkbox>

          <Checkbox
            value="ywcaContacted"
            defaultIsChecked={values.domesticViolence?.YWCAcontacted}
            onChange={(e) => setFieldValue("domesticViolence.YWCAcontacted", e)}
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

      <Spacer />

      <Navigation prevStep={prevStep} handleSubmit={handleSubmit} />
    </View>
  );
}

const ContactSchema = Yup.object().shape({
  domesticViolence: Yup.object().shape({
    fleeingDv: Yup.boolean().nullable(),
    anonymityPreferred: Yup.boolean().nullable(),
    dateLastIncident: Yup.string().nullable(),
    hasCourtOrder: Yup.boolean().nullable(),
    ywcaContacted: Yup.boolean().nullable(),
  }),
});

const Spacer = styled.View`
  margin-top: 2%;

  margin-bottom: 2%;
`;
