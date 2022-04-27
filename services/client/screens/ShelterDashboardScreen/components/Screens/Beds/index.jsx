import { View } from "react-native";

import React, { useEffect, useState } from "react";

import styled from "styled-components/native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import { Text } from "native-base";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

import AsyncStorage from "@react-native-async-storage/async-storage";

import { axiosWithAuth } from "../../../../../auth/axiosWithAuth";

const list = [];

const Index = ({ shelterId }) => {
  const navigation = useNavigation();

  const [reservations, setReservations] = useState([]);

  const [loading, setLoading] = useState(false);

  const getReservations = async () => {
    setLoading(true);
    try {
      const token = await AsyncStorage.getItem("accessToken");

      let res = await axiosWithAuth(token).get(
        `/shelters/${shelterId}/reservations`
      );

      setReservations(res.data.reservations);
    } catch (error) {
      alert("error!");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getReservations();
  }, []);

  useEffect(() => {
    console.log(reservations);
  }, [reservations]);

  if (loading) {
    return <View>Loading</View>;
  }

  return (
    <View>
      <Container>
        <Reservations>
          {reservations.map((item, i) => (
            <ListItem
              setReservations={setReservations}
              verified={item.verified}
              navigation={navigation}
              id={item._id}
              hoh={item?.userId?.firstName + " " + item?.userId?.lastName}
              beds={item.beds}
            />
          ))}
        </Reservations>
      </Container>
    </View>
  );
};

const ListItem = ({ setReservations, verified, hoh, beds, navigation, id }) => {
  const verifyReservation = async () => {
    try {
      const token = await AsyncStorage.getItem("accessToken");

      await axiosWithAuth(token).put(`/reservations/${id}`, {
        verified: true,
      });

      setReservations((prevState) =>
        prevState.map((res) => {
          if (res._id == id) {
            res.verified = true;
          }

          return res;
        })
      );
    } catch (error) {
      alert("unable to verify bed");
    }
  };

  return (
    <TouchableOpacity>
      <ListItemContainer verified={verified}>
        <Text>{hoh + " / " + beds + " beds"}</Text>
        <MaterialCommunityIcons
          onPress={verifyReservation}
          size={35}
          name="check"
        />
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

  background-color: #94ffa2;

  ${(props) => props.verified !== true && "background-color: #ff9494"}

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

  margin-left: 5rem;

  width: 40%;

  ${(props) => props.theme.isLaptop && "width: 45%;"}

  ${(props) => props.theme.isTablet && "width: 70%;"}

  ${(props) => props.theme.isMobileL && "width: 95%;"}

  ${(props) => props.theme.isMobileS && "width: 98%;"}
`;

export default Index;
