
import React from "react";

interface StatItemProps {
  value: string | number;
  label: string;
  valueColor?: string;
}

const StatItem: React.FC<StatItemProps> = ({
  value,
  label,
  valueColor = "text-white",
}) => {
  return (
    <article className="flex flex-col gap-1.5 items-start">
      <h3
        className={`text-2xl tracking-tight ${valueColor} max-md:text-2xl max-sm:text-xl`}
      >
        {value}
      </h3>
      <p className="text-xs tracking-tight text-white">{label}</p>
    </article>
  );
};

export default StatItem;
