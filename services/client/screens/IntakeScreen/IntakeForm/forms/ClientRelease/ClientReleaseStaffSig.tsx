import React from "react";

import { View } from "react-native";

import { Formik } from "formik";

import TextInput from "../../../../../components/TextInput";

import * as Yup from "yup";

import { Text } from "native-base";

import CheckboxInput from "../../../../../components/CheckboxInput";

import Navigation from "../../Navigation";

export default function RaceEthnicityInfo({
  nextStep,
  formValues,
  prevStep,
}) {
  //Options for relationship drop down

  const { members } = formValues;

  let copyOfMembers = members.map((mem) => ({
    ...mem,
    signature: "",
    date: "",
  }));

  const initialValues = {
    consent: "",
    agency: "",
    date: "",
    members: [...copyOfMembers],
  };

  function onSubmit(fields) {
    // onChange({ members: [...fields.members] });
    // nextStep();
    nextStep();
  }

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({
        handleBlur,
        handleSubmit,
        handleChange,
      }) => (
        <View
          style={{
            width: "100%",
          }}
        >
          <Text fontSize="3xl" marginBottom={5}>
            Client Release Staff Signature
          </Text>

          <TextInput
            width="100%"
            placeholder="Signature"
            name="dateLastIncident"
            onBlur={handleBlur("dateLastIncident")}
            onChangeText={handleChange("signature")}
            label="Staff signature"
            marginBottom={"20px"}
          />

          <TextInput
            width="100%"
            placeholder="MM/DD/YYYY"
            onBlur={handleBlur("members")}
            label="Date"
            marginBottom={"20px"}
            onChangeText={handleChange("date")}
          />

          <TextInput
            width="100%"
            placeholder="Agency Name"
            name="dateLastIncident"
            onBlur={handleBlur("dateLastIncident")}
            onChangeText={handleChange("anonymous")}
            label="Agency"
            marginBottom={"20px"}
          />

          <CheckboxInput name="anonymous">
            Client did NOT consent to the inclusion of personal information in
            CMIS for themselves or any dependents.
          </CheckboxInput>

          <TextInput
            width="100%"
            placeholder="Signature"
            name="dateLastIncident"
            onBlur={handleBlur("dateLastIncident")}
            onChangeText={handleChange("agency")}
            label="Staff signature"
            marginBottom={"20px"}
          />

          <TextInput
            width="100%"
            placeholder="MM/DD/YYYY"
            onBlur={handleBlur("members")}
            label="Date"
            marginBottom={"20px"}
            onChangeText={handleChange("date")}
          />

          <CheckboxInput name="anonymous">
            Staff obtained telephonic consent from client and dependents under
            18 as listed above. Note: Written consent must be obtained at the
            first time the client is physically present at an organization with
            access to the HMIS system.
          </CheckboxInput>

          <TextInput
            width="100%"
            placeholder="Signature"
            name="dateLastIncident"
            onBlur={handleBlur("sig2")}
            onChangeText={handleChange("sig2")}
            label="Staff signature"
            marginBottom={"20px"}
          />

          <TextInput
            width="100%"
            placeholder="MM/DD/YYYY"
            onBlur={handleBlur("date2")}
            label="Date"
            marginBottom={"20px"}
            onChangeText={handleChange("date2")}
          />

          <TextInput
            width="100%"
            placeholder="Agency Name"
            name="dateLastIncident"
            onBlur={handleBlur("agency2")}
            onChangeText={handleChange("agency2")}
            label="Agency"
            marginBottom={"20px"}
          />

          <Navigation prevStep={prevStep} handleSubmit={handleSubmit} />
        </View>
      )}
    </Formik>
  );
}
