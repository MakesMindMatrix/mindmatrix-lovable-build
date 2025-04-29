
import React from "react";
import { GraduationCap, Clock, CheckCircle } from "lucide-react";

const ProgramHeader = () => {
  return (
    <header className="flex flex-wrap items-center px-8 py-3.5 w-full bg-blue-600 rounded-3xl max-md:px-5 max-md:max-w-full">
      <div className="flex gap-3 items-center self-stretch my-auto text-2xl font-semibold text-white whitespace-nowrap">
        <GraduationCap size={28} className="text-white" />
        <h1>Programs</h1>
      </div>
      <div className="flex gap-6 items-center self-stretch my-auto ml-auto min-w-60 max-md:max-w-full">
        <div className="flex gap-8 items-center self-stretch my-auto min-w-60">
          <div className="flex gap-2.5 items-center self-stretch my-auto text-base font-semibold text-white whitespace-nowrap">
            <div className="flex justify-center items-center w-5 h-5 bg-white/10 rounded-full">
              <span className="text-xs text-white">$</span>
            </div>
            <span className="self-stretch my-auto">50Pts</span>
          </div>
          <div className="flex gap-2.5 items-center self-stretch my-auto">
            <Clock size={20} className="text-white" />
            <span className="self-stretch my-auto text-base font-semibold text-white">
              1hr30min
            </span>
          </div>
          <div className="flex gap-2.5 items-center self-stretch my-auto text-base font-semibold text-white">
            <CheckCircle size={20} className="text-white" />
            <span className="self-stretch my-auto">0/4 completed</span>
          </div>
        </div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/6764a8bc52ff472aa18147d84536ab6a/ef7f11232ca79c8e2fd9745d994f8e4e7a91c338?placeholderIfAbsent=true"
          className="object-contain shrink-0 self-stretch my-auto aspect-square rounded-[100px] w-[45px]"
          alt="User profile"
        />
      </div>
    </header>
  );
};

export default ProgramHeader;
