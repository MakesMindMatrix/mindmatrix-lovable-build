
import React, { ReactNode } from "react";

interface GradientBackgroundProps {
  children: ReactNode;
}

const GradientBackground: React.FC<GradientBackgroundProps> = ({ children }) => {
  return (
    <div className="relative w-full h-full rounded-[40px] overflow-hidden flex items-center justify-center">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/d631192c018e2cf26adec813bbcc046519bd3b24"
        alt="Background gradient"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default GradientBackground;
