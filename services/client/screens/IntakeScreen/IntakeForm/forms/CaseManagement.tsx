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

import Unorderedlist from "react-native-unordered-list";

import Navigation from "../Navigation";


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

export default function RaceEthnicityInfo({
  nextStep,
  onChange,
  formValues,
  prevStep,
}) {
  //Options for relationship drop down

  const { members } = formValues;

  let adults = members.filter(mem => getAge(mem.demographics.dob) >= 18)

  let copyOfAdults = adults.map((mem) => ({
    ...mem,
    signature: "",
    date: "",
  }));

  const initialValues = {
    date: "",
    members: [...copyOfAdults],
  };

  // const validationSchema = Yup.object().shape({
  //   date: Yup.string()
  //     .required("Required")
  //     .test(
  //       "is-valid-date",
  //       "Invalid date. Make sure the format is correct (MM/DD/YYYY)",
  //       function (value) {
  //         return isValidDate(value);
  //       }
  //     ),

  //   members: Yup.array().of(
  //     Yup.object().shape({
  //       signature: Yup.string().required("Required").nullable(),
  //     })
  //   ),
  // });

  function onSubmit(fields) {
    // onChange({ members: [...fields.members] });
    // nextStep();
    nextStep();
  }

  return (
    <Formik
      initialValues={initialValues}
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
            Open Doors Case Management Acknowledgement of Understanding
          </Text>

          <Text fontSize={"md"}>
            Open Doors case management is a guest driven service. This means you
            are always in the driver's seat for finding stable housing for you
            and your family. It is up to you to start the case management
            process. You are responsible for setting up the 1st in-person
            appointment with the case manager and complete weekly goal plans to
            come up with a 30 day exit to housing plan. The case manager
            encourages you to check in on a weekly basis. This can be done in
            person or over the phone. It is your responsibility to contact the
            case manager for updates and follow ups.
          </Text>

          <Spacer />

          <Text fontWeight={"bold"} fontSize={"lg"}>
            Case Management- What it is:
          </Text>

          <Spacer />

          <Unorderedlist>
            <Text>
              {" "}
              Will help you and your household navigate the resources offered in
              Spokane.
            </Text>
          </Unorderedlist>

          <Unorderedlist>
            <Text> May be able to advocate on your behalf.</Text>
          </Unorderedlist>

          <Unorderedlist>
            <Text>
              {" "}
              Will help you navigate any concerns that may come up pertaining to
              Open Doors Shelter.
            </Text>
          </Unorderedlist>

          <Unorderedlist>
            <Text>
              {" "}
              Will help you gather documents needed for certain housing
              programs.
            </Text>
          </Unorderedlist>

          <Unorderedlist>
            <Text>
              {" "}
              May help complete a housing assessment so you can apply for
              referrals to other shelter programs.
            </Text>
          </Unorderedlist>

          <Unorderedlist>
            <Text>
              {" "}
              May help complete a housing assessment so you can apply for
              referrals to other shelter programs.
            </Text>
          </Unorderedlist>

          <Unorderedlist>
            <Text>
              {" "}
              Will help you complete weekly goal plans to gain housing
              stability.
            </Text>
          </Unorderedlist>

          <Unorderedlist>
            <Text> May help pay for 1 rental application fee.</Text>
          </Unorderedlist>

          <Unorderedlist>
            <Text>
              {" "}
              May help with a daily or 2 hour bus pass if they are in stock.
            </Text>
          </Unorderedlist>

          <Unorderedlist>
            <Text>
              {" "}
              May help with funds to travel to other support networks, if funds
              are available.
            </Text>
          </Unorderedlist>

          <Unorderedlist>
            <Text>
              {" "}
              May give extensions to 30 day agreement if you are actively
              working toward
            </Text>
          </Unorderedlist>

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

          <Navigation prevStep={prevStep} handleSubmit={() => {
            console.log(errors)

            handleSubmit()
          }} />
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
