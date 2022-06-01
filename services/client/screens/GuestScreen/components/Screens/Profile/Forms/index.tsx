import { View, Text } from "react-native";

import React from "react";

import {
  DomesticViolence,
  Insurance,
  Barriers,
  History,
  Pets,
  School,
  RaceEthnicity,
  Demographics,
  Household,
  Contact,
  AdditionalInfo,
} from "./components";

const index = ({ step }) => {
  return (
    <View>
      <RenderForm step={step} />
    </View>
  );
};

const RenderForm = ({ step }) => {
  switch (step.id) {
    case "Contact":
      return <Contact />;
    case "Household":
      return <Household />;
    case "Demographics":
      return <Demographics />;
    case "RaceEthnicity":
      return <RaceEthnicity />;
    case "Barriers":
      return <Barriers />;
    case "School":
      return <School />;
    case "DomesticViolence":
      return <DomesticViolence />;
    case "History":
      return <History />;
    case "Insurance":
      return <Insurance />;
    case "Pets":
      return <Pets />;
    case "AdditionalInfo":
      return <AdditionalInfo />;
    default:
      return <Text>Invalid</Text>;
  }
};

export default index;
