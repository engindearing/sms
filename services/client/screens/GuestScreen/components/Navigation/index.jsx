import { View, Text } from "react-native";
import React from "react";

import { DrawerItem, Drawer } from "../../../../components/Drawer";

const index = ({ setCurrentScreen }) => {
  return (
    <View>
      <Drawer onChange={newScreen => setCurrentScreen(newScreen)}>
        <DrawerItem id="check-in" icon="clipboard"></DrawerItem>
        <DrawerItem id="profile" icon="account"></DrawerItem>
      </Drawer>
    </View>
  );
};

export default index;
