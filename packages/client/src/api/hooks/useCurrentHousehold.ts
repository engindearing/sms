import { trpc } from "../trpc";

export const useCurrentHousehold = () => {
  return trpc.useQuery<any, null>(["users.current.household"]);
};

export default useCurrentHousehold;
