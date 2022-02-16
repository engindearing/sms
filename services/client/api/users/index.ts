import { axiosWithAuth } from "../axiosWithAuth";
import { getAccessToken } from "../../utils/getAccessToken";

export const getCurrentUser = async () => {
  try {
    let token = await getAccessToken();

    let res = await axiosWithAuth(token).get("/users/me");

    return res.data.user;
  } catch (error) {
    throw error;
  }
};
