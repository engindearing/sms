import { View } from "react-native";
import React from "react";

import { Formik, FieldArray } from "formik";

import TextInput from "../../../../../components/TextInput";

import * as Yup from "yup";

import { Button } from "native-base";

import { Text } from "native-base";

import getAge from "../../../../../utils/getAge";

import styled from "styled-components/native";
import Navigation from "../../Navigation";

export default function Decorum({ nextStep, onChange, formValues, prevStep }) {
  //Options for relationship drop down

  const initialValues = {
    in1: "",
    in2: "",
    in3: "",
    in4: "",
    in5: "",
    in6: "",
    in7: "",
  };

  // const validationSchema = Yup.object().shape({
  //   in1: Yup.string().required("Required"),
  //   in2: Yup.string().required("Required"),
  //   in3: Yup.string().required("Required"),
  //   in4: Yup.string().required("Required"),
  //   in5: Yup.string().required("Required"),
  //   in6: Yup.string().required("Required"),
  //   in7: Yup.string().required("Required"),
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
        handleSubmit,
        handleChange,
      }) => (
        <View
          style={{
       
            width: "100%",
          }}
        >
          <Text fontSize="3xl" marginBottom={5}>
            Guest Expectations and Decorum Agreement Continued
          </Text>

          <Text fontSize="2xl" marginBottom={5}>
            I will be expected NOT to:
          </Text>

          <Spacer />

          <View>
            <Text fontWeight={"bold"} fontSize="md">
              Spank, Yell or Curse:
            </Text>
            <Text>
              I understand that
              <Text fontWeight={"bold"}>
                {" "}
                spanking and/or yelling are not acceptable forms of parenting
              </Text>{" "}
              at Open Doors. Cursing, spanking and yelling are not allowed at
              Open Doors.
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
              Touch, Pickup or Hold Someone Else’s Child:
            </Text>
            <Text>
              I understand that I may never, under any circumstances, put my
              hands on another guest’s child for any reason. This includes:
              spanking, grabbing, pushing, lifting, tickling or holding babies.
              I may side hug or give high fives as appropriate. I may never
              discipline another guest’s child while at Open Doors.
              <Text fontWeight={"bold"}>
                {" "}
                This applies even if you have been given permission by the
                child’s parents.
              </Text>
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
              Babysit or Ask Someone Else to Babysit:
            </Text>
            <Text>
              I understand I may not,
              <Text fontWeight={"bold"}> under any circumstances</Text> ,
              babysit another guest’s child while in the shelter and I will not
              let other guests babysit my child while in the shelter. I
              understand that supervising and/or disciplining my children is not
              the responsibility of other guests, volunteers, or staff.
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
            <Text fontWeight={"bold"} fontSize="md">
              Sleep in the Day Shelter:
            </Text>
            <Text>
              I understand that{" "}
              <Text fontWeight={"bold"}>
                Adults sleeping in the day shelter is not allowed
              </Text>{" "}
              for any reason. Children may nap but not adults. Adults should be
              looking for work, housing or resources during daytime hours or
              helping out around the shelter. If there is a medical reason that
              requires me to rest during the day, I will have my Dr fill out a
              special accommodation form.
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
            <Text fontWeight={"bold"} fontSize="md">
              Lend money or items of any value to another guest:
            </Text>
            <Text>
              I understand that Family Promise (Open Doors) is{" "}
              <Text fontWeight={"bold"}>not</Text> and can not be held
              responsible in any way, if I choose to lend money or any items of
              value to another guest. This includes: phone, tablet, laptop, car,
              money, etc.
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
            <Text fontWeight={"bold"} fontSize="md">
              I will not:
            </Text>
            <Text>
              lend, trade, or borrow food stamps under any circumstances since
              this is an illegal act and could lead to my family losing the
              benefit.
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
            <Text fontWeight={"bold"} fontSize="md">
              I will NOT use tobacco products:
            </Text>
            <Text>
              anywhere except for in designated areas for both Day Shelter and
              Night Shelter. This includes rolling, chewing, dipping, refilling,
              vaping, or any other type of product containing nicotine. I also
              will <Text fontWeight={"bold"}>not</Text> allow my under age child
              to use any product containing nicotine on shelter property.
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
