
import React from "react";
import LogoIcon from "@/components/shared/LogoIcon";

const Logo: React.FC = () => {
  return (
    <div className="flex items-center gap-2 px-4 py-2">
      <div className="w-8 h-8">
        <LogoIcon />
      </div>
      <span className="text-xl font-medium text-neutral-900 tracking-[-0.5px]">MindMatrix</span>
    </div>
  );
};

export default Logo;
