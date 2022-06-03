import { View } from "react-native";

import React, { useEffect, useState } from "react";

import Navigation from "./components/Navigation";

import RenderScreens from "./components/Screens/RenderScreens";

import { useDispatch, useSelector } from "react-redux";

import Loader from "../../components/Loader";

import { fetchHouseholdByUserId } from "../../state/householdSlice";

export default function GuestScreen() {
  let dispatch = useDispatch();

  let { loading, error } = useSelector((state: any) => state.household);

  let { currentUser } = useSelector((state: any) => state.user);

  let [currentScreen, setCurrentScreen] = useState("profile");

  const props = {
    currentScreen,
    setCurrentScreen,
  };

  useEffect(() => {
    dispatch(fetchHouseholdByUserId(currentUser._id));
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <View style={{ height: "100%" }}>
      <RenderScreens {...props} />
      <Navigation {...props} />
    </View>
  );
}
