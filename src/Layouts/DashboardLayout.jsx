import React from "react";
import { Outlet } from "react-router";
import Sidebar from "../Components/Shared/Sidebar";
import Navbar from "../Components/Shared/Navbar";

const DashboardLayout = () => {
  return (
    <div className="flex p-4 gap-4 min-h-screen">
      {/* sidebar */}
      <aside className="w-54 bg-base-200 rounded-xl">
        <Sidebar />
      </aside>

      <div>
        {/* navbar */}
        <nav>
          <Navbar />
        </nav>

        {/* main */}
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
