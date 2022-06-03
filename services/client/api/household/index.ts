import { axiosWithAuth } from "../../auth/axiosWithAuth";

import AsyncStorage from "@react-native-async-storage/async-storage";

export const updateHousehold = async (householdId, info) => {
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

export const fetchHouseholdByUserId = async (userId) => {
  let token = await AsyncStorage.getItem("accessToken");

  try {
    let data = await axiosWithAuth(token)
      .get(`/users/${userId}/household`)
      .then((res) => res.data);

    return data;
  } catch (error) {
    throw error;
  }
};


export default {
  updateHousehold,
  fetchHouseholdByUserId
}