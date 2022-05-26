import { StyleSheet, View } from "react-native";

import React from "react";

import { useNavigation } from "@react-navigation/native";

import { useFormik } from "formik";

import TextInput from "../../../../components/TextInput";

import { Button, Checkbox, Text, Spacer } from "native-base";

import * as Yup from "yup";

import "yup-phone";

export default function FamilyDemographics({ formValues, onChange, nextStep }) {
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
      contactOneName: formValues.contactOneName,
      contactOneNumber: formValues.contactOneNumber,
      contactOneSafeToLeaveMsg: formValues.contactOneSafeToLeaveMsg,
      contactTwoName: formValues.contactTwoName,
      contactTwoNumber: formValues.contactTwoNumber,
      contactTwoSafeToLeaveMsg: formValues.contactTwoSafeToLeaveMsg,
      emergencyContactName: formValues.emergencyContactName,
      emergencyContactNumber: formValues.emergencyContactNumber,
      emergencyContactSafeToLeaveMsg: formValues.emergencyContactSafeToLeaveMsg,
    },
    validationSchema: ContactSchema,

    onSubmit: async (newValues) => {
      try {
        onChange(newValues);

        nextStep();

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
        Family Demographics
      </Text>

      <Text fontSize={"2xl"}>First contact</Text>
      <TextInput
        width="100%"
        placeholder="Full name"
        onChangeText={handleChange("contactOneName")}
        name="contactOneName"
        onBlur={handleBlur("contactOneName")}
        error={errors.contactOneName}
        touched={touched.contactOneName}
        value={values.contactOneName}
      />
      <TextInput
        placeholder="Number"
        onChangeText={handleChange("contactOneNumber")}
        onBlur={handleBlur("contactOneNumber")}
        error={errors.contactOneNumber}
        touched={touched.contactOneNumber}
        value={values.contactOneNumber}
      />

      <Spacer />

      <Checkbox
        value="safeToLeaveMsg"
        defaultIsChecked={formValues.contactOneSafeToLeaveMsg}
        onChange={(e) => setFieldValue("contactOneSafeToLeaveMsg", e)}
      >
        Safe to leave msg
      </Checkbox>

      <Text fontSize={"2xl"}>Second contact</Text>
      <TextInput
        placeholder="Full name"
        onChangeText={handleChange("contactTwoName")}
        onBlur={handleBlur("contactTwoName")}
        error={errors.contactTwoName}
        touched={touched.contactTwoName}
        value={values.contactTwoName}
      />
      <TextInput
        placeholder="Phone number"
        onChangeText={handleChange("contactTwoNumber")}
        onBlur={handleBlur("contactTwoNumber")}
        error={errors.contactTwoNumber}
        touched={touched.contactTwoNumber}
        value={values.contactTwoNumber}
      />

      <Spacer />

      <Checkbox
        value={"false"}
        defaultIsChecked={true}
        onChange={(e) => setFieldValue("contactTwoSafeToLeaveMsg", e)}
      >
        Safe to leave msg
      </Checkbox>
      <Text fontSize={"2xl"}>Emergency contact</Text>
      <TextInput
        placeholder="Full name"
        onChangeText={handleChange("emergencyContactName")}
        onBlur={handleBlur("emergencyContactName")}
        error={errors.emergencyContactName}
        touched={touched.emergencyContactName}
        value={values.emergencyContactName}
      />
      <TextInput
        placeholder="Number"
        onChangeText={handleChange("emergencyContactNumber")}
        onBlur={handleBlur("emergencyContactNumber")}
        error={errors.emergencyContactNumber}
        touched={touched.emergencyContactNumber}
        value={values.emergencyContactNumber}
      />
      <Checkbox
        value={"false"}
        defaultIsChecked={true}
        onChange={(e) => setFieldValue("emergencyContactSafeToLeaveMsg", e)}
      >
        Safe to leave msg
      </Checkbox>
      <Button style={{ marginTop: "5%" }} onPress={() => handleSubmit()}>
        Submit
      </Button>
    </View>
  );
}

const ContactSchema = Yup.object().shape({
  contactOneName: Yup.string().required("Required"),
  contactOneNumber: Yup.string().phone().required("This field is Required"),
  contactTwoName: Yup.string().required("Required"),
  contactTwoNumber: Yup.string().phone().required("Required"),
  emergencyContactName: Yup.string().required("Required"),
  emergencyContactNumber: Yup.string().phone().required("Required"),
});

// contactOneName: "",
// contactOneNumber: "",
// contactOneSafeToLeaveMsg: true,
// contactTwoName: "",
// contactTwoNumber: "",
// contactTwoSafeToLeaveMsg: true,
// emergencyContactName: "",
// emergencyContactNumber: "",
