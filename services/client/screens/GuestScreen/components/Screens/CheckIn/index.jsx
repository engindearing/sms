import { View, Dimensions } from "react-native";

import styled from "styled-components/native";

import React, { useState } from "react";

import { Button } from "react-native-elements";

import { Select } from "native-base";

import { Text } from "native-base";

import { useSelector } from "react-redux";
import { axiosWithAuth } from "../../../../../auth/axiosWithAuth";
import AsyncStorage from "@react-native-async-storage/async-storage";

const index = ({ shelterId }) => {
  const user = useSelector((state) => state.user.currentUser);


  return (
    <View>
      <Container>
        <Text>Check-in</Text>
      </Container>
    </View>
  );
};

export default index;

const FormContainer = styled.View`
  display: flex;
  justify-content: center;
  text-align: center;
  width: 30%;
`;

const Container = styled.View`
  width: 100%;

  display: flex;

  justify-content: center;

  align-items: center;

`;
