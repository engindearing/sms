import { View, Text } from "react-native";

import React from "react";

import Profile from "./Profile";
import Shelter from "./Shelter";

import VerifyCheckIns from "./VerifyCheckIns/VerifyCheckIns";

const RenderScreens = (props) => {
  switch (props.currentScreen) {
    case "checkIn":
      return <VerifyCheckIns {...props} />;
    case "profile":
      return <Profile {...props} />;
    case "shelter":
      return <Shelter {...props} />;
  }

  return <View></View>;
};

export default RenderScreens;
