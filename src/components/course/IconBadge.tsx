
import React from "react";

interface IconBadgeProps {
  iconUrl: string;
  alt?: string;
}

const IconBadge: React.FC<IconBadgeProps> = ({ iconUrl, alt = "" }) => {
  return (
    <div className="flex justify-center items-center p-3 bg-pink-200 rounded-[100px] shadow-[0px_1px_30px_rgba(69,42,124,0.1)] w-[42px]">
      <img
        src={iconUrl}
        alt={alt}
        className="object-contain self-stretch my-auto w-5 aspect-square"
      />
    </div>
  );
};

export default IconBadge;
