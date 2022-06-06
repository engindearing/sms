import "react-native-gesture-handler";

import styled from "styled-components/native";

import React from "react";

import { Card } from "native-base";

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
} from "./Forms";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const index = () => {
  let Stack = createNativeStackNavigator();

  return (
    <Wrapper>
      <FormContainer>
        <Card
          style={{
            padding: 0,
            minHeight: 590,
          }}
        >
          <Stack.Navigator initialRouteName="Navigation">
            <Stack.Screen name="Profile" component={Navigation} />

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
  width: 30%;

  ${(props) => props.theme.isLaptop && "width: 50%;"}

  ${(props) => props.theme.isTablet && "width: 95%;"}

  ${(props) => props.theme.isMobileL && "width: 100%;"}
`;

const Wrapper = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  ${(props) => !props.theme.isMobileL && "margin-top: 30;"}
`;
