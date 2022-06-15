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

const ReservationAPI = {
  getCurrentReservation,
};

export default ReservationAPI;
