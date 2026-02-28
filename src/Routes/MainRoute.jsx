import { createBrowserRouter } from "react-router";
import DashboardOverview from "../Pages/DashboardOverview";
import DashboardLayout from "../Layouts/DashboardLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: DashboardLayout,
    children: [{ index: true, Component: DashboardOverview }],
  },
]);
