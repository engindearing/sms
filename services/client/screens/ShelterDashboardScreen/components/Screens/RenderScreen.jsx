import { View, Text } from "react-native";
import React from "react";

import Beds from "./Beds";
import Guests from "./Guests";
import Intake from "./Intake";
import Home from "./Home";

const RenderScreen = (props) => {
  switch (props.currentScreen) {
    case "home":
      return <Home {...props} />;
    case "beds":
      return <Beds {...props} />;
    case "guests":
      return <Guests {...props} />;
    case "intake":
      return <Intake {...props} />;
    default:
      return <View>test view</View>;
  }

  return (
    <View>
      <Text>RenderScreen</Text>
    </View>
  );
};

export default RenderScreen;
