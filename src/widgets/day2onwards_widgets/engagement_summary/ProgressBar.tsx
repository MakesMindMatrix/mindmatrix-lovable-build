
"use client";

import React from "react";

interface ProgressBarProps {
  percentage: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ percentage }) => {
  // Ensure percentage is between 0 and 100
  const validPercentage = Math.min(Math.max(percentage, 0), 100);

  return (
    <div className="w-full h-[22px] bg-transparent relative">
      <div
        className="h-full bg-slate-400 absolute left-0 top-0"
        style={{ width: `${validPercentage}%` }}
      />
    </div>
  );
};

export default ProgressBar;
