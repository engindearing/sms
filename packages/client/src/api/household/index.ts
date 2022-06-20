import { axiosWithAuth } from "../../auth/axiosWithAuth";

import AsyncStorage from "@react-native-async-storage/async-storage";

export const updateHousehold = async (mutationKey) => {
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

export const addMember = async (mutationKey) => {
  const { householdId, member } = mutationKey;

  let token = await AsyncStorage.getItem("accessToken");

  try {
    let data = await axiosWithAuth(token)
      .post(`/households/${householdId}/members`, member)
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
      .delete(`/households/${householdId}/members/${memberId}`)
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
      .patch(`/households/${householdId}/members`, members)
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
