import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "@/store";

interface WithRoleProps {
  children: React.ReactNode;
  allowedRoles: ("admin" | "user")[];
}

export const withRole = <P extends object>(
  WrappedComponent: React.ComponentType<P>,
  allowedRoles: ("admin" | "user")[]
) => {
  return function WithRoleComponent(props: P) {
    const navigate = useNavigate();
    const currentUser = useSelector(
      (state: RootState) => state.auth.currentUser
    );
    const token = localStorage.getItem("token");

    useEffect(() => {
      if (!token || !currentUser) {
        navigate("/login");
        return;
      }

      if (!allowedRoles.includes(currentUser.role)) {
        navigate("/dashboard"); // Redirect to dashboard if role not allowed
      }
    }, [token, currentUser, navigate, allowedRoles]);

    // Show loading while checking auth
    if (!token || !currentUser) {
      return (
        <div className="min-h-screen bg-gray-900 flex items-center justify-center">
          <div className="text-white">Loading...</div>
        </div>
      );
    }

    // Show access denied if role not allowed
    if (!allowedRoles.includes(currentUser.role)) {
      return (
        <div className="min-h-screen bg-gray-900 flex items-center justify-center">
          <div className="text-white text-center">
            <h2 className="text-xl font-semibold mb-2">Access Denied</h2>
            <p className="text-gray-400">
              You don't have permission to access this page.
            </p>
          </div>
        </div>
      );
    }

    return <WrappedComponent {...props} />;
  };
};

// Alternative: Function component version
export const RoleProtectedRoute: React.FC<WithRoleProps> = ({
  children,
  allowedRoles,
}) => {
  const navigate = useNavigate();
  const currentUser = useSelector((state: RootState) => state.auth.currentUser);
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token || !currentUser) {
      navigate("/login");
      return;
    }

    if (!allowedRoles.includes(currentUser.role)) {
      navigate("/dashboard");
    }
  }, [token, currentUser, navigate, allowedRoles]);

  if (!token || !currentUser) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  if (!allowedRoles.includes(currentUser.role)) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-white text-center">
          <h2 className="text-xl font-semibold mb-2">Access Denied</h2>
          <p className="text-gray-400">
            You don't have permission to access this page.
          </p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

// Convenience HOCs for specific roles
export const withAdmin = <P extends object>(
  WrappedComponent: React.ComponentType<P>
) => withRole(WrappedComponent, ["admin"]);

export const withUser = <P extends object>(
  WrappedComponent: React.ComponentType<P>
) => withRole(WrappedComponent, ["user", "admin"]);
