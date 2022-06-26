import { useQuery } from "react-query";

import { trpc } from "../trpc";

export const useTotalBedsAvailable = () => {
  return trpc.useQuery(["users.current"]);
};
