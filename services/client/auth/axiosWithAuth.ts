import axios from "axios";

import Constants from "expo-constants";

export const axiosWithAuth = (accessToken: any) => {
  const HOST_IP = Constants.manifest?.extra?.HOST_IP;

  return axios.create({
    headers: {
      authorization: `Bearer ${accessToken}`,
    },
    baseURL: `http://${HOST_IP}:3000/api/`,
  });
}

