import React from "react";

import { View } from "react-native";

import { Formik, FieldArray } from "formik";

import TextInput from "../../../../../../components/TextInput";

import * as Yup from "yup";

import { Text } from "native-base";

import getAge from "../../../../../../utils/getAge";

import styled from "styled-components/native";

import Unorderedlist from "react-native-unordered-list";

import Navigation from "../Navigation";
import { useSelector } from "react-redux";

export default function RaceEthnicityInfo({ nextStep, formValues, prevStep }) {
  //Options for relationship drop down

  const { members } = useSelector((state: any) => state.household);

  let adults = members.filter((mem) => getAge(mem.demographics.dob) >= 18);

  let copyOfAdults = adults.map((mem) => ({
    ...mem,
    signature: "",
  }));

  const initialValues = {
    sig: "",

    members: [...copyOfAdults],
  };

  // const validationSchema = Yup.object().shape({
  //   sig: Yup.string().required("Required"),

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
