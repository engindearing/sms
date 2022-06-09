import { useWindowDimensions, View } from "react-native";

import React, { useEffect, useState } from "react";

import Navigation from "./components/Navigation";

import RenderScreens from "./components/Screens/RenderScreens";

import { useDispatch, useSelector } from "react-redux";

import Loader from "../../components/Loader";

import {
  fetchHouseholdByUserId,
  setHousehold,
} from "../../state/slices/householdSlice";

import Intake from "./components/Intake/IntakeScreen";
import { fetchShelterById, setShelter } from "../../state/slices/shelterSlice";
import { useAppDispatch } from "../../state/store";

import HouseholdAPI from "../../api/household";
import ShelterAPI from "../../api/shelter";

export default function GuestScreen() {
  let dispatch = useDispatch();

  const { height } = useWindowDimensions();

  let { currentUser } = useSelector((state: any) => state.user);

  let { fetchInProgress, household, members } = useSelector(
    (state: any) => state.household
  );

  let [currentScreen, setCurrentScreen] = useState("profile");

  const fetchData = async () => {
    try {
      let household = await HouseholdAPI.fetchHouseholdByUserId(
        currentUser._id
      );
      let shelter = await ShelterAPI.fetchShelterById(
        household.household.shelter
      );
      // let shelter = await ShelterAPI.fetchShelterById()
    } catch (error) {
      alert("error");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  let props = {
    currentScreen,
    setCurrentScreen,
    household,
    members,
  };

  if (fetchInProgress) {
    return <Loader />;
  }

  if (household.status === "start") {
    return <Intake {...props} />;
  }

  return (
    <View style={{ height: "100%" }}>
      <RenderScreens {...props} />
      <Navigation {...props} />
    </View>
  );
}
