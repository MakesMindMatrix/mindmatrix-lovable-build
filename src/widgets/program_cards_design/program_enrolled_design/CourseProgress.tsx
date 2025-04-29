
import React from "react";
import ProgressBar from "./ProgressBar";

interface CourseProgressProps {
  percentComplete: number;
  completed: number;
  inProgress: number;
  pointsEarned: number;
}

const CourseProgress: React.FC<CourseProgressProps> = ({
  percentComplete,
  completed,
  inProgress,
  pointsEarned,
}) => {
  return (
    <section className="flex flex-col justify-center px-9 pt-3 pb-3.5 mt-1 w-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-3xl shadow-[0px_1px_30px_rgba(69,42,124,0.1)]">
      <div className="flex flex-col w-full max-w-[277px]">
        <div className="flex gap-2.5 items-end self-start font-medium text-white whitespace-nowrap">
          <h3 className="text-3xl leading-none">{percentComplete}%</h3>
          <span className="text-sm">Completed</span>
        </div>

        <ProgressBar percentComplete={percentComplete} />

        <div className="flex gap-10 items-center mt-4 font-medium tracking-tight text-white whitespace-nowrap">
          <ProgressStat value={completed} label="Completed" width="w-[63px]" />
          <ProgressStat
            value={inProgress}
            label="Inprogress"
            width="w-[61px]"
          />
          <ProgressStat
            value={`${pointsEarned}Pts`}
            label="Earned"
            width="w-[77px]"
          />
        </div>
      </div>
    </section>
  );
};

interface ProgressStatProps {
  value: number | string;
  label: string;
  width: string;
}

const ProgressStat: React.FC<ProgressStatProps> = ({ value, label, width }) => {
  return (
    <div className={`self-stretch my-auto ${width}`}>
      <div className="text-2xl">{value}</div>
      <div className="mt-1.5 text-sm">{label}</div>
    </div>
  );
};

export default CourseProgress;
