import { View } from "react-native";
import React from "react";

import { Formik, Field, FieldArray, useFormik } from "formik";

import TextInput from "../../../../components/TextInput";

import * as Yup from "yup";

import { Button, FormControl, Select } from "native-base";

import SelectInput from "../../../../components/SelectInput";

import { Text } from "native-base";

import memberValues from "../structures/member";

import styled from "styled-components/native";

import {
  addMembers,
  deleteMembers,
  updateMembers,
} from "../../../../api/members";

export default function FamilyMembers({ nextStep, onChange, formValues }) {
  //Options for relationship drop down

  const { members } = formValues;

  const relationshipOptions = [
    "Self",
    "Partner",
    "Parent",
    "Grandparent",
    "Sibling",
    "Child",
    "Grandchild",
    "Other Family",
    "Non-Family",
  ];

  const initialValues = {
    numberOfHouseholdMembers: members.length ? String(members.length) : "",
    members: [...members],
  };

  const validationSchema = Yup.object().shape({
    numberOfHouseholdMembers: Yup.string().required("Required"),
    members: Yup.array().of(
      Yup.object().shape({
        demographics: Yup.object().shape({
          firstName: Yup.string().required("First name is required"),
          lastName: Yup.string().required("Last name is required"),
          relationship: Yup.string().required("Relationship is required"),
        }),
      })
    ),
  });

  function onChangeMembers(value, setFieldValue, field, values, setValues) {
    // update dynamic form
    const members = [...values.members];
    const numberOfHouseholdMembers = value || 0;
    const previousNumber = parseInt(field.value || "0");

    if (previousNumber < numberOfHouseholdMembers) {
      for (let i = previousNumber; i < numberOfHouseholdMembers; i++) {
        members.push({ ...memberValues(), household: formValues._id });
      }
    } else {
      for (let i = previousNumber; i >= numberOfHouseholdMembers; i--) {
        members.splice(i, 1);
      }
    }

    setValues({ ...values, members });

    setFieldValue(field.name, value);
  }

  async function onSubmit(fields) {
    let previousMembers = members;

    let currentMembers = fields.members;

    if (previousMembers.length < currentMembers.length) {
      let newMembers = getNewMembers(members, fields.members);

      await addMembers(formValues._id, newMembers);
    }

    if (currentMembers.length < previousMembers.length) {
      let deletedMembers = getDeletedMembers(members, fields.members);

      await deleteMembers(formValues._id, deletedMembers);
    }

    await updateMembers(formValues._id, currentMembers);

    onChange({ members: currentMembers });
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
          <Text fontSize="2xl">How many people belong to your household?</Text>

          <Field name="numberOfHouseholdMembers">
            {({ field }) => (
              <SelectInput
                placeholder="members"
                onValueChange={(e) =>
                  onChangeMembers(e, setFieldValue, field, values, setValues)
                }
                onBlur={handleBlur("numberOfHouseholdMembers")}
                error={errors.numberOfHouseholdMembers}
                touched={touched.numberOfHouseholdMembers}
                selectedValue={values.numberOfHouseholdMembers}
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((opt, key) => (
                  <Select.Item
                    key={key}
                    label={String(opt)}
                    value={String(opt)}
                  />
                ))}
              </SelectInput>
            )}
          </Field>

          <FieldArray name="members">
            {() =>
              values.members.map((ticket, i) => {
                const ticketErrors =
                  (errors.members?.length &&
                    errors.members[i] &&
                    errors.members[i].demographics) ||
                  {};
                const ticketTouched =
                  (touched.members &&
                    touched.members[i] &&
                    touched.members[i].demographics) ||
                  {};

                const ticketValues =
                  (values.members[i] && values.members[i].demographics) || {};

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
                    <Text fontSize={"xl"}>{`Family member ${i + 1}`}</Text>
                    <Spacer />
                    <TextInput
                      width="100%"
                      placeholder="First name"
                      label="First name:"
                      onBlur={handleBlur("members")}
                      error={ticketErrors.firstName}
                      touched={ticketTouched.firstName}
                      value={ticketValues.firstName}
                      marginBottom={"20px"}
                      onChangeText={(value) => {
                        handleChange(
                          "firstName",
                          value,
                          values,
                          setFieldValue,
                          i
                        );
                      }}
                    />

                    <TextInput
                      width="100%"
                      placeholder="Last name"
                      label="Last name:"
                      onBlur={handleBlur("members")}
                      error={ticketErrors.lastName}
                      touched={ticketTouched.lastName}
                      value={ticketValues.lastName}
                      marginBottom={"20px"}
                      onChangeText={(value) => {
                        console.log(errors);
                        handleChange(
                          "lastName",
                          value,
                          values,
                          setFieldValue,
                          i
                        );
                      }}
                    />

                    <SelectInput
                      accessibilityLabel="Choose Service"
                      minWidth={"100%"}
                      placeholder="Relationship"
                      label="Relationship:"
                      error={ticketErrors.relationship}
                      touched={ticketTouched.relationship}
                      blur={handleBlur("relationship")}
                      selectedValue={ticketValues.relationship}
                      onValueChange={(value) => {
                        handleChange(
                          "relationship",
                          value,
                          values,
                          setFieldValue,
                          i
                        );
                      }}
                    >
                      {relationshipOptions.map((opt, key) => (
                        <Select.Item key={key} label={opt} value={opt} />
                      ))}
                    </SelectInput>
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

const getNewMembers = (previousMembers, currentMembers) => {
  let newMembers = [];

  for (let i = previousMembers.length; i < currentMembers.length; i++) {
    newMembers.push(currentMembers[i]);
  }

  return newMembers;
};

const getDeletedMembers = (previousMembers, currentMembers) => {
  let deletedMembers = [];

  for (let i = currentMembers.length; i < previousMembers.length; i++) {
    deletedMembers.push(previousMembers[i]);
  }

  return deletedMembers;
};

const handleChange = (field, value, values, setFieldValue, position) => {
  return setFieldValue("members", [
    ...values.members.map((member, i) => {
      if (i == position) {
        member.demographics[field] = value;
      }

      return member;
    }),
  ]);
};

const Spacer = styled.View`
  margin-top: 10;

  margin-bottom: 10;
`;
