import React, { useEffect } from "react";
import { View, Text } from "react-native";

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
            if (!user.household || user.household.status !== "complete")
              return navigation.navigate("Intake");

            navigation.navigate("Guest");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return <Text></Text>;
}
