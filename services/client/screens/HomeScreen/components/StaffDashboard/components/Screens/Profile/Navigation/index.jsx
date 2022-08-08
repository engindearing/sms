import React, { useState } from "react";

import { List } from "react-native-paper";

import styled from "styled-components/native";

import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { Button, ScrollView } from "native-base";
import { useNavigation, useRoute } from "@react-navigation/native";
import { auth } from "../../../../../../../../firebase";

const Index = ({ step = "Contact" }) => {
  const navigation = useNavigation();

  let route = useRoute();

  const selectedStyles = {
    title: { color: "black" },
    container: { backgroundColor: "rgba(0, 97, 189, 0.30)" },
  };

  const [isOpen, setIsOpen] = useState(true);

  const renderText = (text) => {
    return isOpen ? text : "";
  };

  return (
    <ScrollView>
      <List.Item
        style={route.name == "Shelter" && selectedStyles.container}
        titleStyle={route.name == "Shelter" && selectedStyles.title}
        onPress={() => navigation.navigate("Shelter")}
        left={() => (
          <MaterialCommunityIcons name="warehouse" size={24} color="black" />
        )}
        title={renderText("Shelter")}
      ></List.Item>
      <List.Item
        style={route.name == "Contact" && selectedStyles.container}
        titleStyle={route.name == "Contact" && selectedStyles.title}
        onPress={() => navigation.navigate("Contact")}
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
        style={route.name == "Household" && selectedStyles.container}
        titleStyle={route.name == "housHouseholdehold" && selectedStyles.title}
        onPress={() => navigation.navigate("Household")}
        left={() => <MaterialIcons name="house" size={24} color="black" />}
        title={renderText("Household")}
      ></List.Item>
      <List.Item
        style={step == "Demographics" && selectedStyles.container}
        titleStyle={step == "Demographics" && selectedStyles.title}
        onPress={() => navigation.navigate("Demographics")}
        left={() => <MaterialIcons name="person" size={24} color="black" />}
        title={renderText("Demographics")}
      ></List.Item>
      <List.Item
        style={route.name == "RaceEthnicity" && selectedStyles.container}
        titleStyle={route.name == "RaceEthnicity" && selectedStyles.title}
        onPress={() => navigation.navigate("RaceEthnicity")}
        left={() => <MaterialIcons name="people" size={24} color="black" />}
        title={renderText("Race / Ethnicity")}
      ></List.Item>
      <List.Item
        style={route.name == "Barriers" && selectedStyles.container}
        titleStyle={route.name == "Barriers" && selectedStyles.title}
        left={() => <MaterialIcons name="warning" size={24} color="black" />}
        onPress={() => navigation.navigate("Barriers")}
        title={renderText("Barriers")}
      ></List.Item>
      <List.Item
        style={route.name == "School" && selectedStyles.container}
        titleStyle={route.name == "School" && selectedStyles.title}
        onPress={() => navigation.navigate("School")}
        left={() => <MaterialIcons name="school" size={24} color="black" />}
        title={renderText("School")}
      ></List.Item>
      <List.Item
        style={route.name == "DomesticViolence" && selectedStyles.container}
        titleStyle={route.name == "DomesticViolence" && selectedStyles.title}
        onPress={() => navigation.navigate("DomesticViolence")}
        left={() => (
          <MaterialCommunityIcons name="emoticon-sad" size={24} color="black" />
        )}
        title={renderText("Domestic Violence")}
      ></List.Item>

      <List.Item
        style={route.name == "History" && selectedStyles.container}
        titleStyle={route.name == "History" && selectedStyles.title}
        onPress={() => navigation.navigate("History")}
        left={() => (
          <MaterialCommunityIcons name="home-group" size={24} color="black" />
        )}
        title={renderText("History")}
      ></List.Item>

      <List.Item
        style={route.name == "Insurance" && selectedStyles.container}
        titleStyle={route.name == "Insurance" && selectedStyles.title}
        onPress={() => navigation.navigate("Insurance")}
        left={() => <MaterialIcons name="group-add" size={24} color="black" />}
        title={renderText("Insurance")}
      ></List.Item>

      <List.Item
        style={route.name == "Pets" && selectedStyles.container}
        titleStyle={route.name == "Pets" && selectedStyles.title}
        onPress={() => navigation.navigate("Pets")}
        left={() => (
          <MaterialCommunityIcons name="dog-side" size={24} color="black" />
        )}
        title={renderText("Pets")}
      ></List.Item>
      <List.Item
        style={route.name == "AdditionalInfo" && selectedStyles.container}
        titleStyle={route.name == "AdditionalInfo" && selectedStyles.title}
        onPress={() => navigation.navigate("AdditionalInfo")}
        left={() => (
          <MaterialCommunityIcons
            name="clipboard-list"
            size={24}
            color="black"
          />
        )}
        title={renderText("Additional Info")}
      ></List.Item>

      <Button
        onPress={() => auth.signOut()}
        variant={"subtle"}
        colorScheme='violet'
      >
        Sign out
      </Button>
    </ScrollView>
  );
};

export default Index;
