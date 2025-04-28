
"use client";
import React, { ReactNode } from "react";

interface NavigationSectionProps {
  title: string;
  children: ReactNode;
  className?: string;
}

const NavigationSection: React.FC<NavigationSectionProps> = ({
  title,
  children,
  className = "",
}) => {
  return (
    <section className={`w-full ${className}`}>
      <h3 className="text-sm font-semibold text-stone-500">{title}</h3>
      <nav className="mt-4 w-full text-base font-semibold text-stone-500">
        {children}
      </nav>
    </section>
  );
};

export default NavigationSection;
