import { StyleSheet, View } from "react-native";
import { Text } from "native-base";

import React from "react";

import styled from "styled-components/native";

import Navigation from "../Navigation";
import { updateHousehold } from "../../../../api/household";
import { useNavigation } from "@react-navigation/native";

export default function IntakeComplete({ nextStep, prevStep, formValues }) {
  const navigation = useNavigation();

  const onIntakeComplete = async () => {
    await updateHousehold(formValues._id, { status: "complete" });
    
    navigation.navigate("Guest");
  };

  return (
    <View
      style={{
        width: "100%",
      }}
    >
      <Text fontSize={"2xl"}>Finished</Text>

      <Spacer />

      <Text fontSize={"xl"}>Thank you for completing the intake packet</Text>

      <Spacer />

      <Text>
        If you would like to change a field at a later date, you may log back
        into your profile at any time to complete or edit the form.
      </Text>

      <Spacer />

      <Navigation
        prevStep={prevStep}
        handleSubmit={onIntakeComplete}
        nextStepText={"Finish"}
      />
    </View>
  );
}

const Spacer = styled.View`
  margin-top: 2%;

  margin-bottom: 2%;
`;

const Hr = styled.View`
  margin-top: 30;
  margin-bottom: 30;
  border-bottom-width: 1;
  margin-bottom: 30;

  border-color: #6960602d;
`;
