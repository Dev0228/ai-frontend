import { Header } from "@/containers/Header";
import { Outlet } from "react-router-dom";

export function AuthenticatedLayout() {
  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Header />

      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
}
