import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';

import firebase from '../firebase'

import { Button } from 'react-native-elements';

import { axiosWithAuth } from '../api/axiosWithAuth';

import { getAccessToken } from '../utils/getAccessToken';

const HomeScreen = () => {

  const signOut = () => firebase.auth.signOut()

  const getCurrentUser = async () => {
    try {
      let token = await getAccessToken()

      let res =  await axiosWithAuth(token).get('/users/me')

      console.log(res.data)

    } catch (error) {
      alert('Unable to fetch current user')
    }
  }

  useEffect( () => {
    getCurrentUser()
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>{`Welcome back Person`}</Text>
      <Button onPress={signOut} title={'Sign Out'} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },

  welcomeText: {
    marginBottom: '5%'
  }
});
