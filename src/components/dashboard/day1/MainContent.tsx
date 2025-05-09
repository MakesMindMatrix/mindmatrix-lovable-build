
"use client";
import React, { ReactNode } from "react";
import Header from "./Header";
import ChatInterface from "./ChatInterface";

interface MainContentProps {
  simplified?: boolean;
  children?: ReactNode;
}

const MainContent: React.FC<MainContentProps> = ({ simplified = false, children }) => {
  return (
    <div className="flex flex-col h-screen">
      <div className="sticky top-0 z-10 px-3 pt-2.5 mb-4">
        <Header />
      </div>
      <div className="flex-1 px-3 pb-2.5">
        {children ? (
          children
        ) : (
          <div className="w-full max-w-[1204px] h-[calc(100vh-120px)]">
            <ChatInterface simplified={simplified} />
          </div>
        )}
      </div>
    </div>
  );
};

export default MainContent;
