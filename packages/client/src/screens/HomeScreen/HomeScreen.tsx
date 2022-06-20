import { Text } from "native-base";

import { useCurrentUser } from "../../api/hooks";

import LoadingScreen from "../../components/LoadingScreen";

import { trpc } from "../../config/trpc";

import { GuestDashboard, StaffDashboard, AdminDashboard } from "./components";

export default function HomeScreen() {
  const userQuery = useCurrentUser();

  let data = trpc.useQuery(['user.getCurrentUser'])

  return <Text>Stop</Text>;

  if (userQuery.isLoading) {
    return <LoadingScreen />;
  }

  if (userQuery.isError) {
    return <span>{userQuery.error.message}</span>;
  }

  switch (userQuery.data.role) {
    case "guest":
      return <GuestDashboard />;

    case "staff":
      return <StaffDashboard />;

    case "admin":
      return <AdminDashboard />;

    default:
      return <Text>Invalid role</Text>;
  }
}
