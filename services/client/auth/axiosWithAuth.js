import axios from "axios";

import { NATIVE_API_URI } from "@env";

export const axiosWithAuth = (accessToken) => {
  alert(NATIVE_API_URI)
  return axios.create({
    headers: {
      authorization: `Bearer ${accessToken}`,
    },
    baseURL: `${NATIVE_API_URI}/api`,
  });
};
