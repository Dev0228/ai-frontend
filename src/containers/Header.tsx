import { useCurrentUser } from "@/hooks/useCurrentUser";
import { logout } from "@/services";
import { clearCurrentUser } from "@/store/slices/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export function Header() {
  const currentUser = useCurrentUser();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error("Logout failed:", error);
    } finally {
      dispatch(clearCurrentUser());
      navigate("/login");
    }
  };

  return (
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
  );
}
