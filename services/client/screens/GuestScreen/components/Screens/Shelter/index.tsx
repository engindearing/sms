import { useWindowDimensions } from "react-native";
import React, { useState } from "react";

import { Center, Button, Modal } from "native-base";

import styled from "styled-components/native";

import Card from "./components/Card";
import { ScrollView } from "react-native-gesture-handler";
import RenderPage from "./components/pages/RenderPage";

const index = () => {
  let pages = [
    {
      id: "welcome",
      name: "Welcome to Open Doors",
      color: "",
    },

    {
      id: "shelterSchedule",
      name: "Shelter Schedule",
      color: "",
    },

    {
      id: "nightExpectations",
      name: "Night Shelter Expectations & Safety",
      color: "",
    },

    {
      id: "inside",
      name: "Inside the Shelter",
      color: "",
    },

    {
      id: "outside",
      name: "Outside the Shelter",
      color: "",
    },

    {
      id: "reminders",
      name: "Important Reminders",
      color: "",
    },

    {
      id: "resources",
      name: "Important Resources & Phone Numbers",
      color: "",
    },
  ];

  let [page, setPage] = useState("");

  return (
    <>
      <ScrollView style={{ height: "120%", width: "100%" }}>
        <Center>
          <Container>
            {pages.map((page) => (
              <Card
                color={page.color}
                text={page.name}
                onPress={() => setPage(page.id)}
              />
            ))}
          </Container>
        </Center>
      </ScrollView>

      <PageModal page={page} setPage={setPage} />
    </>
  );
};

const Container = styled.View`
  width: 50%;

  ${(props) => props.theme.isTablet && "width: 98%;"}

  margin-top: 20;
`;

export default index;

const PageModal = ({ page, setPage }) => {
  const { width } = useWindowDimensions();

  return (
    <Center>
      <Button onPress={() => setPage(false)}>Button</Button>
      <Modal isOpen={page} onClose={() => setPage(false)} height="100%">
        <Modal.Content
          minWidth={width > 900 ? "45%" : "100%"}
          height={width > 900 ? "100%" : "100%"}
        >
          <Modal.CloseButton />
          <Modal.Body>
            <RenderPage page={page} />
          </Modal.Body>
          <Modal.Footer
            style={{ display: "flex", justifyContent: "flex-start" }}
            alignItems={"flex-end"}
            justifyContent={"flex-end"}
          >
            <Button
              variant="solid"
              colorScheme="indigo"
              minWidth={150}
              onPress={() => {
                setPage(false);
              }}
            >
              Exit
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </Center>
  );
};
