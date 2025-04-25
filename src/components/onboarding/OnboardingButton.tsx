
import React from "react";

type OnboardingButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
};

export const OnboardingButton: React.FC<OnboardingButtonProps> = ({
  children,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className="overflow-hidden px-16 py-3 w-full text-base leading-none text-center text-white bg-blue-700 rounded-xl hover:bg-blue-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
    >
      {children}
    </button>
  );
};

