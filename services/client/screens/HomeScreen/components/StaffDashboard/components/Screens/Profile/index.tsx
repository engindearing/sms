import React, { useEffect, useState } from "react";

import * as Yup from "yup";

import { useNavigation } from "@react-navigation/native";

import { useFormik } from "formik";

import TextInput from "../../../../../../../components/TextInput";

import { Button } from "native-base";

import styled from "styled-components/native";

import { useCurrentUser } from "../../../../../../../api/hooks";

const LoginScreen = () => {
  const { data: user, isLoading: loading } = useCurrentUser();

  const { handleChange, handleSubmit, handleBlur, errors, touched, values } =
    useFormik({
      initialValues: {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
      },
      validationSchema: LoginSchema,
      onSubmit: async (user) => {
        alert(JSON.stringify(user));
      },
    });

  return (
    <Container behavior="padding">
      <FormInputs>
        <TextInput
          placeholder="First name"
          icon="person"
          onChangeText={handleChange("firstName")}
          onBlur={handleBlur("firstName")}
          error={errors.firstName}
          touched={touched.firstName}
          value={values.firstName}
        />

        <TextInput
          placeholder="Last name"
          icon="person"
          onChangeText={handleChange("lastName")}
          onBlur={handleBlur("lastName")}
          error={errors.lastName}
          touched={touched.lastName}
          value={values.lastName}
        />

        <TextInput
          placeholder="Email"
          disabled
          icon="email"
          onChangeText={handleChange("email")}
          onBlur={handleBlur("email")}
          error={errors.email}
          touched={touched.email}
          value={values.email}
        />

        <Button
          isLoading={loading}
          isLoadingText={"Logging in.."}
          style={{ marginTop: "3%" }}
          onPress={() => handleSubmit()}
        >
          Update Profile
        </Button>
      </FormInputs>
    </Container>
  );
};

export default LoginScreen;

const LoginSchema = Yup.object().shape({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email"),
});

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const FormInputs = styled.View`
  width: 30%;

  ${(props) => props.theme.isLaptop && "width: 45%;"}

  ${(props) => props.theme.isTablet && "width: 70%;"}

  ${(props) => props.theme.isMobileL && "width: 95%;"}

  ${(props) => props.theme.isMobileS && "width: 98%;"}
`;
