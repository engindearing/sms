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
import Navigation from "../Navigation";

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
  }));

  const initialValues = {
    sig1: "",
    sig2: "",
    sig3: "",
    sig4: "",

    members: [...copyOfMembers],
  };

  const validationSchema = Yup.object().shape({
    sig1: Yup.string().required("Required"),
    sig2: Yup.string().required("Required"),
    sig3: Yup.string().required("Required"),
    sig4: Yup.string().required("Required"),

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
            width: "100%",
          }}
        >
          <Text fontSize="3xl" marginBottom={5}>
            Family Promise of Spokane Photo/Video Release Form
          </Text>

          <Spacer />

          <TextInput
            width="100%"
            placeholder="First & last name"
            name="dateLastIncident"
            onBlur={handleBlur("sig1")}
            error={errors.sig1}
            onChangeText={handleChange("sig1")}
            touched={touched.sig1}
            value={values.sig1}
            label="I grant permission to Family Promise of Spokane and its employees,
            volunteers, and affiliates the irrevocable and unrestricted right to
            reproduce the photographs and/or video images taken of me, or
            members of my family, for the purpose of publication, promotion,
            illustration, advertising, or trade, in any manner or in any medium.
            I hereby release Family Promise of Spokane and its legal
            representatives for all claims and liability relating to said images
            or video. Furthermore, I grant permission to use my statements that
            were given during an interview, with or without my name, for the
            purpose of advertising and publicity without restriction. I waive my
            right to any compensation and understand that this release shall
            remain in effect until terminated in writing.
          "
            marginBottom={"20px"}
          />

          <TextInput
            width="100%"
            placeholder="Initials"
            name="dateLastIncident"
            onBlur={handleBlur("sig2")}
            error={errors.sig2}
            onChangeText={handleChange("sig2")}
            touched={touched.sig2}
            value={values.sig2}
            label="I do not
            consent to the inclusion of personal information about me or any of
            my dependents."
            marginBottom={"20px"}
          />

          <Text fontSize={"xl"}>I acknowledge that I am:</Text>

          <Spacer />

          <TextInput
            width="100%"
            placeholder="Initials"
            name="dateLastIncident"
            onBlur={handleBlur("sig3")}
            error={errors.sig3}
            onChangeText={handleChange("sig3")}
            touched={touched.sig3}
            value={values.sig3}
            label="Over the age of 18"
            marginBottom={"20px"}
          />

          <TextInput
            width="100%"
            placeholder="Initials"
            name="dateLastIncident"
            onBlur={handleBlur("sig4")}
            error={errors.sig4}
            onChangeText={handleChange("sig4")}
            touched={touched.sig4}
            value={values.sig4}
            label="AND the legal guardian of all children in the household"
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

          <Text>
            I extend the expressed permissions, liability releases, and waivers,
            as stated above, for all minors listed, without restrictions. I
            understand that further permission will be deemed necessary prior to
            releasing and/or publishing the name of a minor with regards to
            photographs and/or video images.
          </Text>

          <Spacer />

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
