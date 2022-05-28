import { axiosWithAuth } from "../../auth/axiosWithAuth";

import AsyncStorage from "@react-native-async-storage/async-storage";

export const updateHousehold = async (householdId, info) => {

  console.log(info)

  let token = await AsyncStorage.getItem("accessToken");

  try {
    let data = await axiosWithAuth(token)
      .patch(`/households/${householdId}`, info)
      .then((res) => res.data);

    return data;
  } catch (error) {
    throw error;
  }
};
