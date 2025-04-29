
import React from "react";

const TabNavigation: React.FC = () => {
  return (
    <nav className="self-end max-w-full text-xs font-medium leading-loose whitespace-nowrap w-[387px]">
      <div className="flex gap-0.5 items-end w-full max-w-[387px]">
        <button className="gap-2.5 self-stretch py-1 pr-6 pl-2.5 text-indigo-300">
          Mentor
        </button>
        <button className="gap-2.5 self-stretch py-1 pr-3 pl-2.5 text-white border-b-2 border-white">
          Courses
        </button>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/6764a8bc52ff472aa18147d84536ab6a/579e33d63e2029996b266db60d7dbec7a690ba14?placeholderIfAbsent=true"
          alt=""
          className="object-contain aspect-[333.33] min-w-60 w-[387px]"
        />
      </div>
    </nav>
  );
};

export default TabNavigation;
