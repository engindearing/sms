import { useQuery, useMutation, useQueryClient } from "react-query";

import UserAPI from "../user";

const useCurrentUser = () => {
  return useQuery<DUser, DError>("current-user", UserAPI.getCurrentUser);
};

export const useUpdateCurrentUser = () => {
  const queryClient = useQueryClient();

  return useMutation(UserAPI.updateCurrentUser, {
    onSuccess: () => {},
  });
};

export default useCurrentUser;
