import { StyleSheet, View } from "react-native";
import React from "react";
import { Button, Text } from "native-base";

import styled from "styled-components/native";

export default function ClientRelease({ nextStep }) {
  return (
    <View>
      <Text fontSize={"3xl"}>
        Shelter Schedule, Expectations and Safety Agreement
      </Text>

      <Spacer />

      <Text fontSize={"2xl"}>Shelter Schedule:</Text>

      <Spacer />

      <View>
        <Text fontWeight={"bold"} fontSize="lg">
          6:00 am
        </Text>

        <Spacer />

        <Text fontSize={"md"}>
          Wake up. Start cleaning and putting away mats, pillows and blankets.
        </Text>
      </View>

      <Spacer />

      <View>
        <Text fontWeight={"bold"} fontSize="lg">
          6:45-7:00 am
        </Text>

        <Spacer />

        <Text fontSize={"md"}>
          Have all bedding and mats put back in the appropriate places, and be
          out of the warming shelter/Night Shelter.
        </Text>
      </View>

      <Spacer />

      <View>
        <Text fontWeight={"bold"} fontSize="lg">
          7:00 am
        </Text>

        <Spacer />

        <Text fontSize={"md"}>Sign-in, breakfast and daily chores</Text>
      </View>

      <Spacer />

      <View>
        <Text fontWeight={"bold"} fontSize="lg">
          3:00-6:00 pm
        </Text>

        <Spacer />

        <Text fontSize={"md"}>Recommended dinner time</Text>
      </View>

      <Spacer />

      <View>
        <Text fontWeight={"bold"} fontSize="lg">
          5:00 pm
        </Text>

        <Spacer />

        <Text fontSize={"md"}>Nightly check-in. Turn in Daily Plan</Text>
      </View>

      <Spacer />

      <View>
        <Text fontWeight={"bold"} fontSize="lg">
          6:00-7:00 pm
        </Text>

        <Spacer />

        <Text fontSize={"md"}>Kitchen closes. Chore Check-in at 6pm</Text>
      </View>

      <Spacer />

      <View>
        <Text fontWeight={"bold"} fontSize="lg">
          7:00 pm
        </Text>

        <Spacer />

        <Text fontSize={"md"}>
          Night Shelter Check-in and house meeting/announcements
        </Text>
      </View>

      <Spacer />

      <View>
        <Text fontWeight={"bold"} fontSize="lg">
          8:00 pm
        </Text>

        <Spacer />

        <Text fontSize={"md"}>
          Night Shelter Doors Locked. If you leave after anytime between 8:00pm
          and 6am, you may not re-enter the shelter until 7am.
        </Text>
      </View>

      <Spacer />

      <View>
        <Text fontWeight={"bold"} fontSize="lg">
          9:00 pm
        </Text>

        <Spacer />

        <Text fontSize={"md"}>
          Lights out, shelter quiet, headphones please, Device lights dimmed
        </Text>
      </View>

      <Spacer />

      <View>
        <Text fontWeight={"bold"} fontSize="lg">
          8:00pm - 6:00 am
        </Text>

        <Spacer />

        <Text fontSize={"md"}>
          Smoking Area/Outside, kitchen area and walk-in cooler area is closed
        </Text>
      </View>

      <Spacer />

      <Text fontWeight={"bold"} fontSize="md">
        To be considerate to those sleeping around you, please do not get up and
        move around once lights are off, since this could disturb other sleeping
        guests. If you do need to get up early to go to work or get your kids to
        school, please ask a supervisor on how to put away your bedding.
      </Text>

      <Button style={{ marginTop: "5%" }} onPress={nextStep}>
        Next
      </Button>
    </View>
  );
}

const Spacer = styled.View`
  margin-top: 10;

  margin-bottom: 10;
`;

const styles = StyleSheet.create({});
