import { createBrowserRouter } from "react-router";
import DashboardOverview from "../Pages/DashboardOverview";
import DashboardLayout from "../Layouts/DashboardLayout";
import PrivateRoute from "../Components/Shared/PrivateRoute";
import LoginPage from "../Pages/LoginPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [{ index: true, Component: DashboardOverview }],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);
