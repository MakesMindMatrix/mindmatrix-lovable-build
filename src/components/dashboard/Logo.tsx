
import React from "react";
import LogoIcon from "@/components/shared/LogoIcon";

const Logo: React.FC = () => {
  return (
    <div className="flex items-center gap-2">
      <LogoIcon className="w-8 h-8" />
      <span className="text-xl font-semibold text-gray-900">MindMatrix</span>
    </div>
  );
};

export default Logo;
