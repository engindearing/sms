import { View, Text } from "react-native";

import React, { useState } from "react";

import Navigation from "./components/Navigation";

import RenderScreens from "./components/Screens/RenderScreens";

import Loader from "../../../../components/Loader";

import Intake from "./components/Intake/IntakeScreen";

import { useCurrentHousehold } from "../../../../api/hooks";
import LoadingScreen from "../../../../components/LoadingScreen";

export default function StaffDashboard() {
  let [currentScreen, setCurrentScreen] = useState("checkIn");

  let props = {
    currentScreen,
    setCurrentScreen,
  };

  return (
    <View style={{ height: "100%" }}>
      <RenderScreens {...props} />
      <Navigation {...props} />
    </View>
  );
}
