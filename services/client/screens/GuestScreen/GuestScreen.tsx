import { View } from "react-native";

import React, { useEffect, useState } from "react";

import Navigation from "./components/Navigation";

import RenderScreens from "./components/Screens/RenderScreens";

import { useDispatch, useSelector } from "react-redux";

import Loader from "../../components/Loader";

import { fetchHouseholdByUserId } from "../../state/slices/householdSlice";

export default function GuestScreen() {
  let dispatch = useDispatch();

  let { currentUser } = useSelector((state: any) => state.user);

  let { fetchInProgress, household, members } = useSelector(
    (state: any) => state.household
  );

  let [currentScreen, setCurrentScreen] = useState("profile");

  let props = {
    currentScreen,
    setCurrentScreen,
    household,
    members,
  };

  useEffect(() => {
    dispatch(fetchHouseholdByUserId(currentUser._id));
  }, []);

  if(fetchInProgress) {
    return <Loader />
  }

  return (
    <View style={{ height: "100%" }}>
      <RenderScreens {...props} />
      <Navigation {...props} />
    </View>
  );
}
