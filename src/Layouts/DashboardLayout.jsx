import React from "react";
import { Outlet } from "react-router";
import Sidebar from "../Components/Shared/Sidebar";
import TopBar from "../Components/Shared/TopBar";

const DashboardLayout = () => {
  return (
    <div className="flex p-4 gap-4 min-h-screen">
      {/* sidebar */}
      <aside className="w-54 bg-base-200 rounded-xl">
        <Sidebar />
      </aside>

      <div className="w-full space-y-4">
        {/* navbar */}
        <div className=" bg-base-200 rounded-xl">
          <TopBar />
        </div>

        {/* main */}
        <main className="bg-base-200 rounded-xl min-h-[calc(100vh-87px-48px)] p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
