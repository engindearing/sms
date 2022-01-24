import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';

import firebase from '../firebase'

import { Button } from 'react-native-elements';

import { axiosWithAuth } from '../api/axiosWithAuth';

const HomeScreen = () => {

  const signOut = () => firebase.auth.signOut()

  useEffect(() => {
    axiosWithAuth().get('/users/me').then(console.log).catch(console.log)
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
