
"use client";

import React from "react";
import { BackgroundGradient } from "./BackgroundGradient";

interface GradientBackgroundProps {
  className?: string;
  children?: React.ReactNode;
}

const GradientBackground: React.FC<GradientBackgroundProps> = ({
  className = "",
  children
}) => {
  return (
    <section className={`relative ${className}`}>
      <div className="absolute inset-0 overflow-hidden">
        <BackgroundGradient />
      </div>
      {children && (
        <div className="relative z-10">
          {children}
        </div>
      )}
    </section>
  );
};

export default GradientBackground;
