
import React from "react";
import Header from "./Header";
import { ChatInterface } from "./chat/ChatInterface";

const MainContent: React.FC = () => {
  return (
    <section className="self-stretch my-auto min-w-60 w-[1204px] max-md:max-w-full">
      <Header />
      <div className="mt-2.5 w-full rounded-2xl">
        <ChatInterface />
      </div>
    </section>
  );
};

export default MainContent;
