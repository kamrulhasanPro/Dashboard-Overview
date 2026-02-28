import React from "react";
import { Outlet } from "react-router";
import Sidebar from "../Components/Shared/Sidebar";
import TopBar from "../Components/Shared/TopBar";

const DashboardLayout = () => {
  return (
    <div className="flex p-4 gap-4 min-h-screen max-w-7xl mx-auto">
      {/* sidebar */}
      <aside className="w-64 bg-base-200 rounded-xl">
        <Sidebar />
      </aside>

      <div className="w-full space-y-4">
        {/* navbar */}
        <div className=" bg-base-200 rounded-xl">
          <TopBar />
        </div>

        {/* main */}
        <main className="bg-base-200 rounded-xl max-h-[calc(100vh-87px-48px)] p-4 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
