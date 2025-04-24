
import React from "react";
import Header from "@/components/shared/Header";
import SidebarButton from "@/components/auth/SidebarButton";
import GuidanceContent from "@/components/auth/GuidanceContent";

const Guidance = () => {
  return (
    <main className="flex overflow-hidden flex-col px-8 pt-2.5 pb-12 bg-white min-h-screen max-md:px-5">
      <Header />
      <section className="flex relative flex-col items-start px-10 mt-3 w-full min-h-[732px] rounded-[40px] max-md:px-5 max-md:max-w-full">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/6764a8bc52ff472aa18147d84536ab6a/d631192c018e2cf26adec813bbcc046519bd3b24"
          className="object-cover absolute inset-0 size-full rounded-[40px]"
          alt="Background gradient"
        />
        <div className="flex relative flex-wrap gap-10 justify-between items-center max-w-full w-[875px]">
          <SidebarButton />
          <GuidanceContent />
        </div>
      </section>
    </main>
  );
};

export default Guidance;
