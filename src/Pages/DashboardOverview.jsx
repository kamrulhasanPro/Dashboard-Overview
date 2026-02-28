import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import Button from "../Components/Shared/Button";
import { useFetch } from "../Hooks/useFetch";
import StatCard from "../Components/Cards/StatCard";
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

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>error</p>;
  }

  const stats = getStatsData(data);

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
      <div>
        {/* statsCard */}
        <section className="grid grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <StatCard key={i} stat={stat} />
          ))}
        </section>
      </div>
    </div>
  );
};

export default DashboardOverview;
