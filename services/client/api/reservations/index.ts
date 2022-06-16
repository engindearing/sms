import { axiosWithAuth } from "../../auth/axiosWithAuth";

import AsyncStorage from "@react-native-async-storage/async-storage";

export const getCurrentReservation = async () => {
  let token = await AsyncStorage.getItem("accessToken");

  try {
    let data = await axiosWithAuth(token)
      .get(`/users/me/reservations/current`)
      .then((res) => res.data.reservation);

    return data;
  } catch (error) {
    throw error;
  }
};

export const createReservation = async (mutationKey) => {
  const { reservation } = mutationKey;

  let token = await AsyncStorage.getItem("accessToken");

  try {
    let data = await axiosWithAuth(token)
      .post(`/reservations`, reservation)
      .then((res) => res.data.reservation);

    return data;
  } catch (error) {
    throw error;
  }
};

const ReservationAPI = {
  getCurrentReservation,
  createReservation,
};

export default ReservationAPI;
