
import React from "react";

interface StatItemProps {
  value: string;
  label: string;
  valueClassName?: string;
  labelClassName?: string;
}

const StatItem: React.FC<StatItemProps> = ({
  value,
  label,
  valueClassName = "text-white",
  labelClassName = "mt-1.5 text-xs text-neutral-400",
}) => {
  return (
    <div className="w-full">
      <p className={valueClassName}>{value}</p>
      <p className={labelClassName}>{label}</p>
    </div>
  );
};

export default StatItem;
