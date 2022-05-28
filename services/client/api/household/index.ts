import { axiosWithAuth } from "../../auth/axiosWithAuth";

import AsyncStorage from "@react-native-async-storage/async-storage";

export const updateHouseholdContacts = async (householdId, contact) => {
  let token = await AsyncStorage.getItem("accessToken");

  try {
    let data = await axiosWithAuth(token)
      .patch(`/households/${householdId}`, contact )
      .then((res) => res.data);

    return data;
  } catch (error) {
    throw error;
  }
};
