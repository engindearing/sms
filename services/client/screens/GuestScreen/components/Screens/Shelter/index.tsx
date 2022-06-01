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
  const user = useSelector((state: any) => state.user.currentUser);

  let [service, setService] = React.useState(null);

  const makeReservation = async () => {
    const payload = {
      userId: user._id,
      shelterId,
      beds: service,
    };

    try {
      const token = await AsyncStorage.getItem("accessToken");

      let res = await axiosWithAuth(token).post(
        `/shelters/${shelterId}/reservations`,
        payload
      );

      alert("You have successfully checked in");
    } catch (error) {
      alert("error!");
    }
  };

  return (
    <View>
      <Container>
        <Text>Shelter</Text>
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

  height: ${(props) => props.windowHeight};
`;
