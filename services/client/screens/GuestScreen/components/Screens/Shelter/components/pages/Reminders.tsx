import { View } from "react-native";

import React from "react";

import { Formik, FieldArray } from "formik";

import TextInput from "../../../../../../../components/TextInput";

import * as Yup from "yup";

import { Text } from "native-base";

import getAge from "../../../../../../../utils/getAge";

import styled from "styled-components/native";

import Unorderedlist from "react-native-unordered-list";

import { useSelector } from "react-redux";

export default function Outside() {
  return (
    <View
      style={{
        width: "100%",
      }}
    >
      <Spacer />

      <Text fontSize={"3xl"} fontWeight={"bold"}>
        Important Reminders
      </Text>

      <Spacer />

      <Text fontSize={"2xl"} fontWeight="bold" marginBottom={3}>
        Shelter Safety Protocol:
      </Text>

      <Unorderedlist>
        <Text fontSize={"lg"} fontWeight="bold">
          If you hear a staff member or volunteer blow a whistle, there is a
          safety emergency in the shelter
        </Text>
      </Unorderedlist>

      <Spacer />

      <Unorderedlist>
        <Text fontSize={"lg"}>
          If this occurs, all guests must respond by taking the following steps:
        </Text>

        <Unorderedlist>
          <Text fontSize={"lg"}>1. Find your family members</Text>
        </Unorderedlist>

        <Unorderedlist>
          <Text fontSize={"lg"}>
            2. Clear the area: stand against the wall or move to a safe place
            away from the situation
          </Text>
        </Unorderedlist>
      </Unorderedlist>

      <Spacer />

      <Unorderedlist>
        <Text fontSize={"lg"}>
          <Text fontWeight={"bold"}>DO NOT</Text> INVOLVE YOURSELF IN THE
          SITUATION UNLESS ASKED TO DO SO BY A STAFF MEMBER. FOLLOW ALL STAFF
          INSTRUCTIONS IMMEDIATELY.
        </Text>
      </Unorderedlist>

      <Hr />

      <Text fontSize={"2xl"} fontWeight="bold" marginBottom={3}>
        Check-In Times:
      </Text>

      <Text fontSize={"xl"} fontWeight="bold" marginBottom={3}>
        6pm Night Shelter check-in:
      </Text>

      <Unorderedlist>
        <Text fontSize={"lg"}>
          Your family must be signed in and present at the Shelter at this time
          to be eligible for housing in the Night Shelter - Turn in your
          completed daily goal sheet to the Supervisor.
        </Text>
      </Unorderedlist>

      <Spacer />

      <Text fontSize={"xl"} fontWeight="bold" marginBottom={3}>
        6pm Chore check-in:
      </Text>

      <Unorderedlist>
        <Text fontSize={"lg"}>
          We ask that all guests who plan to use our Night Shelter services sign
          up for an evening chore and are present on time to complete it
        </Text>
      </Unorderedlist>

      <Spacer />

      <Text fontSize={"lg"} fontWeight="bold">
        *If your family is unable to arrive on time for check-in for a medical
        or work-related reason, you must provide some form of documented proof
        upon arrival
      </Text>
    </View>
  );
}

const Spacer = styled.View`
  margin-top: 10;

  margin-bottom: 10;
`;


const Hr = styled.View`
  margin-top: 15;
  margin-bottom: 30;
  border-bottom-width: 1;
  margin-bottom: 15;

  border-color: #6960602d;
`;
