import React from "react";
import { Doughnut } from "react-chartjs-2";

import { ArcElement, Tooltip, Legend, Chart as ChartJs } from "chart.js";
const centerTextPlugin = {
  id: "centerText",
  afterDraw(chart) {
    const {
      ctx,
      chartArea: { width, height },
    } = chart;
    ctx.save();

    // big percentage
    ctx.font = "bold 32px sans-serif";
    ctx.fillStyle = "#1a1a1a";
    ctx.textAlign = "center";
    ctx.fillText("41%", width / 2, height * 0.85);

    // small label
    ctx.font = "14px sans-serif";
    ctx.fillStyle = "#888";
    ctx.fillText("Project Ended", width / 2, height * 0.85 + 24);

    ctx.restore();
  },
};

ChartJs.register(ArcElement, Tooltip, Legend);
const ProjectProgressChart = () => {
  const data = {
    labels: ["Completed", "In Progress", "Pending"],
    datasets: [
      {
        data: [41, 35, 24],
        backgroundColor: [
          "#2db36e", // completed — bright green
          "#1a7a4a", // in progress — dark green
          "#99a1af ", // pending — striped gray (use solid for now)
        ],
        borderWidth: 0,
        cutout: "75%", // makes it thin ring
        circumference: 180,
        rotation: -90,
      },
    ],
  };

  const options = {
    circumference: 180, // half circle
    rotation: -90, // start from left
    plugins: {
      legend: { display: false }, // build custom legend
    },
  };

  return (
    <div className="bg-white p-4 rounded-xl">
      <p className="text-sm font-medium">Project Progress</p>
      <Doughnut data={data} options={options} plugins={[centerTextPlugin]} />
      <div className="flex items-center justify-center gap-4 ">
        {/* complete */}
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 rounded-full bg-[#2db36e]" />
          <span className="text-xs">Completed</span>
        </div>

        {/* in progress */}
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 rounded-full bg-[#1a7a4a]" />
          <span className="text-xs">In Progress</span>
        </div>

        {/* Pending */}
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 rounded-full bg-gray-400" />
          <span className="text-xs">Pending</span>
        </div>
      </div>
    </div>
  );
};

export default ProjectProgressChart;
