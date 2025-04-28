
"use client";
import React from "react";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";

interface DesktopProps {
  activeTab?: 'home' | 'programs' | 'tasks';
}

const Desktop: React.FC<DesktopProps> = ({ activeTab = 'home' }) => {
  return (
    <div className="flex overflow-hidden flex-col px-3 py-2.5 bg-white min-h-screen">
      <div className="flex flex-wrap gap-5 justify-between items-center w-full max-md:max-w-full">
        <Sidebar activeTab={activeTab} />
        <MainContent />
      </div>
    </div>
  );
};

export default Desktop;
