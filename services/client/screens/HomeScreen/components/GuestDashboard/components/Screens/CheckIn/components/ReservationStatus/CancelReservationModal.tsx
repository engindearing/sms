import React from "react";

import { Center, Button, AlertDialog } from "native-base";
import {
  useCurrentReservation,
  useDeleteReservation,
} from "../../../../../../../../../api/hooks/useReservations";

const CancelReservationModal = ({ isOpen, toggle }) => {
  const cancelRef = React.useRef(null);

  const { data: reservation } = useCurrentReservation();

  const { mutate: deleteReservation, isLoading } = useDeleteReservation();

  const onDeleteReservation = () =>
    deleteReservation(
      { reservationId: reservation._id },
      { onSuccess: toggle }
    );

  return (
    <AlertDialog
      leastDestructiveRef={cancelRef}
      isOpen={isOpen}
      onClose={toggle}
    >
      <AlertDialog.Content>
        <AlertDialog.CloseButton />
        <AlertDialog.Header>Cancel reservation</AlertDialog.Header>
        <AlertDialog.Body>
          This will cancel your reserved spot at Family Promise of Spokane. Are
          you sure you want to do this?
        </AlertDialog.Body>
        <AlertDialog.Footer>
          <Button.Group space={2}>
            <Button
              variant="unstyled"
              colorScheme="coolGray"
              onPress={toggle}
              ref={cancelRef}
            >
              Cancel
            </Button>
            <Button backgroundColor={"#3d5875"} onPress={onDeleteReservation}>
              Yes, I'm sure
            </Button>
          </Button.Group>
        </AlertDialog.Footer>
      </AlertDialog.Content>
    </AlertDialog>
  );
};

export default CancelReservationModal;
