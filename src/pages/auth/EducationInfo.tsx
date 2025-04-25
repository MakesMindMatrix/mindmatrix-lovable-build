
"use client";
import * as React from "react";
import Header from "@/components/shared/Header";
import { ChatInterface } from "@/components/auth/chat/ChatInterface";

function EducationInfo() {
  return (
    <main className="flex overflow-hidden flex-col px-8 pt-2.5 pb-12 bg-white max-md:px-5">
      <Header />
      <ChatInterface />
    </main>
  );
}

export default EducationInfo;
