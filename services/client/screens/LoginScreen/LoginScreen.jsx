import React, { useEffect, useState } from "react";

import { auth } from "../../firebase";

import { useNavigation } from "@react-navigation/native";

import { useFormik } from "formik";
import LoginSchema from "./LoginFormSchema";
import TextInput from "../../components/TextInput";

import { Button } from "native-base";

import { Container, FormInputs } from "./LoginScreen.styles";
const LoginScreen = () => {
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  const { handleChange, handleSubmit, handleBlur, errors, touched } = useFormik(
    {
      initialValues: { email: "", password: "", onSubmit: "" },
      validationSchema: LoginSchema,

      onSubmit: async ({ email, password }) => {
        setLoading(true);
        try {
          await auth.signInWithEmailAndPassword(email, password);

        } catch (error) {
          // #TODO
          // Handle specific errors, use a popup instead of alert
          alert("Invalid username or password");
        } finally {
          setLoading(false);
        }
      },
    }
  );

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
          placeholder="Enter Password"
          icon="lock"
          type="password"
          onChangeText={handleChange("password")}
          onBlur={handleBlur("password")}
          error={errors.password}
          touched={touched.password}
        />

        <Button
          isLoading={loading}
          isLoadingText={"Logging in.."}
          style={{ marginTop: "3%" }}
          onPress={() => handleSubmit()}
        >
          Sign in
        </Button>
        <Button
          style={{ marginTop: "3%" }}
          variant={"outline"}
          onPress={() => navigation.navigate("Register")}
        >
          Register
        </Button>
      </FormInputs>
    </Container>
  );
};

export default LoginScreen;
