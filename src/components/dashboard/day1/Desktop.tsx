
"use client";
import React, { ReactNode } from "react";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";

interface DesktopProps {
  activeTab?: 'home' | 'programs' | 'tasks' | 'my-space';
  simplified?: boolean;
  children?: ReactNode;
}

const Desktop: React.FC<DesktopProps> = ({ activeTab = 'home', simplified = false, children }) => {
  return (
    <div className="flex h-screen overflow-hidden bg-white">
      <div className="fixed h-screen">
        <Sidebar activeTab={activeTab} />
      </div>
      <div className="flex-1 ml-[191px]">
        <MainContent simplified={simplified}>
          {children}
        </MainContent>
      </div>
    </div>
  );
};

export default Desktop;
