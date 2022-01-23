import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './screens/LoginScreen';

import HomeScreen from './screens/HomeScreen';

import firebase from './firebase'
import RegisterScreen from './screens/RegisterScreen';
import { useEffect } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage'

export type RootStackParamList = {
  Home: undefined;
  Login: undefined,
  Register: undefined
};

const Stack = createNativeStackNavigator<RootStackParamList>();

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export default function Index() {
  return (
  <NavigationContainer>
    <App />
  </NavigationContainer>
  );
}

function App() {
  let navigation = useNavigation()

  useEffect(() => {
    const unsubscribe = firebase.onAuthStateChanged(firebase.auth, async (user) => {
      if(!user) {
        navigation.reset({
          index: 0,
          routes: [{ name: 'Login' }]
        })

        await AsyncStorage.removeItem('accessToken')
      }

      if (user) {
       let { token } =  await user.getIdTokenResult()

       await AsyncStorage.setItem('accessToken', token)

       navigation.reset({
        index: 0,
        routes: [{ name: 'Home' }]
      })
      }
    });

    return unsubscribe;
  }, []);

  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
