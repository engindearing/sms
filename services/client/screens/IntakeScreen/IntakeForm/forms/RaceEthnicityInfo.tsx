import { View } from "react-native";
import React from "react";

import { Formik, FieldArray } from "formik";

import TextInput from "../../../../components/TextInput";

import * as Yup from "yup";

import { Button, Select } from "native-base";

import SelectInput from "../../../../components/SelectInput";

import { Text } from "native-base";

import CheckboxInput, {
  CheckboxGroup,
} from "../../../../components/CheckboxInput";

//Options for race
const options = [
  "Hispanic/Latino",
  "American Indian or Alaska Native",
  "Asian",
  "Black or African American",
  "Native Hawaiian or Pacific Islander",
  "White",
  "Unknown",
  "Decline to Answer",
];

export default function RaceEthnicityInfo({ nextStep, onChange, formValues }) {
  //Options for relationship drop down

  const { members } = formValues;

  const initialValues = {
    numberOfHouseholdMembers: "",
    members: [...members],
  };

  const validationSchema = Yup.object().shape({
    members: Yup.array().of(
      Yup.object().shape({
        demographics: Yup.object().shape({
          race: Yup.array().of(Yup.string()).min(1, "Required"),
        }),
      })
    ),
  });

  function onSubmit(fields) {
    // onChange({ members: [...fields.members] });
    // nextStep();

    alert("SUCCESS!! :-)\n\n" + JSON.stringify(fields, null, 4));
  }

  const genderOptions = ["Male", "Female", "Decline to Answer"];

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
        setValues,
        handleBlur,
        setFieldValue,
        handleSubmit,
      }) => (
        <View
          style={{
            display: "flex",
            alignItems: "flex-start",
            width: "100%",
          }}
        >
          <Text fontSize="3xl">Ethnicity info</Text>

          <Text fontSize={"xl"} marginBottom="1%">
            Please answer the following questions about race. Check all that
            apply for EACH family member.
          </Text>

          <FieldArray name="members">
            {() =>
              values.members.map((ticket, i) => {
                const ticketErrors =
                  (errors.members?.length &&
                    errors.members[i] &&
                    errors.members[i].demographics) ||
                  {};
                const ticketTouched =
                  (touched.members &&
                    touched.members[i] &&
                    touched.members[i].demographics) ||
                  {};

                const ticketValues =
                  (values.members[i] && values.members[i].demographics) || {};

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
                    <Text
                      fontSize={"2xl"}
                      marginTop="2%"
                      marginBottom="1%"
                    >{`${values.members[i].demographics.firstName}`}</Text>

                    <CheckboxGroup
                      error={ticketErrors.race}
                      touched={ticketTouched.race}
                      onChange={(name, value) => {
                        setFieldValue("members", [
                          ...values.members.map((member, key) => {
                            let races = member.demographics.race;
                            if (key == i) {
                              if (races.includes(name)) {
                                member.demographics.race = races.filter(
                                  (race) => race !== name
                                );
                              } else {
                                member.demographics.race.push(name);
                              }
                            }

                            return member;
                          }),
                        ]);
                      }}
                    >
                      {options.map((opt) => (
                        <CheckboxInput name={opt}>{opt}</CheckboxInput>
                      ))}
                    </CheckboxGroup>
                  </View>
                );
              })
            }
          </FieldArray>

          <Button marginTop={"3%"} onPress={() => handleSubmit()}>
            Submit
          </Button>
        </View>
      )}
    </Formik>
  );
}

const handleChange = (field, value, values, setFieldValue, position) => {
  return setFieldValue("members", [
    ...values.members.map((member, i) => {
      if (i == position) {
        member.demographics[field] = value;
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
