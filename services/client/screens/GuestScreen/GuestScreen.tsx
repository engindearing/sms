import { View, Text } from "react-native";

import React, { useState } from "react";

import { Drawer, DrawerItem } from "../../components/Drawer";

import Navigation from "./components/Navigation";
import RenderScreens from "./components/Screens/RenderScreens";

export default function GuestScreen() {
  const [currentScreen, setCurrentScreen] = useState("check-in");

  const props = {
    currentScreen,
    setCurrentScreen,
  };

  return (
    <View>
      <Navigation {...props} />
      <RenderScreens {...props} />
    </View>
  );
}