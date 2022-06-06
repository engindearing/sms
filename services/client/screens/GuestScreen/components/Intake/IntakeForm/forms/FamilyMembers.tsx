import { View } from "react-native";

import React from "react";

import { Formik, FieldArray } from "formik";

import TextInput from "../../../../../../components/TextInput";

import * as Yup from "yup";

import { Button, Select } from "native-base";

import SelectInput from "../../../../../../components/SelectInput";

import { Text } from "native-base";

import styled from "styled-components/native";

import HouseholdAPI from "../../../../../../api/household";

import Navigation from "../Navigation";
import { useDispatch, useSelector } from "react-redux";
import {
  addMember,
  deleteMember,
  setMembers,
} from "../../../../../../state/slices/householdSlice";
import { updateMembers } from "../../../../../../api/members";

export default function FamilyMembers({ nextStep, onChange, prevStep }) {
  //Options for relationship drop down

  const { members, household } = useSelector((state: any) => state.household);

  const dispatch = useDispatch();

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
    members: structuredClone(members),
  };

  const validationSchema = Yup.object().shape({
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

  async function createMember(values, setFieldValue) {
    // update dynamic form

    try {
      let member = await HouseholdAPI.addMember(household._id, {});

      setFieldValue("members", [...values.members, structuredClone(member)]);

      dispatch(addMember(member));
    } catch (error) {
      alert("Unable to add member to household");
    }
  }

  async function removeMember(memberId, values, setFieldValue) {
    // update dynamic form

    try {
      await HouseholdAPI.removeMember(household._id, memberId);

      setFieldValue("members", [
        ...values.members.filter((mem) => mem._id !== memberId),
      ]);

      dispatch(deleteMember({ memberId }));
    } catch (error) {
      alert("Unable to add member to household");
    }
  }

  async function onSubmit(fields) {
    dispatch(setMembers(fields.members));

    try {
      await updateMembers(household._id, fields.members);

      nextStep();
    } catch (error) {
      alert("error");
    }
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
          <Text fontSize="2xl">How many people belong to your household?</Text>

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
                    <Spacer />
                    <TextInput
                      width="100%"
                      placeholder="First name"
                      label="First name:"
                      onBlur={handleBlur("members")}
                      error={ticketErrors.firstName}
                      touched={ticketTouched.firstName}
                      defaultValue={ticketValues.firstName}
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
                      defaultValue={ticketValues.lastName}
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

                    <Button
                      colorScheme={"danger"}
                      onPress={() =>
                        removeMember(ticket._id, values, setFieldValue)
                      }
                    >
                      DELETE
                    </Button>
                  </View>
                );
              })
            }
          </FieldArray>

          <Button
            variant={"outline"}
            onPress={() => createMember(values, setFieldValue)}
          >
            ADD MEMBER TO HOUSEHOLD
          </Button>
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
