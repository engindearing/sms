import React from "react";

import { View } from "react-native";

import { Formik, FieldArray } from "formik";

import TextInput from "../../../../../../../../../components/TextInput";

import * as Yup from "yup";

import { Text } from "native-base";

import getAge from "../../../../../../../../../utils/getAge";

import styled from "styled-components/native";

import Navigation from "../../Navigation";
import { useSelector } from "react-redux";


export default function NeighborhoodExpectations({
  nextStep,
  onChange,
  formValues,
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
    in1: "",
    in2: "",
    in3: "",
    in4: "",
    in5: "",
    in6: "",
    in7: "",
    members: [...copyOfAdults],
  };

  // const validationSchema = Yup.object().shape({
  //   in1: Yup.string().required("Required"),
  //   in2: Yup.string().required("Required"),
  //   in3: Yup.string().required("Required"),
  //   in4: Yup.string().required("Required"),
  //   in5: Yup.string().required("Required"),
  //   in6: Yup.string().required("Required"),
  //   in7: Yup.string().required("Required"),
  //   members: Yup.array().of(
  //     Yup.object().shape({
  //       signature: Yup.string().required("Required").nullable(),
  //     })
  //   ),
  // });

  function onSubmit(fields) {
    // onChange({ members: [...fields.members] });
    // nextStep();
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
        handleChange,
      }) => (
        <View
          style={{
   
            width: "100%",
          }}
        >
          <Text fontSize="3xl">
            Notice of Neighborhood Agreement and Expectations Requirement
            (continued)
          </Text>

          <Spacer />

          <Text fontSize="2xl">Neighborhood Expectations:</Text>

          <Spacer />

          <View>
            <Text fontSize="md">
              I will clean up after myself, my children, and my pets while I am
              on Family Promise property, AS WELL AS, when I am walking around
              the neighborhood, at the bus-stop, on the sidewalks, streets or
              near a neighbor’s home.
            </Text>
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
            <Text fontSize="md">
              I will be considerate of the properties belonging to neighbors.{" "}
              <Text fontWeight={"bold"}>This includes:</Text> Not yelling or
              swearing at my children or at others while outdoors near
              neighboring homes, not leaving trash or cigarette butts on the
              sidewalks, streets, in yards or in parking lots, not playing loud
              music outdoors near neighboring homes.
            </Text>
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
            <Text fontSize="md">
              I will not stand, sit or walk through the properties of neighbors.
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
            <Text fontSize="md">
              I will not smoke marijuanna, drink alcoholic beverages, or use any
              illegal substance on Family Promise properties or within the
              neighborhood where Family Promise of Spokane is located. This
              includes all sidewalks, driveways, or yards near the properties of
              Family Promise, even if the neighbor invites or gives permission
              for you to
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

          <Text fontWeight={"bold"}>
            {" "}
            **(2002 E Mission’s neighborhood is the Chief Garry Neighborhood and
            it spans from: Trent Avenue North to the Spokane River and
            Greene/Market Street West to the Spokane River)**
          </Text>

          <Spacer />

          <Text fontWeight={"bold"}>
            {" "}
            **(904 E Hartson’s neighborhood is the South Perry District: It
            spans from I-90 South to Southeast Blvd and Sherman East to Altamont
            St. and Crestline St.)**
          </Text>

          <Spacer />

          <Text fontWeight={"bold"} underline>
            Agreement and Understanding
          </Text>

          <Spacer />

          <View>
            <Text fontSize="md">
              I understand that if I do not follow the above expectations, I may
              be asked to leave a Family Promise shelter temporarily or
              permanently.
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
            <Text fontSize="md">
              I understand that if a neighbor of a Family Promise shelter
              complains about my behavior on or near their property, I may be
              asked to leave the shelter temporarily or permanently.
            </Text>
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

          <View>
            <Text fontSize="md">
              I understand that if a neighbor sees me using drugs or drinking
              alcohol while my children are with me, they may call law
              enforcement and/or CPS.
            </Text>
            <TextInput
              width="100%"
              placeholder="Initials"
              name="dateLastIncident"
              onBlur={handleBlur("in7")}
              error={errors.in7}
              onChangeText={handleChange("in7")}
              touched={touched.in7}
              value={values.in7}
              marginBottom={"20px"}
            />
          </View>

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

