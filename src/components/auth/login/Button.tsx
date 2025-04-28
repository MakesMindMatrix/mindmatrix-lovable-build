
"use client";

import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  className = "",
  onClick,
}) => {
  return (
    <button
      className={`overflow-hidden px-16 py-3 w-full text-base font-medium leading-none text-center text-white whitespace-nowrap bg-blue-700 rounded-xl max-md:px-5 max-md:max-w-full ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
