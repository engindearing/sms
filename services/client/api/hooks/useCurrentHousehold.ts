import { useQuery } from "react-query";

import UserAPI from "../user";

const useCurrentHousehold = () => {
  interface APIResponse {
    household: DHousehold;
    members: DMember[];
  }

  return useQuery<APIResponse, DError>(
    "current-household",
    UserAPI.getCurrentHousehold
  );
};

export default useCurrentHousehold;
