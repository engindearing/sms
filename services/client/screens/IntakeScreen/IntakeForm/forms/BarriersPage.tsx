import { View } from "react-native";
import React from "react";

import { Formik, FieldArray } from "formik";

import * as Yup from "yup";

import TextAreaInput from "../../../../components/TextAreaInput";

import { Text } from "native-base";

import CheckboxInput, {
  CheckboxGroup,
} from "../../../../components/CheckboxInput";
import { updateMembers } from "../../../../api/members";
import Navigation from "../Navigation";

export default function RaceEthnicityInfo({
  nextStep,
  onChange,
  formValues,
  prevStep,
}) {
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
    numberOfHouseholdMembers: "",
    members: [...members],
  };

  const validationSchema = Yup.object().shape({
    members: Yup.array().of(
      Yup.object().shape({
        barriers: Yup.object().shape({
          alcoholAbuse: Yup.boolean(),
          developmentalDisabilities: Yup.boolean(),
          chronicHealthIssues: Yup.boolean(),
          drugAbuse: Yup.boolean(),
          HIVAIDs: Yup.boolean(),
          mentalIllness: Yup.boolean(),
          physicalDisabilities: Yup.boolean(),
          listIndefiniteConditions: Yup.string(),
          listIssues: Yup.string(),
        }),
      })
    ),
  });

  async function onSubmit(fields) {
    await updateMembers(formValues._id, fields.members);

    onChange({ members: fields.members });
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
          <Text fontSize="3xl">Barriers</Text>

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
                    errors.members[i].barriers) ||
                  {};
                const ticketTouched =
                  (touched.members &&
                    touched.members[i] &&
                    touched.members[i].barriers) ||
                  {};

                const ticketValues =
                  (values.members &&
                    values.members[i] &&
                    values.members[i].barriers) ||
                  {};

                return (
                  <View
                    key={i}
                    style={{
                      width: "100%",
                      marginBottom: "3%",
                    }}
                  >
                    <Text
                      fontSize={"2xl"}
                      marginTop="2%"
                      marginBottom="1%"
                    >{`${values.members[i].demographics.firstName}`}</Text>

                    <CheckboxGroup
                      error={ticketErrors.barriers}
                      touched={ticketTouched.barriers}
                      onChange={(name, value) => {
                        setFieldValue("members", [
                          ...values.members.map((member, key) => {
                            if (key == i) {
                              member.barriers[name] = value;
                            }

                            return member;
                          }),
                        ]);
                      }}
                    >
                      {options.map((opt) => (
                        <CheckboxInput
                          defaultIsChecked={
                            values.members[i].barriers[optionDataName[opt]]
                          }
                          name={optionDataName[opt]}
                        >
                          {opt}
                        </CheckboxInput>
                      ))}
                    </CheckboxGroup>

                    <TextAreaInput
                      width="100%"
                      placeholder="..."
                      label="Please list any documented disabilities or chronic health issues as well as any major allergies"
                      onBlur={handleBlur("members")}
                      error={ticketErrors.listIssues}
                      touched={ticketTouched.listIssues}
                      defaultValue={ticketValues.listIssues}
                      marginBottom={"20px"}
                      onChangeText={(value) => {
                        console.log(errors);
                        handleChange(
                          "listIssues",
                          value,
                          values,
                          setFieldValue,
                          i
                        );
                      }}
                    />

                    <TextAreaInput
                      width="100%"
                      placeholder="..."
                      label="Please list Indefinite Conditions for each family member (Alcohol Abuse, Developmental Disability, Chronic Health Issue, Mental Illness, etc."
                      onBlur={handleBlur("members")}
                      error={ticketErrors.listIndefiniteConditions}
                      touched={ticketTouched.listIndefiniteConditions}
                      value={ticketValues.listIndefiniteConditions}
                      marginBottom={"20px"}
                      onChangeText={(value) => {
                        console.log(errors);
                        handleChange(
                          "listIndefiniteConditions",
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
        member.barriers[field] = value;
      }

      return member;
    }),
  ]);
};
