import { View } from "react-native";
import React from "react";
import { Text } from "native-base";

import styled from "styled-components/native";

export default function ShelterSchedule() {
  return (
    <View>
      <Text fontSize={"3xl"} fontWeight="bold">
        Shelter Schedule
      </Text>

      <Spacer />

      <View>
        <Text fontWeight={"bold"} fontSize="xl">
          6:00 am
        </Text>

        <Text fontSize={"lg"}>
          Wake up. Start cleaning and putting away mats, pillows and blankets.
        </Text>
      </View>

      <Spacer />

      <View>
        <Text fontWeight={"bold"} fontSize="xl">
          6:45-7:00 am
        </Text>

        <Text fontSize={"lg"}>
          Have all bedding and mats put back in the appropriate places, and be
          out of the warming shelter/Night Shelter.
        </Text>
      </View>

      <Spacer />

      <View>
        <Text fontWeight={"bold"} fontSize="xl">
          7:00 am
        </Text>

        <Text fontSize={"lg"}>Sign-in, breakfast and daily chores</Text>
      </View>

      <Spacer />

      <View>
        <Text fontWeight={"bold"} fontSize="xl">
          3:00-6:00 pm
        </Text>

        <Text fontSize={"lg"}>Recommended dinner time</Text>
      </View>

      <Spacer />

      <View>
        <Text fontWeight={"bold"} fontSize="xl">
          5:00 pm
        </Text>

        <Text fontSize={"lg"}>Nightly check-in. Turn in Daily Plan</Text>
      </View>

      <Spacer />

      <View>
        <Text fontWeight={"bold"} fontSize="xl">
          6:00-7:00 pm
        </Text>

        <Text fontSize={"lg"}>Kitchen closes. Chore Check-in at 6pm</Text>
      </View>

      <Spacer />

      <View>
        <Text fontWeight={"bold"} fontSize="xl">
          7:00 pm
        </Text>

        <Text fontSize={"lg"}>
          Night Shelter Check-in and house meeting/announcements
        </Text>
      </View>

      <Spacer />

      <View>
        <Text fontWeight={"bold"} fontSize="xl">
          8:00 pm
        </Text>

        <Text fontSize={"lg"}>
          Night Shelter Doors Locked. If you leave after anytime between 8:00pm
          and 6am, you may not re-enter the shelter until 7am.
        </Text>
      </View>

      <Spacer />

      <View>
        <Text fontWeight={"bold"} fontSize="xl">
          9:00 pm
        </Text>

        <Text fontSize={"lg"}>
          Lights out, shelter quiet, headphones please, Device lights dimmed
        </Text>
      </View>

      <Spacer />

      <View>
        <Text fontWeight={"bold"} fontSize="xl">
          8:00pm - 6:00 am
        </Text>

        <Text fontSize={"lg"}>
          Smoking Area/Outside, kitchen area and walk-in cooler area is closed
        </Text>
      </View>

      <Spacer />

      <Text fontWeight={"bold"} fontSize="lg">
        To be considerate to those sleeping around you, please do not get up and
        move around once lights are off, since this could disturb other sleeping
        guests. If you do need to get up early to go to work or get your kids to
        school, please ask a supervisor on how to put away your bedding.
      </Text>
    </View>
  );
}

const Spacer = styled.View`
  margin-top: 10;

  margin-bottom: 10;
`;
