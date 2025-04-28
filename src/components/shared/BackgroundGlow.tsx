
import React from "react";

export const BackgroundGlow: React.FC = () => {
  return (
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-purple-600/30 animate-pulse" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500 rounded-full filter blur-[100px] opacity-50" />
      <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-purple-500 rounded-full filter blur-[100px] opacity-40" />
      <div className="absolute bottom-1/4 left-1/3 w-56 h-56 bg-cyan-500 rounded-full filter blur-[100px] opacity-40" />
    </div>
  );
};
