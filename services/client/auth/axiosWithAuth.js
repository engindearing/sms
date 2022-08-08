import axios from "axios";

export const axiosWithAuth = (accessToken) => {
  return axios.create({
    headers: {
      authorization: `Bearer ${accessToken}`,
    },
    baseURL: `http://192.168.1.50:8000/api`,
  });
};
