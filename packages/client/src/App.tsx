import "react-native-gesture-handler";

import { registerRootComponent } from "expo";

import React, { useEffect, useState } from "react";

import { LogBox } from "react-native";

import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { HomeScreen, LoginScreen, RegisterScreen } from "./screens";

import Theme from "../Theme";
import { NativeBaseProvider } from "native-base";
import { auth } from "./config/firebase";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { QueryClient, QueryClientProvider } from "react-query";

import { ReactQueryDevtools } from "react-query/devtools";

import { trpc } from "./api/trpc";
import { useTrpcClient } from "./hooks/useTrcpClient";

import { Provider } from 'react-redux'

import { store } from "./state/store";

const queryClient = new QueryClient();

export type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  Register: undefined;
  Intake: undefined;
  shelters: undefined;
  shelterdashboard: undefined;
  Reservation: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export default function App() {
  const trpcClient = useTrpcClient();

  
  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
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
    </trpc.Provider>
  );
}

function SMS() {
  let navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (!user) {
        navigation.reset({
          index: 0,
          routes: [{ name: "Login" }],
        });

        await AsyncStorage.removeItem("accessToken");
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

registerRootComponent(App);
