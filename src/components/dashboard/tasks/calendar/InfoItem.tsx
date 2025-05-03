
import React from "react";

interface InfoItemProps {
  iconSrc: string;
  iconBgClass?: string;
  iconContainerClass?: string;
  iconClass?: string;
  value: string;
  label: string;
  maxWidth?: string;
}

const InfoItem: React.FC<InfoItemProps> = ({
  iconSrc,
  iconBgClass = "bg-blue-700",
  iconContainerClass = "",
  iconClass = "",
  value,
  label,
  maxWidth = "w-full",
}) => {
  return (
    <article className={`self-stretch my-auto ${maxWidth}`}>
      <div className={`flex overflow-hidden gap-2.5 items-center ${iconContainerClass} ${iconBgClass} rounded-[100px]`}>
        <img
          src={iconSrc}
          alt=""
          className={`object-contain self-stretch my-auto ${iconClass}`}
        />
      </div>
      <h3 className="mt-1 text-xl font-medium tracking-tighter text-blue-700 truncate">
        {value}
      </h3>
      <p className="mt-1 text-xs font-semibold tracking-tighter text-blue-700 truncate">
        {label}
      </p>
    </article>
  );
};

export default InfoItem;
