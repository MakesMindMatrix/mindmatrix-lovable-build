
import React from "react";
import { MessageContent } from "./MessageContent";
import { SidebarButton } from "./SidebarButton";

export const ChatInterface = () => {
  return (
    <section className="flex relative flex-col items-start px-10 mt-3 w-full min-h-[732px] rounded-[40px] max-md:px-5 max-md:max-w-full">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/d631192c018e2cf26adec813bbcc046519bd3b24"
        alt="Chat background"
        className="object-cover absolute inset-0 size-full"
      />
      <div className="flex relative flex-wrap gap-10 justify-between items-center max-w-full w-[876px]">
        <SidebarButton />
        <MessageContent />
      </div>
    </section>
  );
};
