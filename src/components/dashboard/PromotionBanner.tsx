
import React from "react";

const PromotionBanner: React.FC = () => {
  return (
    <section className="p-4 text-white bg-blue-700 rounded-2xl rotate-[4.5911985324664784e-10rad]">
      <h3 className="text-sm font-bold rotate-[-4.5911985324664784e-10rad]">
        Get 50% Off on MindMatrix Genesis Subscription!
      </h3>
      <p className="mt-5 text-xs rotate-[-4.5911985324664784e-10rad]">
        Hurry ends in 2 days
      </p>
      <button className="flex gap-1.5 items-start py-3 pr-14 pl-3 mt-5 text-base leading-none text-center text-blue-700 bg-white rounded-xl rotate-[-4.5911985324664784e-10rad] max-md:pr-5">
        <span>Start Now</span>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/6764a8bc52ff472aa18147d84536ab6a/7107b7e1f7f318333f57570c208f94704665efd3?placeholderIfAbsent=true"
          alt="Arrow icon"
          className="object-contain shrink-0 w-5 aspect-square"
        />
      </button>
    </section>
  );
};

export default PromotionBanner;
