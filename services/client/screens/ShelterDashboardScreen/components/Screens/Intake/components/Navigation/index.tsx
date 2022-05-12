import { View, Text } from "react-native";

import React from "react";

import { Button } from "react-native-elements";

import styled from "styled-components/native";

const Index = ({ nextStep, prevStep }) => {
  return (
    <View>
      <NavigationContainer>
        <Button onPress={prevStep} title={"previous"}></Button>
        <Button onPress={nextStep} title={"next"}></Button>
      </NavigationContainer>
    </View>
  );
};

const NavigationContainer = styled.View`
  width: 100%;

  display: flex;

  flex-direction: row;

  justify-content: space-between;
`;

export default Index;
