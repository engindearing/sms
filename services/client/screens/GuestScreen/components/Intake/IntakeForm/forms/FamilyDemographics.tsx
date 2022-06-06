import { View } from "react-native";

import React from "react";

import { Formik, FieldArray } from "formik";

import TextInput from "../../../../../../components/TextInput";

import * as Yup from "yup";

import { Select } from "native-base";

import SelectInput from "../../../../../../components/SelectInput";

import { Text } from "native-base";

import CheckboxInput, {
  CheckboxGroup,
} from "../../../../../../components/CheckboxInput";

import Navigation from "../Navigation";

import { useDispatch, useSelector } from "react-redux";
import { setMembers } from "../../../../../../state/slices/householdSlice";
import { updateMembers } from "../../../../../../api/members";

const options = ["Job", "TANF", "SSI", "SSDI", "Child Support", "Other"];

const optionDataName = {
  Job: "job",
  TANF: "TANF",
  SSI: "SSI",
  SSDI: "SSDI",
  "Child Support": "childSupport",
  Other: "other",
};

export default function FamilyMembers({ nextStep, prevStep }) {
  //Options for relationship drop down

  const dispatch = useDispatch();

  const { members, household } = useSelector((state: any) => state.household);

  const initialValues = {
    numberOfHouseholdMembers: "",
    members: structuredClone(members),
  };

  const validationSchema = Yup.object().shape({
    members: Yup.array().of(
      Yup.object().shape({
        demographics: Yup.object().shape({
          gender: Yup.string().required("Required").nullable(),

          ssn: Yup.string()
            .length(4, "Last 4 digits")
            .required("Required")
            .nullable(),

          income: Yup.number()
            .min(0, "invalid income")
            .typeError("invalid income")
            .required("Required")
            .nullable(),

          incomeSource: Yup.object().shape({
            job: Yup.boolean().nullable(),
            TANF: Yup.boolean().nullable(),
            SSI: Yup.boolean().nullable(),
            SSDI: Yup.boolean().nullable(),
            childSupport: Yup.boolean().nullable(),
            other: Yup.boolean().nullable(),
          }),

          dob: Yup.string()
            .required("Required")
            .nullable()
            .test(
              "is-valid-date",
              "Invalid date. Make sure the format is correct (MM/DD/YYYY)",
              function (value) {
                return isValidDate(value);
              }
            ),
        }),
      })
    ),
  });

  async function onSubmit(fields) {
    dispatch(setMembers(fields.members));

    try {
      await updateMembers(household._id, fields.members);

      nextStep();
    } catch (error) {
      alert("this error");
    }
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
        handleBlur,
        setFieldValue,
        handleSubmit,
      }) => (
        <View
          style={{
            width: "100%",
          }}
        >
          <Text fontSize="3xl">Demographics</Text>

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

                    <SelectInput
                      label="Gender"
                      accessibilityLabel="Choose Service"
                      minWidth={"100%"}
                      placeholder="gender"
                      error={ticketErrors.gender}
                      touched={ticketTouched.gender}
                      selectedValue={ticketValues.gender}
                      blur={handleBlur("gender")}
                      onValueChange={(value) => {
                        handleChange("gender", value, values, setFieldValue, i);
                      }}
                    >
                      {genderOptions.map((opt, key) => (
                        <Select.Item key={key} label={opt} value={opt} />
                      ))}
                    </SelectInput>

                    <TextInput
                      width="100%"
                      placeholder="MM/DD/YYYY"
                      onBlur={handleBlur("members")}
                      error={ticketErrors.dob}
                      touched={ticketTouched.dob}
                      value={ticketValues.dob}
                      label="Birthdate"
                      marginBottom={"20px"}
                      onChangeText={(value) => {
                        handleChange("dob", value, values, setFieldValue, i);
                      }}
                    />

                    <TextInput
                      width="100%"
                      placeholder="0000"
                      onBlur={handleBlur("members")}
                      error={ticketErrors.ssn}
                      touched={ticketTouched.ssn}
                      value={ticketValues.ssn}
                      label="Last 4 of SSN"
                      marginBottom={"20px"}
                      onChangeText={(value) => {
                        handleChange("ssn", value, values, setFieldValue, i);
                      }}
                    />

                    <TextInput
                      width="100%"
                      placeholder="income"
                      onBlur={handleBlur("members")}
                      error={ticketErrors.income}
                      touched={ticketTouched.income}
                      value={ticketValues.income}
                      label="Monthly Income"
                      marginBottom={"20px"}
                      onChangeText={(value) => {
                        handleChange("income", value, values, setFieldValue, i);
                      }}
                    />
                    <Text fontSize={"xl"} marginBottom="3%">
                      Income source (Choose all that apply){" "}
                    </Text>
                    <CheckboxGroup
                      onChange={(name, value) => {
                        setFieldValue("members", [
                          ...values.members.map((member, key) => {
                            if (key == i) {
                              member.demographics.incomeSource[name] = value;
                            }

                            return member;
                          }),
                        ]);
                      }}
                    >
                      {options.map((opt) => (
                        <CheckboxInput
                          defaultIsChecked={
                            values.members[i].demographics.incomeSource[
                              optionDataName[opt]
                            ]
                          }
                          name={optionDataName[opt]}
                        >
                          {opt}
                        </CheckboxInput>
                      ))}
                    </CheckboxGroup>
                  </View>
                );
              })
            }
          </FieldArray>

          <Navigation
            prevStep={prevStep}
            handleSubmit={() => {
              console.log(errors);
              handleSubmit();
            }}
          />
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
