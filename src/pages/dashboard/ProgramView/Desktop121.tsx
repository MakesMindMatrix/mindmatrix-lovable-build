
import React from "react";
import Sidebar from "./Sidebar";
import CourseHeader from "./CourseHeader";
import ChatInterface from "./ChatInterface";

function Desktop121() {
  return (
    <div className="flex flex-wrap gap-4 justify-between bg-transparent">
      <Sidebar />
      <div className="flex-1">
        <CourseHeader />
        <ChatInterface />
      </div>
    </div>
  );
}

export default Desktop121;
