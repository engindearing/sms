import { View } from "react-native";

import React from "react";

import { useFormik } from "formik";

import TextInput from "../../../../../../components/TextInput";

import { Checkbox, Text } from "native-base";

import styled from "styled-components/native";

import * as Yup from "yup";

import "yup-phone";

import Navigation from "../Navigation";

import { ScrollView } from "react-native-gesture-handler";
import useUpdateHousehold from "../../../../../../api/hooks/useUpdateHousehold";
import { useCurrentHousehold } from "../../../../../../api/hooks";

export default function AdditionalInfo({ nextStep, prevStep }) {
  const {
    data: { household },
  } = useCurrentHousehold();

  const { mutate: updateHousehold } = useUpdateHousehold();

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
      pets: {
        shelter: household?.pets?.shelter,
        amount: household?.pets?.amount,
        dog: household?.pets?.dog,
        cat: household?.pets.cat,
        serviceAnimal: household?.pets?.serviceAnimal,
        supportAnimal: household?.pets?.supportAnimal,
        nameOne: household?.pets?.nameOne,
        nameTwo: household?.pets?.nameTwo,
      },
    },

    validationSchema: ContactSchema,

    onSubmit: (pets) => {
      updateHousehold(
        { householdId: household._id, info: pets },
        { onSuccess: nextStep }
      );
    },
  });

  return (
    <ScrollView style={{ padding: 10, width: "100%" }}>
      <Text
        style={{
          marginBottom: "2%",
        }}
        fontSize={"2xl"}
      >
        Pets Information:
      </Text>

      <Spacer />

      <Checkbox
        value="shelter"
        defaultIsChecked={values.pets?.shelter}
        onChange={(e) => setFieldValue("pets.shelter", e)}
      >
        Is your family bringing an animal with you into the shelter at the time
        of your intake?
      </Checkbox>

      <Spacer />

      {values.pets.shelter && (
        <>
          <TextInput
            width="100%"
            placeholder="#"
            onChangeText={handleChange("pets.amount")}
            name="amount"
            onBlur={handleBlur("pets.amount")}
            error={errors.pets?.amount}
            touched={touched.pets?.amount}
            value={values.pets?.amount}
            label="How many pets will you be bringing? (Max 2)"
          />
          <Spacer />

          <Text fontSize={"xl"}>Check all that apply:</Text>

          <Spacer />

          <Checkbox
            value="dog"
            defaultIsChecked={values.pets?.dog}
            onChange={(e) => setFieldValue("pets.dog", e)}
          >
            Dog?
          </Checkbox>

          <Checkbox
            value="cat"
            defaultIsChecked={values.pets?.cat}
            onChange={(e) => setFieldValue("pets.cat", e)}
          >
            Cat?
          </Checkbox>

          <Checkbox
            value="serviceAnimal"
            defaultIsChecked={values.pets?.serviceAnimal}
            onChange={(e) => setFieldValue("pets.serviceAnimal", e)}
          >
            Service Animal?
          </Checkbox>

          <Checkbox
            value="supportAnimal"
            defaultIsChecked={values.pets?.supportAnimal}
            onChange={(e) => setFieldValue("pets.supportAnimal", e)}
          >
            Emotional Support Animal?
          </Checkbox>

          <Spacer />

          <Text fontSize={"xl"}>Names:</Text>

          <Spacer />

          <TextInput
            width="100%"
            placeholder="name"
            onChangeText={handleChange("pets.nameOne")}
            name="nameOne"
            onBlur={handleBlur("pets.nameOne")}
            error={errors.pets?.nameOne}
            touched={touched.pets?.nameOne}
            value={values.pets?.nameOne}
            label="First pet name"
          />

          <TextInput
            width="100%"
            placeholder="name"
            onChangeText={handleChange("pets.nameTwo")}
            name="nameTwo"
            onBlur={handleBlur("pets.nameTwo")}
            error={errors.pets?.nameTwo}
            touched={touched.pets?.nameTwo}
            value={values.pets?.nameTwo}
            label="Second pet name"
          />
        </>
      )}

      <Navigation prevStep={prevStep} handleSubmit={handleSubmit} />
    </ScrollView>
  );
}

const ContactSchema = Yup.object().shape({
  pets: Yup.object().shape({
    shelter: Yup.boolean().nullable(),
    amount: Yup.number()
      .nullable()
      .typeError("Please pick a number between 0-2")
      .min(0)
      .max(2)
      .nullable(),

    dog: Yup.boolean().nullable(),
    cat: Yup.boolean().nullable(),
    serviceAnimal: Yup.boolean().nullable(),
    supportAnimal: Yup.boolean().nullable(),
    nameOne: Yup.string().nullable(),
    nameTwo: Yup.string().nullable(),
  }),
});

const Spacer = styled.View`
  margin-top: 2%;

  margin-bottom: 2%;
`;
