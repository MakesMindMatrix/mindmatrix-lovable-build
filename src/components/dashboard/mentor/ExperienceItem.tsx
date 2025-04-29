
import React from "react";

interface ExperienceItemProps {
  iconSrc: string;
  title: string;
  subtitle: string;
  className?: string;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  iconSrc,
  title,
  subtitle,
  className = "",
}) => {
  return (
    <div className={`flex gap-4 items-start self-start w-full ${className}`}>
      <div className="flex gap-2.5 items-center p-2.5 bg-white h-[42px] rounded-[100px] w-[42px]">
        <img
          src={iconSrc}
          alt=""
          className="object-contain self-stretch my-auto w-6 aspect-square"
          aria-hidden="true"
        />
      </div>
      <div className="font-medium text-white">
        <h3
          className={
            title.length <= 3
              ? "text-3xl leading-none"
              : "text-base leading-none"
          }
        >
          {title}
        </h3>
        <p className="mt-2 text-sm">{subtitle}</p>
      </div>
    </div>
  );
};

export default ExperienceItem;
