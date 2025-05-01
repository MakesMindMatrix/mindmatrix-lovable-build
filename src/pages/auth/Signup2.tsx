
"use client";
import * as React from "react";
import Header from "@/components/shared/Header";
import { PasswordForm } from "@/components/auth/PasswordForm";

function Desktop68() {
  return (
    <main className="flex overflow-hidden flex-col h-screen bg-white">
      <div className="px-8 pt-2.5 pb-2.5">
        <Header />
      </div>
      <div className="flex-1 flex items-center justify-center px-8">
        <section className="w-full h-[85vh] relative flex items-center justify-center rounded-[40px]">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d631192c018e2cf26adec813bbcc046519bd3b24"
            alt="Background gradient"
            className="object-cover absolute inset-0 size-full rounded-[40px]"
          />
          <div className="relative z-10">
            <PasswordForm />
          </div>
        </section>
      </div>
    </main>
  );
}

export default Desktop68;
