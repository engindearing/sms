import { axiosWithAuth } from "../../auth/axiosWithAuth";

import AsyncStorage from "@react-native-async-storage/async-storage";

export const getAllShelters = async () => {
  let token = await AsyncStorage.getItem("accessToken");

  try {
    let data = await axiosWithAuth(token)
      .get(`/shelters`)
      .then((res) => res.data.shelters);

    return data;
  } catch (error) {
    throw error;
  }
};

export const fetchShelterById = async (shelterId: string) => {
  let token = await AsyncStorage.getItem("accessToken");

  try {
    let data = await axiosWithAuth(token)
      .get(`/shelters/${shelterId}`)
      .then((res) => res.data);

    return data;
  } catch (error) {
    throw error;
  }
};

export default {
  getAllShelters,
  fetchShelterById,
};
