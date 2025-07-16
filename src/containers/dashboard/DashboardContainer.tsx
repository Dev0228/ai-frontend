import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import type { RootState } from "@/store";
import { clearCurrentUser } from "@/store/slices/authSlice";
import { logout } from "@/services";
import AdminDashboardContainer from "./AdminDashboardContainer";
import UserDashboardContainer from "./UserDashboardContainer";

export default function DashboardContainer() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentUser = useSelector(
    (state: RootState) => state.auth.currentUser
  )!;

  const handleLogout = async () => {
    try {
      await logout();
      dispatch(clearCurrentUser());
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
      dispatch(clearCurrentUser());
      navigate("/login");
    }
  };

  return (
    <div className="min-h-screen bg-black flex flex-col">
      <div className="bg-gray-800 border-b border-gray-700 px-6 py-4 flex-shrink-0">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <h1 className="text-white text-xl font-semibold">
              Welcome, {currentUser.name}
            </h1>
            <span className="text-gray-300 text-sm">({currentUser.role})</span>
          </div>
          <button
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200"
          >
            Logout
          </button>
        </div>
      </div>

      <div className="flex-1 flex">
        {currentUser.role === "admin" ? (
          <AdminDashboardContainer />
        ) : (
          <UserDashboardContainer />
        )}
      </div>
    </div>
  );
}
