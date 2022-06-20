import { useQuery } from "react-query";

import UserAPI from "../user";

const useCurrentUser = () => {
  return useQuery<DUser, DError>("current-user", UserAPI.getCurrentUser);
};

export default useCurrentUser;
