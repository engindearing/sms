import { View, Text } from "react-native";

import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { Drawer, DrawerItem } from "../../components/Drawer";

import Navigation from "./components/Navigation";
import RenderScreen from "./components/Screens/RenderScreen";

const ShelterDashboardScreen = ({ route }) => {
  const navigation = useNavigation();

  const { shelterId } = route.params;

  const [currentScreen, setCurrentScreen] = useState('home');

  const props = { currentScreen, setCurrentScreen, shelterId };

  return (
    <View>
      <Navigation {...props} />
      <RenderScreen {...props} />
    </View>
  );
};

export default ShelterDashboardScreen;
