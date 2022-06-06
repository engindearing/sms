import { StyleSheet, View } from "react-native";
import React from "react";
import { Text } from "native-base";

import styled from "styled-components/native";

import Unorderedlist from "react-native-unordered-list";

export default function Welcome() {
  return (
    <View>
      <Text fontSize={"3xl"} fontWeight="bold">
        Welcome to Open Doors
      </Text>

      <Spacer />

      <Text fontSize={"md"}>
        Here at Open Doors, we seek to welcome our guests with warmth, respect,
        and compassion. As a staff, our goal is to provide a safe and caring
        space for you and your family during your stay here at Open Doors and to
        empower you as you search for a permanent housing. Please let us know
        how we can best support you in this transition.
      </Text>

      <Hr />

      <Text fontSize={"2xl"} fontWeight="bold">
        Our Core Values:
      </Text>

      <Unorderedlist>
        <Text fontSize={"md"}>Be non-judgemental</Text>
      </Unorderedlist>

      <Unorderedlist>
        <Text fontSize={"md"}>Be respectfully compassionate</Text>
      </Unorderedlist>

      <Unorderedlist>
        <Text fontSize={"md"}>Be present</Text>
      </Unorderedlist>

      <Unorderedlist>
        <Text fontSize={"md"}>Be competent</Text>
      </Unorderedlist>

      <Unorderedlist>
        <Text fontSize={"md"}>Be empowering</Text>
      </Unorderedlist>

      <Unorderedlist>
        <Text fontSize={"md"}>Be a good neighbor</Text>
      </Unorderedlist>

      <Spacer />
    </View>
  );
}

const Spacer = styled.View`
  margin-top: 5;

  margin-bottom: 5;
`;

const Hr = styled.View`
  margin-top: 15;
  margin-bottom: 30;
  border-bottom-width: 1;
  margin-bottom: 15;

  border-color: #6960602d;
`;
