import { StyleSheet, Text, View } from "react-native";

import React, { useEffect } from "react";

import firebase from "../firebase";

import { Button } from "react-native-elements";

import { RootState } from "../state/rootReducer";

import { useDispatch, useSelector } from "react-redux";

import { setCurrentUser } from "../state/users/userActions";

import { getCurrentUser } from "../api/users";

const HomeScreen = () => {
  const { currentUser } = useSelector((state: RootState) => state.user);

  const dispatch = useDispatch();

  const signOut = () => firebase.auth.signOut();

  useEffect(() => {
    getCurrentUser()
      .then((user) => dispatch(setCurrentUser(user)))
      .catch((err) => alert("Unable to fetch current user"));
  }, []);

  return (
    <View style={styles.container}>
      <Text
        style={styles.welcomeText}
      >{`Welcome back ${currentUser.email}`}</Text>
      <Button onPress={signOut} title={"Sign Out"} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },

  welcomeText: {
    marginBottom: "5%",
  },
});
