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

export default function RaceEthnicityInfo({ nextStep, onChange, formValues }) {
  //Options for relationship drop down

  const { members } = formValues;

  let adults = members.filter((mem) => getAge(mem.demographics.dob) >= 18);

  let copyOfAdults = adults.map((mem) => ({
    ...mem,
    signature: "",
  }));

  const initialValues = {
    sig: "",

    members: [...copyOfAdults],
  };

  const validationSchema = Yup.object().shape({
    sig: Yup.string().required("Required"),

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
            Suspension Agreement
          </Text>

          <Spacer />

          <Text fontWeight={"md"}>
            {" "}
            In order to create a safe and comfortable environment for children,
            families, staff and volunteers, Open Doors holds the following
            expectations of every person using the shelter:
          </Text>

          <Spacer />

          <View>
            <Text fontWeight={"bold"} fontSize="lg">
              I understand that if I:
            </Text>
            <Unorderedlist>
              <Text>
                {" "}
                Spank, hit, or aggressively handle my child. i.e. throw, push or
                pull my child etc,
              </Text>
            </Unorderedlist>

            <Unorderedlist>
              <Text>
                {" "}
                Yell at my child, other children or another adult in a
                threatening or aggressive manner,
              </Text>
            </Unorderedlist>

            <Unorderedlist>
              <Text>
                {" "}
                Use profanity (cursing) directed at my child, other children,
                guest, staff, volunteer, or intern,
              </Text>
            </Unorderedlist>

            <Unorderedlist>
              <Text>
                {" "}
                Conduct myself in a manner that creates an environment that
                infringes on the safety, well-being or peace of mind of any
                guest, staff member or volunteer
              </Text>
            </Unorderedlist>

            <Spacer />

            <Text fontWeight={"bold"}>
              I will be asked to leave Open Doors property until 7:00 pm
              check-in the following night, or until I have met with the Program
              Manager (depending on severity). If a staff member or volunteer
              feels that there is ANY question of abuse or neglect of your child
              they will error on the side of caution and make a report to CPS.
            </Text>
          </View>

          <Spacer />

          <View>
            <Text fontWeight={"bold"}>Further, I understand:</Text>

            <Unorderedlist>
              <Text>
                {" "}
                This might result in losing my spot at the night shelter
              </Text>
            </Unorderedlist>

            <Unorderedlist>
              <Text>
                {" "}
                I may not have another family or staff member sign me in
              </Text>
            </Unorderedlist>

            <Unorderedlist>
              <Text> It is not my responsibility to tell on other guests</Text>
            </Unorderedlist>

            <Unorderedlist>
              <Text> Hear-say information will not be given credibility</Text>
            </Unorderedlist>

            <Unorderedlist>
              <Text>
                {" "}
                All incidents must be witnessed by supervisor on shift
              </Text>
            </Unorderedlist>

            <Unorderedlist>
              <Text>
                {" "}
                All incidents will be evaluated by supervisor on shift
              </Text>
            </Unorderedlist>

            <Unorderedlist>
              <Text>
                {" "}
                I will not be suspended as a result of my child breaking these
                guidelines
              </Text>
            </Unorderedlist>
          </View>

          <TextInput
            width="100%"
            placeholder="Signature"
            name="dateLastIncident"
            onBlur={handleBlur("sig")}
            error={errors.sig}
            onChangeText={handleChange("sig")}
            touched={touched.sig}
            value={values.sig}
            marginBottom={"20px"}
          />

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

          <Text fontWeight={"bold"}>
            *** Please be aware that ALL shelter staff are mandatory reporters,
            therefore any behavior toward your child that a staff member is
            concerned about will result in a report to CPS. ***
          </Text>

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
