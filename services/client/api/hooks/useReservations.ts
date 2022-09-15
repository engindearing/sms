import { useQuery, useMutation, useQueryClient } from "react-query";

import ReservationAPI from "../reservations";

export const useReservations = () => {
  return useQuery<DReservation[], DError>(
      "reservations",
      ReservationAPI.getReservations
  );
};

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

export const useUpdateReservation = () => {
  const queryClient = useQueryClient();

  return useMutation(ReservationAPI.updateReservation, {
    onSuccess: () => {
      queryClient.invalidateQueries("reservations");
    },
  });
};

export const useDeleteCurrentReservation = () => {
  const queryClient = useQueryClient();

  return useMutation(ReservationAPI.deleteCurrentReservation, {
    onSuccess: () => {
      queryClient.invalidateQueries("beds-available");
      queryClient.invalidateQueries("current-reservation");
    },
  });
};
