import { useQueryClient } from "react-query";
import { trpc } from "../trpc";

export const useDeleteMember = () => {
  let queryClient = useQueryClient();
  return trpc.useMutation(["households.addMember"], {
    onSuccess: () => {
      queryClient.invalidateQueries(["users.current.household"]);
    },
  });
};

export const useUpdateMembers = () => {
  let queryClient = useQueryClient();
  return trpc.useMutation(["households.addMember"], {
    onSuccess: () => {
      queryClient.invalidateQueries(["users.current.household"]);
    },
  });
};

export const useAddMember = () => {
  let queryClient = useQueryClient();
  return trpc.useMutation(["households.addMember"], {
    onSuccess: () => {
      queryClient.invalidateQueries(["users.current.household"]);
    },
  });
};
