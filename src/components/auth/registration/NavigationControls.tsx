
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

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
      <motion.button
        onClick={handleBack}
        className="absolute left-8 top-8 p-3 bg-blue-700 rounded-full text-white hover:bg-blue-600 transition-colors z-20"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
      >
        <ArrowLeft className="h-5 w-5" />
      </motion.button>

      {/* Continue Button (if no component has its own button) */}
      {showButton && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.3 }}
          className="w-full max-w-md mx-auto absolute bottom-14 left-1/2 transform -translate-x-1/2 z-20"
        >
          <Button 
            onClick={handleNextStep}
            className="w-full mx-auto bg-blue-700 hover:bg-blue-600 text-base py-5"
          >
            {buttonText}
          </Button>
        </motion.div>
      )}
    </>
  );
};

export default NavigationControls;
