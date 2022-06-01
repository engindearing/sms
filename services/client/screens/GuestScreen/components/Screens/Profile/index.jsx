import { View } from "react-native";

import styled from "styled-components/native";

import React, { useState } from "react";

import { Text, Card } from "native-base";

import HouseholdProfile from "../../../../../components/HouseholdProfile";

import Navigation, { DrawerItem } from "./Navigation";

const index = ({ shelterId }) => {
  let [step, setStep] = useState("contact");

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
          <Navigation step={step} setStep={setStep} />
          <Text>Uhh hello lol</Text>
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
