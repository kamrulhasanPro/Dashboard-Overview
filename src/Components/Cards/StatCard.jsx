import { MdOutlineArrowOutward } from "react-icons/md";

const StatCard = ({ stat }) => {
  const { title, value, trend, variant = "light" } = stat || {};
  const isLight = variant === "light";

  return (
    <div
      className={`rounded-2xl p-5 flex flex-col gap-4 transition-colors
      ${isLight ? "bg-white text-neutral hover:bg-primary/5" : "bg-gradient-to-br from-[#1a7a4a] to-[#2db36e] text-white hover:from-[#155e3a] hover:to-[#259e5e] "}`}
    >
      {/* title & arrow icon */}
      <div className="flex items-center justify-between">
        <p className={`text-sm font-medium `}>{title}</p>

        <div
          className={`p-2  rounded-full text-md ${isLight ? "border" : "bg-white text-black "}`}
        >
          <MdOutlineArrowOutward />
        </div>
      </div>

      {/* value */}
      <p
        className={`text-4xl font-bold ${isLight ? "text-neutral" : "text-white"}`}
      >
        {value}
      </p>

      {/*  */}
      <div className="flex items-center gap-1 text-xs">
        {/* small icon */}
        <span className={isLight ? "text-accent" : "text-yellow-100"}>
          {trend}
        </span>
      </div>
    </div>
  );
};

export default StatCard;
