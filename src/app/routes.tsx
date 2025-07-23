import { Route, Routes } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import IndexPage from "@/pages/IndexPage";
import LoginPage from "@/pages/LoginPage";
import { ProtectedRoute } from "@/hocs/withAuth";
import DashboardPage from "@/pages/DashboardPage";

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}
