import { trpc } from "../trpc";

export const useShelters = () => {
  return trpc.useQuery(["shelters.list"]);
};
