import { View, Text } from "react-native";
import React from "react";

import Navigation from "./components/Navigation";

import styled from "styled-components/native";

const Index = () => {
  return (
    <StyledContainer>
      <Text>Household</Text>
    </StyledContainer>
  );
};

export default Index;

const StyledContainer = styled.View`
  width: 100%;

  display: flex;

  flex-direction: row;

  justify-content: center;
`;
