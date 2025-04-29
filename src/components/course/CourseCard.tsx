
"use client";

import React from "react";
import IconBadge from "./IconBadge";

interface CourseCardProps {
  courseNumber: string;
  title: string;
  description: string;
  hours: number;
  sessions: number;
  iconUrl: string;
  clockIconUrl?: string;
}

const CourseCard: React.FC<CourseCardProps> = ({
  courseNumber,
  title,
  description,
  hours,
  sessions,
  iconUrl,
  clockIconUrl = "https://cdn.builder.io/api/v1/image/assets/6764a8bc52ff472aa18147d84536ab6a/048aa096469c9a04e41726b054cd3427cf0b5266?placeholderIfAbsent=true"
}) => {
  return (
    <article className="flex gap-4 justify-between items-start w-full">
      <IconBadge iconUrl={iconUrl} alt="Course icon" />

      <div className="flex flex-col justify-center p-9 font-medium text-white rounded-3xl border border-white border-solid bg-zinc-500 min-w-60 shadow-[0px_1px_30px_rgba(69,42,124,0.1)] w-[388px]">
        <div className="flex flex-col w-full">
          <header className="flex flex-col w-full">
            <span className="gap-2.5 self-start px-2.5 py-1 text-xs leading-loose border border-white border-solid bg-white bg-opacity-0 rounded-[100px]">
              {courseNumber}
            </span>
            <h2 className="mt-2.5 text-xl leading-none">
              {title}
            </h2>
          </header>

          <p className="mt-4 text-base leading-5">
            {description}
          </p>

          <div className="flex flex-col justify-center mt-4 max-w-full text-sm leading-loose w-[158px]">
            <div className="flex gap-6 items-center w-full">
              <div className="flex gap-1.5 items-center self-stretch my-auto">
                <img
                  src={clockIconUrl}
                  alt="Clock icon"
                  className="object-contain shrink-0 self-stretch my-auto w-3 aspect-square"
                />
                <span className="self-stretch my-auto">
                  {hours} Hours
                </span>
              </div>
              <span className="self-stretch my-auto">
                {sessions} Sessions
              </span>
            </div>
          </div>

          <button className="gap-2.5 self-start px-5 py-3 mt-4 text-sm font-semibold leading-none text-center bg-white rounded-[100px] text-neutral-400">
            View Course
          </button>
        </div>
      </div>
    </article>
  );
};

export default CourseCard;
