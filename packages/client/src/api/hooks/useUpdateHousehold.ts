import { trpc } from "../trpc";

const useUpdateHousehold = () => {
  return trpc.useMutation(["households.update"]);
};

export default useUpdateHousehold;
