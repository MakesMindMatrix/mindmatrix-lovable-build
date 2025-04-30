
import React from "react";

const PromoBanner = () => {
  return (
    <section className="overflow-hidden px-3 pt-5 pb-3 mt-5 w-full text-white bg-blue-700 rounded-2xl rotate-[4.5911985324664784e-10rad] shadow-[0px_1px_30px_rgba(69,42,124,0.1)]">
      <div>
        <h3 className="text-sm font-bold rotate-[-4.5911985324664784e-10rad]">
          Get 50% Off on MindMatrix Genesis Subscription!
        </h3>
        <p className="mt-5 text-xs rotate-[-4.5911985324664784e-10rad]">
          Hurry ends in 2 days
        </p>
        <button className="flex overflow-hidden flex-col justify-center items-start p-3 mt-5 w-full text-base leading-none text-center text-blue-700 bg-white rounded-xl rotate-[-4.5911985324664784e-10rad] max-md:pr-5">
          <div className="flex gap-1.5 items-start">
            <span>Start Now</span>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/6764a8bc52ff472aa18147d84536ab6a/1fc21fba54ef9e7d312daa8893f66ca6b74f5f36?placeholderIfAbsent=true"
              className="object-contain shrink-0 w-5 aspect-square"
              alt="Arrow icon"
            />
          </div>
        </button>
      </div>
    </section>
  );
};

export default PromoBanner;
