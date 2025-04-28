
import React from "react";
import { NavigationSectionProps } from "@/types/navigation";

const NavigationSection: React.FC<NavigationSectionProps> = ({
  title,
  children,
}) => {
  return (
    <section className="w-full whitespace-nowrap mb-6">
      <h2 className="text-sm">{title}</h2>
      <div className="mt-4 w-full text-base">{children}</div>
    </section>
  );
};

export default NavigationSection;
