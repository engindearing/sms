import React, { useEffect } from "react";
import { Text } from "react-native";

import { getCurrentUser } from "../../auth/users/useGetCurrentUserQuery";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";

import { setUser } from "../../state/slices/userSlice";

export default function Index() {
  const navigation = useNavigation();

  const dispatch = useDispatch();

  useEffect(() => {
    getCurrentUser()
      .then((user) => {
        dispatch(setUser(user));

        switch (user.role) {
          case "programManager":
            navigation.navigate("shelters");

            return;
          case "guest":

            navigation.navigate("Guest");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return <Text></Text>;
}
