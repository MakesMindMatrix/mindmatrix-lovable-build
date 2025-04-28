
"use client";
import React from "react";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";

const Desktop: React.FC = () => {
  return (
    <div className="flex overflow-hidden flex-col justify-center px-3 py-2.5 bg-white min-h-screen">
      <div className="flex flex-wrap gap-5 justify-between items-center w-full max-md:max-w-full">
        <Sidebar />
        <MainContent />
      </div>
    </div>
  );
};

export default Desktop;
