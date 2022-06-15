import { View, Text } from "react-native";

import React, { useState } from "react";

import Navigation from "./components/Navigation";

import RenderScreens from "./components/Screens/RenderScreens";

import Loader from "../../components/Loader";

import Intake from "./components/Intake/IntakeScreen";

import { useCurrentHousehold } from "../../api/hooks";

export default function GuestScreen() {
  let [currentScreen, setCurrentScreen] = useState("checkIn");

  let householdQuery = useCurrentHousehold();

  if (householdQuery.isLoading) {
    return <Loader />;
  }

  if (householdQuery.isError) {
    return <Text>{householdQuery.error.message}</Text>;
  }

  if (householdQuery.data.household.status === "start") {
    return <Intake />;
  }

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
