import { trpc } from "../trpc";

export const useCurrentUser = () => {
  return trpc.useQuery(["users.current"]);
};

export const useCurrentHousehold = () => {
  return trpc.useQuery(["users.current.household"]);
};

export default useCurrentUser;
