
"use client";
import React from "react";
import { useNavigate } from "react-router-dom";
import NavigationItem from "./NavigationItem";
import NavigationSection from "./NavigationSection";
import PromotionBanner from "./PromotionBanner";

interface SidebarProps {
  activeTab?: 'home' | 'programs' | 'tasks';
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab = 'home' }) => {
  const navigate = useNavigate();

  return (
    <aside className="h-full w-[191px] p-3 flex flex-col overflow-hidden">
      <header className="flex gap-2 items-center text-2xl font-medium tracking-tighter whitespace-nowrap text-neutral-900">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/6764a8bc52ff472aa18147d84536ab6a/a9ced579ea853ef0485d8fd0f7a0b584b4c4733c"
          className="object-contain shrink-0 self-stretch my-auto aspect-[1.65] w-[38px]"
          alt="MindMatrix logo"
        />
        <h1 className="self-stretch my-auto">MindMatrix</h1>
      </header>

      <div className="mt-8 flex-1 font-semibold text-stone-500 overflow-hidden flex flex-col">
        <NavigationSection title="GENERAL">
          <div className="space-y-0">
            <NavigationItem 
              icon="https://cdn.builder.io/api/v1/image/assets/6764a8bc52ff472aa18147d84536ab6a/ff619270b330549c07f249780801b17ff750c4b8" 
              label="Home" 
              isActive={activeTab === 'home'}
              onClick={() => navigate('/dashboard-Day1')}
            />
            <NavigationItem 
              icon="https://cdn.builder.io/api/v1/image/assets/6764a8bc52ff472aa18147d84536ab6a/3430fc681841546943ce12f63288136245f101f2" 
              label="My Programs" 
              isActive={activeTab === 'programs'}
              onClick={() => navigate('/programs')}
            />
            <NavigationItem 
              icon="https://cdn.builder.io/api/v1/image/assets/6764a8bc52ff472aa18147d84536ab6a/333534a9d2531e48b58aeaa0350713eebb17d760" 
              label="Tasks" 
              isActive={activeTab === 'tasks'}
              onClick={() => navigate('/tasks')}
            />
          </div>
        </NavigationSection>

        <NavigationSection title="PERSONAL" className="mt-4">
          <NavigationItem 
            icon="https://cdn.builder.io/api/v1/image/assets/6764a8bc52ff472aa18147d84536ab6a/18730a68846538343f892bde033ffcb8d6f2be3e" 
            label="My Space" 
          />
        </NavigationSection>

        <div className="mt-auto">
          <PromotionBanner />

          <div className="mt-3.5 text-base whitespace-nowrap text-stone-500">
            <NavigationItem 
              icon="https://cdn.builder.io/api/v1/image/assets/6764a8bc52ff472aa18147d84536ab6a/6ecf31ca78724b9c8825d42e0af1e761f41a6b2f" 
              label="Support" 
            />
            <NavigationItem 
              icon="https://cdn.builder.io/api/v1/image/assets/6764a8bc52ff472aa18147d84536ab6a/6ecf31ca78724b9c8825d42e0af1e761f41a6b2f" 
              label="Settings" 
            />
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
