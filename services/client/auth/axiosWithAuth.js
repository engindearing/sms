import axios from "axios";

import { NATIVE_API_URI } from "@env";

export const axiosWithAuth = (accessToken) => {
  return axios.create({
    headers: {
      authorization: `Bearer ${accessToken}`,
    },
    baseURL: NATIVE_API_URI,
  });
};
