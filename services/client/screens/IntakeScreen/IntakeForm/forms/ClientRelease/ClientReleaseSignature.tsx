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

export default function RaceEthnicityInfo({ nextStep, onChange, formValues }) {
  //Options for relationship drop down

  const { members } = formValues;

  let copyOfMembers = members.map((mem) => ({
    ...mem,
    signature: "",
    date: "",
  }));

  const initialValues = {
    consent: "",
    anonymous: "",
    date: "",
    members: [...copyOfMembers],
  };

  const validationSchema = Yup.object().shape({
    consent: Yup.string(),
    anonymous: Yup.string(),
    date: Yup.string()
      .required("Required")
      .test(
        "is-valid-date",
        "Invalid date. Make sure the format is correct (MM/DD/YYYY)",
        function (value) {
          return isValidDate(value);
        }
      ),

    members: Yup.array().of(
      Yup.object().shape({
        signature: Yup.string().required("Required").nullable(),
      })
    ),
  });

  function onSubmit(fields) {
    // onChange({ members: [...fields.members] });
    // nextStep();

    if (!fields.consent && !fields.anonymous)
      return alert("Please add your initials to one of the options");

    if (fields.consent && fields.anonymous)
      return alert("Please add your initials to only one of the options");

    alert("SUCCESS!! :-)\n\n" + JSON.stringify(fields, null, 4));
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
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
            display: "flex",
            alignItems: "flex-start",
            width: "100%",
          }}
        >
          <Text fontSize="3xl" marginBottom={5}>
            Client Release Signature
          </Text>

          <TextInput
            width="100%"
            placeholder="Initials"
            name="dateLastIncident"
            onBlur={handleBlur("dateLastIncident")}
            error={errors.consent}
            onChangeText={handleChange("consent")}
            touched={touched.consent}
            value={values.consent}
            label="I consent to
  the inclusion of personal information in CMIS about me and any
  dependents listed below and authorize information collected to be
  shared with other local service agencies. I understand that my
  personal information will not be made public and will only be used
  with strict confidentiality. I also understand that I may withdraw
  my consent at any time."
            marginBottom={"20px"}
          />

          <TextInput
            width="100%"
            placeholder="Initials"
            name="dateLastIncident"
            onBlur={handleBlur("dateLastIncident")}
            onChangeText={handleChange("anonymous")}
            error={errors.anonymous}
            touched={touched.anonymous}
            value={values.anonymous}
            label="I do not
  consent to the inclusion of personal information about me or any of
  my dependents."
            marginBottom={"20px"}
          />

          <Text fontSize={"xl"} marginBottom={5}>
            Dependent children under 18 in household, add first and last name
          </Text>

          <FieldArray name="members">
            {() =>
              values.members.map((ticket, i) => {
                const ticketErrors =
                  (errors.members?.length &&
                    errors.members[i] &&
                    errors.members[i]) ||
                  {};

                const ticketTouched =
                  (touched.members &&
                    touched.members[i] &&
                    touched.members[i]) ||
                  {};

                const ticketValues =
                  (values.members[i] && values.members[i]) || {};

                if (getAge(ticket.demographics.dob) >= 18) return <></>;

                return (
                  <View
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      width: "100%",
                      marginBottom: "3%",
                    }}
                  >
                    <TextInput
                      width="100%"
                      placeholder={`Signature`}
                      onBlur={handleBlur("members")}
                      error={ticketErrors.signature}
                      label={`${values.members[i].demographics.firstName} ${values.members[i].demographics.lastName}`}
                      touched={ticketTouched.signature}
                      value={ticketValues.signature}
                      marginBottom={"20px"}
                      onChangeText={(value) => {
                        handleSigChange(
                          "signature",
                          value,
                          values,
                          setFieldValue,
                          i
                        );
                      }}
                    />
                  </View>
                );
              })
            }
          </FieldArray>

          <Text fontSize={"xl"} marginBottom={5}>
            Signature of all adults in household
          </Text>

          <FieldArray name="members">
            {() =>
              values.members.map((ticket, i) => {
                const ticketErrors =
                  (errors.members?.length &&
                    errors.members[i] &&
                    errors.members[i]) ||
                  {};

                const ticketTouched =
                  (touched.members &&
                    touched.members[i] &&
                    touched.members[i]) ||
                  {};

                const ticketValues =
                  (values.members[i] && values.members[i]) || {};

                if (getAge(ticket.demographics.dob) <= 18) return <></>;

                return (
                  <View
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      width: "100%",
                      marginBottom: "3%",
                    }}
                  >
                    <TextInput
                      width="100%"
                      placeholder={`Signature`}
                      onBlur={handleBlur("members")}
                      error={ticketErrors.signature}
                      touched={ticketTouched.signature}
                      value={ticketValues.signature}
                      label={`${values.members[i].demographics.firstName} ${values.members[i].demographics.lastName}`}
                      marginBottom={"20px"}
                      onChangeText={(value) => {
                        handleSigChange(
                          "signature",
                          value,
                          values,
                          setFieldValue,
                          i
                        );
                      }}
                    />
                  </View>
                );
              })
            }
          </FieldArray>

          <Text fontSize={"xl"}>Date</Text>
          <TextInput
            width="100%"
            placeholder="MM/DD/YYYY"
            onBlur={handleBlur("members")}
            error={errors.date}
            touched={touched.date}
            value={values.date}
            marginBottom={"20px"}
            onChangeText={handleChange("date")}
          />

          <Text fontSize={"xl"}>
            *** Please return device to staff member. ***
          </Text>

          <Button
            marginTop={"3%"}
            onPress={() => {
              console.log(errors);

              handleSubmit();
            }}
          >
            Submit
          </Button>
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
