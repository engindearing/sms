import { View, Text } from "react-native";
import React from "react";

import { Button } from "native-base";

const Navigation = ({ prevStep, handleSubmit }) => {
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
      <Button
        variant={'outline'}
        style={{ width: "25%", marginRight: 5 }}
        onPress={() => prevStep()}
      >
        Back
      </Button>
      <Button style={{ width: "75%" }} onPress={() => handleSubmit()}>
        Next
      </Button>
    </View>
  );
};

export default Navigation;
