import AsyncStorage from "@react-native-async-storage/async-storage";

import { axiosWithAuth } from "../../auth/axiosWithAuth";

export const getCurrentUser = async () => {
  let token = await AsyncStorage.getItem("accessToken");

  try {
    let data = await axiosWithAuth(token)
      .get(`/users/me`)
      .then((res) => res.data.currentUser);

    return data;
  } catch (error) {
    throw error;
  }
};

export const getCurrentHousehold = async () => {
  let token = await AsyncStorage.getItem("accessToken");

  try {
    let data = await axiosWithAuth(token)
      .get(`/users/me/household`)
      .then((res) => res.data);

    return data;
  } catch (error) {
    throw error;
  }
};

const UserAPI = {
  getCurrentUser,
  getCurrentHousehold
};

export default UserAPI;
