import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import Button from "../Components/Shared/Button";
import { useFetch } from "../Hooks/useFetch";
import StatCard from "../Components/Cards/StatCard";
import ProjectAnalyticsChart from "../Components/Charts/ProjectAnalyticsChart";
import ReminderCard from "../Components/Cards/ReminderCard";
const getStatsData = (overview) => [
  {
    title: "Total Users",
    value: overview?.totalUsers,
    trend: "Increased from last month",
    variant: "dark",
  },
  {
    title: "Active Users",
    value: overview?.activeUsers,
    trend: "Increased from last month",
  },
  {
    title: "Revenue",
    value: `$${(overview?.revenue / 1000).toFixed(1)}k`,
    trend: "Increased from last month",
  },
  {
    title: "Growth",
    value: `${overview?.growth}%`,
    trend: "On Discuss",
  },
];
const DashboardOverview = () => {
  const { data, loading, error } = useFetch(
    "https://task-api-eight-flax.vercel.app/api/overview",
  );

  const {
    data: analytics,
    loading: analyticsLoader,
    error: analyticsError,
  } = useFetch("https://task-api-eight-flax.vercel.app/api/analytics");

  if (loading || analyticsLoader) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>error</p>;
  }

  const stats = getStatsData(data);
  console.log(analytics);
  return (
    <div className="space-y-4">
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
      <div className="space-y-4">
        {/* statsCard */}
        <section className="grid grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <StatCard key={i} stat={stat} />
          ))}
        </section>

        {/* grid layout */}
        <div className="grid grid-cols-12 gap-4">
          {/* Row 1 */}
          {/* Analytics */}
          <div className="col-span-6">
            <ProjectAnalyticsChart analytics={analytics} />
          </div>
          {/* Reminders */}
          <div className="col-span-3">
            <ReminderCard />
          </div>
          {/* Project List */}
          <div className="col-span-3"> 
            
          </div>

          {/* Row 2 */}
          <div className="col-span-5"> {/* Team Collaboration */}</div>
          <div className="col-span-4"> {/* Project Progress */}</div>
          <div className="col-span-3"> {/* Time Tracker */}</div>
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;
