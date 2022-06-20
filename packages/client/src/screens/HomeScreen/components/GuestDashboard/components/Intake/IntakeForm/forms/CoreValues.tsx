import { View } from "react-native";
import React from "react";

import { Formik, FieldArray } from "formik";

import TextInput from "../../../../../../../../components/TextInput";

import * as Yup from "yup";

import { Text } from "native-base";

import getAge from "../../../../../../../../utils/getAge";

import styled from "styled-components/native";

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
    in1: "",
    in2: "",
    in3: "",
    in4: "",
    in5: "",
    in6: "",

    members: [...copyOfAdults],
  };

  // const validationSchema = Yup.object().shape({
  //   in1: Yup.string().required("Required"),
  //   in2: Yup.string().required("Required"),
  //   in3: Yup.string().required("Required"),
  //   in4: Yup.string().required("Required"),
  //   in5: Yup.string().required("Required"),
  //   in6: Yup.string().required("Required"),

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
            Family Promise Core Values
          </Text>

          <Spacer />

          <Text fontSize="md">
            At Family Promise we are guided by a set of core values that inform
            each aspect of what we do. All of our staff, volunteers, and guests
            are asked to think about and use these values to guide your
            interactions with staff, volunteers and guests.
          </Text>

          <Spacer />

          <Text fontWeight={"bold"}>
            All adults, must read and initial that you understand Family
            Promise’s Core Values.
          </Text>

          <Spacer />

          <Text fontSize={"xl"}>
            I agree that in all of my interactions with Family Promise I will
            try to:
          </Text>

          <Spacer />

          <View>
            <Text fontWeight={"bold"}>Be Non-Judgmental:</Text>
            <Text>"We all have issues, so let’s cut others some slack."</Text>
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
            <Text fontWeight={"bold"}>Be Respectful/ Compassionate:</Text>
            <Text>“People deserve our respect and concern.”</Text>
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
            <Text fontWeight={"bold"}>Be Present:</Text>
            <Text>
              “The person in front of you is the most important at that moment”
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
            <Text fontWeight={"bold"}>Be Competent:</Text>
            <Text>
              “Be excellent and if we don’t know something find the answer”
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
            <Text fontWeight={"bold"}>Be Empowered:</Text>
            <Text>
              “You can do it and you can help others know they can do it.”
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
            <Text fontWeight={"bold"}>Be a Great Neighbor:</Text>
            <Text>"You are what others know of us.”</Text>
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

          <Spacer />

          <Text>
            We exist in a community with other organizations, businesses and
            homes. Some of whom did not want a homeless shelter in their
            community because they thought it would detract from the community.
            We acknowledge this and want to change their minds. So we strive to
            be great neighbors and improve the community we are in. We pick up
            trash, clean up the outside of the building, and to take care of the
            space we have been provided. We don’t yell, curse, or disturb our
            neighbors. We want the neighbors and community to never want us to
            leave.
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

const Hr = styled.View`
  margin-top: 30;
  margin-bottom: 30;
  border-bottom-width: 1;
  margin-bottom: 30;

  border-color: #6960602d;
`;
