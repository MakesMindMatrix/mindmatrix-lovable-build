
import React from "react";
import LogoIcon from "@/components/shared/LogoIcon";

const Logo: React.FC = () => {
  return (
    <header className="flex gap-2 items-center self-start text-2xl font-medium tracking-tighter whitespace-nowrap text-neutral-900">
      <div className="w-[38px] aspect-[1.65]">
        <LogoIcon />
      </div>
      <h1 className="self-stretch my-auto">MindMatrix</h1>
    </header>
  );
};

export default Logo;
