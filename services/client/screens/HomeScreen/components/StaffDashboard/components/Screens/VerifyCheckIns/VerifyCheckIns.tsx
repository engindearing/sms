import React from "react";
import { View } from "react-native";
import {useReservations} from "../../../../../../../api/hooks/useReservations";

export default function VerifyCheckIns() {

  const { data } = useReservations()

  return <View>Verify check-in</View>;
}
