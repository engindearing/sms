import { View, Text } from "react-native";

import React from "react";

import CheckIn from "./CheckIn";
import Profile from "./Profile";

const RenderScreens = (props) => {
  switch (props.currentScreen) {
    case "check-in":
      return <CheckIn {...props} />;
    case "profile":
      return <Profile {...props} />;
  }

  return <View></View>;
};

export default RenderScreens;
