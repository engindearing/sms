import { View, Text } from "react-native";

import React from "react";

import CheckIn from "./CheckIn/CheckIn";
import Profile from "./Profile";
import Shelter from "./Shelter";

const RenderScreens = (props) => {
  switch (props.currentScreen) {
    case "checkIn":
      return <CheckIn {...props} />;
    case "profile":
      return <Profile {...props} />;
    case "shelter":
      return <Shelter {...props} />;
  }

  return <View></View>;
};

export default RenderScreens;
