
import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    return (
      <button
        className={cn(
          "font-medium rounded-lg focus:outline-none transition-all",
          {
            "bg-mindmatrix-primary text-white hover:bg-mindmatrix-primary/90": variant === "primary",
            "bg-mindmatrix-secondary text-white hover:bg-mindmatrix-secondary/90": variant === "secondary",
            "border border-mindmatrix-border text-mindmatrix-primary hover:bg-mindmatrix-accent": variant === "outline",
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
