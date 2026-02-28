import {
  BarElement,
  CategoryScale,
  Chart as ChartJs,
  LinearScale,
  Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";

const roundedBarsPlugin = {
  id: "roundedBars",
  afterDatasetsDraw(chart) {
    const { ctx } = chart;
    chart.getDatasetMeta(0).data.forEach((bar) => {
      const { x, y, width, height } = bar;
      const radius = width / 2; // full pill shape

      ctx.save();
      ctx.beginPath();
      ctx.roundRect(x - width / 2, y, width, height, radius);
      ctx.fillStyle = bar.options.backgroundColor;
      ctx.fill();
      ctx.restore();
    });
  },
};

ChartJs.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  roundedBarsPlugin,
);

const ProjectAnalyticsChart = ({ analytics }) => {
  const maxViews = Math.max(...analytics.map((a) => a.views));
  const getBarColor = (value, max) => {
    const ratio = value / max; // 0 to 1

    if (ratio >= 0.9) return "#1a7a4a"; // darkest green
    if (ratio >= 0.7) return "#2db36e"; // bright green
    if (ratio >= 0.5) return "#86efac"; // light green
    if (ratio >= 0.3) return "#bbf7d0"; // very light green
    return "#d1fae5"; // almost white green
  };

  const data = {
    labels: analytics.map(
      (a) =>
        new Date(a.date).toLocaleDateString("en-US", { weekday: "short" })[0],
    ),

    datasets: [
      {
        data: analytics.map((a) => a.views),
        backgroundColor: analytics.map((a) => getBarColor(a.views, maxViews)),

        borderRadius: 20,
        borderWidth: 0,
        barThickness: 40,
        borderSkipped: false,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          // title — show full date
          title: (items) => {
            const index = items[0].dataIndex;
            return new Date(analytics[index].date).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
            });
          },
          // show all 3 fields
          beforeBody: () => "──────────",
          label: (item) => {
            const index = item.dataIndex;
            const d = analytics[index];
            return [
              `Views       : ${d.views.toLocaleString()}`,
              `Clicks      : ${d.clicks.toLocaleString()}`,
              `Conversions : ${d.conversions}`,
            ];
          },
        },
        // styling
        backgroundColor: "#1a1a1a",
        titleColor: "#ffffff",
        bodyColor: "#d1d5db",
        padding: 12,
        cornerRadius: 10,
        displayColors: false, // hide color box
      },
    },
    scales: {
      x: {
        grid: { display: false },
        border: { display: false }, // hide x axis line
      },
      y: {
        display: false,
      },
    },
  };
  return (
    <div className="bg-white p-4 rounded-xl">
      <p className="text-sm font-medium">Project Analytics</p>

      <Bar data={data} options={options} />
    </div>
  );
};

export default ProjectAnalyticsChart;
