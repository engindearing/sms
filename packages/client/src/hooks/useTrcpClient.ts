import { trpc } from "../config/trpc";

import { useState } from "react";

import { getAuthToken } from "../utils/getAuthToken";

// @ts-ignore
import { NATIVE_API_URI } from "@env";

export const useTrpcClient = () => {
  const [trpcClient] = useState(() =>
    trpc.createClient({
      url: `${NATIVE_API_URI}/trpc`,

      // This runs for every request
      headers: async () => {
        let token = await getAuthToken();

        return { authorization: `Bearer ${token}` };
      },
    })
  );

  return trpcClient;
};
