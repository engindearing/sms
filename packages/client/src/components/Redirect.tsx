import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { View, Text } from 'native-base'

export default function Redirect({to, params={}}) {
  const navigation = useNavigation()
  useEffect(() => {
    navigation.navigate(to, params)
  }, [])

  return (
    <></>
  )
}
