import { useQuery } from "react-query";

import ShelterAPI from "../shelter";

import { useQueryClient } from "react-query";

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
