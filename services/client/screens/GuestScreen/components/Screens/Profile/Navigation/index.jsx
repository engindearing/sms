import React, { useState } from "react";

import { List } from "react-native-paper";

import styled from "styled-components/native";

import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

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
        style={step == "Contact" && selectedStyles.container}
        titleStyle={step == "Contact" && selectedStyles.title}
        onPress={() => setStep("Contact")}
        left={() => (
          <MaterialCommunityIcons
            name="card-account-phone"
            size={28}
            color="black"
          />
        )}
        title={renderText("Contact")}
      ></List.Item>
      <List.Item
        style={step == "Household" && selectedStyles.container}
        titleStyle={step == "housHouseholdehold" && selectedStyles.title}
        onPress={() => setStep("Household")}
        left={() => <MaterialIcons name="house" size={28} color="black" />}
        title={renderText("Household")}
      ></List.Item>
      <List.Item
        style={step == "Demographics" && selectedStyles.container}
        titleStyle={step == "Demographics" && selectedStyles.title}
        onPress={() => setStep("Demographics")}
        left={() => <MaterialIcons name="person" size={28} color="black" />}
        title={renderText("Demographics")}
      ></List.Item>
      <List.Item
        style={step == "RaceEthnicity" && selectedStyles.container}
        titleStyle={step == "RaceEthnicity" && selectedStyles.title}
        onPress={() => setStep("RaceEthnicity")}
        left={() => <MaterialIcons name="people" size={28} color="black" />}
        title={renderText("Race / Ethnicity")}
      ></List.Item>
      <List.Item
        style={step == "Barriers" && selectedStyles.container}
        titleStyle={step == "Barriers" && selectedStyles.title}
        left={() => <MaterialIcons name="warning" size={28} color="black" />}
        onPress={() => setStep("Barriers")}
        title={renderText("Barriers")}
      ></List.Item>
      <List.Item
        style={step == "School" && selectedStyles.container}
        titleStyle={step == "School" && selectedStyles.title}
        onPress={() => setStep("School")}
        left={() => <MaterialIcons name="school" size={28} color="black" />}
        title={renderText("School")}
      ></List.Item>
      <List.Item
        style={step == "DomesticViolence" && selectedStyles.container}
        titleStyle={step == "DomesticViolence" && selectedStyles.title}
        onPress={() => setStep("DomesticViolence")}
        left={() => (
          <MaterialCommunityIcons name="emoticon-sad" size={28} color="black" />
        )}
        title={renderText("Domestic Violence")}
      ></List.Item>

      <List.Item
        style={step == "History" && selectedStyles.container}
        titleStyle={step == "History" && selectedStyles.title}
        onPress={() => setStep("History")}
        left={() => (
          <MaterialCommunityIcons name="home-group" size={28} color="black" />
        )}
        title={renderText("History")}
      ></List.Item>

      <List.Item
        style={step == "Insurance" && selectedStyles.container}
        titleStyle={step == "Insurance" && selectedStyles.title}
        onPress={() => setStep("Insurance")}
        left={() => <MaterialIcons name="group-add" size={28} color="black" />}
        title={renderText("Insurance")}
      ></List.Item>
      <List.Item
        style={step == "Pets" && selectedStyles.container}
        titleStyle={step == "Pets" && selectedStyles.title}
        onPress={() => setStep("Pets")}
        left={() => (
          <MaterialCommunityIcons name="dog-side" size={28} color="black" />
        )}
        title={renderText("Pets")}
      ></List.Item>
      <List.Item
        style={step == "AdditionalInfo" && selectedStyles.container}
        titleStyle={step == "AdditionalInfo" && selectedStyles.title}
        onPress={() => setStep("AdditionalInfo")}
        left={() => (
          <MaterialCommunityIcons
            name="clipboard-list"
            size={28}
            color="black"
          />
        )}
        title={renderText("Additional Info")}
      ></List.Item>

      <List.Item
        style={{ backgroundColor: "#472d5b" }}
        onPress={toggle}
        left={() => (
          <MaterialCommunityIcons name="menu" size={28} color="white" />
        )}
      ></List.Item>
    </StyledContainer>
  );
};

const StyledContainer = styled.View`
  border: 1px solid rgba(203, 203, 203, 0.2);
`;

export default index;
