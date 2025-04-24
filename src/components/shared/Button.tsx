
import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "glass";
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    return (
      <button
        className={cn(
          "font-medium rounded-lg focus:outline-none transition-all",
          {
            "bg-mindmatrix-primary text-white hover:bg-opacity-90": variant === "primary",
            "bg-mindmatrix-secondary text-white hover:bg-opacity-90": variant === "secondary",
            "border border-mindmatrix-border text-mindmatrix-primary hover:bg-mindmatrix-accent": variant === "outline",
            "backdrop-blur-md bg-white/20 border border-white/30 text-white shadow-lg hover:bg-white/30": variant === "glass",
            "text-sm px-4 py-2": size === "sm",
            "px-6 py-3": size === "md",
            "text-lg px-8 py-4": size === "lg",
          },
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
