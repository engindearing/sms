import React, { useEffect } from "react";
import { View, Text } from "react-native";

import { useGetCurrentUserQuery } from "../../auth/users/useGetCurrentUserQuery";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../../state/users/userActions";
import Redirect from "../../components/Redirect";


export default function Index() {


  const [user, loading] = useGetCurrentUserQuery();

  const dispatch = useDispatch();

  useEffect(() => {
    if(user) {
      dispatch(setCurrentUser(user));
    }
  }, [user]);

  if (loading) {
    return <Text>Loading</Text>;
  }

  return (
    <RedirectUser user={user} />
  );
}

const RedirectUser = ({ user }) => {
  switch (user.role) {
    case "staff":
      return <Redirect to="staff" />;

    case "guest":
      return <Redirect to={user.intake.status === 'completed' ? "guest" : 'Intake'} params={{ userId: user._id }}  />;

    default:
      return <Redirect to="Home" />;
  }
};
