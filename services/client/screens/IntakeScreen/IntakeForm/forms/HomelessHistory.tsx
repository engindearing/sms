import { StyleSheet, View } from "react-native";

import React from "react";

import { useNavigation } from "@react-navigation/native";

import { useFormik } from "formik";

import TextInput from "../../../../components/TextInput";

import { Button, Checkbox, Text, Spacer } from "native-base";

import * as Yup from "yup";

import "yup-phone";
import { ScrollView } from "react-native-gesture-handler";

export default function HomelessHistory({ formValues, onChange, nextStep }) {
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
      lastPermanentAddress: formValues.lastPermanentAddress,
      currentLocation: formValues.currentLocation,
      lengthAtCurrentLocation: formValues.lengthAtCurrentLocation,
      priorLocation: formValues.priorLocation,
      lengthAtPriorLocation: formValues.lengthAtPriorLocation,
      homelessStartDate: formValues.homelessStartDate,
      numTimesHomeless: formValues.numTimesHomeless,
      totalLenHomeless: formValues.totalLenHomeless,
    },
    validationSchema: ContactSchema,

    onSubmit: async (newValues) => {
      try {
        onChange(newValues);

        console.log(newValues);
      } catch (error) {
        // #TODO
        // Handle specific errors, use a popup instead of alert
        alert("Invalid username or password");
      }
    },
  });

  return (
    <ScrollView style={{ width: "100%" }}>
      <Text
        style={{
          marginBottom: "2%",
        }}
        fontSize={"2xl"}
      >
        Homeless History
      </Text>

      <TextInput
        width="100%"
        placeholder="Last Permanent Address"
        onChangeText={handleChange("lastPermanentAddress")}
        name="lastPermanentAddress"
        onBlur={handleBlur("lastPermanentAddress")}
        error={errors.lastPermanentAddress}
        touched={touched.lastPermanentAddress}
        value={values.lastPermanentAddress}
        label="Last address you lived where you did not consider yourself to be homeless)"
        marginBottom={"3%"}
      />

      <TextInput
        width="100%"
        placeholder="Current location"
        onChangeText={handleChange("currentLocation")}
        name="currentLocation"
        onBlur={handleBlur("currentLocation")}
        error={errors.currentLocation}
        touched={touched.currentLocation}
        value={values.currentLocation}
        label="Where did you stay last night?"
        marginBottom={"3%"}
      />

      <TextInput
        width="100%"
        placeholder="Length of stay"
        onChangeText={handleChange("lengthAtCurrentLocation")}
        name="lengthAtCurrentLocation"
        onBlur={handleBlur("lengthAtCurrentLocation")}
        error={errors.lengthAtCurrentLocation}
        touched={touched.lengthAtCurrentLocation}
        value={values.lengthAtCurrentLocation}
        label="How long were you at this location?"
        marginBottom={"3%"}
      />

      <TextInput
        width="100%"
        placeholder="Prior location"
        onChangeText={handleChange("priorLocation")}
        name="priorLocation"
        onBlur={handleBlur("priorLocation")}
        error={errors.priorLocation}
        touched={touched.priorLocation}
        value={values.priorLocation}
        label="If less than 7 nights, where did you stay immediately prior to that?"
        marginBottom={"3%"}
      />

      <TextInput
        width="100%"
        placeholder="Length of stay"
        onChangeText={handleChange("lengthAtPriorLocation")}
        name="lengthAtPriorLocation"
        onBlur={handleBlur("lengthAtPriorLocation")}
        error={errors.lengthAtPriorLocation}
        touched={touched.lengthAtPriorLocation}
        value={values.lengthAtPriorLocation}
        label="How long were you at this location?"
        marginBottom={"3%"}
      />

      <TextInput
        width="100%"
        placeholder="Homeless start date"
        onChangeText={handleChange("homelessStartDate")}
        name="homelessStartDate"
        onBlur={handleBlur("homelessStartDate")}
        error={errors.homelessStartDate}
        touched={touched.homelessStartDate}
        value={values.homelessStartDate}
        label="Approximately when did you become homeless?"
        marginBottom={"3%"}
      />

      <TextInput
        width="100%"
        placeholder="Number of times homeless"
        onChangeText={handleChange("numTimesHomeless")}
        name="numTimesHomeless"
        onBlur={handleBlur("numTimesHomeless")}
        error={errors.numTimesHomeless}
        touched={touched.numTimesHomeless}
        value={values.numTimesHomeless}
        label="How many times in the last 3 years have you been homeless?"
        marginBottom={"3%"}
      />

      <TextInput
        width="100%"
        placeholder="Total months homeless"
        onChangeText={handleChange("totalLenHomeless")}
        name="totalLenHomeless"
        onBlur={handleBlur("totalLenHomeless")}
        error={errors.totalLenHomeless}
        touched={touched.totalLenHomeless}
        value={values.totalLenHomeless}
        label="How many total months in those 3 years have you been homeless?"
        marginBottom={"3%"}
      />

      <Button style={{ marginTop: "5%" }} onPress={() => handleSubmit()}>
        Submit
      </Button>
    </ScrollView>
  );
}

const ContactSchema = Yup.object().shape({
  lastPermanentAddress: Yup.string().required("Required"),
  currentLocation: Yup.string().required("Required"),
  lengthAtCurrentLocation: Yup.string().required("Required"),
  priorLocation: Yup.string().required("Required"),
  lengthAtPriorLocation: Yup.string().required("Required"),
  homelessStartDate: Yup.string().required("Required"),
  numTimesHomeless: Yup.number()
    .typeError("Please type in a number")
    .positive("Must be greater than zero")
    .required("Required"),
  totalLenHomeless: Yup.number()
    .typeError(" Please type in a number")
    .required("Required"),
});

