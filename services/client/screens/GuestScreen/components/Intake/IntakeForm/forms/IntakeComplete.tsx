import { View } from "react-native";
import { Text } from "native-base";

import React from "react";

import styled from "styled-components/native";

import Navigation from "../Navigation";
import { useCurrentHousehold } from "../../../../../../api/hooks";
import useUpdateHousehold from "../../../../../../api/hooks/useUpdateHousehold";

export default function IntakeComplete({ nextStep, prevStep }) {
  const {
    data: { household },
  } = useCurrentHousehold();

  const { mutate: updateHousehold } = useUpdateHousehold();

  const onIntakeComplete = async () => {
    updateHousehold({
      householdId: household._id,
      info: { status: "complete" },
    });
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
