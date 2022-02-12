import { StyleSheet, Text, View } from "react-native";

import { Provider } from "react-redux";

import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "./screens/LoginScreen";

import HomeScreen from "./screens/HomeScreen";

import RegisterScreen from "./screens/RegisterScreen";

import { useEffect } from "react";

import firebase from "./firebase";

import AsyncStorage from "@react-native-async-storage/async-storage";

import { store } from "./state/store";

export type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  Register: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

const Stack = createNativeStackNavigator<RootStackParamList>();


export default function Index() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <App />
      </NavigationContainer>
    </Provider>
  );
}

function App() {
  let navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = firebase.onAuthStateChanged(
      firebase.auth,
      async (user) => {
        if (!user) {
          navigation.reset({
            index: 0,
            routes: [{ name: "Login" }],
          });

          await AsyncStorage.removeItem("accessToken");
        }

        if (user) {
          let { token } = await user.getIdTokenResult();

          await AsyncStorage.setItem("accessToken", token);

          navigation.reset({
            index: 0,
            routes: [{ name: "Home" }],
          });
        }
      }
    );

    return unsubscribe;
  }, []);

  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
