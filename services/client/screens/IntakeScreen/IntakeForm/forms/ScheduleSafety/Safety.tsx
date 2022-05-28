import { View } from "react-native";
import React from "react";

import { Formik, FieldArray } from "formik";

import TextInput from "../../../../../components/TextInput";

import * as Yup from "yup";

import { Button, Select } from "native-base";

import { Text } from "native-base";

import getAge from "../../../../../utils/getAge";

import styled from "styled-components/native";

import Unorderedlist from "react-native-unordered-list";

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

export default function Belongings({ nextStep, onChange, formValues }) {
  //Options for relationship drop down

  const { members } = formValues;

  let adults = members.filter((mem) => getAge(mem.demographics.dob) >= 18);

  let copyOfAdults = adults.map((mem) => ({
    ...mem,
    signature: "",
  }));

  const initialValues = {
    members: [...copyOfAdults],
  };

  const validationSchema = Yup.object().shape({
    members: Yup.array().of(
      Yup.object().shape({
        signature: Yup.string().required("Required").nullable(),
      })
    ),
  });

  function onSubmit(fields) {
    // onChange({ members: [...fields.members] });
    // nextStep();

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
            Shelter Schedule, Expectations and Safety Agreement (continued)
          </Text>

          <Spacer />

          <Text fontSize={"2xl"} fontWeight={"bold"}>
            Night Shelter Expectations:
          </Text>

          <Spacer />
          <Spacer />

          <View>
            <Text fontSize={"lg"} fontWeight={"bold"}>
              {" "}
              Everyone sleeps on mats on the floor, so we need to keep the
              floors in the shelter as clean and bug-free as possible. So we do
              NOT allow:
            </Text>

            <Spacer />

            <Unorderedlist>
              <Text fontSize={"md"}>
                {" "}
                Personal bedding or pillows, except 4x4 blanket for child 12 and
                under
              </Text>
            </Unorderedlist>

            <Unorderedlist>
              <Text fontSize={"md"}>
                {" "}
                Food or drink, except baby food or bottled water
              </Text>
            </Unorderedlist>

            <Unorderedlist>
              <Text fontSize={"md"}> Strollers</Text>
            </Unorderedlist>
          </View>

          <Spacer />

          <View>
            <Text fontSize={"lg"} fontWeight={"bold"}>
              {" "}
              We wish to keep the Night Shelter a safe and calming space for
              families. So:
            </Text>

            <Spacer />

            <Unorderedlist>
              <Text fontSize={"md"}>
                {" "}
                There are no designated spots in night shelter.
              </Text>
            </Unorderedlist>

            <Unorderedlist>
              <Text fontSize={"md"}>
                {" "}
                Kids must always be in parents’ line of sight.
              </Text>
            </Unorderedlist>

            <Unorderedlist>
              <Text fontSize={"md"}>
                If using the smoking area, children must accompany parents.
              </Text>
            </Unorderedlist>

            <Unorderedlist>
              <Text fontSize={"md"}>
                Cry room is reserved for upset children during the night to use
                until calm.
              </Text>
            </Unorderedlist>

            <Unorderedlist>
              <Text fontSize={"md"}>
                Respite room is reserved for special accommodations that will
                require Dr written note
              </Text>
            </Unorderedlist>

            <Unorderedlist>
              <Text fontSize={"md"}>
                All guests 16 and older are expected to help clean shelter in
                morning.
              </Text>
            </Unorderedlist>

            <Unorderedlist>
              <Text fontSize={"md"}>
                Please help children under 5 use the restroom to help keep
                restroom clean
              </Text>
            </Unorderedlist>

            <Unorderedlist>
              <Text fontSize={"md"}>
                Yelling, screaming, cursing, and spanking are not acceptable
                forms of discipline at Open Doors and may result in suspension
                from the shelter and/or be reported to Child Services
              </Text>
            </Unorderedlist>
          </View>

          <Spacer />
          <Spacer />

          <Text fontSize={"xl"} fontWeight="bold">
            Signature of all adults in household
          </Text>

          <Spacer />

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
  margin-top: 5;

  margin-bottom: 5;
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
