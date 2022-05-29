import { View } from "react-native";
import React from "react";

import { Formik, FieldArray } from "formik";

import TextInput from "../../../../components/TextInput";

import * as Yup from "yup";

import { Button, Select } from "native-base";

import SelectInput from "../../../../components/SelectInput";

import TextAreaInput from "../../../../components/TextAreaInput";

import { Text } from "native-base";

import getAge from "../../../../utils/getAge";

import styled from "styled-components/native";

import CheckboxInput, {
  CheckboxGroup,
} from "../../../../components/CheckboxInput";

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
  }));

  const initialValues = {
    consent1: "",
    consent2: "",
    members: [...copyOfMembers],
  };

  const validationSchema = Yup.object().shape({
    consent1: Yup.string().required("Required"),
    consent2: Yup.string().required("Required"),

    members: Yup.array().of(
      Yup.object().shape({
        signature: Yup.string().required("Required").nullable(),
      })
    ),
  });

  function onSubmit(fields) {
    // onChange({ members: [...fields.members] });
    // nextStep();
    nextStep();

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
            Guest Waiver of Liability and Disclaimer
          </Text>

          <Spacer />

          <Text fontSize={"2xl"}>***Read Carefully Before Signing***</Text>

          <Spacer />

          <TextInput
            width="100%"
            placeholder="First & last name"
            name="dateLastIncident"
            onBlur={handleBlur("consent1")}
            error={errors.consent1}
            onChangeText={handleChange("consent1")}
            touched={touched.consent1}
            value={values.consent1}
            label="I hereby acknowledge and agree to the terms of Family Promise Open
            Doors Shelter, 2002 E Mission Ave, Spokane, WA. 99202"
            marginBottom={"20px"}
          />

          <Text>
            I am at least eighteen (18) years of age (if under 18, parental
            consent needed) and legally competent to sign this Waiver of
            Liability and Disclaimer ("Waiver").
          </Text>

          <Spacer />

          <TextInput
            width="100%"
            placeholder="First & last name"
            name="dateLastIncident"
            onBlur={handleBlur("dateLastIncident")}
            error={errors.consent2}
            onChangeText={handleChange("consent2")}
            touched={touched.consent2}
            value={values.consent2}
            label="I DO HEREBY EXEMPT AND RELEASE FAMILY PROMISE, ITS OFFICERS,
            DIRECTORS, EMPLOYEES, VOLUNTEERS, CONTRACTORS, STAFF, AFFILIATES,
            AGENTS, AND ATTORNEYS (COLLECTIVELY, THE “RELEASED PERSONS”) FROM
            ANY AND ALL LIABILITY WHATSOEVER FOR PERSONAL INJURY, PROPERTY
            DAMAGE, OR WRONGFUL DEATH CAUSED BY THE ACTS OR OMISSIONS OF ANY ONE
            OR MORE OF THE RELEASED PERSONS AND/OR ANY THIRD PARTIES ARISING OUT
            OF THE PROJECT, WORK ASSOCIATED WITH THE PROJECT, OR MY
            PARTICIPATION IN THE PROJECT
         "
            marginBottom={"20px"}
          />

          <Spacer />

          <Text>
            I FURTHER HEREBY ACKNOWLEDGE AND AGREE TO DEFEND, INDEMNIFY, SAVE,
            HOLD HARMLESS, AND COVENANT NOT TO SUE THE RELEASED PERSONS FOR ANY
            AND ALL CLAIMS, DEMANDS, DAMAGES, CAUSES OF ACTION AND SUITS IN
            EQUITY, WHETHER ARISING OUT OF COMMON LAW, EQUITY, ARBITRATION OR
            STATUTE, NOW OR HEREAFTER ARISING, KNOWN OR UNKNOWN, ASSERTED BY ME,
            MY CHILD, OR MY SPOUSE (AND MY OR THEIR RESPECTIVE ESTATES, HEIRS,
            EXECUTORS, ADMINISTRATORS, OR ASSIGNS) ARISING SOLELY OUT OF MY ACTS
            OR OMISSIONS THAT OCCURRED DURING THE PROJECT, WORK ASSOCIATED WITH
            THE PROJECT, OR MY PARTICIPATION IN THE PROJECT.
          </Text>

          <Spacer />

          <Text>
            I hereby acknowledge and expressly agree that all indemnities,
            releases and waivers contained in this Waiver are intended to be as
            broad and inclusive as permitted by the laws of the State of
            Washington and that, if any portion of the agreements in this Waiver
            are held invalid, it is agreed that the balance shall,
            notwithstanding, continue in full legal force and effect. I
            understand the terms herein are contractual and not merely recitals,
            and that I have signed this document of my own free will.
          </Text>

          <Spacer />

          <Text fontWeight={"bold"}>
            I understand the terms herein are contractual and not merely
            recitals, and that I have signed this document of my own free will.
          </Text>

          <Spacer />

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

const Spacer = styled.View`
  margin-top: 10;

  margin-bottom: 10;
`;

const Hr = styled.View`
  margin-top: 30;
  margin-bottom: 30;
  border-bottom-width: 1;
  margin-bottom: 30;

  border-color: #6960602d;
`;

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
