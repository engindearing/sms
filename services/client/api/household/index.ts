import { axiosWithAuth } from "../../auth/axiosWithAuth";

import AsyncStorage from "@react-native-async-storage/async-storage";

export const updateHousehold = async (mutationKey: any) => {
  const { householdId, info } = mutationKey;

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

export const fetchHouseholdByUserId = async (userId: any) => {
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

export const addMember = async (mutationKey) => {
  const { householdId, member } = mutationKey;

  let token = await AsyncStorage.getItem("accessToken");

  try {
    let data = await axiosWithAuth(token)
      .post(`/households/${householdId}/guests`, member)
      .then((res) => res.data);

    return data;
  } catch (error) {
    throw error;
  }
};

export const removeMember = async (mutationKey) => {
  const { householdId, memberId } = mutationKey;

  let token = await AsyncStorage.getItem("accessToken");

  try {
    let data = await axiosWithAuth(token)
      .delete(`/households/${householdId}/guests/${memberId}`)
      .then((res) => res.data);

    return data;
  } catch (error) {
    throw error;
  }
};

export const updateMembers = async (mutationKey) => {
  const { householdId, members } = mutationKey;

  let token = await AsyncStorage.getItem("accessToken");

  try {
    let data = await axiosWithAuth(token)
      .patch(`/households/${householdId}/guests`, members)
      .then((res) => res.data);

    return data;
  } catch (error) {
    throw error;
  }
};

export default {
  updateHousehold,
  fetchHouseholdByUserId,
  addMember,
  removeMember,
  updateMembers,
};
