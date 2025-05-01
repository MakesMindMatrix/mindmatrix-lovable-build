
import React, { useState } from "react";
import AuthLayout from "@/components/auth/AuthLayout";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

function Completion() {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  
  const completionSteps = [
    {
      title: "Great job! Now, the real journey begins. I've captured everything I need to create your personalized path.",
      buttonText: "Continue"
    },
    {
      title: "You've just taken the first step toward building your career. I'll be here for you to help you grow every day!",
      buttonText: "Continue"
    },
    {
      title: "Let me take you inside",
      buttonText: "I'm ready Zuno!"
    }
  ];

  const handleContinue = () => {
    if (step < completionSteps.length - 1) {
      setStep(prev => prev + 1);
    } else {
      navigate("/dashboard-Day1");
    }
  };

  const currentStep = completionSteps[step];

  return (
    <AuthLayout>
      <div className="flex flex-col items-center justify-center w-full max-w-[456px] text-white">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a26d7053ea464524bf89d4c4d1b45c6ca0a5a727"
          className="w-[68px] h-[68px] object-contain rounded-[64px]"
          alt="Completion icon"
        />
        
        <h2 className="mt-7 text-3xl tracking-tight leading-10 text-center">
          {currentStep.title}
        </h2>
        
        <Button 
          onClick={handleContinue}
          className="w-full mt-7 py-6 bg-blue-700 hover:bg-blue-600 text-base"
        >
          {currentStep.buttonText}
        </Button>
      </div>
    </AuthLayout>
  );
}

export default Completion;
