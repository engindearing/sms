import "react-native-gesture-handler";

import React, { useEffect } from "react";

import { Provider, useDispatch, useSelector } from "react-redux";
import { store } from "./state/store";

import {
  NavigationContainer,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {
  HomeScreen,
  LoginScreen,
  RegisterScreen,
  IntakeScreen,
} from "./screens";

import EStyleSheet from "react-native-extended-stylesheet";

import Theme from "./Theme";
import { Button, NativeBaseProvider } from "native-base";
import { auth } from "./firebase";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { signOut } from "./state/user/userActions";

import { Text } from "react-native";

import SheltersScreen from "./screens/SheltersScreen/SheltersScreen";
import ShelterDashboardScreen from "./screens/ShelterDashboardScreen/ShelterDashboardScreen";
import ReservationScreen from "./screens/ReservationScreen/ReservationScreen";
import GuestScreen from "./screens/GuestScreen/GuestScreen";

export type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  Register: undefined;
  Intake: undefined;
  shelters: undefined;
  shelterdashboard: undefined;
  Reservation: undefined;
  Guest;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <NativeBaseProvider>
          <Theme>
            <SMS />
          </Theme>
        </NativeBaseProvider>
      </NavigationContainer>
    </Provider>
  );
}

function SMS() {
  let navigation = useNavigation();

  let { isLoggedIn } = useSelector((state: any) => state.user);

  let dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (!user) {
        navigation.reset({
          index: 0,
          routes: [{ name: "Login" }],
        });

        await AsyncStorage.removeItem("accessToken");

        dispatch(signOut());
      }

      if (user) {
        let { token } = await user.getIdTokenResult();

        await AsyncStorage.setItem("accessToken", token);

        navigation.reset({
          routes: [{ name: "Home" }],
        });
      }
    });

    return unsubscribe;
  }, []);

  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#8D4982",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },

        headerRight: () => {
          return (
            <Button
              style={{ marginRight: 20 }}
              variant={"outline"}
              onPress={() => auth.signOut()}
            >
              Logout
            </Button>
          );
        },
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="shelters" component={SheltersScreen} />
      <Stack.Screen name="Reservation" component={ReservationScreen} />

      <Stack.Screen
        name="Guest"
        component={GuestScreen}
        options={{ headerLeft: (props) => <Text></Text> }}
      />

      <Stack.Screen
        name="shelterdashboard"
        component={ShelterDashboardScreen}
      />

      <Stack.Screen name="Register" component={RegisterScreen} />

      <Stack.Screen
        name="Intake"
        component={IntakeScreen}
        options={{ headerLeft: (props) => <Text>Hello</Text> }}
      />
    </Stack.Navigator>
  );
}
