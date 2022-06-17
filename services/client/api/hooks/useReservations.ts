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
    onSuccess: () => {
      queryClient.invalidateQueries("beds-available");
      queryClient.invalidateQueries("current-reservation");
    },
  });
};

export const useDeleteReservation = () => {
  const queryClient = useQueryClient();

  return useMutation(ReservationAPI.deleteReservation, {
    onSuccess: () => {
      queryClient.invalidateQueries("beds-available");
      queryClient.invalidateQueries("current-reservation");
    },
  });
};
