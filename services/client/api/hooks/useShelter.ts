import { useQuery, useMutation } from "react-query";

import ShelterAPI from "../shelter";

import { useQueryClient } from "react-query";

export const useCreateReservation = () => {
  const queryClient = useQueryClient();

  return useMutation(ShelterAPI.createReservation, {
    onSuccess: () => {
      queryClient.invalidateQueries("beds-available");
      queryClient.invalidateQueries("current-reservation");
    },
  });
};

export const useTotalBedsAvailable = (shelterId) => {
  const queryClient = useQueryClient();
  interface Response {
    totalBeds: number;
    bedsReserved: number;
  }

  return useQuery<Response, DError>(
    ["beds-available", shelterId],
    ShelterAPI.getTotalBedsAvailable
  );
};
