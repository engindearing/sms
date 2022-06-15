import { View, Dimensions } from "react-native";

import styled from "styled-components/native";

import React, { useState } from "react";

import { Text } from "native-base";

import { useCurrentReservation } from "../../../../../api/hooks/useReservations";

import Loader from "../../../../../components/Loader";

import CreateReservation from "./components/CreateReservation/CreateReservation";
import ReservationStatus from "./components/ReservationStatus/ReservationStatus";

const CheckIn = () => {
  const reservationQuery = useCurrentReservation();

  if (reservationQuery.isLoading) {
    return <Loader />;
  }

  if (reservationQuery.isError) {
    // #TODO: Create modal that gives the error message with a button to report the error and logout
    return <Text>{reservationQuery.error.message}</Text>;
  }

  return (
    <View>
      <Container>
        {reservationQuery.data ? <ReservationStatus /> : <CreateReservation />}
      </Container>
    </View>
  );
};

export default CheckIn;

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
