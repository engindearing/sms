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
    in1: "",
    in2: "",
    in3: "",
    in4: "",
    in5: "",
    in6: "",
    in7: "",

    members: [...copyOfAdults],
  };

  const validationSchema = Yup.object().shape({
    in1: Yup.string().required("Required"),
    in2: Yup.string().required("Required"),
    in3: Yup.string().required("Required"),
    in4: Yup.string().required("Required"),
    in5: Yup.string().required("Required"),
    in6: Yup.string().required("Required"),
    in7: Yup.string().required("Required"),


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
            Guest Expectations and Decorum Agreement Continued
          </Text>

          <Spacer />

          <Text fontSize={"2xl"}>I WILL be expected to:</Text>

          <Spacer />

          <View>
            <Text fontWeight={"bold"} fontSize="md">
              Have My Kids In School:
            </Text>
            <Text>
              I understand that all school-aged children must be enrolled in and
              regularly attending school. Also, I will be looking for and using
              available preschool programs for my preschool aged children, so I
              can be looking for employment, housing and resources more
              efficiently.
            </Text>
            <TextInput
              width="100%"
              placeholder="Initials"
              name="dateLastIncident"
              onBlur={handleBlur("in1")}
              error={errors.in1}
              onChangeText={handleChange("in1")}
              touched={touched.in1}
              value={values.in1}
              marginBottom={"20px"}
            />
          </View>

          <View>
            <Text fontWeight={"bold"} fontSize="md">
              Keep Pets on a Leash or in Kennel and will Not get New Pets:
            </Text>
            <Text>
              I understand that my pet is welcome at the shelter and that all
              pets staying at the shelter must be kept kenneled at night. All
              pets must be kept on a leash at all times and the leash must be
              held by a person.. If my pet were to ever bite or harm any
              individual or other pets they will have to leave the shelter and I
              will be held fully legally responsible. I further understand that
              if I did not have a pet with me at the time of my intake I will
              not be allowed to bring one in after, or get additional pets. Pets
              must leave the shelter with me any time I leave the shelter,
              unless a signed agreement exists for that day.
            </Text>

            <TextInput
              width="100%"
              placeholder="Initials"
              name="dateLastIncident"
              onBlur={handleBlur("in2")}
              error={errors.in2}
              onChangeText={handleChange("in2")}
              touched={touched.in2}
              value={values.in2}
              marginBottom={"20px"}
            />
          </View>

          <View>
            <Text fontWeight={"bold"} fontSize="md">
              Participate in keeping the shelter clean and sanitary:
            </Text>
            <Text>
              I agree to participate in{" "}
              <Text fontWeight={"bold"}>
                chores every day in the evenings and mornings
              </Text>{" "}
              at the day and night shelters. I agree to participate in a
              positive manner while I am a guest here. I understand that I will
              be expected to clean up after myself and my children at all times
              and may sometimes be asked to help clean up after others as well.{" "}
              <Text fontWeight={"bold"}>
                Children under 16 are not allowed to sign up for chores on the
                chore list
              </Text>
              , but may help in chores. (If you want your kids to help that is
              fine, however, adults are ultimately responsible for the
              completion of the chore.)
            </Text>

            <TextInput
              width="100%"
              placeholder="Initials"
              name="dateLastIncident"
              onBlur={handleBlur("in3")}
              error={errors.in3}
              onChangeText={handleChange("in3")}
              touched={touched.in3}
              value={values.in3}
              marginBottom={"20px"}
            />
          </View>

          <View>
            <Text fontWeight={"bold"} fontSize="md">
              Limit the amount of personal belongings:
            </Text>
            <Text>
              I agree to limit my personal belongings inside the Open Doors
              shelter to what my family needs for the day and to keep these
              belongings stored in the lockers that are indoors. I understand
              that unattended personal belongings and food items may be donated
              after 24 hours unless I have made prior arrangements.
            </Text>

            <TextInput
              width="100%"
              placeholder="Initials"
              name="dateLastIncident"
              onBlur={handleBlur("in4")}
              error={errors.in4}
              onChangeText={handleChange("in4")}
              touched={touched.in4}
              value={values.in4}
              marginBottom={"20px"}
            />
          </View>

          <View>
            <Text fontWeight={"bold"} fontSize="md">
              Keep my food storage area clean and sanitary:
            </Text>
            <Text>
              I understand that Open Doors will provide food for my family when
              donations are available. I will be allowed to bring in my own food
              for my family and store it in the food storage area only and if I
              leave food in any other area of the shelter it will be disposed
              of. I understand that unattended food items in the food storage
              area may be donated after{" "}
              <Text fontWeight={"bold"}>24 hours</Text> unless I have made prior
              arrangements. Open Doors is not responsible for stolen food.
            </Text>

            <TextInput
              width="100%"
              placeholder="Initials"
              name="dateLastIncident"
              onBlur={handleBlur("in5")}
              error={errors.in5}
              onChangeText={handleChange("in5")}
              touched={touched.in5}
              value={values.in5}
              marginBottom={"20px"}
            />
          </View>

          <View>
            <Text fontWeight={"bold"} fontSize="md">
              Only eat in the dining area or kitchen:
            </Text>
            <Text>
              I will not bring any food into any areas of the shelter that are
              not designated for eating. I will follow the kitchen hours and
              clean up after myself and my children after preparing and/or
              eating.
            </Text>

            <TextInput
              width="100%"
              placeholder="Initials"
              name="dateLastIncident"
              onBlur={handleBlur("in6")}
              error={errors.in6}
              onChangeText={handleChange("in6")}
              touched={touched.in6}
              value={values.in6}
              marginBottom={"20px"}
            />
          </View>

          <View>
            <Text fontWeight={"bold"} fontSize="md">
              Wear shoes and shirts at all times while in the shelter:
            </Text>
            <Text>
              I will not walk around inside of the shelter or in the parking lot
              without wearing shoes and a shirt. I will have clothing on top and
              bottom at night while in my bed in the shelter.
            </Text>

            <TextInput
              width="100%"
              placeholder="Initials"
              name="dateLastIncident"
              onBlur={handleBlur("in7")}
              error={errors.in7}
              onChangeText={handleChange("in7")}
              touched={touched.in7}
              value={values.in7}
              marginBottom={"20px"}
            />
          </View>

          <Text fontWeight={"bold"}>
            Non-Compliance of the above mentioned expectations does NOT
            necessarily exclude me from a bed in Open Doors Shelter
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
