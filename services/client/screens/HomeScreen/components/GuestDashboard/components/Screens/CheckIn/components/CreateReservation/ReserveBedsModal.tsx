import { Button, Modal, Text } from "native-base";
import { useState } from "react";

import { useWindowDimensions } from "react-native";

import { List } from "react-native-paper";

import { useCurrentHousehold } from "../../../../../../../../../api/hooks";
import { useCreateReservation } from "../../../../../../../../../api/hooks/useShelter";

export const ReserveBedsModal = ({ isOpen, toggle }) => {
  const {
    data: { members, household },
  } = useCurrentHousehold();

  const { mutate: createReservation, isLoading } = useCreateReservation();

  const [selectedMembers, setSelectedMembers] = useState([]);

  const isSelected = (member) => selectedMembers.includes(member);

  const addMember = (member) =>
    setSelectedMembers([...selectedMembers, member]);

  const removeMember = (memberToRemove) =>
    setSelectedMembers((members) =>
      members.filter((member) => member !== memberToRemove)
    );

  const onMemberClick = (member) => {
    return () => {
      if (isSelected(member)) {
        removeMember(member);
      } else {
        addMember(member);
      }
    };
  };

  const onReservationSubmit = () => {
    const reservation = {
      household: household._id,
      shelter: household.shelter,
      beds: selectedMembers.length,
      members: [...selectedMembers],
    };

    createReservation(
      { shelterId: household.shelter, reservation },
      { onSuccess: toggle }
    );
  };

  const { width } = useWindowDimensions();

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
            <Member
              key={member._id}
              member={member}
              isSelected={isSelected(member._id)}
              onPress={onMemberClick(member._id)}
            />
          ))}
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="solid"
            size="lg"
            backgroundColor={"#3d5875"}
            isDisabled={selectedMembers.length == 0}
            onPress={onReservationSubmit}
            minWidth={150}
          >
            {isLoading ? "Loading.." : "Reserve beds"}
          </Button>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
};

const Member = ({ member, onPress, isSelected }) => {
  const styles = {
    shadowColor: "#1717178c",
    shadowOffset: { width: -1, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    marginBottom: 5,
    backgroundColor: isSelected ? "#0062be46" : null,
  };

  return (
    <List.Item
      onPress={onPress}
      style={styles}
      title={member.demographics.firstName + " " + member.demographics.lastName}
      description={member.demographics.relationship}
    />
  );
};
