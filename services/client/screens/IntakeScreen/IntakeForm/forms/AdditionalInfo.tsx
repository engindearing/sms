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
      make: formValues.make,
      model: formValues.model,
      year: formValues.year,
      color: formValues.color,
      lic: formValues.lic,

      foodstamps: formValues.foodstamps,
      cpsFps: formValues.cpsFps,
      rrh: formValues.rrh,
      housingVoucher: formValues.housingVoucher,
      veteranServices: formValues.veteranServices,
      snap: formValues.snap,

      isPregnant: formValues.isPregnant,
      ifYesWho: formValues.ifYesWho,
      due: formValues.due,
    },

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
        Additional Information
      </Text>

      <Text fontSize={"xl"}>Vehicle Information:</Text>

      <Spacer />

      <TextInput
        width="100%"
        placeholder="make"
        onChangeText={handleChange("make")}
        name="make"
        onBlur={handleBlur("make")}
        error={errors.make}
        touched={touched.make}
        value={values.make}
        label="Make"
      />

      <TextInput
        width="100%"
        placeholder="model"
        onChangeText={handleChange("model")}
        name="model"
        onBlur={handleBlur("model")}
        error={errors.model}
        touched={touched.model}
        value={values.model}
        label="Model"
      />

      <TextInput
        width="100%"
        placeholder="year"
        onChangeText={handleChange("year")}
        name="year"
        onBlur={handleBlur("year")}
        error={errors.year}
        touched={touched.year}
        value={values.year}
        label="Year"
      />

      <TextInput
        width="100%"
        placeholder="color"
        onChangeText={handleChange("color")}
        name="color"
        onBlur={handleBlur("color")}
        error={errors.color}
        touched={touched.color}
        value={values.color}
        label="Color"
      />

      <TextInput
        width="100%"
        placeholder="#"
        onChangeText={handleChange("lic")}
        name="lic"
        onBlur={handleBlur("lic")}
        error={errors.lic}
        touched={touched.lic}
        value={values.lic}
        label="Liscence #"
      />

      <Spacer />

      <Text fontSize={"xl"}>Government Benefits:</Text>

      <Spacer />

      {GOVBenifits.map((key) => {
        return (
          <Checkbox
            value="isPregnant"
            defaultIsChecked={values[GOVBenifitsDataName[key]]}
            onChange={(e) => setFieldValue(GOVBenifitsDataName[key], e)}
            key={key}
          >
            {key}
          </Checkbox>
        );
      })}

      <Spacer />

      <Text fontSize={"xl"}>Pregnancy Information:</Text>

      <Spacer />

      <Checkbox
        value="isPregnant"
        defaultIsChecked={values.isPregnant}
        onChange={(e) => setFieldValue("isPregnant", e)}
      >
        Is any one in your household pregnant?
      </Checkbox>

      <Spacer />

      {values.isPregnant && (
        <>
          <TextInput
            width="100%"
            placeholder="name"
            onChangeText={handleChange("ifYesWho")}
            name="ifYesWho"
            onBlur={handleBlur("ifYesWho")}
            error={errors.ifYesWho}
            touched={touched.ifYesWho}
            value={values.ifYesWho}
            label="If yes, who?"
          />

          <TextInput
            width="100%"
            placeholder="date"
            onChangeText={handleChange("due")}
            name="due"
            onBlur={handleBlur("due")}
            error={errors.due}
            touched={touched.due}
            value={values.due}
            label="When is the due date?"
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
  make: Yup.string(),
  model: Yup.string(),
  year: Yup.string(),
  color: Yup.string(),
  lic: Yup.string(),

  foodstamps: Yup.boolean(),
  cpsFps: Yup.boolean(),
  rrh: Yup.boolean(),
  housingVoucher: Yup.boolean(),
  veteranServices: Yup.boolean(),
  snap: Yup.boolean(),

  isPregnant: Yup.boolean(),
  ifYesWho: Yup.string(),
  due: Yup.string(),
});

const Spacer = styled.View`
  margin-top: 2%;

  margin-bottom: 2%;
`;
