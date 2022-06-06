import { View } from "react-native";
import React from "react";

import { Formik, FieldArray } from "formik";

import TextInput from "../../../../../../components/TextInput";

import * as Yup from "yup";

import { Text } from "native-base";

import getAge from "../../../../../../utils/getAge";

import styled from "styled-components/native";

import Navigation from "../Navigation";
import { useSelector } from "react-redux";

export default function AntiDiscrimination({
  nextStep,

  prevStep,
}) {
  //Options for relationship drop down

  const { members } = useSelector((state: any) => state.household);

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
    // onChange({ members: [...fields.members] });
    nextStep();
  }

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
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
            width: "100%",
          }}
        >
          <Text fontSize="3xl" marginBottom={5}>
            Understanding of Anti-Discrimination Policy for Guests, Staff,
            Volunteers
          </Text>

          <Spacer />

          <Text fontSize="md">
            Open Doors welcomes individuals who are heterosexual, bisexual, gay,
            lesbian, transgender and/or gender non-conforming, of different
            races, classes, religions, ages, protected classes and backgrounds.
            We do not discriminate based upon gender identity or gender
            expression, and as a guest, staff and/or volunteer, I agree to
            address individuals by their preferred gender pronoun. By signing
            this statement, I agree to be respectful of program guests,
            volunteers and staff. I understand that any oppressive or abusive
            language or actions are not acceptable, and that I am bound by law
            to keep any personal information I learn about a client
            confidential. If I have any questions about this procedure, I can
            ask a staff member to explain it to me.
          </Text>

          <Spacer />

          <Text fontSize={"md"}>
            If a program guest, volunteer, or staff member is acting in an
            abusive or oppressive way towards me, I know that I can report this
            behavior (either verbally or in writing) to a staff member. If I
            feel that the issue has not been addressed, I can then report it to
            the Program Manager. If the issue has still not been appropriately
            addressed, I can bring the issue to the Director.
          </Text>

          <Spacer />

          <Text fontWeight={"bold"} fontSize="md">
            ** Please ask Staff for the "Complaint" form if you would like to
            place something in writing. **
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
