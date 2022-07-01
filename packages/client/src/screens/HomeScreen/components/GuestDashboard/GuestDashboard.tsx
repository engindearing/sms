import { View, Text } from "react-native";

import React, { useState } from "react";

import Navigation from "./components/Navigation";

import RenderScreens from "./components/Screens/RenderScreens";

import Intake from "./components/Intake/IntakeScreen";

import { useCurrentHousehold } from "../../../../api/hooks/useCurrentUser";

import LoadingScreen from "../../../../components/LoadingScreen";

export default function GuestDashboard() {
  let [currentScreen, setCurrentScreen] = useState("checkIn");

  let householdQuery = useCurrentHousehold();

  if (householdQuery.isLoading) {
    return <LoadingScreen />;
  }

  if (householdQuery.isError) {
    return <Text>{householdQuery.error.message}</Text>;
  }

  let props = {
    currentScreen,
    setCurrentScreen,
    household: householdQuery?.data?.household,
    members: householdQuery?.data?.members
  }
 
  if (householdQuery?.data?.household.status === "start") {
    return <Intake {...props} />;
  }

  return (
    <View style={{ height: "100%" }}>
      <RenderScreens {...props} />
      <Navigation {...props} />
    </View>
  );
}
