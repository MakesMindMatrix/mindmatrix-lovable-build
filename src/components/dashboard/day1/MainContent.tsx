
"use client";
import React from "react";
import Header from "./Header";
import ChatInterface from "./ChatInterface";

const MainContent: React.FC = () => {
  return (
    <main className="flex-1 max-w-[1204px] w-full">
      <Header />
      <div className="mt-2.5 w-full">
        <ChatInterface />
      </div>
    </main>
  );
};

export default MainContent;
