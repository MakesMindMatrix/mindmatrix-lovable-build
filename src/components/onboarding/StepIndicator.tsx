
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

interface StepIndicatorProps {
  steps: string[];
  currentStep: number;
  className?: string;
}

const StepIndicator = ({
  steps,
  currentStep,
  className,
}: StepIndicatorProps) => {
  return (
    <div className={cn("flex items-center justify-center space-x-2", className)}>
      {steps.map((step, index) => {
        const isCompleted = index < currentStep;
        const isCurrent = index === currentStep;

        return (
          <div key={step} className="flex items-center">
            <div
              className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-all",
                {
                  "bg-mindmatrix-primary text-white": isCompleted || isCurrent,
                  "bg-mindmatrix-accent text-mindmatrix-primary": !isCompleted && !isCurrent,
                }
              )}
            >
              {isCompleted ? <Check className="w-4 h-4" /> : index + 1}
            </div>
            {index < steps.length - 1 && (
              <div
                className={cn("w-16 h-0.5 mx-1", {
                  "bg-mindmatrix-primary": index < currentStep,
                  "bg-mindmatrix-accent": index >= currentStep,
                })}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default StepIndicator;
