
"use client";
import React from "react";
import { useLocation } from "react-router-dom";

const Header: React.FC = () => {
  const location = useLocation();
  const path = location.pathname;
  
  // Determine active tab based on path
  const isPrograms = path.includes("programs") || path.includes("programView");
  const isTasks = path.includes("tasks");
  const isMyAccount = path.includes("my-account");
  
  // Set title and icon based on active tab
  let title = "Home";
  let iconUrl = "https://cdn.builder.io/api/v1/image/assets/6764a8bc52ff472aa18147d84536ab6a/d89c21cb31b1fa4db769be3d289a68f2ef379589";
  
  if (isPrograms) {
    title = "Programs";
    iconUrl = "https://cdn.builder.io/api/v1/image/assets/6764a8bc52ff472aa18147d84536ab6a/3430fc681841546943ce12f63288136245f101f2";
  } else if (isTasks) {
    title = "Tasks";
    iconUrl = "https://cdn.builder.io/api/v1/image/assets/6764a8bc52ff472aa18147d84536ab6a/333534a9d2531e48b58aeaa0350713eebb17d760";
  } else if (isMyAccount) {
    title = "User Profile";
    iconUrl = "https://cdn.builder.io/api/v1/image/assets/6764a8bc52ff472aa18147d84536ab6a/18730a68846538343f892bde033ffcb8d6f2be3e";
  }

  return (
    <header className={`flex flex-wrap items-center px-8 py-3.5 w-full ${isMyAccount ? 'bg-blue-600' : 'bg-blue-700'} rounded-3xl max-md:px-5`}>
      <div className="flex gap-3 items-end self-stretch my-auto text-2xl font-semibold text-white whitespace-nowrap">
        <img
          src={iconUrl}
          className="object-contain shrink-0 mt-0 w-7 aspect-square brightness-0 invert"
          alt={`${title} icon`}
        />
        <h2>{title}</h2>
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
