import React, { useEffect } from "react";
import { View, Text } from "react-native";

import { getCurrentUser } from "../../auth/users/useGetCurrentUserQuery";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../../state/users/userActions";
import Redirect from "../../components/Redirect";
import { useNavigation } from "@react-navigation/native";

export default function Index() {
  const navigation = useNavigation();

  const dispatch = useDispatch();

  useEffect(() => {
    getCurrentUser().then((user) => {
      dispatch(setCurrentUser(user));

      switch (user.role) {
        case "programManager":
          navigation.navigate("shelters");

          return;
        case "guest":
          if (user.household.status !== "complete")
            return navigation.navigate("Intake");

          navigation.navigate("Guest");
      }
    });
  }, []);

  return <Text></Text>;
}
