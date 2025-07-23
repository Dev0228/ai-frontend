import type { RootState } from "@/store";
import { useSelector } from "react-redux";

export function useCurrentUser() {
  const currentUser = useSelector((state: RootState) => state.auth.currentUser);
  return currentUser;
}
