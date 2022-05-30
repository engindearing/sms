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

import styled from "styled-components/native";

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

  let adults = members.filter((mem) => getAge(mem.demographics.dob) >= 18);

  let copyOfAdults = adults.map((mem) => ({
    ...mem,
    signature: "",
  }));

  const initialValues = {
    animalYes: false,
    animalNo: false,
    signature: "",

    members: [...copyOfAdults],
  };

  const validationSchema = Yup.object().shape({
    animalNo: Yup.boolean(),
    animalYes: Yup.boolean(),
    signature: Yup.string().when("animalNo", {
      is: true,
      then: () => Yup.string().required("Required"),
    }),
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
          <Text fontSize="3xl">Open Doors Family Shelter Animal Agreement</Text>

          <Spacer />

          <Text fontSize={"md"}>
            {" "}
            **Open Doors allows up to <Text>two</Text> pets per family in the
            shelter. Pets that are allowed are limited to{" "}
            <Text>CATS AND DOGS</Text> at this time as our shelter does not have
            accommodations set up for other types of animals. No new animals may
            be brought in after the initial intake.***
          </Text>

          <Spacer />

          <Text fontSize={"md"} fontWeight="bold">
            Is your family bringing an animal with you into the shelter at the
            time of your intake?
          </Text>

          <Spacer />

          <View>
            <CheckboxInput
              onChange={(name, checked) => {
                setFieldValue("animalNo", false);
                setFieldValue(name, checked);
              }}
              name="animalYes"
              defaultIsChecked={values.animalYes}
            >
              Yes
            </CheckboxInput>
            <Text>
              <Text fontWeight={"bold"}>If so,</Text> please fill out the
              agreement on the next page and sign.
            </Text>
          </View>

          <Spacer />

          <View>
            <CheckboxInput
              onChange={(name, checked) => {
                setFieldValue("animalYes", false);
                setFieldValue(name, checked);
              }}
              name="animalNo"
              defaultIsChecked={values.animalNo}
            >
              No
            </CheckboxInput>
            <Text>
              <Text fontWeight={"bold"}>If NOT</Text>, please sign below to
              indicate that you understand you will not be allowed to bring an
              animal in the shelter after this point.
            </Text>
          </View>

          <Spacer />

          <TextInput
            width="100%"
            placeholder="First & last name"
            name="dateLastIncident"
            onBlur={handleBlur("signature")}
            error={errors.signature}
            onChangeText={handleChange("signature")}
            touched={touched.signature}
            value={values.signature}
            marginBottom={"20px"}
          />

          <Navigation prevStep={prevStep} handleSubmit={handleSubmit} />
        </View>
      )}
    </Formik>
  );
}



const handleCheckboxChange = (
  field,
  value,
  values,
  setFieldValue,
  position
) => {
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
