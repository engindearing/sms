import styled from "styled-components/native";

import React, { useState } from "react";

import { Text, Card } from "native-base";

import Navigation, { DrawerItem } from "./Navigation";

import Forms from "./Forms";

import useStep from "../../../../../hooks/useStep";

const index = ({ shelterId }) => {
  const { step, navigation } = useStep({
    initialStep: "Contact",
    steps: [
      { id: "Contact" },
      { id: "Household" },
      { id: "Demographics" },
      { id: "RaceEthnicity" },
      { id: "Barriers" },
      { id: "School" },
      { id: "DomesticViolence" },
      { id: "History" },
      { id: "Insurance" },
      { id: "Pets" },
      { id: "AdditionalInfo" },
    ],
  });

  const setStep = (step) => navigation.go(step);

  return (
    <Wrapper>
      <FormContainer>
        <Card
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginTop: "5%",
            padding: 0,
          }}
        >
          <Navigation step={step.id} setStep={setStep} />
          <Forms step={step} />
        </Card>
      </FormContainer>
    </Wrapper>
  );
};

export default index;

const FormContainer = styled.View`
  width: 50%;

  ${(props) => props.theme.isLaptop && "width: 50%;"}

  ${(props) => props.theme.isTablet && "width: 95%;"}

  ${(props) => props.theme.isMobileL && "width: 100%;"}
`;

const Wrapper = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
