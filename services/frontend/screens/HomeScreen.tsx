import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';

import firebase from '../firebase'

import { Button } from 'react-native-elements';

const HomeScreen = () => {

  const { currentUser } = firebase.auth

  const signOut = () => firebase.auth.signOut()

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>{`Welcome back ${currentUser?.email}`}</Text>
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
