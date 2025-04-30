
"use client";
import React from "react";
import Sidebar from "./Sidebar";
import CourseHeader from "./CourseHeader";
import ChatInterface from "./ChatInterface";

function Desktop121() {
  return (
    <main className="overflow-hidden bg-white">
      <div className="flex justify-between items-start">
        <Sidebar />
        <section className="flex-1 min-w-60 max-w-[1204px]">
          <CourseHeader />
          <ChatInterface />
        </section>
      </div>
    </main>
  );
}

export default Desktop121;
