import { axiosWithAuth } from "../axiosWithAuth";

import AsyncStorage from "@react-native-async-storage/async-storage";

export const getCurrentUser = async () => {
  const token = await AsyncStorage.getItem("accessToken");

  try {
    let userData = await axiosWithAuth(token)
      .get("/users/me")
      .then((res) => res.data.currentUser);

    return userData;
  } catch (error) {
    throw error;
  }
};
