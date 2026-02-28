import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import Button from "../Components/Shared/Button";
import { useFetch } from "../Hooks/useFetch";
import StatCard from "../Components/Cards/StatCard";
import ProjectAnalyticsChart from "../Components/Charts/ProjectAnalyticsChart";
import ReminderCard from "../Components/Cards/ReminderCard";
import ProjectList from "../Components/Sections/ProjectList";
import TeamTable from "../Components/Sections/TeamTable";
import ProjectProgressChart from "../Components/Charts/ProjectProgressChart";
import TimeTracker from "../Components/Sections/TimeTracker";

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

  const {
    data: products,
    loading: productsLoading,
    error: productsError,
  } = useFetch("https://task-api-eight-flax.vercel.app/api/products");

  const {
    data: members,
    loading: membersLoading,
    error: membersError,
  } = useFetch("https://task-api-eight-flax.vercel.app/api/users");

  if (loading || analyticsLoader || productsLoading || membersLoading) {
    return <p>Loading...</p>;
  }

  if (error || productsError || analyticsError || membersError) {
    return <p>Error</p>;
  }

  const stats = getStatsData(data);

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-secondary-content text-sm">
            Plan, prioritize and accomplish your task with ease.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-2">
          <Button
            variant="primary"
            icon={<AiOutlinePlus />}
            label="Add Project"
          />
          <Button variant="outline" label="Import Data" />
        </div>
      </div>

      <div className="space-y-4">
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <StatCard key={i} stat={stat} />
          ))}
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          <div className="lg:col-span-6">
            <ProjectAnalyticsChart analytics={analytics} />
          </div>

          <div className="lg:col-span-3">
            <ReminderCard />
          </div>

          <div className="lg:col-span-3">
            <ProjectList products={products} />
          </div>

          <div className="lg:col-span-5 overflow-x-auto">
            <TeamTable members={members} />
          </div>

          <div className="lg:col-span-4">
            <ProjectProgressChart />
          </div>

          <div className="lg:col-span-3">
            <TimeTracker />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;
