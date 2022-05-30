import { View, Text } from "react-native";
import React from "react";

import { Button } from "native-base";

const Navigation = ({ prevStep, handleSubmit, nextStepText = "Next" }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 20,
      }}
    >
      <Button
        variant={"outline"}
        style={{ width: "25%", marginRight: 5 }}
        onPress={() => prevStep()}
      >
        Back
      </Button>
      <Button style={{ width: "75%" }} onPress={() => handleSubmit()}>
        {nextStepText}
      </Button>
    </View>
  );
};

export default Navigation;
