
import React from "react";
import Header from "./Header";
import { ChatInterface } from "./chat/ChatInterface";

const MainContent: React.FC = () => {
  return (
    <section className="self-stretch my-auto min-w-60 w-[1204px] max-md:max-w-full">
      <div className="w-full max-md:max-w-full">
        <div className="w-full max-md:max-w-full">
          <div className="w-full max-md:max-w-full">
            <div className="w-full max-md:max-w-full">
              <Header />
              <div className="mt-2.5 max-w-full text-base text-zinc-400 w-[1204px]">
                <div className="w-full rounded-2xl">
                  <ChatInterface />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainContent;
