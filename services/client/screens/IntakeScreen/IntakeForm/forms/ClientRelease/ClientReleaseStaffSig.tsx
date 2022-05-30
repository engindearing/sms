import { View } from "react-native";
import React from "react";

import { Formik, FieldArray } from "formik";

import TextInput from "../../../../../components/TextInput";

import * as Yup from "yup";

import { Button, Select } from "native-base";

import SelectInput from "../../../../../components/SelectInput";

import TextAreaInput from "../../../../../components/TextAreaInput";

import { Text } from "native-base";

import getAge from "../../../../../utils/getAge";

import CheckboxInput, {
  CheckboxGroup,
} from "../../../../../components/CheckboxInput";
import Navigation from "../../Navigation";

const gradeOptions = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
];

const attendStatOptions = [
  "Regular",
  "Irregular",
  "Dropped out",
  "Suspended",
  "Expelled",
];

const schoolTypeOptions = ["Public", "Private"];

export default function RaceEthnicityInfo({
  nextStep,
  onChange,
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
    <Formik initialValues={initialValues} onSubmit={onSubmit} >
      {({
        errors,
        values,
        touched,
        handleBlur,
        setFieldValue,
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
            error={errors.signature}
            touched={touched.signature}
            value={values.signature}
            label="Staff signature"
            marginBottom={"20px"}
          />

          <TextInput
            width="100%"
            placeholder="MM/DD/YYYY"
            onBlur={handleBlur("members")}
            error={errors.date}
            touched={touched.date}
            value={values.date}
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
            error={errors.anonymous}
            touched={touched.anonymous}
            value={values.anonymous}
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
            error={errors.agency}
            touched={touched.agency}
            value={values.agency}
            label="Staff signature"
            marginBottom={"20px"}
          />

          <TextInput
            width="100%"
            placeholder="MM/DD/YYYY"
            onBlur={handleBlur("members")}
            error={errors.date}
            touched={touched.date}
            value={values.date}
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
            error={errors.sig2}
            touched={touched.sig2}
            value={values.sig2}
            label="Staff signature"
            marginBottom={"20px"}
          />

          <TextInput
            width="100%"
            placeholder="MM/DD/YYYY"
            onBlur={handleBlur("date2")}
            error={errors.date2}
            touched={touched.date2}
            value={values.date2}
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
            error={errors.agency2}
            touched={touched.agency2}
            value={values.agency2}
            label="Agency"
            marginBottom={"20px"}
          />

          <Navigation prevStep={prevStep} handleSubmit={handleSubmit} />
        </View>
      )}
    </Formik>
  );
}

const handleSigChange = (field, value, values, setFieldValue, position) => {
  return setFieldValue("members", [
    ...values.members.map((member, i) => {
      if (i == position) {
        member[field] = value;
      }

      return member;
    }),
  ]);
};

function isValidDate(dateString) {
  // First check for the pattern
  if (!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(dateString)) return false;

  // Parse the date parts to integers
  var parts = dateString.split("/");
  var day = parseInt(parts[1], 10);
  var month = parseInt(parts[0], 10);
  var year = parseInt(parts[2], 10);

  // Check the ranges of month and year
  if (year < 1000 || year > 3000 || month == 0 || month > 12) return false;

  var monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  // Adjust for leap years
  if (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0))
    monthLength[1] = 29;

  // Check the range of the day
  return day > 0 && day <= monthLength[month - 1];
}
