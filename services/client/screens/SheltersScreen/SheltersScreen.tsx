import { View, Text, ScrollView } from "react-native";
import React from "react";

import styled from "styled-components/native";

import { Card, Button, Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

const SheltersScreen = () => {
  const dummyData = [
    {
      id: 1,
      name: "Family Promise of Spokane",
      image: 'http://3.230.120.77/wp-content/uploads/2022/04/fourth-scaled.webp'
    },

    {
      id: 2,
      name: "Family Promise of Clarks County",
      image: 'http://3.230.120.77/wp-content/uploads/2022/04/third.webp'
    },

    {
      id: 3,
      name: "Family Promise of Summit County",
      image: 'http://3.230.120.77/wp-content/uploads/2022/04/fifth-scaled.webp'
    },
  ];

  const navigation = useNavigation()

  return (
    <ScrollView>
      <Container>
        <Shelters>
          {dummyData.map((data) => (
            <Shelter image={data.image} name={data.name} id={data.id} navigation={navigation} />
          ))}
        </Shelters>
      </Container>
    </ScrollView>
  );
};

const Container = styled.View`
  width: 100%;

  background-color: #369fff;

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
    <Card>
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
