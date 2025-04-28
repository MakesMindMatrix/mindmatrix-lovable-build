
"use client";
import React from "react";
import Header from "./Header";
import ChatInterface from "./ChatInterface";

const MainContent: React.FC = () => {
  return (
    <div className="flex flex-col h-screen">
      <div className="sticky top-0 z-10 px-3 pt-2.5">
        <Header />
      </div>
      <div className="flex-1 overflow-y-auto px-3 pb-2.5">
        <div className="mt-2.5 w-full max-w-[1204px]">
          <ChatInterface />
        </div>
      </div>
    </div>
  );
};

export default MainContent;
