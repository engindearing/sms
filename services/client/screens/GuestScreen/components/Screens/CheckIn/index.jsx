import { View, Dimensions } from "react-native";

import styled from "styled-components/native";

import React, { useState } from "react";

import { Button } from "react-native-elements";

import { Select } from "native-base";

import { Text } from "native-base";

const index = () => {
  const windowHeight = Dimensions.get("window").windowHeight;

  let [service, setService] = React.useState(null);

  const makeReservation = () => {
    alert(service);

    setService(null);
  };

  return (
    <View>
      <Container windowHeight={windowHeight}>
        <FormContainer>
          <Text fontSize={'9xl'}>30 / 60</Text>
          <Select
            selectedValue={service}
            accessibilityLabel="Number of beds"
            placeholder="Number of beds"
            minHeight={50}
            _selectedItem={{
              bg: "teal.600",
            }}
            mt={1}
            onValueChange={(itemValue) => setService(itemValue)}
          >
            <Select.Item label="1" value="1" />
            <Select.Item label="2" value="2" />
            <Select.Item label="3" value="3" />
            <Select.Item label="4" value="4" />
            <Select.Item label="5" value="5" />
            <Select.Item label="6" value="6" />
            <Select.Item label="7" value="7" />
            <Select.Item label="8" value="8" />
            <Select.Item label="9" value="9" />
            <Select.Item label="10" value="10" />
          </Select>

          <Button
            onPress={makeReservation}
            disabled={!service}
            title="Check-in"
          ></Button>
        </FormContainer>
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

  height: 800px;
`;

const Container = styled.View`
  width: 100%;

  display: flex;

  justify-content: center;

  align-items: center;

  height: ${(props) => props.windowHeight};
`;
