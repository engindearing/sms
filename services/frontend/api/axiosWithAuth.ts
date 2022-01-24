import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

// #TODO: Replace URL with env variable
export const axiosWithAuth = (accessToken: any) => {
  return axios.create({
    headers: {
      authorization: `Bearer ${accessToken}`,
    },
    baseURL: "http://192.168.1.9:8000",
  });
};
