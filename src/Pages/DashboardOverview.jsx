import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import Button from "../Components/Shared/Button";

const DashboardOverview = () => {
  return (
    <div className="">
      {/* head title and other */}
      <div className="flex items-center justify-between">
        {/* title */}
        <div className="space-y-1">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-secondary-content text-sm">
            Plan, prioritize and accomplish your task with ease.
          </p>
        </div>

        {/* import btn */}
        <div className="flex gap-2">
          <Button
            variant="primary"
            icon={<AiOutlinePlus />}
            label="Add Project"
          />
          <Button variant="outline" label="Import Data" />
        </div>
      </div>

      {/* body content */}
      <div></div>
    </div>
  );
};

export default DashboardOverview;
