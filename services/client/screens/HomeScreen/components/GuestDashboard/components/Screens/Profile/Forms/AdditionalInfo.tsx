import React from "react";

import { useFormik } from "formik";

import TextInput from "../../../../../../../../components/TextInput";

import { Button, Checkbox, Text } from "native-base";

import styled from "styled-components/native";

import * as Yup from "yup";

import "yup-phone";

import { useDispatch, useSelector } from "react-redux";
import { updateHouseholdById } from "../../../../../../../../state/slices/householdSlice";
import { ScrollView } from "react-native-gesture-handler";

import { useCurrentHousehold } from "../../../../../../../../api/hooks";
import useUpdateHousehold from "../../../../../../../../api/hooks/useUpdateHousehold";

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
  "RRH (Rapid Rehousing) ": "RRH",
  "Housing Voucher (Current)": "housingVoucher",
  "Veteran Services": "veteranServices",
  "SNAP assistance": "snap",
};

export default function AdditionalInfo({ navigation }) {
  //Options for Gov Benifits w/dataBase name counterpart

  const { mutate: updateHousehold } = useUpdateHousehold();

  const {
    data: { household },
  } = useCurrentHousehold();

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
      vehicle: {
        make: household.vehicle.make,
        model: household.vehicle.model,
        year: household.vehicle.year,
        color: household.vehicle.color,
        lic: household.vehicle.lic,
      },

      govBenefits: {
        foodstamps: household.govBenefits.foodstamps,
        cpsFps: household.govBenefits.cpsFps,
        RRH: household.govBenefits.RRH,
        housingVoucher: household.govBenefits.housingVoucher,
        veteranServices: household.govBenefits.veteranServices,
        snap: household.govBenefits.snap,
      },

      pregnancies: {
        isPregnant: household.pregnancies.isPregnant,
        ifYesWho: household.pregnancies.ifYesWho,
        due: household.pregnancies.due,
      },
    },

    onSubmit: async (newValues) => {
      updateHousehold(
        { householdId: household._id, info: newValues },
        { onSuccess: () => navigation.navigate("Profile") }
      );
    },
  });

  return (
    <ScrollView style={{ padding: 10 }}>
      <Text fontSize={"xl"}>Vehicle Information:</Text>

      <Spacer />

      <TextInput
        width="100%"
        placeholder="make"
        onChangeText={handleChange("vehicle.make")}
        name="make"
        onBlur={handleBlur("vehicle.make")}
        error={errors.vehicle?.make}
        touched={touched.vehicle?.make}
        value={values.vehicle?.make}
        label="Make"
      />

      <TextInput
        width="100%"
        placeholder="model"
        onChangeText={handleChange("vehicle.model")}
        name="model"
        onBlur={handleBlur("vehicle.model")}
        error={errors.vehicle?.model}
        touched={touched.vehicle?.model}
        value={values.vehicle?.model}
        label="Model"
      />

      <TextInput
        width="100%"
        placeholder="year"
        onChangeText={handleChange("vehicle.year")}
        name="year"
        onBlur={handleBlur("vehicle.year")}
        error={errors.vehicle?.year}
        touched={touched.vehicle?.year}
        value={values.vehicle?.year}
        label="Year"
      />

      <TextInput
        width="100%"
        placeholder="color"
        onChangeText={handleChange("vehicle.color")}
        name="color"
        onBlur={handleBlur("vehicle.color")}
        error={errors.vehicle?.color}
        touched={touched.vehicle?.color}
        value={values.vehicle?.color}
        label="Color"
      />

      <TextInput
        width="100%"
        placeholder="#"
        onChangeText={handleChange("vehicle.lic")}
        name="lic"
        onBlur={handleBlur("vehicle.lic")}
        error={errors.vehicle?.lic}
        touched={touched.vehicle?.lic}
        value={values.vehicle?.lic}
        label="Liscence #"
      />

      <Spacer />

      <Text fontSize={"xl"}>Government Benefits:</Text>

      <Spacer />

      {GOVBenifits.map((key) => {
        return (
          <Checkbox
            value="isPregnant"
            defaultIsChecked={values.govBenefits[GOVBenifitsDataName[key]]}
            onChange={(e) =>
              setFieldValue(`govBenefits.${GOVBenifitsDataName[key]}`, e)
            }
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
        defaultIsChecked={values.pregnancies?.isPregnant}
        onChange={(e) => setFieldValue("pregnancies.isPregnant", e)}
      >
        Is any one in your household pregnant?
      </Checkbox>

      <Spacer />

      {values.pregnancies?.isPregnant && (
        <>
          <TextInput
            width="100%"
            placeholder="name"
            onChangeText={handleChange("pregnancies.ifYesWho")}
            name="ifYesWho"
            onBlur={handleBlur("pregnancies.ifYesWho")}
            error={errors.pregnancies?.ifYesWho}
            touched={touched.pregnancies?.ifYesWho}
            value={values.pregnancies?.ifYesWho}
            label="If yes, who?"
          />

          <TextInput
            width="100%"
            placeholder="date"
            onChangeText={handleChange("pregnancies.due")}
            name="due"
            onBlur={handleBlur("due")}
            error={errors.pregnancies?.due}
            touched={touched.pregnancies?.due}
            value={values.pregnancies?.due}
            label="When is the due date?"
          />
        </>
      )}

      <Button onPress={() => handleSubmit()}>Update</Button>
    </ScrollView>
  );
}

const ContactSchema = Yup.object().shape({
  vehicle: Yup.object().shape({
    make: Yup.string(),
    model: Yup.string(),
    year: Yup.string(),
    color: Yup.string(),
    lic: Yup.string(),
  }),

  pregnancies: Yup.object().shape({
    isPregnant: Yup.boolean(),
    ifYesWho: Yup.string(),
    due: Yup.string(),
  }),

  govBenefits: Yup.object().shape({
    foodstamps: Yup.boolean(),
    cpsFps: Yup.boolean(),
    rrh: Yup.boolean(),
    housingVoucher: Yup.boolean(),
    veteranServices: Yup.boolean(),
    snap: Yup.boolean(),
  }),
});

const Spacer = styled.View`
  margin-top: 2%;

  margin-bottom: 2%;
`;
