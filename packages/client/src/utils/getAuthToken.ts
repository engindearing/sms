import AsyncStorage from "@react-native-async-storage/async-storage";

export const getAuthToken = async () => {
  let token = await AsyncStorage.getItem("accessToken");

  return token;
};
