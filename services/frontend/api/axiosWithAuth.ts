import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

// #TODO: Replace URL with env variable
export const axiosWithAuth = () => {
  return axios.create({
    headers: {
      authorization: `Bearer ${getAccessToken()}`,
    },
    baseURL: "http://localhost:8000",
  });
};

const getAccessToken = async () => {
  let token = await AsyncStorage.getItem("accessToken");

  return token;
};
