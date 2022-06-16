import React from "react";

import styled from "styled-components/native";

import { Button, Text, View } from "native-base";

import { useCurrentReservation } from "../../../../../../../api/hooks/useReservations";

import Loader from "../../../../../../../components/Loader";

import {
  BedsAvailable,
  CreateReservation,
  ReservationStatus,
} from "./components";

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
    <Wrapper>
      <Container>
        <BedsAvailable />
        {reservationQuery.data ? <ReservationStatus /> : <CreateReservation />}
      </Container>
    </Wrapper>
  );
};

export default CheckIn;

const Wrapper = styled.View`
  width: 100%;

  height: 100%;

  display: flex;

  justify-content: center;

  align-items: center;
`;

const Container = styled.View``;
