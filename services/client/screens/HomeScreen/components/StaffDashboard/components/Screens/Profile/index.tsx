import React, { useEffect, useState } from "react";

import * as Yup from "yup";

import { useNavigation } from "@react-navigation/native";

import { useFormik } from "formik";

import TextInput from "../../../../../../../components/TextInput";

import { Button } from "native-base";

import styled from "styled-components/native";

import { useCurrentUser } from "../../../../../../../api/hooks";

import { useUpdateCurrentUser } from "../../../../../../../api/hooks/useCurrentUser";

import SelectInput from "../../../../../../../components/SelectInput";

import { Select } from "native-base";
import { useShelters } from "../../../../../../../api/hooks/useShelters";

const LoginScreen = () => {
  const { data: user, isLoading: loading } = useCurrentUser();

  const { mutate: updateUser } = useUpdateCurrentUser();

  const sheltersQuery = useShelters();

  const { handleChange, handleSubmit, handleBlur, errors, touched, values } =
    useFormik({
      initialValues: {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        shelter: user.shelter,
      },
      validationSchema: LoginSchema,
      onSubmit: async (user) => {
        updateUser(
          { user },
          { onSuccess: () => alert("Successfully updated profile") }
        );
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
        <SelectInput
          accessibilityLabel="Choose shelter"
          minWidth={"100%"}
          placeholder="Shelter"
          onValueChange={handleChange("shelter")}
          onBlur={handleBlur("shelter")}
          error={errors.shelter}
          touched={touched.shelter}
          selectedValue={values.shelter}
        >
          {sheltersQuery.data?.map((shelter) => (
            <Select.Item
              key={shelter._id}
              label={shelter.name}
              value={shelter._id}
            />
          ))}
        </SelectInput>
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
  shelter: Yup.string().required("Required"),
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
