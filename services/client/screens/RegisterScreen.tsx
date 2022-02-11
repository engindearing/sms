import React, { useEffect, useState } from "react";

import { Input, Button, Icon } from "react-native-elements";

import { useNavigation } from "@react-navigation/native";

import {
    KeyboardAvoidingView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

import isValidEmail from "../utils/isValidEmail";

import auth from "../firebase";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState('')
  const [errors, setErrors] = useState(null)

  const navigation = useNavigation();

  const handleRegister = async () => {

    let passwordsDoNotMatch = password !== confirm

    let invalidEmail = !(isValidEmail(email))

    if(passwordsDoNotMatch) return alert('Passwords do not match')

    if(invalidEmail) return alert('Invalid Email Format')

    try {
      await auth.handleSignUp(email, password);

    } catch (error:any) {
      alert('Email already in use')
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.inputContainer}>
        <Input
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          leftIcon={{
            name: "email",
          }}
        />
        <Input
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          leftIcon={{
            name: "lock",
          }}
          secureTextEntry
        />

        <Input
          placeholder="Confirm Password"
          value={confirm}
          onChangeText={(text) => setConfirm(text)}
          leftIcon={{
            name: "lock",
          }}
          secureTextEntry
        />
      </View>

      <View>
        <Button
          containerStyle={{
            width: 300,
            marginHorizontal: 50,
            marginVertical: 10,
          }}
          onPress={handleRegister}
          title={"REGISTER"}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    width: "80%",
  },
  input: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  buttonContainer: {
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  button: {
    backgroundColor: "#0782F9",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonOutline: {
    backgroundColor: "white",
    marginTop: 5,
    borderColor: "#0782F9",
    borderWidth: 2,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
  buttonOutlineText: {
    color: "#0782F9",
    fontWeight: "700",
    fontSize: 16,
  },
});
