import { useCurrentUser } from "@/hooks/useCurrentUser";
import AdminDashboardContainer from "./AdminDashboardContainer";
import UserDashboardContainer from "./UserDashboardContainer";

export default function DashboardContainer() {
  const currentUser = useCurrentUser();

  if (currentUser.role === "admin") {
    return <AdminDashboardContainer />;
  } else if (currentUser.role === "user") {
    return <UserDashboardContainer />;
  }

  return <div>Unknown User</div>;
}
