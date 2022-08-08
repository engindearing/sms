import { useMutation, useQueryClient } from "react-query";

import HouseholdAPI from "../household";

const useUpdateHousehold = () => {
  const queryClient = useQueryClient();

  return useMutation(HouseholdAPI.updateHousehold, {
    onSuccess: () => queryClient.invalidateQueries("current-household"),
  });
};

export default useUpdateHousehold;
