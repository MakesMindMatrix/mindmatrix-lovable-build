
import React from "react";
import PerformanceIcon from "./PerformanceIcon";
import ProgressBar from "./ProgressBar";
import StatItem from "./StatItem";

const PerformanceSummary: React.FC = () => {
  // Data for the performance summary
  const tasksCompleted = 3;
  const tasksMissed = 2;
  const careerCoins = 100;
  const completionPercentage = 60;

  return (
    <section className="flex flex-col items-start pt-8 pr-11 pb-6 pl-5 mx-auto max-w-none rounded-3xl border-solid shadow-lg backdrop-blur-[35px] border-[3px] border-white border-opacity-50 h-[305px] w-[309px] max-md:gap-5 max-md:p-5 max-md:max-w-[991px] max-sm:p-4 max-sm:max-w-(--breakpoint-sm) max-sm:rounded-lg">
      <header className="flex gap-4 items-center">
        <div>
          <PerformanceIcon />
        </div>
        <h2 className="text-xl font-bold tracking-tight text-white max-md:text-lg max-sm:text-base">
          Performance Summary
        </h2>
      </header>

      <div className="flex flex-col gap-7 items-start w-full">
        <div className="flex gap-14 items-center w-full">
          <StatItem
            value={tasksCompleted}
            label="Tasks Completed"
            valueColor="text-indigo-400"
          />
          <StatItem value={tasksMissed} label="Tasks Missed" />
        </div>

        <div>
          <ProgressBar progress={completionPercentage} />
        </div>

        <div className="flex gap-16 items-center w-full">
          <StatItem
            value={`${careerCoins}Pts`}
            label="Career coins earned"
            valueColor="text-white"
          />
          <StatItem
            value={`${completionPercentage}%`}
            label="Completed"
            valueColor="text-white"
          />
        </div>
      </div>
    </section>
  );
};

export default PerformanceSummary;
