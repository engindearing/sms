import { View, Text, ScrollView } from "react-native";
import React from "react";

import styled from "styled-components/native";

import { Card, Button, Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

const SheltersScreen = () => {

  const dummyData = [
    {
      id: "6266df4c2b13e767bcba9cb7",
      name: "Family Promise of Spokane",
      image: 'http://3.230.120.77/wp-content/uploads/2022/04/fourth-scaled.webp'
    },

    {
      id: "6266e2d242cf540fcde0cb5f",
      name: "Family Promise of Clarks County",
      image: 'http://3.230.120.77/wp-content/uploads/2022/04/third.webp'
    },

    {
      id: "6266e30642cf540fcde0cb62",
      name: "Family Promise of Summit County",
      image: 'http://3.230.120.77/wp-content/uploads/2022/04/fifth-scaled.webp'
    },
  ];

  const navigation = useNavigation()

  return (
    <ScrollView>
      <Container>
        <Shelters>
          {dummyData.map((data, key) => (
            <Shelter key={data.id} image={data.image} name={data.name} id={data.id} navigation={navigation} />
          ))}
        </Shelters>
      </Container>
    </ScrollView>
  );
};

const Container = styled.View`
  width: 100%;

  display: flex;

  justify-content: center;

  align-items: center;
`;
 
const Shelters = styled.View`
  display: flex;
  width: 40%;

  ${props => props.theme.isLaptop && 
    'width: 45%;'
  }

  ${props => props.theme.isTablet && 
    'width: 70%;'
  }

  ${props => props.theme.isMobileL && 
    'width: 100%;'
  }
 
`;

const Shelter = ({ name, id, navigation, image }) => {
  return (
    <Card key={id}>
      <Card.Title>{name}</Card.Title>
      <Card.Divider />
      <Card.Image
        style={{ padding: 0 }}
        source={{
          uri: image,
        }}
      />
      <Card.Divider />

      <Button
        onPress={() => navigation.navigate('shelterdashboard', {shelterId: id})}
        buttonStyle={{
          borderRadius: 0,
          marginLeft: 0,
          marginRight: 0,
          marginBottom: 0,
          backgroundColor: '#8d4982'
        }}
        title="MANAGE"
      />
    </Card>
  );
};

export default SheltersScreen;
