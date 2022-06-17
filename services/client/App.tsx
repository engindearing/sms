import "react-native-gesture-handler";

import React, { useEffect } from "react";

import { Provider, useDispatch, useSelector } from "react-redux";
import { store } from "./state/store";

import { LogBox } from "react-native";

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

import Theme from "./Theme";
import { Button, NativeBaseProvider } from "native-base";
import { auth } from "./firebase";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { signOut } from "./state/slices/userSlice";

import { Text } from "react-native";

import GuestScreen from "./screens/HomeScreen/components/GuestDashboard/GuestDashboard";

import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "react-query";

import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();

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
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <NativeBaseProvider>
            <Theme>
              <SMS />
              <ReactQueryDevtools initialIsOpen={false} />
            </Theme>
          </NativeBaseProvider>
        </NavigationContainer>
      </QueryClientProvider>
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
        let token = await user.getIdToken(true);

        await AsyncStorage.setItem("accessToken", token);

        navigation.reset({
          routes: [{ name: "Home" }],
        });
      }
    });

    return unsubscribe;
  }, []);

  LogBox.ignoreAllLogs();

  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />

      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
}
