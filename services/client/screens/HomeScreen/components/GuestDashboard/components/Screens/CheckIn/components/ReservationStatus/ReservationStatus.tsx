import React, { useState } from "react";
import { Button, Center, Text } from "native-base";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import CancelReservationModal from "./CancelReservationModal";
const ReservationStatus = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Button
        leftIcon={
          <MaterialCommunityIcons name="clock" size={20} color="black" />
        }
        colorScheme={'trueGray'}
        size={"lg"}
        variant="outline"
        onPress={toggle}
      >
        Pending
      </Button>

      <CancelReservationModal isOpen={isOpen} toggle={toggle} />
    </>
  );
};

export default ReservationStatus;
