import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import {
  Box,
  Center,
  HStack,
  Icon,
  NativeBaseProvider,
  Text,
} from "native-base";

import React from "react";

import { Pressable } from "native-base";

import styled from "styled-components/native";

export default function Footer({ currentScreen, setCurrentScreen }) {
  const [selected, setSelected] = React.useState(1);

  return (
    <StyledContainer>
      <Box flex={1} bg="white" safeAreaTop width="100%" alignSelf="center">
        <Center flex={1}></Center>
        <HStack bg="#0063be" alignItems="center" safeAreaBottom shadow={6}>
          <Pressable
            opacity={currentScreen === "shelter" ? 1 : 0.5}
            py="3"
            flex={1}
            onPress={() => setCurrentScreen("shelter")}
            color="black"
          >
            <Center>
              <Icon
                mb="1"
                as={
                  <MaterialCommunityIcons
                    name={currentScreen === "shelter" ? "home" : "home-outline"}
                  />
                }
                color={currentScreen === "shelter" ? "#fec357" : "white"}
                size="md"
              />

              <Text
                color={currentScreen === "shelter" ? "#fec357" : "white"}
                fontSize="14"
              >
                Shelter
              </Text>
            </Center>
          </Pressable>

          <Pressable
            opacity={currentScreen === "checkIn" ? 1 : 0.5}
            py="2"
            flex={1}
            onPress={() => setCurrentScreen("checkIn")}
          >
            <Center>
              <Icon
                mb="1"
                as={
                  <MaterialCommunityIcons
                    name={currentScreen == "checkIn" ? "bed" : "bed-empty"}
                  />
                }
                color={currentScreen === "checkIn" ? "#fec357" : "white"}
                size="md"
              />
              <Text
                color={currentScreen === "checkIn" ? "#fec357" : "white"}
                fontSize="14"
              >
                Check-in
              </Text>
            </Center>
          </Pressable>

          <Pressable
            opacity={currentScreen === "profile" ? 1 : 0.5}
            py="2"
            flex={1}
            onPress={() => setCurrentScreen("profile")}
          >
            <Center>
              <Icon
                mb="1"
                as={
                  <MaterialCommunityIcons
                    name={
                      currentScreen === "profile"
                        ? "account"
                        : "account-outline"
                    }
                  />
                }
                color={currentScreen === "profile" ? "#fec357" : "white"}
                size="md"
              />
              <Text
                color={currentScreen === "profile" ? "#fec357" : "white"}
                fontSize="14"
              >
                Profile
              </Text>
            </Center>
          </Pressable>
        </HStack>
      </Box>
    </StyledContainer>
  );
}

const StyledContainer = styled.View`
  position: absolute;

  width: 100%;

  bottom: 0;
`;
