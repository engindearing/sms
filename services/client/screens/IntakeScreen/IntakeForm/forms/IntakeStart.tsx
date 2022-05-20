import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from 'native-base'

export default function IntakeStart({ nextStep }) {

  return (
    <View>
      <Button onPress={nextStep} >Submit</Button>
    </View>
  )
}


const styles = StyleSheet.create({})