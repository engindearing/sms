import { View, Text } from "react-native";

import React from "react";

const ReservationScreen = ({ route }) => {
  const { reservationId } = route.params;

  return (
    <View>
      <Text>{reservationId}</Text>
    </View>
  );
};

export default ReservationScreen;
