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

export default function Belongings() {
  return (
    <View
      style={{
        width: "100%",
      }}
    >
      <Spacer />

      <Text fontSize={"3xl"} fontWeight={"bold"}>
        Night Shelter Expectations:
      </Text>

      <Spacer />

      <View>
        <Text fontSize={"xl"} fontWeight={"bold"}>
          {" "}
          Everyone sleeps on mats on the floor, so we need to keep the floors in
          the shelter as clean and bug-free as possible. So we do NOT allow:
        </Text>

        <Spacer />

        <Unorderedlist>
          <Text fontSize={"lg"} style={{ marginBottom: 5 }}>
            {" "}
            Personal bedding or pillows, except 4x4 blanket for child 12 and
            under
          </Text>
        </Unorderedlist>

        <Unorderedlist>
          <Text fontSize={"lg"} style={{ marginBottom: 5 }}>
            {" "}
            Food or drink, except baby food or bottled water
          </Text>
        </Unorderedlist>

        <Unorderedlist>
          <Text fontSize={"lg"} style={{ marginBottom: 5 }}>
            {" "}
            Strollers
          </Text>
        </Unorderedlist>
      </View>

      <Spacer />

      <View>
        <Text fontSize={"xl"} fontWeight={"bold"}>
          {" "}
          We wish to keep the Night Shelter a safe and calming space for
          families. So:
        </Text>

        <Spacer />

        <Unorderedlist>
          <Text fontSize={"lg"} style={{ marginBottom: 4 }}>
            {" "}
            There are no designated spots in night shelter.
          </Text>
        </Unorderedlist>

        <Unorderedlist>
          <Text fontSize={"lg"} style={{ marginBottom: 4 }}>
            {" "}
            Kids must always be in parents’ line of sight.
          </Text>
        </Unorderedlist>

        <Unorderedlist>
          <Text fontSize={"lg"} style={{ marginBottom: 4 }}>
            {" "}
            If using the smoking area, children must accompany parents.
          </Text>
        </Unorderedlist>

        <Unorderedlist>
          <Text fontSize={"lg"} style={{ marginBottom: 4 }}>
            Cry room is reserved for upset children during the night to use
            until calm.
          </Text>
        </Unorderedlist>

        <Unorderedlist>
          <Text fontSize={"lg"} style={{ marginBottom: 4 }}>
            Respite room is reserved for special accommodations that will
            require Dr written note
          </Text>
        </Unorderedlist>

        <Unorderedlist>
          <Text fontSize={"lg"} style={{ marginBottom: 4 }}>
            All guests 16 and older are expected to help clean shelter in
            morning.
          </Text>
        </Unorderedlist>

        <Unorderedlist>
          <Text fontSize={"lg"} style={{ marginBottom: 4 }}>
            Please help children under 10 use the restroom to help keep restroom
            clean
          </Text>
        </Unorderedlist>

        <Unorderedlist>
          <Text fontSize={"lg"} style={{ marginBottom: 4 }}>
            Yelling, screaming, cursing, and spanking are not acceptable forms
            of discipline at Open Doors and may result in suspension from the
            shelter and/or be reported to Child Services
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
