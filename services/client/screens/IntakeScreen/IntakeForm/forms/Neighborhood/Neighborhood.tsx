import { StyleSheet, View } from "react-native";
import React from "react";
import { Text } from "native-base";

import styled from "styled-components/native";
import Navigation from "../../Navigation";

export default function ClientRelease({ nextStep, prevStep }) {
  return (
    <View>
      <Text fontSize={"3xl"}>
        Notice of Neighborhood Agreement and Expectations Requirement
      </Text>

      <Spacer />

      <Text fontSize={"md"}>
        Family Promise of Spokane operates based on a set Core Values. One of
        those Core Values is to Be a Good Neighbor. Being a Good Neighbor means
        that we improve, rather than detract from the neighborhood where we are
        located. We have worked very hard as an organization to overcome the
        stigma that comes with a homeless shelter operating in a residential
        neighborhood in the Spokane community.
      </Text>

      <Spacer />

      <Text fontSize={"md"}>
        To ensure that Family Promise of Spokane continues to be a positive
        addition to our community and the Chief Garry and South Perry
        neighborhoods the following Expectations have been added to our intake
        packet. All guests residing in our shelters and satellite locations are
        expected to agree to and follow these additional expectations starting
        today. Any guest unwilling to agree to and follow these expectations
        will be unable to utilize the services provided by Family Promise of
        Spokane.
      </Text>

      <Spacer />

      <Text fontSize={"md"}>
        Please read the expectations agreement on the back of this notice and
        initial next to each one. All adults in the household must initial and
        sign this agreement.
      </Text>

      <Spacer />

      <Text fontSize={"md"}>
        If you have any questions or concerns about these expectations please
        talk to a Supervisor or fill out a complaint/appeal form.
      </Text>

      <Spacer />

      <Text fontSize={"md"}>Sincerely,</Text>
      <Spacer />
      <Text fontSize={"md"}>
        Joe Ader - Executive Director, Family Promise of Spokane
      </Text>
      <Text fontSize={"md"}>
        Serena Graves - Program Manager, Open Doors Family Shelter
      </Text>

      <Navigation prevStep={prevStep} handleSubmit={() => nextStep()} />
    </View>
  );
}

const Spacer = styled.View`
  margin-top: 2%;

  margin-bottom: 2%;
`;

