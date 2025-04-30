
import React from "react";
import Sidebar from "./Sidebar";
import CourseHeader from "./CourseHeader";
import ChatInterface from "./ChatInterface";

function Desktop121() {
  return (
    <div className="flex h-full w-full gap-4 bg-transparent">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <CourseHeader />
        <ChatInterface />
      </div>
    </div>
  );
}

export default Desktop121;
