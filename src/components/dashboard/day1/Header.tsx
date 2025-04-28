
"use client";
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="flex flex-wrap items-center px-8 py-3.5 w-full bg-blue-700 rounded-3xl max-md:px-5">
      <div className="flex gap-3 items-end self-stretch my-auto text-2xl font-semibold text-white whitespace-nowrap">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/6764a8bc52ff472aa18147d84536ab6a/d89c21cb31b1fa4db769be3d289a68f2ef379589"
          className="object-contain shrink-0 mt-0 w-7 aspect-square"
          alt="Home icon"
        />
        <h2>Home</h2>
      </div>

      <div className="flex gap-6 items-center self-stretch my-auto ml-auto">
        <div className="flex gap-8 items-center self-stretch my-auto">
          <div className="flex gap-2.5 items-center self-stretch my-auto text-base font-semibold text-white whitespace-nowrap">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/6764a8bc52ff472aa18147d84536ab6a/399ff432c3f6664c8f6ebb3cb6bc0f6bf6a797be"
              className="object-contain shrink-0 self-stretch my-auto w-5 aspect-[0.95] rounded-[134px]"
              alt="Points icon"
            />
            <span className="self-stretch my-auto">50Pts</span>
          </div>

          <div className="flex gap-2.5 items-center self-stretch my-auto">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/6764a8bc52ff472aa18147d84536ab6a/46c0b0c120e1c430ee5732294007d91a148f18f0"
              className="object-contain self-stretch my-auto w-5 aspect-[0.95] rounded-[134px]"
              alt="Time icon"
            />
            <span className="self-stretch my-auto text-base font-semibold text-white">
              1hr30min
            </span>
          </div>

          <div className="flex gap-2.5 items-center self-stretch my-auto text-base font-semibold text-white">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/6764a8bc52ff472aa18147d84536ab6a/ad4ecb7186124240b82e3e0356ed62b3013055f3"
              className="object-contain shrink-0 self-stretch my-auto w-5 aspect-[0.95] rounded-[134px]"
              alt="Completion icon"
            />
            <span className="self-stretch my-auto">0/4 completed</span>
          </div>
        </div>

        <img
          src="https://cdn.builder.io/api/v1/image/assets/6764a8bc52ff472aa18147d84536ab6a/cd1ba95f379203244c9e3f857b6fca3674f72f63"
          className="object-contain shrink-0 self-stretch my-auto aspect-square rounded-[100px] w-[45px]"
          alt="User profile"
        />
      </div>
    </header>
  );
};

export default Header;
