"use client";
import React from "react";
import Logo from "./Logo";
import NavigationSection from "./NavigationSection";
import PromotionBanner from "./PromotionBanner";
import NavigationItem from "./NavigationItem";

const Sidebar: React.FC = () => {
  return (
    <aside className="self-stretch my-auto w-[191px]">
      <div className="flex flex-col w-full">
        <Logo />

        <nav className="mt-16 w-full font-semibold text-stone-500 max-md:mt-10">
          <NavigationSection title="GENERAL">
            <NavigationItem icon="https://cdn.builder.io/api/v1/image/assets/6764a8bc52ff472aa18147d84536ab6a/ff619270b330549c07f249780801b17ff750c4b8?placeholderIfAbsent=true" label="Home" isActive={true} />
            <NavigationItem icon="https://cdn.builder.io/api/v1/image/assets/6764a8bc52ff472aa18147d84536ab6a/7e1d94c3b651628311720d4575eb40e30c703256?placeholderIfAbsent=true" label="Programs" isActive={false} />
            <NavigationItem icon="https://cdn.builder.io/api/v1/image/assets/6764a8bc52ff472aa18147d84536ab6a/333534a9d2531e48b58aeaa0350713eebb17d760?placeholderIfAbsent=true" label="Tasks" isActive={false} />
          </NavigationSection>

          <NavigationSection title="PERSONAL">
            <NavigationItem icon="https://cdn.builder.io/api/v1/image/assets/6764a8bc52ff472aa18147d84536ab6a/eea80613cca571e641b235b37c741638bc06e474?placeholderIfAbsent=true" label="My Space" isActive={false} />
          </NavigationSection>
        </nav>
      </div>

      <div className="mt-32 w-full font-semibold max-md:mt-10">
        <PromotionBanner />

        <div className="mt-3.5 w-full text-base whitespace-nowrap text-stone-500">
          <NavigationItem icon="https://cdn.builder.io/api/v1/image/assets/6764a8bc52ff472aa18147d84536ab6a/89c7ad8e52814774a0643a5b1408b9d5f2d645da?placeholderIfAbsent=true" label="Support" isActive={false} />
          <NavigationItem icon="https://cdn.builder.io/api/v1/image/assets/6764a8bc52ff472aa18147d84536ab6a/89c7ad8e52814774a0643a5b1408b9d5f2d645da?placeholderIfAbsent=true" label="Settings" isActive={false} />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
