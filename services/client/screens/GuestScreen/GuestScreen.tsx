import { View } from "react-native";

import React, { useState } from "react";

import Navigation from "./components/Navigation";

import RenderScreens from "./components/Screens/RenderScreens";

import Loader from "../../components/Loader";

import Intake from "./components/Intake/IntakeScreen";

import { useCurrentHousehold } from "../../api/hooks";

export default function GuestScreen() {
  let householdQuery = useCurrentHousehold();

  let [currentScreen, setCurrentScreen] = useState("profile");

  let props = {
    currentScreen,
    setCurrentScreen,
  };

  if (householdQuery.isLoading) {
    return <Loader />;
  }

  // if (household.status === "start") {
  //   return <Intake {...props} />;
  // }

  return (
    <View style={{ height: "100%" }}>
      <RenderScreens {...props} />
      <Navigation {...props} />
    </View>
  );
}
