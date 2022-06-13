import React, { useEffect } from "react";

import Loader from "../../components/Loader";

import { auth } from "../../firebase";

import { useNavigation } from "@react-navigation/native";

import { useCurrentUser } from "../../api/hooks";

export default function Index() {

  const userQuery = useCurrentUser();

  if (userQuery.isLoading) {
    return <Loader />;
  }

  if (userQuery.isError) {
    return <span>{userQuery.error.message}</span>;
  }

  return <RedirectUser userRole={userQuery.data.role} />;
}

const RedirectUser = ({ userRole }) => {
  const navigation = useNavigation();

  useEffect(() => {
    switch (userRole) {
      case "guest":
        return navigation.navigate("Guest");

      default:
        alert("invalid role");

        auth.signOut();

        navigation.navigate("Login");
    }
  }, []);

  return <></>;
};
