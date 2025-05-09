"use client";

import React from "react";
import { RadarChart, SkillData } from "./RadarChart";

interface SkillMomentumCardProps {
  currentLevel?: number;
  goalLevel?: number;
  skills?: SkillData[];
}

export const SkillMomentumCard: React.FC<SkillMomentumCardProps> = ({
  currentLevel = 4,
  goalLevel = 10,
  skills = [
    { name: "Coding", currentLevel: 4, goalLevel: 10 },
    { name: "Design", currentLevel: 6, goalLevel: 10 },
    { name: "Testing", currentLevel: 3, goalLevel: 8 },
    { name: "DevOps", currentLevel: 2, goalLevel: 7 },
    { name: "Architecture", currentLevel: 5, goalLevel: 9 },
    { name: "Leadership", currentLevel: 4, goalLevel: 8 },
    { name: "Communication", currentLevel: 7, goalLevel: 10 },
    { name: "Problem Solving", currentLevel: 6, goalLevel: 9 },
    { name: "Teamwork", currentLevel: 8, goalLevel: 10 },
    { name: "Domain Knowledge", currentLevel: 5, goalLevel: 9 },
  ],
}) => {
  return (
    <section className="flex flex-col items-center px-5 py-8 mx-auto max-w-none rounded-3xl border-solid shadow-lg backdrop-blur-[35px] border-[3px] border-white border-opacity-50 w-[309px] max-md:max-w-[991px] max-sm:max-w-(--breakpoint-sm)">
      <header className="flex gap-4 items-center mb-5">
        <div>
          <svg
            width="21"
            height="22"
            viewBox="0 0 21 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="icon"
            style={{ width: "21px", height: "22px" }}
          >
            <g clipPath="url(#clip0_504_1674)">
              <path
                d="M14.625 19.4119L18.6003 17.1241V12.5117L14.625 14.7996V19.4119Z"
                fill="white"
              ></path>
              <path
                d="M9.74609 22.2244L13.7214 19.9366V15.3242L9.74609 17.6121V22.2244Z"
                fill="white"
              ></path>
              <path
                d="M4.87109 19.9366L8.8464 22.2244V17.6121L4.87109 15.3242V19.9366Z"
                fill="white"
              ></path>
              <path
                d="M9.30343 12.25L5.32812 14.5378L9.30343 16.8623L13.2772 14.5378L9.30343 12.25Z"
                fill="white"
              ></path>
              <path
                d="M13.2772 3.28785L9.30343 1L5.32812 3.28785L9.30343 5.61229L13.2772 3.28785Z"
                fill="white"
              ></path>
              <path
                d="M14.1745 3.8125L10.1992 6.13694L14.1745 8.42479L18.1483 6.13694L14.1745 3.8125Z"
                fill="white"
              ></path>
              <path
                d="M14.625 13.7869L18.6003 11.4991V6.88672L14.625 9.17456V13.7869Z"
                fill="white"
              ></path>
              <path
                d="M9.74609 11.4991L13.7214 13.7869V9.17456L9.74609 6.88672V11.4991Z"
                fill="white"
              ></path>
              <path
                d="M8.39833 6.13694L4.42453 3.8125L0.449219 6.13694L4.42453 8.42479L5.96099 7.52549L8.39833 6.13694Z"
                fill="white"
              ></path>
              <path
                d="M4.87109 9.17456V13.7869L8.8464 11.4991V6.88672L4.94609 9.13647L4.87109 9.17456Z"
                fill="white"
              ></path>
              <path
                d="M0 11.4991L3.97531 13.7869V9.17456L0 6.88672V11.4991Z"
                fill="white"
              ></path>
              <path
                d="M0 17.1241L3.97531 19.4119V14.7996L0 12.5117V17.1241Z"
                fill="white"
              ></path>
            </g>
            <defs>
              <clipPath id="clip0_504_1674">
                <rect
                  width="20.6565"
                  height="20.6565"
                  fill="white"
                  transform="translate(0 0.960938)"
                ></rect>
              </clipPath>
            </defs>
          </svg>
        </div>
        <h2 className="text-xl font-bold text-white">Skill Momentum</h2>
      </header>

      <div className="flex gap-8 mb-5">
        <div className="flex flex-col items-start">
          <div className="w-2.5 h-2.5 bg-orange-600" />
          <span className="text-base text-white">{currentLevel}</span>
          <span className="text-xs text-white">Current Level</span>
        </div>
        <div className="flex flex-col items-start">
          <div className="w-2.5 h-2.5 bg-lime-400" />
          <span className="text-base text-white">{goalLevel}</span>
          <span className="text-xs text-white">Goal Level</span>
        </div>
      </div>

      <div className="relative h-[233px] w-[269px]">
        <RadarChart
          skills={skills}
          maxLevel={10}
          size={230}
          currentLevelColor="#FA461F"
          goalLevelColor="#C8FE03"
          gridColor="#D9D9D0"
        />
      </div>
    </section>
  );
};

export default SkillMomentumCard;
