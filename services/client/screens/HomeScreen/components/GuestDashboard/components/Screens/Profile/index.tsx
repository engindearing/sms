import "react-native-gesture-handler";

import styled from "styled-components/native";

import React from "react";

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

import { useWindowDimensions, View } from "react-native";

const index = () => {
  let Stack = createNativeStackNavigator();

  const { width, height } = useWindowDimensions();

  return (
    <Wrapper>
      <FormContainer>
        <View
          style={{
            backgroundColor: "white",
            minHeight: width > 1000 ? 675 : height - 110,
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
        </View>
      </FormContainer>
    </Wrapper>
  );
};

export default index;

const FormContainer = styled.View`
  height: 100%;

  width: 40%;

  ${(props) => props.theme.isLaptop && "width: 50%;"}

  ${(props) => props.theme.isTablet && "width: 100%;"}

  ${(props) => !props.theme.isTablet && "margin-top: 50;"}
`;

const Wrapper = styled.View`
  height: 100%;
  display: flex;

  justify-content: center;

  align-items: center;

  width: 100%;
`;
