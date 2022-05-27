import { View } from "react-native";
import React from "react";

import { Formik, FieldArray } from "formik";

import TextInput from "../../../../components/TextInput";

import * as Yup from "yup";

import { Button, Select } from "native-base";

import SelectInput from "../../../../components/SelectInput";

import TextAreaInput from "../../../../components/TextAreaInput";

import { Text } from "native-base";

import CheckboxInput, {
  CheckboxGroup,
} from "../../../../components/CheckboxInput";

//Options for race
const options = [
  "Hispanic/Latino",
  "American Indian or Alaska Native",
  "Asian",
  "Black or African American",
  "Native Hawaiian or Pacific Islander",
  "White",
  "Unknown",
  "Decline to Answer",
];

export default function RaceEthnicityInfo({ nextStep, onChange, formValues }) {
  //Options for relationship drop down

  const options = [
    "Alcohol Abuse",
    "Developmental Disability",
    "Chronic Health Issues",
    "Drug Abuse",
    "HIV/AIDS",
    "Mental Illness",
    "Physical Disability",
  ];
  const optionDataName = {
    "Alcohol Abuse": "alcoholAbuse",
    "Developmental Disability": "developmentalDisabilities",
    "Chronic Health Issues": "chronicHealthIssues",
    "Drug Abuse": "drugAbuse",
    "HIV/AIDS": "HIVAIDs",
    "Mental Illness": "mentalIllness",
    "Physical Disability": "physicalDisabilities",
  };

  const { members } = formValues;

  const initialValues = {
    members: [...members],
  };

  const validationSchema = Yup.object().shape({
    members: Yup.array().of(
      Yup.object().shape({
        schools: Yup.object().shape({
          highestGradeCompleted: Yup.string().nullable().required("Required"),
          enrolledStatus: Yup.boolean(),
          attendanceStatus: Yup.string().nullable().required('Required'),
          reasonNotEnrolled: Yup.string().nullable().when("enrolledStatus", {
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

  function onSubmit(fields) {
    // onChange({ members: [...fields.members] });
    // nextStep();

    alert("SUCCESS!! :-)\n\n" + JSON.stringify(fields, null, 4));
  }

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
        setValues,
        handleBlur,
        setFieldValue,
        handleSubmit,
      }) => (
        <View
          style={{
            display: "flex",
            alignItems: "flex-start",
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

          <Button marginTop={"3%"} onPress={() => handleSubmit()}>
            Submit
          </Button>
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
