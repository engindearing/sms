import React, { useEffect, useState } from "react";

import { Button } from "native-base";

import { useNavigation } from "@react-navigation/native";

import { Container, FormInputs } from "./RegisterScreen.styles";

import { useFormik } from "formik";

import { auth } from "../../firebase";
1;
import RegisterFormSchema from "./RegisterFormSchema";
import TextInput from "../../components/TextInput";

const RegisterScreen = () => {
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  const { handleChange, handleSubmit, values, handleBlur, errors, touched } =
    useFormik({
      initialValues: { email: "", password: "", passwordConfirmation: "" },
      validationSchema: RegisterFormSchema,
      onSubmit: async ({ email, password }) => {
        setLoading(true);
        try {
          await auth.createUserWithEmailAndPassword(email, password);
        } catch (error) {

          // #TODO
          // Check if user exists before trying to create
          // Handle specific errors, use popup
          alert('User already exists')
        } finally {
          setLoading(false);
        }
      },
    });

  return (
    <Container behavior="padding">
      <FormInputs>
        <TextInput
          placeholder="Email"
          icon="email"
          onChangeText={handleChange("email")}
          onBlur={handleBlur("email")}
          error={errors.email}
          touched={touched.email}
        />

        <TextInput
          type="password"
          placeholder="Enter Password"
          icon="lock"
          onChangeText={handleChange("password")}
          onBlur={handleBlur("password")}
          error={errors.password}
          touched={touched.password}
        />

        <TextInput
          type="password"
          placeholder="Confirm Password"
          icon="lock"
          onChangeText={handleChange("passwordConfirmation")}
          onBlur={handleBlur("passwordConfirmation")}
          error={errors.passwordConfirmation}
          touched={touched.passwordConfirmation}
        />

        <Button isLoading={loading} isLoadingText={'Creating user..'} style={{ marginTop: "3%" }} onPress={() => handleSubmit()}>
          Register
        </Button>
        <Button
          style={{ marginTop: "3%" }}
          variant={"outline"}
          onPress={() => navigation.navigate("Login")}
        >
          Sign in
        </Button>
      </FormInputs>
    </Container>
  );
};

export default RegisterScreen;
