import { useQuery } from "react-query";

import ShelterAPI from "../shelter";

export const useShelters = () => {
  return useQuery<DShelter[], DError>("shelters", ShelterAPI.getAllShelters);
};
