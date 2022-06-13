import { useQuery } from "react-query";

import UserAPI from "../user";

const useCurrentHousehold = () => {
  return useQuery<DUser, DError>(
    "current-household",
    UserAPI.getCurrentHousehold
  );
};

export default useCurrentHousehold;
