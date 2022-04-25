import { View, Text, Image } from "react-native";

import React from "react";

import styled from "styled-components/native";

import browsing from "../../../../../assets/browsing.png";
import home from "../../../../../assets/home.png";
import starts from "../../../../../assets/starts.png";

import { Button } from "react-native-elements";

const index = ({ setCurrentScreen }) => {
  return (
    <View>
      <Container>
          <Button onPress={() => setCurrentScreen('intake')} style={{marginBottom: '1rem'}} title={'Register A New Family'} ></Button>
          <Button onPress={() => setCurrentScreen('beds')} style={{marginBottom: '1rem'}} title={'Bed reservations'}></Button>
          <Button onPress={() => setCurrentScreen('guests')} style={{marginBottom: '1rem'}} title={'Manage guests'}></Button>        
      </Container>
    </View>
  );
};

const Container = styled.View`
  width: 100%;

  display: flex;

  justify-content: center;

  align-items: center;

  height: 800px;
`;

const Images = styled.View`
  display: flex;
`;

export default index;
