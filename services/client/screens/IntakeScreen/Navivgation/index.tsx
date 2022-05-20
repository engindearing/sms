import React from "react";

import { Drawer, DrawerItem } from "../../../components/Drawer";

export default function index({ setStep }) {
  return (
    <Drawer onChange={id => setStep(id)}>
      <DrawerItem id={0}  icon="apple"   />
      <DrawerItem id={1} icon="apple"  />
      <DrawerItem id={2} icon="apple"  />
      <DrawerItem id={3} icon="apple"  />
      <DrawerItem id={4} icon="apple"  />
      <DrawerItem id={5} icon="apple"  />
      <DrawerItem id={6} icon="apple"  />
      <DrawerItem id={8} icon="apple"  />
      <DrawerItem id={9} icon="apple"  />
      <DrawerItem id={10} icon="apple"  />
      <DrawerItem id={11} icon="apple"  />
      <DrawerItem id={12} icon="apple"  />
    </Drawer>
  );
};