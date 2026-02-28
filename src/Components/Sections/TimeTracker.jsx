import React, { useEffect, useState } from "react";
import { BsPauseFill, BsStopFill } from "react-icons/bs";
import { FaPlay } from "react-icons/fa";

const TimeTracker = () => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) {
      return;
    }

    const interval = setInterval(() => {
      setSeconds((s) => s + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [seconds, isRunning]);

  const format = (secs) => {
    const h = String(Math.floor(secs / 3600)).padStart(2, "0");
    const m = String(Math.floor((secs % 3600) / 60)).padStart(2, "0");
    const s = String(secs % 60).padStart(2, "0");
    return `${h}:${m}:${s}`;
  };

  return (
    <div className="bg-[#1a7a4a] rounded-2xl p-5 relative overflow-hidden h-full ">
      {/* layer 1 — background glow effect */}
      <div
        className="absolute inset-0 opacity-30 flex items-center justify-center h-full"
        style={{
          backgroundImage:
            "radial-gradient(circle at 70% 50%, #2db36e 0%, transparent 60%)",
        }}
      />
      <div className="relative z-10 flex items-center justify-center flex-col gap-4">
        {/* title */}
        <p className="text-white/80 text-sm font-medium">Time Tracker</p>

        {/* timer display */}
        <p className="text-3xl font-bold text-white tracking-widest font-mono text-center items-center justify-center">
          {format(seconds)}
        </p>

        {/* buttons */}
        <div className="flex items-center justify-center gap-3">
          {/* pause & play */}
          <button
            onClick={() => setIsRunning(!isRunning)}
            className="btn btn-circle bg-white/20 hover:bg-white/30 border-0 text-white shadow-none"
          >
            {isRunning ? <BsPauseFill size={18} /> : <FaPlay size={18} />}
          </button>

          {/* time reset  */}
          <button
            onClick={() => {
              setIsRunning(false);
              setSeconds(0);
            }}
            className="btn btn-circle bg-red-500 hover:bg-red-600 border-0 text-white shadow-none"
          >
            <BsStopFill size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TimeTracker;
