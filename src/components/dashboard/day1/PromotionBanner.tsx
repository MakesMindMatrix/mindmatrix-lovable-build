
"use client";
import React from "react";

const PromotionBanner: React.FC = () => {
  return (
    <article className="p-4 text-white bg-blue-700 rounded-2xl">
      <h3 className="text-sm font-bold">
        Get 50% Off on MindMatrix Genesis Subscription!
      </h3>
      <p className="mt-5 text-xs">Hurry ends in 2 days</p>
      <button className="flex gap-1.5 items-start py-3 pr-14 pl-3 mt-5 text-base leading-none text-center text-blue-700 bg-white rounded-xl w-full max-md:pr-5">
        <span>Start Now</span>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/6764a8bc52ff472aa18147d84536ab6a/7df789646ae34f863d6fb1c8821bc4bd349d13e3"
          className="object-contain shrink-0 w-5 aspect-square"
          alt="Arrow icon"
        />
      </button>
    </article>
  );
};

export default PromotionBanner;
