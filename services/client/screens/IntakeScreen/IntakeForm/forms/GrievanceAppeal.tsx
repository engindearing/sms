import React from "react";

import { View } from "react-native";

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

export default function GrievanceAppeal({ nextStep, onChange, formValues }) {
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
            Understanding of Right to Grievance and Appeal Process
          </Text>

          <Spacer />

          <Text fontWeight={"md"} fontSize="md">
            {" "}
            When Open Doors Family Shelter renders a decision with which a guest
            disagrees or a staff member, volunteer or other guest acts in a way
            that is viewed by you to be inappropriate or not in line with Open
            Doors core values, a grievance or appeal process is available to
            you.
          </Text>

          <Spacer />

          <Text fontWeight={"md"} fontSize="md">
            {" "}
            The grievance/appeal process provides you the opportunity to request
            a reconsideration of a decision that affects your household’s
            eligibility for our programs or file a complaint about a staff
            member, guest or volunteer’s actions or behavior.
          </Text>

          <Spacer />

          <Text fontWeight={"bold"} fontSize="md">
            {" "}
            The steps of the Appeal/Grievance Process are as follows:
          </Text>

          <Spacer />

          <Text>
            {" "}
            1. Put the appeal or grievance in writing on a Grievance/Appeal form
            you can obtain from the office, date and sign and be sure to include
            your phone number. (You may have a representative do this for you).
            You may choose a staff member, family member, friend or other
            advocate to represent them through the complaint procedure.
          </Text>

          <Spacer />

          <Text>
            {" "}
            2. Send the complaint to the Program Manager. (There is a locked
            mailbox outside of the Program Manager’s door for complaints and
            appeals)
          </Text>

          <Spacer />

          <Text>
            {" "}
            3. The Program Manager will make an appointment to discuss the
            complaint with them within three working days of receiving the
            complaint.
          </Text>

          <Spacer />

          <Text>
            {" "}
            4. A written report of the Manager's review and initial disposition
            of the complaint will be given to you within three working days
            following the appointment day.
          </Text>

          <Spacer />

          <Text>
            {" "}
            5. If you are still dissatisfied, you may request that the
            disposition of the complaint be appealed to the Program Director of
            Open Doors.
          </Text>

          <Spacer />

          <Text>
            {" "}
            6. A written report of the decision/disposition of the Program
            Director of Open Doors will be made available within 15 working days
            of the date their request for appeal was made.
          </Text>

          <Spacer />

          <Text>
            {" "}
            7. If the complaint is still not resolved under the above
            guidelines, you may contact the Executive Director of Family Promise
            directly. The Program Director will ensure that the complaint is
            brought to the Executive Director's attention. A written response
            will be provided to you within 30 calendar days.
          </Text>

          <Spacer />

          <Text fontWeight="bold">
            There will be no retaliation, formal or informal, against you for
            filing a complaint.
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

          <Spacer />

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
