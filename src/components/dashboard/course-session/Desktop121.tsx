
"use client";
import React from "react";
import Sidebar from "./Sidebar";
import CourseHeader from "./CourseHeader";
import ChatInterface from "./ChatInterface";

function Desktop121() {
  return (
    <main className="overflow-hidden px-4 pt-5 bg-white">
      <div className="flex flex-wrap gap-0.5 justify-between items-center">
        <Sidebar />
        <section className="self-stretch my-auto min-w-60 w-[1204px] max-md:max-w-full">
          <CourseHeader />
          <ChatInterface />
        </section>
      </div>
    </main>
  );
}

export default Desktop121;
