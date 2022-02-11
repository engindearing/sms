import AsyncStorage from "@react-native-async-storage/async-storage";

export const getAccessToken = async () =>
  await AsyncStorage.getItem("accessToken");
