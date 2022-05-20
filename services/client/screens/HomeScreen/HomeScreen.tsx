import React, { useEffect } from "react";
import { View, Text } from "react-native";

import { useGetCurrentUserQuery } from "../../auth/users/useGetCurrentUserQuery";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../../state/users/userActions";
import Redirect from "../../components/Redirect";
import { useNavigation } from "@react-navigation/native";

export default function Index() {
  const navigation = useNavigation();

  const [user, loading] = useGetCurrentUserQuery();

  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      dispatch(setCurrentUser(user));

      switch (user.role) {
        case "programManager":
          navigation.navigate("shelters");

          return
        case 'guest':
          navigation.navigate('Intake')

          return
      }
    }
  }, [user]);

  if (loading) {
    return <Text>Loading</Text>;
  }

  return <Text></Text>;
}

