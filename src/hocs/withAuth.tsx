import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "@/store";

interface WithAuthProps {
  children: React.ReactNode;
}

export const withAuth = <P extends object>(
  WrappedComponent: React.ComponentType<P>
) => {
  return function WithAuthComponent(props: P) {
    const navigate = useNavigate();
    const currentUser = useSelector(
      (state: RootState) => state.auth.currentUser
    );
    const token = localStorage.getItem("token");

    useEffect(() => {
      if (!token || !currentUser) {
        navigate("/login");
      }
    }, [token, currentUser, navigate]);

    // Show loading while checking auth
    if (!token || !currentUser) {
      return (
        <div className="min-h-screen bg-gray-900 flex items-center justify-center">
          <div className="text-white">Loading...</div>
        </div>
      );
    }

    return <WrappedComponent {...props} />;
  };
};

export const ProtectedRoute: React.FC<WithAuthProps> = ({ children }) => {
  const navigate = useNavigate();
  const currentUser = useSelector((state: RootState) => state.auth.currentUser);
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token || !currentUser) {
      navigate("/login");
    }
  }, [token, currentUser, navigate]);

  if (!token || !currentUser) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  return <>{children}</>;
};
