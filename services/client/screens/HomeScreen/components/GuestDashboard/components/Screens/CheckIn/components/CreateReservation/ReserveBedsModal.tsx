import { Button, Center, Modal, Text } from "native-base";
import { useState } from "react";
import { useWindowDimensions } from "react-native";

import { List } from "react-native-paper";

import { useCurrentHousehold } from "../../../../../../../../../api/hooks";

export const ReserveBedsModal = ({ isOpen, toggle }) => {
  const { width } = useWindowDimensions();

  const [selectedMembers, setSelectedMembers] = useState([]);

  const {
    data: { members },
  } = useCurrentHousehold();

  return (
    <Modal height={"100%"} isOpen={isOpen} onClose={toggle}>
      <Modal.Content
        minWidth={width > 900 ? "40%" : "100%"}
        height={width > 900 ? "98%" : "100%"}
      >
        <Modal.CloseButton />
        <Modal.Header>
          <Text fontSize={"2xl"}>Who's staying at the shelter tonight?</Text>
        </Modal.Header>
        <Modal.Body padding={1}>
          {members.map((member) => (
            <List.Item
              key={member._id}
              onPress={() =>
                setSelectedMembers([...selectedMembers, member._id])
              }
              style={{
                shadowColor: "#1717178c",
                shadowOffset: { width: -1, height: 1 },
                shadowOpacity: 0.1,
                shadowRadius: 1,
                marginBottom: 5,

                backgroundColor: selectedMembers.includes(member._id)
                  ? "#0062be46"
                  : null,
              }}
              title={
                member.demographics.firstName +
                " " +
                member.demographics.lastName
              }
              description={member.demographics.relationship}
            />
          ))}
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="solid"
            size="lg"
            backgroundColor={"#3d5875"}
            isDisabled
            minWidth={150}
            onPress={toggle}
          >
            Reserve
          </Button>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
};
