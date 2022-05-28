import { StyleSheet, View } from "react-native";

import React from "react";

import { useNavigation } from "@react-navigation/native";

import { useFormik } from "formik";

import TextInput from "../../../../components/TextInput";

import { Button, Checkbox, Text, Spacer } from "native-base";

import * as Yup from "yup";

import "yup-phone";
import { ScrollView } from "react-native-gesture-handler";
import { updateHousehold } from "../../../../api/household";

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
      homeless: {
        lastPermanentAddress: formValues.homeless.lastPermanentAddress,
        currentLocation: formValues.homeless.currentLocation,
        lengthAtCurrentLocation: formValues.homeless.lengthAtCurrentLocation,
        priorLocation: formValues.homeless.priorLocation,
        lengthAtPriorLocation: formValues.homeless.lengthAtPriorLocation,
        homelessStartDate: formValues.homeless.homelessStartDate,
        numTimesHomeless: formValues.homeless.numTimesHomeless,
        totalLenHomeless: formValues.homeless.totalLenHomeless,
      },
    },
    validationSchema: ContactSchema,

    onSubmit: async (homeless) => {
      try {
        let data = await updateHousehold(formValues._id, homeless);

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
        onChangeText={handleChange("homeless.lastPermanentAddress")}
        name="homeless.lastPermanentAddress"
        onBlur={handleBlur("homeless.lastPermanentAddress")}
        error={errors.homeless?.lastPermanentAddress}
        touched={touched.homeless?.lastPermanentAddress}
        value={values.homeless?.lastPermanentAddress}
        label="Last address you lived where you did not consider yourself to be homeless)"
        marginBottom={"3%"}
      />

      <TextInput
        width="100%"
        placeholder="Current location"
        onChangeText={handleChange("homeless.currentLocation")}
        name="currentLocation"
        onBlur={handleBlur("homeless.currentLocation")}
        error={errors.homeless?.currentLocation}
        touched={touched.homeless?.currentLocation}
        value={values.homeless?.currentLocation}
        label="Where did you stay last night?"
        marginBottom={"3%"}
      />

      <TextInput
        width="100%"
        placeholder="Length of stay"
        onChangeText={handleChange("homeless.lengthAtCurrentLocation")}
        name="lengthAtCurrentLocation"
        onBlur={handleBlur("homeless.lengthAtCurrentLocation")}
        error={errors.homeless?.lengthAtCurrentLocation}
        touched={touched.homeless?.lengthAtCurrentLocation}
        value={values.homeless?.lengthAtCurrentLocation}
        label="How long were you at this location?"
        marginBottom={"3%"}
      />

      <TextInput
        width="100%"
        placeholder="Prior location"
        onChangeText={handleChange("homeless.priorLocation")}
        name="priorLocation"
        onBlur={handleBlur("homeless.priorLocation")}
        error={errors.homeless?.priorLocation}
        touched={touched.homeless?.priorLocation}
        value={values.homeless?.priorLocation}
        label="If less than 7 nights, where did you stay immediately prior to that?"
        marginBottom={"3%"}
      />

      <TextInput
        width="100%"
        placeholder="Length of stay"
        onChangeText={handleChange("homeless.lengthAtPriorLocation")}
        name="lengthAtPriorLocation"
        onBlur={handleBlur("homeless.lengthAtPriorLocation")}
        error={errors.homeless?.lengthAtPriorLocation}
        touched={touched.homeless?.lengthAtPriorLocation}
        value={values.homeless?.lengthAtPriorLocation}
        label="How long were you at this location?"
        marginBottom={"3%"}
      />

      <TextInput
        width="100%"
        placeholder="Homeless start date"
        onChangeText={handleChange("homeless.homelessStartDate")}
        name="homelessStartDate"
        onBlur={handleBlur("homeless.homelessStartDate")}
        error={errors.homeless?.homelessStartDate}
        touched={touched.homeless?.homelessStartDate}
        value={values.homeless?.homelessStartDate}
        label="Approximately when did you become homeless?"
        marginBottom={"3%"}
      />

      <TextInput
        width="100%"
        placeholder="Number of times homeless"
        onChangeText={handleChange("homeless.numTimesHomeless")}
        name="numTimesHomeless"
        onBlur={handleBlur("homeless.numTimesHomeless")}
        error={errors.homeless?.numTimesHomeless}
        touched={touched.homeless?.numTimesHomeless}
        value={values.homeless?.numTimesHomeless}
        label="How many times in the last 3 years have you been homeless?"
        marginBottom={"3%"}
      />

      <TextInput
        width="100%"
        placeholder="Total months homeless"
        onChangeText={handleChange("homeless.totalLenHomeless")}
        name="totalLenHomeless"
        onBlur={handleBlur("homeless.totalLenHomeless")}
        error={errors.homeless?.totalLenHomeless}
        touched={touched.homeless?.totalLenHomeless}
        value={values.homeless?.totalLenHomeless}
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
  homeless: Yup.object().shape({
    lastPermanentAddress: Yup.string().required("Required").nullable(),
    currentLocation: Yup.string().required("Required").nullable(),
    lengthAtCurrentLocation: Yup.string().required("Required").nullable(),
    priorLocation: Yup.string().required("Required").nullable(),
    lengthAtPriorLocation: Yup.string().required("Required").nullable(),
    homelessStartDate: Yup.string().required("Required").nullable(),
    numTimesHomeless: Yup.number()
      .typeError("Please type in a number")
      .positive("Must be greater than zero")
      .nullable()
      .required("Required"),

    totalLenHomeless: Yup.number()
      .typeError(" Please type in a number")
      .nullable()
      .required("Required"),
  }),
});
