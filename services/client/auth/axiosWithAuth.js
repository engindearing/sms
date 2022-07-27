import axios from "axios";

export const axiosWithAuth = (accessToken) => {
  return axios.create({
    headers: {
      authorization: `Bearer ${accessToken}`,
    },
    baseURL: `http://192.168.1.49:8000/api`,
  });
};
