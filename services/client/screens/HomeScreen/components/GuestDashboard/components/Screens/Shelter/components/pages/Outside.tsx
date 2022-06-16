import { View } from "react-native";

import React from "react";

import { Formik, FieldArray } from "formik";

import TextInput from "../../../../../../../../../components/TextInput";

import * as Yup from "yup";

import { Text } from "native-base";

import getAge from "../../../../../../../../../utils/getAge";

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
        Outside the Shelter
      </Text>

      <Spacer />

      <View>
        <Text fontSize={"2xl"} fontWeight="bold">
          Parking Lot:
        </Text>

        <Unorderedlist>
          <Text fontSize={"lg"}>
            Hanging out in the parking lot or in cars is not permitted
          </Text>
        </Unorderedlist>

        <Unorderedlist>
          <Text fontSize={"lg"}>
            Smoking is allowed only in designated smoking area behind the
            storage container
          </Text>
        </Unorderedlist>

        <Unorderedlist>
          <Text fontSize={"lg"}>Please be respectful of our neighbors</Text>
        </Unorderedlist>

        <Unorderedlist>
          <Text fontSize={"lg"}>
            Please do not leave trash in the parking lot or clean out your car
            in the parking lot
          </Text>
        </Unorderedlist>
      </View>

      <Spacer />

      <View>
        <Text fontSize={"2xl"} fontWeight="bold">
          Storage:
        </Text>

        <Unorderedlist>
          <Text fontSize={"lg"}>
            First come, first serve. -- our lockers are fairly large (about
            3’x3’)
          </Text>
        </Unorderedlist>

        <Unorderedlist>
          <Text fontSize={"lg"}>
            Indoor lockers are also available for storage of smaller daily items
          </Text>
        </Unorderedlist>
      </View>

      <Spacer />

      <View>
        <Text fontSize={"2xl"} fontWeight="bold">
          Smoking Area
        </Text>

        <Unorderedlist>
          <Text fontSize={"lg"}>
            This is the only place on Open Doors campus where smoking is
            permitted
          </Text>
        </Unorderedlist>
      </View>

      <Spacer />

      <View>
        <Text fontSize={"2xl"} fontWeight="bold">
          Laundry and Showers:
        </Text>

        <Unorderedlist>
          <Text fontSize={"lg"}>
            Sign up to use laundry/shower services by using the sign-up sheet in
            the office
          </Text>
        </Unorderedlist>

        <Unorderedlist>
          <Text fontSize={"lg"}>
            Keep track of when your laundry needs to be moved/taken out!
          </Text>
        </Unorderedlist>

        <Unorderedlist>
          <Text fontSize={"lg"}>
            Do not leave the campus while you have laundry going
          </Text>
        </Unorderedlist>
      </View>

      <Spacer />

      <View>
        <Text fontSize={"2xl"} fontWeight="bold">
          Night Shelter:
        </Text>

        <Unorderedlist>
          <Text fontSize={"lg"}>
            Guests will share a communal sleeping space and will sleep on mats
            on the floor - there are NO designated sleeping areas. Your sleeping
            area may change each night
          </Text>
        </Unorderedlist>
      </View>
    </View>
  );
}

const Spacer = styled.View`
  margin-top: 10;

  margin-bottom: 10;
`;
