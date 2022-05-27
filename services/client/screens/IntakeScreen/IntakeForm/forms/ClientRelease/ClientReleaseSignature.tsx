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

  let children = members.filter((mem) => getAge(mem.demographics.dob) <= 18);

  children = children.map((child) => ({ ...child, signature: "" }));

  const initialValues = {
    consent: "",
    anonymous: "",
    members: [...children],
  };

  const validationSchema = Yup.object().shape({
    consent: Yup.string(),
    anonymous: Yup.string(),

    members: Yup.array().of(
      Yup.object().shape({
        signature: Yup.string()
          .required("Required")
          .nullable()
      })
    ),
  });

  function onSubmit(fields) {
    // onChange({ members: [...fields.members] });
    // nextStep();

    if (!fields.consent && !fields.anonymous)
      return alert("Please add your initials to one of the options");

    if (fields.consent && fields.anonymous)
      return alert("Please add your initials to only one of the options");

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
            Client Release Signature
          </Text>

          <TextInput
            width="100%"
            placeholder="Initials"
            name="dateLastIncident"
            onBlur={handleBlur("dateLastIncident")}
            error={errors.consent}
            onChangeText={handleChange("consent")}
            touched={touched.consent}
            value={values.consent}
            label="I consent to
  the inclusion of personal information in CMIS about me and any
  dependents listed below and authorize information collected to be
  shared with other local service agencies. I understand that my
  personal information will not be made public and will only be used
  with strict confidentiality. I also understand that I may withdraw
  my consent at any time."
            marginBottom={"20px"}
          />

          <TextInput
            width="100%"
            placeholder="Initials"
            name="dateLastIncident"
            onBlur={handleBlur("dateLastIncident")}
            onChangeText={handleChange("anonymous")}
            error={errors.anonymous}
            touched={touched.anonymous}
            value={values.anonymous}
            label="I do not
  consent to the inclusion of personal information about me or any of
  my dependents."
            marginBottom={"20px"}
          />

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
                    <Text fontSize={"xl"}>
                      Dependent children under 18 in household, add first and
                      last name
                    </Text>
                    <TextInput
                      width="100%"
                      placeholder={`${values.members[i].demographics.firstName} ${values.members[i].demographics.lastName}`}
                      onBlur={handleBlur("members")}
                      error={ticketErrors.signature}
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
