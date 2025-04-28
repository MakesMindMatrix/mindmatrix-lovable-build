
import React from "react";

interface BackgroundGradientProps {
  className?: string;
}

export const BackgroundGradient: React.FC<BackgroundGradientProps> = ({
  className = "",
}) => {
  return (
    <svg
      width="1204"
      height="833"
      viewBox="0 0 1204 833"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-full h-full rounded-[15px] ${className}`}
    >
      <g filter="url(#filter0_f_537_3262)">
        <ellipse
          cx="602"
          cy="416.5"
          rx="469"
          ry="383.5"
          fill="#0F56CC"
        ></ellipse>
      </g>
      <g filter="url(#filter1_f_537_3262)">
        <ellipse cx="602" cy="416.5" rx="201" ry="165" fill="#0F56CC"></ellipse>
      </g>
      <defs>
        <filter
          id="filter0_f_537_3262"
          x="-367"
          y="-467"
          width="1938"
          height="1767"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          ></feBlend>
          <feGaussianBlur
            stdDeviation="250"
            result="effect1_foregroundBlur_537_3262"
          ></feGaussianBlur>
        </filter>
        <filter
          id="filter1_f_537_3262"
          x="251"
          y="101.5"
          width="702"
          height="630"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          ></feBlend>
          <feGaussianBlur
            stdDeviation="75"
            result="effect1_foregroundBlur_537_3262"
          ></feGaussianBlur>
        </filter>
      </defs>
    </svg>
  );
};
