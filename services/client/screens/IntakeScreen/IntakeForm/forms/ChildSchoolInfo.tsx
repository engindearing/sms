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

import CheckboxInput, {
  CheckboxGroup,
} from "../../../../components/CheckboxInput";
import { updateMembers } from "../../../../api/members";

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

  let children = members.filter((mem) => getAge(mem.demographics.dob) <= 18);

  if (children.length == 0) {
    nextStep();
  }

  const initialValues = {
    members: [...children],
  };

  const validationSchema = Yup.object().shape({
    members: Yup.array().of(
      Yup.object().shape({
        schools: Yup.object().shape({
          highestGradeCompleted: Yup.string().nullable().required("Required"),
          enrolledStatus: Yup.boolean(),
          attendanceStatus: Yup.string().nullable().required("Required"),
          reasonNotEnrolled: Yup.string()
            .nullable()
            .when("enrolledStatus", {
              is: false,
              then: Yup.string().nullable().required("Required"),
            }),
          schoolType: Yup.string().nullable().required("Required"),
          schoolName: Yup.string().nullable().required("Required"),
          mckinneySchool: Yup.boolean(),
        }),
      })
    ),
  });

  async function onSubmit(fields) {
    await updateMembers(formValues._id, fields.members);

    onChange();
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
      }) => (
        <View
          style={{
            width: "100%",
          }}
        >
          <Text fontSize="3xl">School info</Text>

          <Text fontSize={"xl"} marginBottom="1%">
            Please answer the following questions about barriers. Check all that
            apply for each family member.
          </Text>

          <FieldArray name="members">
            {() =>
              values.members.map((ticket, i) => {
                const ticketErrors =
                  (errors.members?.length &&
                    errors.members[i] &&
                    errors.members[i] &&
                    errors.members[i].schools) ||
                  {};
                const ticketTouched =
                  (touched.members &&
                    touched.members[i] &&
                    touched.members[i] &&
                    touched.members[i].schools) ||
                  {};

                const ticketValues =
                  (values.members[i] &&
                    values.members[i] &&
                    values.members[i].schools) ||
                  {};

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
                      label="Highest grade completed"
                      accessibilityLabel="Choose Service"
                      minWidth={"100%"}
                      placeholder="Grade"
                      error={ticketErrors.highestGradeCompleted}
                      touched={ticketTouched.highestGradeCompleted}
                      selectedValue={ticketValues.highestGradeCompleted}
                      blur={handleBlur("highestGradeCompleted")}
                      onValueChange={(value) => {
                        handleChange(
                          "highestGradeCompleted",
                          value,
                          values,
                          setFieldValue,
                          i
                        );
                      }}
                    >
                      {gradeOptions.map((opt, key) => (
                        <Select.Item key={key} label={opt} value={opt} />
                      ))}
                    </SelectInput>

                    <SelectInput
                      label="Attendace status"
                      accessibilityLabel="Choose Service"
                      minWidth={"100%"}
                      placeholder="status"
                      error={ticketErrors.attendanceStatus}
                      touched={ticketTouched.attendanceStatus}
                      selectedValue={ticketValues.attendanceStatus}
                      blur={handleBlur("attendanceStatus")}
                      onValueChange={(value) => {
                        handleChange(
                          "attendanceStatus",
                          value,
                          values,
                          setFieldValue,
                          i
                        );
                      }}
                    >
                      {attendStatOptions.map((opt, key) => (
                        <Select.Item key={key} label={opt} value={opt} />
                      ))}
                    </SelectInput>

                    <SelectInput
                      label="School type"
                      accessibilityLabel="Choose Service"
                      minWidth={"100%"}
                      placeholder="type"
                      error={ticketErrors.schoolType}
                      touched={ticketTouched.schoolType}
                      selectedValue={ticketValues.schoolType}
                      blur={handleBlur("schoolType")}
                      onValueChange={(value) => {
                        handleChange(
                          "schoolType",
                          value,
                          values,
                          setFieldValue,
                          i
                        );
                      }}
                    >
                      {schoolTypeOptions.map((opt, key) => (
                        <Select.Item key={key} label={opt} value={opt} />
                      ))}
                    </SelectInput>

                    <TextInput
                      width="100%"
                      placeholder="ex. Soap Lake MSHS"
                      onBlur={handleBlur("members")}
                      error={ticketErrors.schoolName}
                      touched={ticketTouched.schoolName}
                      value={ticketValues.schoolName}
                      label="School Name"
                      onChangeText={(value) => {
                        handleChange(
                          "schoolName",
                          value,
                          values,
                          setFieldValue,
                          i
                        );
                      }}
                    />

                    <CheckboxInput
                      name={"mckinneySchool"}
                      error={ticketErrors.mckinneySchool}
                      touched={ticketTouched.mckinneySchool}
                      defaultIsChecked={ticketValues.mckinneySchool}
                      onChange={(name, checked) => {
                        handleChange(name, checked, values, setFieldValue, i);
                      }}
                    >
                      Connected w/ McKinney-Vento School
                    </CheckboxInput>

                    <CheckboxInput
                      name={"enrolledStatus"}
                      error={ticketErrors.enrolledStatus}
                      touched={ticketTouched.enrolledStatus}
                      defaultIsChecked={ticketValues.enrolledStatus}
                      onChange={(name, checked) => {
                        handleChange(name, checked, values, setFieldValue, i);
                      }}
                    >
                      Currently Enrolled?
                    </CheckboxInput>

                    <TextAreaInput
                      width="100%"
                      placeholder="..."
                      label="IF YOUR CHILD(REN) IS/ARE NOT ENROLLED IN SCHOOL AT THIS TIME PLEASE INDICATE THE REASON WHY BELOW"
                      onBlur={handleBlur("members")}
                      error={ticketErrors.reasonNotEnrolled}
                      touched={ticketTouched.reasonNotEnrolled}
                      value={ticketValues.reasonNotEnrolled}
                      style={{ marginTop: "5%" }}
                      onChangeText={(value) => {
                        handleChange(
                          "reasonNotEnrolled",
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

const handleChange = (field, value, values, setFieldValue, position) => {
  return setFieldValue("members", [
    ...values.members.map((member, i) => {
      if (i == position) {
        member.schools[field] = value;
      }

      return member;
    }),
  ]);
};
