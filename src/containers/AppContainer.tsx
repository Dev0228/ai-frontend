import { useEffect, useState } from "react";
import { useAppDispatch } from "@/store/hooks";
import { setCurrentUser } from "@/store/slices/authSlice";
import { getCurrentUser } from "@/services";

interface AppContainerProps {
  children: React.ReactNode;
}

export default function AppContainer({ children }: AppContainerProps) {
  const [isInitialized, setIsInitialized] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const initializeApp = async () => {
      const token = localStorage.getItem("token");

      if (token) {
        try {
          const response = await getCurrentUser();
          if (response?.success && response.data?.user) {
            dispatch(setCurrentUser(response.data.user));
          } else {
            localStorage.removeItem("token");
          }
        } catch (error) {
          localStorage.removeItem("token");
        }
      }

      setIsInitialized(true);
    };

    initializeApp();
  }, [dispatch]);

  if (!isInitialized) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-white">Initializing...</div>
      </div>
    );
  }

  return <>{children}</>;
}
