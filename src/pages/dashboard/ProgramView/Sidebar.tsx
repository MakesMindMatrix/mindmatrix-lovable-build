
import React from "react";
import NavigationItem from "./NavigationItem";
import PromoBanner from "./PromoBanner";
import UserProfile from "./UserProfile";
import { Settings } from "lucide-react";
import SettingsDropdown from "@/components/dashboard/SettingsDropdown";

const Sidebar = () => {
  return (
    <aside className="flex flex-col bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-6 w-[230px]">
      <div className="flex gap-2 items-center self-start text-2xl font-medium tracking-tighter whitespace-nowrap text-white">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/6764a8bc52ff472aa18147d84536ab6a/5802f9002d90883dc1bf0288d9022d0c1d7ecc53?placeholderIfAbsent=true"
          className="object-contain shrink-0 self-stretch my-auto aspect-[1.65] w-[38px]"
          alt="MindMatrix logo"
        />
        <h1 className="self-stretch my-auto">MindMatrix</h1>
      </div>
      <nav className="mt-8 w-full text-white/80">
        <div className="w-full font-semibold">
          <div className="w-full">
            <div className="w-full whitespace-nowrap">
              <h2 className="text-sm text-white/60">GENERAL</h2>
              <div className="mt-4 w-full text-base">
                <NavigationItem icon="https://cdn.builder.io/api/v1/image/assets/6764a8bc52ff472aa18147d84536ab6a/5906c964ac50d8f471b6a677100e4f31e146a8aa?placeholderIfAbsent=true" text="Home" />
                <NavigationItem icon="https://cdn.builder.io/api/v1/image/assets/6764a8bc52ff472aa18147d84536ab6a/7bcd36b90df8cfd087885c37ece9a5db0fdc5234?placeholderIfAbsent=true" text="Courses" isActive={true} />
                <NavigationItem icon="https://cdn.builder.io/api/v1/image/assets/6764a8bc52ff472aa18147d84536ab6a/5cc10efceee7a7f057787984e20e4318df523089?placeholderIfAbsent=true" text="Tasks" />
              </div>
            </div>
            <div className="mt-6 w-full">
              <h2 className="text-sm text-white/60">PERSONAL</h2>
              <NavigationItem icon="https://cdn.builder.io/api/v1/image/assets/6764a8bc52ff472aa18147d84536ab6a/5906c964ac50d8f471b6a677100e4f31e146a8aa?placeholderIfAbsent=true" text="My Space" />
            </div>
          </div>
          <PromoBanner />
          <div className="mt-5 w-full text-base whitespace-nowrap">
            <NavigationItem icon="https://cdn.builder.io/api/v1/image/assets/6764a8bc52ff472aa18147d84536ab6a/5aa29086e2c665416805723c9d83c42521738316?placeholderIfAbsent=true" text="Support" />
            <div className="flex items-center gap-2 px-4 py-3 my-1 w-full rounded-xl hover:bg-white/20 transition-colors cursor-pointer">
              <Settings className="w-4 h-4 text-white" />
              <span className="text-white">Settings</span>
              <div className="ml-auto">
                <SettingsDropdown />
              </div>
            </div>
          </div>
        </div>
        <UserProfile />
      </nav>
    </aside>
  );
};

export default Sidebar;
