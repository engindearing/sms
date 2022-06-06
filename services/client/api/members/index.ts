import { axiosWithAuth } from "../../auth/axiosWithAuth";

import AsyncStorage from "@react-native-async-storage/async-storage";

export const addMembers = async (householdId, members: any[]) => {
  let token = await AsyncStorage.getItem("accessToken");

  try {
    let data = await axiosWithAuth(token)
      .post(`/households/${householdId}/members`, members)
      .then((res) => res.data);

    return data;
  } catch (error) {
    throw error;
  }
};

export const deleteMembers = async (householdId, members: any[]) => {
  let token = await AsyncStorage.getItem("accessToken");

  try {
    let data = await axiosWithAuth(token)
      .post(`/households/${householdId}/members/delete`, members)
      .then((res) => res.data);

    return data;
  } catch (error) {
    throw error;
  }
};

export const updateMembers = async (householdId, members: any[]) => {
  let token = await AsyncStorage.getItem("accessToken");

  try {
    let data = await axiosWithAuth(token)
      .patch(`/households/${householdId}/members`, members)
      .then((res) => res.data);

    return data;
  } catch (error) {
    throw error;
  }
};

export default {
  updateMembers,
  deleteMembers,
  addMembers,
};
