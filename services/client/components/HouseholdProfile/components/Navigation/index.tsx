import { View, Text } from "react-native";
import React from "react";

import { List } from "react-native-paper";

import styled from "styled-components/native";

const index = () => {
  return (
    <StyledContainer>
      <List.Item title="Contact"></List.Item>
      <List.Item title="Contact"></List.Item>
      <List.Item title="Contact"></List.Item>
      <List.Item title="Contact"></List.Item>
      <List.Item title="Contact"></List.Item>
      <List.Item title="Contact"></List.Item>
      <List.Item title="Contact"></List.Item>
      <List.Item title="Contact"></List.Item>
      <List.Item title="Contact"></List.Item>
      <List.Item title="Contact"></List.Item>
      <List.Item title="Contact"></List.Item>
    </StyledContainer>
  );
};

const StyledContainer = styled.View`
  background-color: #0000002a;
`;

export default index;
