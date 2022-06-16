import { useQuery, useMutation, useQueryClient } from "react-query";

import ReservationAPI from "../reservations";

export const useCurrentReservation = () => {
  return useQuery<DReservation, DError>(
    "current-reservation",
    ReservationAPI.getCurrentReservation
  );
};

export const usePostReservation = () => {
  const queryClient = useQueryClient();

  return useMutation(ReservationAPI.createReservation, {
    onSuccess: () => queryClient.invalidateQueries(["current-reservation"]),
  });
};
