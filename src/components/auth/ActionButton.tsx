
import React from "react";
import { cn } from "@/lib/utils";

interface ActionButtonProps {
  icon?: string;
  text: string;
  variant?: "medium" | "semibold";
  className?: string;
  onClick?: () => void;
}

const ActionButton: React.FC<ActionButtonProps> = ({
  icon,
  text,
  variant = "medium",
  className = "",
  onClick,
}) => {
  return (
    <button
      className={cn(
        "flex overflow-hidden flex-col justify-center px-16 py-3 w-full rounded-xl backdrop-blur-md bg-white/20 border border-white/30 text-white shadow-lg hover:bg-white/30 transition-colors max-md:px-5",
        variant === "semibold" ? "font-semibold" : "font-medium",
        className
      )}
      onClick={onClick}
    >
      <div className="flex gap-2 items-center">
        {icon ? (
          <img
            src={icon}
            alt=""
            className="object-contain shrink-0 self-stretch my-auto aspect-[1.06] w-[19px]"
          />
        ) : (
          <div className="flex shrink-0 self-stretch my-auto h-5 w-[21px]" />
        )}
        <span className="self-stretch my-auto">{text}</span>
      </div>
    </button>
  );
};

export default ActionButton;
