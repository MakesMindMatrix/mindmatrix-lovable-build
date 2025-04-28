
import React from "react";
import Header from "./Header";
import ChatArea from "./ChatArea";

const MainContent: React.FC = () => {
  return (
    <div className="flex-1 p-6 overflow-auto">
      <Header />
      <ChatArea />
    </div>
  );
};

export default MainContent;
