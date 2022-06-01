import { View, Text } from "react-native";
import React, { useState } from "react";

import { List } from "react-native-paper";

import styled from "styled-components/native";

import {
  MaterialCommunityIcons,
  FontAwesome,
  MaterialIcons,
} from "@expo/vector-icons";

const index = ({ step, setStep }) => {
  const selectedStyles = {
    title: { color: "black" },
    container: { backgroundColor: "rgba(0, 97, 189, 0.30)" },
  };

  const [isOpen, setIsOpen] = useState(true);

  const toggle = () => setIsOpen(!isOpen);

  const renderText = (text) => {
    return isOpen ? text : "";
  };

  return (
    <StyledContainer>
      <List.Item
        style={step == "contact" && selectedStyles.container}
        titleStyle={step == "contact" && selectedStyles.title}
        onPress={() => setStep("contact")}
        left={() => (
          <MaterialCommunityIcons
            name="card-account-phone"
            size={24}
            color="black"
          />
        )}
        title={renderText("Contact")}
      ></List.Item>
      <List.Item
        style={step == "household" && selectedStyles.container}
        titleStyle={step == "household" && selectedStyles.title}
        onPress={() => setStep("household")}
        left={() => <MaterialIcons name="house" size={24} color="black" />}
        title={renderText("Household")}
      ></List.Item>
      <List.Item
        style={step == "demographics" && selectedStyles.container}
        titleStyle={step == "demographics" && selectedStyles.title}
        onPress={() => setStep("demographics")}
        left={() => <MaterialIcons name="person" size={24} color="black" />}
        title={renderText("Demographics")}
      ></List.Item>
      <List.Item
        style={step == "race" && selectedStyles.container}
        titleStyle={step == "race" && selectedStyles.title}
        onPress={() => setStep("race")}
        left={() => <MaterialIcons name="people" size={24} color="black" />}
        title={renderText("Race / Ethnicity")}
      ></List.Item>
      <List.Item
        style={step == "barriers" && selectedStyles.container}
        titleStyle={step == "barriers" && selectedStyles.title}
        left={() => <MaterialIcons name="warning" size={24} color="black" />}
        onPress={() => setStep("barriers")}
        title={renderText("Barriers")}
      ></List.Item>
      <List.Item
        style={step == "school" && selectedStyles.container}
        titleStyle={step == "school" && selectedStyles.title}
        onPress={() => setStep("school")}
        left={() => <MaterialIcons name="school" size={24} color="black" />}
        title={renderText("School")}
      ></List.Item>
      <List.Item
        style={step == "domesticViolence" && selectedStyles.container}
        titleStyle={step == "domesticViolence" && selectedStyles.title}
        onPress={() => setStep("domesticViolence")}
        left={() => (
          <MaterialCommunityIcons name="emoticon-sad" size={24} color="black" />
        )}
        title={renderText("Domestic Violence")}
      ></List.Item>

      <List.Item
        style={step == "history" && selectedStyles.container}
        titleStyle={step == "history" && selectedStyles.title}
        onPress={() => setStep("history")}
        left={() => (
          <MaterialCommunityIcons name="home-group" size={24} color="black" />
        )}
        title={renderText("History")}
      ></List.Item>

      <List.Item
        style={step == "insurance" && selectedStyles.container}
        titleStyle={step == "insurance" && selectedStyles.title}
        onPress={() => setStep("insurance")}
        left={() => <MaterialIcons name="group-add" size={24} color="black" />}
        title={renderText("Insurance")}
      ></List.Item>
      <List.Item
        style={step == "pets" && selectedStyles.container}
        titleStyle={step == "pets" && selectedStyles.title}
        onPress={() => setStep("pets")}
        left={() => (
          <MaterialCommunityIcons name="dog-side" size={24} color="black" />
        )}
        title={renderText("Pets")}
      ></List.Item>
      <List.Item
        style={step == "additionalInfo" && selectedStyles.container}
        titleStyle={step == "additionalInfo" && selectedStyles.title}
        onPress={() => setStep("additionalInfo")}
        left={() => (
          <MaterialCommunityIcons
            name="clipboard-list"
            size={24}
            color="black"
          />
        )}
        title={renderText("Additional Info")}
      ></List.Item>

      <List.Item
        style={{ backgroundColor: "#472d5b" }}
        onPress={toggle}
        left={() => (
          <MaterialCommunityIcons name="menu" size={24} color="white" />
        )}
      ></List.Item>
    </StyledContainer>
  );
};

const StyledContainer = styled.View`
  border: 1px solid rgba(203, 203, 203, 0.2);
`;

export default index;
