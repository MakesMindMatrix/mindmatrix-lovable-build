
import { cn } from "@/lib/utils";

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
  className?: string;
}

const ProgressBar = ({
  currentStep,
  totalSteps,
  className,
}: ProgressBarProps) => {
  const progress = (currentStep / totalSteps) * 100;

  return (
    <div className={cn("mindmatrix-progress-container", className)}>
      <div
        className="mindmatrix-progress-bar"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default ProgressBar;
