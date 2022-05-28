import { View } from "react-native";
import React from "react";

import { Formik, FieldArray } from "formik";

import TextInput from "../../../../../components/TextInput";

import * as Yup from "yup";

import { Button } from "native-base";

import { Text } from "native-base";

import getAge from "../../../../../utils/getAge";

import styled from "styled-components/native";

export default function RaceEthnicityInfo({ nextStep, onChange, formValues }) {
  //Options for relationship drop down

  const initialValues = {
    in1: "",
    in2: "",
    in3: "",
  };

  const validationSchema = Yup.object().shape({
    in1: Yup.string().required("Required"),
    in2: Yup.string().required("Required"),
    in3: Yup.string().required("Required"),
  });

  function onSubmit(fields) {
    // onChange({ members: [...fields.members] });
    // nextStep();

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
            Guest Expectations and Decorum Agreement
          </Text>

          <Text fontSize="2xl" marginBottom={5}>
            I will be expected NOT to:
          </Text>

          <Spacer />

          <View>
            <Text fontWeight={"bold"} fontSize="md">
              Be Violent or Aggresive:
            </Text>
            <Text>
              I understand that Open Doors staff has the right to ask me to
              leave immediately if I am believed to be a threat to another
              guest, volunteer or staff in any way. I understand that violence
              or aggression of any kind ( physical, verbal or emotional) is NOT
              tolerated.
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
            <Text fontWeight={"bold"} fontSize="md">
              Have Drugs, Alcohol, or Weapons:
            </Text>
            <Text>
              I understand that the use, possession, or sale of drugs or alcohol
              is NOT permitted on the Open Doors premises. I agree that I will
              not bring weapons of any kind on the Open Doors premises.
            </Text>

            <Text fontWeight={"bold"}>
              ** If there is a valid suspicion of drug use or possession on the
              shelter property, a supervisor may ask to look through my
              belongings. This is in an effort to ensure the safety of the other
              guests and their children.
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
            <Text fontWeight={"bold"} fontSize="md">
              Leave Children Unattended Out of My Line of Sight:
            </Text>
            <Text>
              I agree to supervise my children at all times. Parents are
              responsible for care and “line of sight” supervision of children
              at all times.
            </Text>
            <Text fontWeight={"bold"}>
              Parents may never leave the building while your child remains in
              the building for any length of time. This applies to children of
              all ages. (While in the kitchen, Children may be in the dining
              room, and be regularly checked on)
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

          <Text fontWeight={"bold"} fontSize="md">
            {" "}
            ***I understand that if I Do any of the above mentioned things I may
            be written up, suspended or terminated from the shelter. I also
            understand that after 3 write-ups (whether I signed them or not), I
            may be suspended or terminated from using this shelter.***
          </Text>

          <Spacer />

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
