
import React from "react";

interface HeaderIconProps {
  svgContent: string;
  width?: string;
  height?: string;
}

export const HeaderIcon: React.FC<HeaderIconProps> = ({ svgContent, width = "24px", height = "24px" }) => {
  return (
    <div 
      style={{ width, height }}
      dangerouslySetInnerHTML={{ __html: svgContent }}
    />
  );
};
