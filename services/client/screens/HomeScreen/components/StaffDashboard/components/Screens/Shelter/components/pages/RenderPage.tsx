import { View, Text } from "react-native";
import React from "react";

import {
  Inside,
  NightExpectations,
  Outside,
  Reminders,
  Resources,
  ShelterSchedule,
  Welcome,
} from "./index";

const RenderPage = ({ page }) => {
  switch (page) {
    case "welcome":
      return <Welcome />;
    case "shelterSchedule":
      return <ShelterSchedule />;

    case "nightExpectations":
      return <NightExpectations />;

    case "inside":
      return <Inside />;

    case "outside":
      return <Outside />;

    case "reminders":
      return <Reminders />;

    case "resources":
      return <Resources />;
    default:
      return <Text></Text>;
  }
};

export default RenderPage;

// const index = () => {
//     let pages = [
//       {
//         id: "welcome",
//         name: "Welcome to Open Doors",
//         color: "",
//       },

//       {
//         id: "shelterSchedule",
//         name: "Shelter Schedule",
//         color: "",
//       },

//       {
//         id: "nightExpectations",
//         name: "Night Shelter Expectations & Safety",
//         color: "",
//       },

//       {
//         id: "inside",
//         name: "Inside the Shelter",
//         color: "",
//       },

//       {
//         id: "outside",
//         name: "Outside the Shelter",
//         color: "",
//       },

//       {
//         id: "reminders",
//         name: "Important Reminders",
//         color: "",
//       },

//       {
//         id: "resources",
//         name: "Important Resources & Phone Numbers",
//         color: "",
//       },
//     ];
