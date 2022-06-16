import { Button } from "native-base";

import React, { useState } from "react";

import { ReserveBedsModal } from "./ReserveBedsModal";

const CreateReservation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Button
        onPress={() => setIsOpen(true)}
        size={"lg"}
        backgroundColor={"#3d5875"}
      >
        Check-in
      </Button>

      <ReserveBedsModal isOpen={isOpen} toggle={toggle} />
    </>
  );
};

export default CreateReservation;
