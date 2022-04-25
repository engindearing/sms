import { View } from "react-native";

import React from "react";

import styled from "styled-components/native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import { Text } from "native-base";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const list = [
  {
    id: 1,
    hoh: "John Mayer",
    beds: 2,
  },
  {
    id: 2,

    hoh: "John Mayer",
    beds: 2,
  },
  {
    id: 3,

    hoh: "John Mayer",
    beds: 2,
  },
  {
    id: 4,

    hoh: "John Mayer",
    beds: 2,
  },

  {
    id: 5,

    hoh: "John Mayer",
    beds: 2,
  },
  {
    id: 6,

    hoh: "John Mayer",
    beds: 2,
  },
];

const Index = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Container>
        <Reservations>
          {list.map((item, i) => (
            <ListItem
              navigation={navigation}
              id={item.id}
              hoh={item.hoh}
              beds={item.beds}
            />
          ))}
        </Reservations>
      </Container>
    </View>
  );
};

const ListItem = ({ hoh, beds, navigation, id }) => {
  const redirectToReservationDetails = () =>
    navigation.navigate("Reservation", { reservationId: id });

  return (
    <TouchableOpacity onPress={redirectToReservationDetails}>
      <ListItemContainer>
        <Text>{hoh + " / " + beds + " beds"}</Text>
        <MaterialCommunityIcons size={35} name="chevron-right" />
      </ListItemContainer>
    </TouchableOpacity>
  );
};



const ListItemContainer = styled.View`
  display: flex;

  cursor: pointer;

  flex-direction: row;

  align-items: center;

  width: 100%;
  border: 1px solid lightgrey;
  justify-content: space-between;

  padding: 1rem;
`;

const Container = styled.View`
  width: 100%;

  display: flex;

  justify-content: center;

  align-items: center;
`;

const Reservations = styled.View`
  margin-top: 3rem;

  width: 40%;
`;

export default Index;
