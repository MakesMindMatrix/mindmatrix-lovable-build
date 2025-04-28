
"use client";
import React from "react";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";

interface DesktopProps {
  activeTab?: 'home' | 'programs' | 'tasks';
}

const Desktop: React.FC<DesktopProps> = ({ activeTab = 'home' }) => {
  return (
    <div className="flex h-screen overflow-hidden bg-white">
      <div className="fixed h-screen">
        <Sidebar activeTab={activeTab} />
      </div>
      <div className="flex-1 ml-[191px]">
        <MainContent />
      </div>
    </div>
  );
};

export default Desktop;
