import { trpc } from "../trpc";

export const useCurrentHousehold = () => {
  return trpc.useQuery(["users.current.household"]);
};

export default useCurrentHousehold;
