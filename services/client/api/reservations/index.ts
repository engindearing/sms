import { axiosWithAuth } from "../../auth/axiosWithAuth";

import AsyncStorage from "@react-native-async-storage/async-storage";

export const getCurrentReservation = async () => {
  let token = await AsyncStorage.getItem("accessToken");

  try {
    let data = await axiosWithAuth(token)
      .get(`/users/me/reservation`)
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

export const deleteReservation = async (mutationKey) => {
  const { reservationId } = mutationKey;

  let token = await AsyncStorage.getItem("accessToken");

  try {
    let data = await axiosWithAuth(token)
      .delete(`/reservations/${reservationId}`)
      .then((res) => res.data);

    return data;
  } catch (error) {
    throw error;
  }
};

export const deleteCurrentReservation = async (mutationKey) => {
  let token = await AsyncStorage.getItem("accessToken");

  try {
    let data = await axiosWithAuth(token)
      .delete(`/users/me/reservation`)
      .then((res) => res.data);

    return data;
  } catch (error) {
    throw error;
  }
};

const ReservationAPI = {
  getCurrentReservation,
  createReservation,
  deleteReservation,
  deleteCurrentReservation,
};

export default ReservationAPI;
