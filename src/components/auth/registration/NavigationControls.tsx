
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

interface NavigationControlsProps {
  handleBack: () => void;
  handleNextStep: () => void;
  buttonText: string;
  showButton?: boolean;
}

const NavigationControls: React.FC<NavigationControlsProps> = ({
  handleBack,
  handleNextStep,
  buttonText,
  showButton = true
}) => {
  return (
    <>
      {/* Back Button */}
      <button
        onClick={handleBack}
        className="absolute left-8 top-8 p-3 bg-blue-700 rounded-full text-white hover:bg-blue-600 transition-colors z-10"
      >
        <ArrowLeft className="h-5 w-5" />
      </button>

      {/* Continue Button (if no component has its own button) */}
      {showButton && (
        <Button 
          onClick={handleNextStep}
          className="mt-7 w-full max-w-md mx-auto bg-blue-700 hover:bg-blue-600 text-base py-6"
        >
          {buttonText}
        </Button>
      )}
    </>
  );
};

export default NavigationControls;
