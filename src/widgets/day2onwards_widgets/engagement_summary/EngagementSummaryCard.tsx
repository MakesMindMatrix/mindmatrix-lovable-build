
"use client";

import React from "react";
import ProgressBar from "./ProgressBar";

interface EngagementSummaryCardProps {
  streak: number;
  timeInvested: string;
  weeklyConsistency: number;
  iconUrl?: string;
}

const EngagementSummaryCard: React.FC<EngagementSummaryCardProps> = ({
  streak = 4,
  timeInvested = "3h30m",
  weeklyConsistency = 70,
  iconUrl = "https://cdn.builder.io/api/v1/image/assets/6764a8bc52ff472aa18147d84536ab6a/07437f2b69f98a3e67a090bdeeee94c55163791b?placeholderIfAbsent=true",
}) => {
  return (
    <article className="flex overflow-hidden flex-col items-start pt-8 pr-10 rounded-3xl border border-solid bg-stone-900 border-neutral-400 max-w-[309px] shadow-[0px_1px_30px_rgba(69,42,124,0.1)]">
      <div className="flex flex-col ml-5 w-full tracking-tight">
        <header className="w-full">
          <div className="flex gap-4 items-center w-full text-xl font-semibold text-white">
            <img
              src={iconUrl}
              alt="Engagement icon"
              className="object-contain shrink-0 self-stretch my-auto aspect-square w-[21px]"
            />
            <h2 className="self-stretch my-auto">Engagement Summary</h2>
          </div>

          <div className="flex gap-10 items-center mt-7 w-full font-medium">
            <div className="self-stretch my-auto w-[123px]">
              <p className="text-2xl text-white">{streak}</p>
              <p className="mt-1.5 text-sm text-neutral-400">
                Daily Learning Streak
              </p>
            </div>
            <div className="self-stretch my-auto w-[82px]">
              <p className="text-2xl text-white">{timeInvested}</p>
              <p className="mt-1.5 text-sm text-neutral-400">Time Invested</p>
            </div>
          </div>
        </header>

        <div className="flex gap-1.5 items-center self-center mt-8 font-medium">
          <p className="self-stretch my-auto text-sm text-neutral-400">
            Weekly Consistency
          </p>
          <p className="self-stretch my-auto text-2xl text-white">
            {weeklyConsistency}%
          </p>
        </div>
      </div>

      <div className="flex items-end mt-1.5 w-full">
        <ProgressBar percentage={weeklyConsistency} />
      </div>
    </article>
  );
};

export default EngagementSummaryCard;
