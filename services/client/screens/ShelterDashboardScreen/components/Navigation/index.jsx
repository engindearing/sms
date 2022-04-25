import React from "react";
import { Drawer, DrawerItem } from "../../../../components/Drawer";

export default function Index({ setCurrentScreen }) {
  return (
    <Drawer onChange={(key) => setCurrentScreen(key)}  >
      <DrawerItem id={'home'} icon="home"></DrawerItem>
      <DrawerItem id='intake' icon="clipboard-text-outline"></DrawerItem>
      <DrawerItem id='beds' icon="bed"></DrawerItem>
      <DrawerItem id='guests' icon="account-group"></DrawerItem>
    </Drawer>
  );
}
