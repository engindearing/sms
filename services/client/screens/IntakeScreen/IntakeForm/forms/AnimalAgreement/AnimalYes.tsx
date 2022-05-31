import React from "react";

import { View } from "react-native";

import { Formik, FieldArray } from "formik";

import TextInput from "../../../../../components/TextInput";

import * as Yup from "yup";

import { Text } from "native-base";

import getAge from "../../../../../utils/getAge";

import styled from "styled-components/native";

import Unorderedlist from "react-native-unordered-list";

import Navigation from "../../Navigation";


export default function GrievanceAppeal({
  nextStep,
  onChange,
  formValues,
  prevStep,
}) {

  const { members } = formValues;

  let adults = members.filter((mem) => getAge(mem.demographics.dob) >= 18);

  let copyOfAdults = adults.map((mem) => ({
    ...mem,
    signature: "",
  }));

  const initialValues = {
    members: [...copyOfAdults],
  };

  // const validationSchema = Yup.object().shape({
  //   members: Yup.array().of(
  //     Yup.object().shape({
  //       signature: Yup.string().required("Required").nullable(),
  //     })
  //   ),
  // });

  function onSubmit(fields) {

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
      }) => (
        <View
          style={{
  
            width: "100%",
          }}
        >
          <Text fontSize="3xl">
            Open Doors Family Shelter Animal Agreement (continued)
          </Text>

          <Spacer />

          <Text fontWeight={"bold"} fontSize="lg">
            {" "}
            I, an Open Doors Guest, agree to the following terms and conditions
            for the care of my animal(s).
          </Text>

          <Spacer />

          <Unorderedlist>
            <Text marginBottom={3}>
              No animal is to be left unattended by their owners.
            </Text>
          </Unorderedlist>

          <Unorderedlist>
            <Text marginBottom={3}>
              All animals must be kenneled or on a leash at all times.
            </Text>
          </Unorderedlist>

          <Unorderedlist>
            <Text marginBottom={3}>
              Cats must have access to litter box at all times.
            </Text>
          </Unorderedlist>

          <Unorderedlist>
            <Text marginBottom={3}>
              Dogs must be consistently taken outside to go to the bathroom.
            </Text>
          </Unorderedlist>

          <Unorderedlist>
            <Text marginBottom={3}>
              Animals exhibiting aggressive behavior toward people or other
              animals may be asked to leave.
            </Text>
          </Unorderedlist>

          <Unorderedlist>
            <Text>
              Owners are responsible for any damage or injury their pet may
              cause property or persons.
            </Text>
          </Unorderedlist>

          <Unorderedlist>
            <Text marginBottom={3}>
              Only animals that are brought in at the time of intake will be
              allowed.
            </Text>
          </Unorderedlist>

          <Unorderedlist>
            <Text marginBottom={3}>
              Animals that keep other guests up at night will be asked to leave.
            </Text>
          </Unorderedlist>

          <Spacer />

          <Text fontWeight={"bold"} fontSize="md">
            If these standards are not met, Open Doors reserves the right to no
            longer allow the animal to stay in the shelter.
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
          <Navigation prevStep={prevStep} handleSubmit={handleSubmit} />
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

