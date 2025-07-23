import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCurrentUser } from "@/hooks/useCurrentUser";

interface WithAuthProps {
  children: React.ReactNode;
}

export const withAuth = <P extends object>(
  WrappedComponent: React.ComponentType<P>
) => {
  return function WithAuthComponent(props: P) {
    return <ProtectedRoute><WrappedComponent {...props} /></ProtectedRoute>;
  };
};

export const ProtectedRoute: React.FC<WithAuthProps> = ({ children }) => {
  const navigate = useNavigate();
  const currentUser = useCurrentUser();
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
