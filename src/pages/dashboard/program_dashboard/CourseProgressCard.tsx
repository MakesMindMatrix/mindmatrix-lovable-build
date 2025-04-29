
import React from "react";

const CourseProgressCard = () => {
  return (
    <article className="flex flex-col justify-center px-9 pt-6 pb-3 mt-1.5 mb-3 w-full bg-orange-400 rounded-3xl shadow-[0px_1px_30px_rgba(69,42,124,0.1)] max-md:px-5">
      <div className="flex flex-col w-full max-w-[277px]">
        <div className="flex gap-2.5 items-end self-start font-medium text-white whitespace-nowrap">
          <span className="text-3xl leading-none">47%</span>
          <span className="text-sm">Completed</span>
        </div>
        <div className="flex overflow-hidden flex-col items-start mt-4 w-full bg-white rounded-full h-1 max-md:pr-5">
          <div className="flex shrink-0 h-1 bg-blue-700 w-[117px]" />
        </div>
        <div className="flex gap-10 items-center mt-4 font-medium tracking-tight text-white whitespace-nowrap">
          <div className="self-stretch my-auto w-[63px]">
            <div className="text-2xl">10</div>
            <div className="mt-1.5 text-sm">Completed</div>
          </div>
          <div className="self-stretch my-auto w-[61px]">
            <div className="text-2xl">2</div>
            <div className="mt-1.5 text-sm">Inprogress</div>
          </div>
          <div className="self-stretch my-auto w-[77px]">
            <div className="text-2xl">100Pts</div>
            <div className="mt-1.5 text-sm">Earned</div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default CourseProgressCard;
