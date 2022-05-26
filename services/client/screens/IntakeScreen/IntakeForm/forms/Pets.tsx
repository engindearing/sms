import { StyleSheet, View } from "react-native";

import React from "react";

import { useNavigation } from "@react-navigation/native";

import { useFormik, yupToFormErrors } from "formik";

import TextInput from "../../../../components/TextInput";

import { Button, Checkbox, Text } from "native-base";

import styled from "styled-components/native";

import * as Yup from "yup";

import "yup-phone";

export default function AdditionalInfo({ formValues, onChange, nextStep }) {
  //Options for Gov Benifits w/dataBase name counterpart
  const GOVBenifits = [
    "Food Stamps",
    "CPS/FPS (Open case)",
    "RRH (Rapid Rehousing) ",
    "Housing Voucher (Current)",
    "Veteran Services",
    "SNAP assistance",
  ];

  const GOVBenifitsDataName = {
    "Food Stamps": "foodstamps",
    "CPS/FPS (Open case)": "cpsFps",
    "RRH (Rapid Rehousing) ": "rrh",
    "Housing Voucher (Current)": "housingVoucher",
    "Veteran Services": "veteranServices",
    "SNAP assistance": "snap",
  };

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
      shelter: formValues?.pets?.shelter,
      amount: formValues?.pets?.amount,
      dog: formValues?.pets?.dog,
      cat: formValues?.pets.cat,
      serviceAnimal: formValues?.pets?.serviceAnimal,
      supportAnimal: formValues?.pets?.supportAnimal,
      nameOne: formValues?.pets?.nameOne,
      nameTwo: formValues?.pets?.nameTwo,
    },

    validationSchema: ContactSchema,

    onSubmit: async (newValues) => {
      try {
        console.log(newValues);
        onChange(newValues);

        alert("Finished");
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
        Pets Information:
      </Text>

      <Spacer />

      <Checkbox
        value="shelter"
        defaultIsChecked={values.shelter}
        onChange={(e) => setFieldValue("shelter", e)}
      >
        Is your family bringing an animal with you into the shelter at the time
        of your intake?
      </Checkbox>

      <Spacer />

      {values.shelter && (
        <>
          <TextInput
            width="100%"
            placeholder="#"
            onChangeText={handleChange("amount")}
            name="amount"
            onBlur={handleBlur("amount")}
            error={errors.amount}
            touched={touched.amount}
            value={values.amount}
            label="How many pets will you be bringing? (Max 2)"
          />
          <Spacer />

          <Text fontSize={"xl"}>Check all that apply:</Text>

          <Spacer />

          <Checkbox
            value="dog"
            defaultIsChecked={values.dog}
            onChange={(e) => setFieldValue("dog", e)}
          >
            Dog?
          </Checkbox>

          <Checkbox
            value="cat"
            defaultIsChecked={values.cat}
            onChange={(e) => setFieldValue("cat", e)}
          >
            Cat?
          </Checkbox>

          <Checkbox
            value="serviceAnimal"
            defaultIsChecked={values.serviceAnimal}
            onChange={(e) => setFieldValue("serviceAnimal", e)}
          >
            Service Animal?
          </Checkbox>

          <Checkbox
            value="supportAnimal"
            defaultIsChecked={values.supportAnimal}
            onChange={(e) => setFieldValue("supportAnimal", e)}
          >
            Emotional Support Animal?
          </Checkbox>

          <Spacer />

          <Text fontSize={"xl"}>Names:</Text>

          <Spacer />

          <TextInput
            width="100%"
            placeholder="name"
            onChangeText={handleChange("nameOne")}
            name="nameOne"
            onBlur={handleBlur("nameOne")}
            error={errors.nameOne}
            touched={touched.nameOne}
            value={values.nameOne}
            label="First pet name"
          />

          <TextInput
            width="100%"
            placeholder="name"
            onChangeText={handleChange("nameTwo")}
            name="nameTwo"
            onBlur={handleBlur("nameTwo")}
            error={errors.nameTwo}
            touched={touched.nameTwo}
            value={values.nameTwo}
            label="Second pet name"
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
  shelter: Yup.boolean(),
  amount: Yup.number()
    .typeError("Please pick a number between 0-2")
    .min(0)
    .max(2),

  dog: Yup.boolean(),
  cat: Yup.boolean(),
  serviceAnimal: Yup.boolean(),
  supportAnimal: Yup.boolean(),
  nameOne: Yup.string(),
  nameTwo: Yup.string(),
});

const Spacer = styled.View`
  margin-top: 2%;

  margin-bottom: 2%;
`;
