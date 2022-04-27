import { View, Text } from "react-native";

import React from "react";

import styled from "styled-components/native";

import IntakeForm from "./components/forms/IntakeForm";
import useStep from "../../../../../hooks/useStep";

import Navigation from "./components/Navigation";

const Index = () => {
  const [step, setStep, nextStep, prevStep] = useStep(0);

  const props = {
    step,
    setStep,
    nextStep,
    prevStep,
  };

  return (
    <View>
      <Container>
        {/* <FormContainer>
          <IntakeForm {...props} />
          <Navigation {...props} />
        </FormContainer> */}

        <Text>Under construction</Text>
      </Container>
    </View>
  );
};

const FormContainer = styled.View`
  background-color: lightgrey;
  margin-top: 1rem;
  min-width: 700px;

  padding: 2rem;
`;

const Container = styled.View`
  width: 100%;

  display: flex;

  height: 800px;

  justify-content: center;

  align-items: center;
`;

export default Index;
