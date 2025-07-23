import { getCurrentUser } from "@/services";
import { store } from "@/store";
import { setCurrentUser } from "@/store/slices/authSlice";

export async function initUser() {
  const token = localStorage.getItem("token");

  if (token) {
    try {
      const response = await getCurrentUser();
      if (response?.success && response.data?.user) {
        store.dispatch(setCurrentUser(response.data.user));
      } else {
        localStorage.removeItem("token");
      }
    } catch (error) {
      localStorage.removeItem("token");
    }
  }
}

export async function initApp() {
  await initUser();
  // other initializations for the whole app...
}
