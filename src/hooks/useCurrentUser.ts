import type { RootState } from "@/store";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export function useCurrentUser() {
  const navigate = useNavigate();

  const currentUser = useSelector(
    (state: RootState) => state.auth.currentUser
  )!;

  if (!currentUser) {
    navigate("/login");
  }

  return currentUser;
}
