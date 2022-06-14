import { axiosWithAuth } from "../../auth/axiosWithAuth";

import AsyncStorage from "@react-native-async-storage/async-storage";

export const updateHousehold = async (mutationKey) => {
  const { householdId, info } = mutationKey;

  console.log(mutationKey);

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

export const addMember = async (householdId, memberData) => {
  let token = await AsyncStorage.getItem("accessToken");

  try {
    let data = await axiosWithAuth(token)
      .post(`/households/${householdId}/members`, memberData)
      .then((res) => res.data);

    return data;
  } catch (error) {
    throw error;
  }
};

export const removeMember = async (householdId, memberId) => {
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

export default {
  updateHousehold,
  fetchHouseholdByUserId,
  addMember,
  removeMember,
};
