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

export default function Inside() {
  return (
    <View
      style={{
        width: "100%",
      }}
    >
      <Spacer />

      <Text fontSize={"3xl"} fontWeight={"bold"}>
        Inside the Shelter
      </Text>

      <Spacer />

      <View>
        <Text fontSize={"2xl"} fontWeight="bold">
          Office:
        </Text>
        <Text fontSize={"lg"}>
          At all times, at least one Open Doors Supervisor will be at the
          shelter, along with other interns and volunteers. Please do not
          hesitate to approach them with questions or concerns -- our staff is
          here for you!
        </Text>

        <Spacer />

        <Text fontSize={"lg"}>
          You will find the daily sign-in sheet, as well as sign-ups for
          kitchen, shower/laundry services and nightly chores here at the office
        </Text>
      </View>

      <Spacer />

      <View>
        <Text fontSize={"2xl"} fontWeight="bold">
          Quiet Area:
        </Text>
        <Text fontSize={"lg"}>
          Computers: first priority for adults seeking housing, employment,
          etc., No children are allowed on the computers
        </Text>
      </View>

      <Spacer />

      <View>
        <Text fontSize={"2xl"} fontWeight="bold">
          Dining Room:
        </Text>
        <Text fontSize={"lg"}>
          Please keep this space tidy (clear dishes, wipe tables after using
          them, etc.)
        </Text>

        <Spacer />

        <Text fontSize={"lg"}>
          Check out our bulletin board for information about local resources and
          programs
        </Text>
      </View>

      <Spacer />

      <View>
        <Text fontSize={"2xl"} fontWeight="bold">
          Kitchen:
        </Text>

        <Unorderedlist>
          <Text fontSize={"lg"}>Closed for the night at 6pm</Text>
        </Unorderedlist>

        <Unorderedlist>
          <Text fontSize={"lg"}>
            Come between 4 and 5pm if you hope to cook dinner
          </Text>
        </Unorderedlist>

        <Unorderedlist>
          <Text fontSize={"lg"}>Dry Goods:</Text>

          <Unorderedlist>
            <Text fontSize={"lg"}>
              Label personal items and keep them in family bin on shelf
            </Text>
          </Unorderedlist>

          <Unorderedlist>
            <Text fontSize={"lg"}>
              Bread and other items labeled “OD” are available to all guests
            </Text>
          </Unorderedlist>
        </Unorderedlist>

        <Unorderedlist>
          <Text fontSize={"lg"}> Walk In Fridge:</Text>

          <Unorderedlist>
            <Text fontSize={"lg"}>
              Label personal items and keep them properly covered
            </Text>
          </Unorderedlist>

          <Unorderedlist>
            <Text fontSize={"lg"}>
              Open Doors food is available to all guests however do not take OD
              items and put them in your locker
            </Text>
          </Unorderedlist>
        </Unorderedlist>

        <Unorderedlist>
          <Text fontSize={"lg"}> Freezers:</Text>

          <Unorderedlist>
            <Text fontSize={"lg"}>
              Freezer in the industrial kitchen: Open Doors food is available to
              all guests - Please ask a supervisor to access this freezer -- all
              items must be labeled!
            </Text>
          </Unorderedlist>
        </Unorderedlist>
      </View>

      <Spacer />

      <View>
        <Text fontSize={"2xl"} fontWeight="bold">
          Supply Room:
        </Text>
        <Text fontSize={"lg"}>
          Extra supplies (toothbrushes, shampoo, towels, diapers, etc.) Please
          ask a staff member before taking any of these supplies
        </Text>

        <Spacer />

        <Text fontSize={"lg"}>
          Open Doors is not responsible for stolen food and food left for more
          than 24 hours unattended on the premises may be discarded. You are
          encouraged to buy a lock for your food lockers.
        </Text>
      </View>

      <Spacer />

      <View>
        <Text fontSize={"2xl"} fontWeight="bold">
          TV Area and Kids' Corner:
        </Text>
        <Spacer />
        <Text fontSize={"lg"}>Child appropriate TV only</Text>

        <Spacer />

        <Text fontSize={"lg"}>
          Kids watching TV or playing with toys must be in eyesight of a parent
          at all times
        </Text>
      </View>

      <Spacer />

      <View>
        <Text fontSize={"2xl"} fontWeight="bold">
          The Cage:
        </Text>

        <Text fontSize={"lg"}>
          All coats, backpacks and any other belongings not in outside lockers
          need to be stored in the indoor lockers
        </Text>
      </View>
    </View>
  );
}

const Spacer = styled.View`
  margin-top: 5;

  margin-bottom: 5;
`;
