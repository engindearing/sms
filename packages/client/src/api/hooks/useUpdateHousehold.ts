import { useQueryClient } from "react-query";
import { trpc } from "../trpc";

const useUpdateHousehold = () => {
  let queryClient = useQueryClient();
  return trpc.useMutation(["households.update"], {
    onSuccess: () => {
      queryClient.invalidateQueries(["users.current.household"]);
    },
  });
};

export default useUpdateHousehold;
