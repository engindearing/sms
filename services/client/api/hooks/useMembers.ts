import HouseholdAPI from "../household";
import { useMutation, useQueryClient } from "react-query";

export const useAddMember = () => {
  const queryClient = useQueryClient();

  return useMutation(HouseholdAPI.addMember, {
    onSuccess: () => queryClient.invalidateQueries("current-household"),
  });
};

export const useDeleteMember = () => {
  const queryClient = useQueryClient();

  return useMutation(HouseholdAPI.removeMember, {
    onSuccess: () => queryClient.invalidateQueries("current-household"),
  });
};

export const useUpdateMembers = () => {
  const queryClient = useQueryClient();

  return useMutation(HouseholdAPI.updateMembers, {
    onSuccess: () => queryClient.invalidateQueries("current-household"),
  });
};
