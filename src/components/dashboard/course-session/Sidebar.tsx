
"use client";
import React from "react";
import NavigationItem from "./NavigationItem";
import PromoBanner from "./PromoBanner";
import UserProfile from "./UserProfile";

const Sidebar = () => {
  return (
    <aside className="flex flex-col self-stretch my-auto w-[191px]">
      <div className="flex gap-2 items-center self-start text-2xl font-medium tracking-tighter whitespace-nowrap text-neutral-900">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/6764a8bc52ff472aa18147d84536ab6a/5802f9002d90883dc1bf0288d9022d0c1d7ecc53?placeholderIfAbsent=true"
          className="object-contain shrink-0 self-stretch my-auto aspect-[1.65] w-[38px]"
          alt="MindMatrix logo"
        />
        <h1 className="self-stretch my-auto">MindMatrix</h1>
      </div>
      <nav className="mt-16 w-full text-stone-500 max-md:mt-10">
        <div className="w-full font-semibold">
          <div className="w-full">
            <div className="w-full whitespace-nowrap">
              <h2 className="text-sm">GENERAL</h2>
              <div className="mt-4 w-full text-base">
                <NavigationItem icon="https://cdn.builder.io/api/v1/image/assets/6764a8bc52ff472aa18147d84536ab6a/5906c964ac50d8f471b6a677100e4f31e146a8aa?placeholderIfAbsent=true" text="Home" isActive={true} />
                <NavigationItem icon="https://cdn.builder.io/api/v1/image/assets/6764a8bc52ff472aa18147d84536ab6a/7bcd36b90df8cfd087885c37ece9a5db0fdc5234?placeholderIfAbsent=true" text="Courses" />
                <NavigationItem icon="https://cdn.builder.io/api/v1/image/assets/6764a8bc52ff472aa18147d84536ab6a/5cc10efceee7a7f057787984e20e4318df523089?placeholderIfAbsent=true" text="Tasks" />
              </div>
            </div>
            <div className="mt-6 w-full">
              <h2 className="text-sm">PERSONAL</h2>
              <NavigationItem icon="https://cdn.builder.io/api/v1/image/assets/6764a8bc52ff472aa18147d84536ab6a/5906c964ac50d8f471b6a677100e4f31e146a8aa?placeholderIfAbsent=true" text="My Space" />
            </div>
          </div>
          <PromoBanner />
          <div className="mt-5 w-full text-base whitespace-nowrap">
            <NavigationItem icon="https://cdn.builder.io/api/v1/image/assets/6764a8bc52ff472aa18147d84536ab6a/5aa29086e2c665416805723c9d83c42521738316?placeholderIfAbsent=true" text="Support" />
            <NavigationItem icon="https://cdn.builder.io/api/v1/image/assets/6764a8bc52ff472aa18147d84536ab6a/edacbccb8a414d1b7eb8ba9bb7f26b020a22a365?placeholderIfAbsent=true" text="Settings" />
          </div>
        </div>
        <UserProfile />
      </nav>
    </aside>
  );
};

export default Sidebar;
