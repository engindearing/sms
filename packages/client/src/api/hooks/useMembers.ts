import { trpc } from "../trpc";

export const useUpdateMembers = () => {
  return trpc.useQuery(["users.current"]);
};

export const useDeleteMember = () => {
  return trpc.useQuery(["users.current"]);
};

export const useAddMember = () => {
  return trpc.useQuery(["users.current"]);
};
