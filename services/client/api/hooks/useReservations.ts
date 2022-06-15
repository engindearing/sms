import { useQuery } from "react-query";

import ReservationAPI from "../reservations";

export const useCurrentReservation = () => {
  return useQuery<DReservation, DError>(
    "current-reservation",
    ReservationAPI.getCurrentReservation
  );
};
