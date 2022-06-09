import "react-native-gesture-handler";

import styled from "styled-components/native";

import React from "react";

import { Button, Card } from "native-base";

import Navigation from "./Navigation";

import {
  Barriers,
  Contact,
  Demographics,
  DomesticViolence,
  Household,
  Pets,
  History,
  Insurance,
  AdditionalInfo,
  School,
  RaceEthnicity,
  Shelters,
} from "./Forms";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Platform, useWindowDimensions } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const index = () => {
  let Stack = createNativeStackNavigator();

  const { width, height } = useWindowDimensions();

  return (
    <Wrapper>
      <FormContainer>
        <Card
          style={{
            padding: 0,
            minHeight: width > 1000 ? 675 : height - 69,
          }}
        >
          <Stack.Navigator initialRouteName="Navigation">
            <Stack.Screen name="Profile" component={Navigation} />
            <Stack.Screen name="Shelter" component={Shelters} />
            <Stack.Screen name="Contact" component={Contact} />
            <Stack.Screen name="Household" component={Household} />
            <Stack.Screen name="Demographics" component={Demographics} />
            <Stack.Screen name="Pets" component={Pets} />
            <Stack.Screen name="Barriers" component={Barriers} />
            <Stack.Screen
              name="DomesticViolence"
              component={DomesticViolence}
            />
            <Stack.Screen name="History" component={History} />
            <Stack.Screen name="Insurance" component={Insurance} />
            <Stack.Screen name="AdditionalInfo" component={AdditionalInfo} />
            <Stack.Screen name="School" component={School} />
            <Stack.Screen name="RaceEthnicity" component={RaceEthnicity} />
          </Stack.Navigator>
        </Card>
      </FormContainer>
    </Wrapper>
  );
};

export default index;

const FormContainer = styled.View`
  width: 40%;

  ${(props) => props.theme.isLaptop && "width: 50%;"}

  ${(props) => props.theme.isTablet && "width: 100%;"}

  ${(props) => !props.theme.isTablet && "margin-top: 50;"}
`;

const Wrapper = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
