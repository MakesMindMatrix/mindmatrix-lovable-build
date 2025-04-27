"use client";
import * as React from "react";
import Header from "@/components/shared/Header";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Completion() {
  const navigate = useNavigate();
  const [step, setStep] = React.useState(0);
  
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
      // Navigate to the dashboard instead of home
      navigate("/dashboard-Day1");
    }
  };

  const handleBack = () => {
    if (step > 0) {
      setStep(prev => prev - 1);
    } else {
      navigate(-1);
    }
  };

  const currentStep = completionSteps[step];

  return (
    <main className="flex overflow-hidden flex-col px-8 pt-2.5 pb-12 bg-white min-h-screen max-md:px-5">
      <Header />
      <section className="flex relative flex-col items-center px-10 mt-3 w-full min-h-[732px] rounded-[40px] max-md:px-5 max-md:max-w-full">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d631192c018e2cf26adec813bbcc046519bd3b24"
          alt="Background gradient"
          className="object-cover absolute inset-0 size-full rounded-[40px]"
        />
        
        <button
          onClick={handleBack}
          className="absolute left-8 top-8 p-3 bg-blue-700 rounded-full text-white hover:bg-blue-600 transition-colors"
        >
          <ArrowLeft className="h-5 w-5" />
        </button>

        <div className="relative flex flex-col justify-center items-center mt-40 w-full max-w-[456px] z-10 max-md:mt-24">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a26d7053ea464524bf89d4c4d1b45c6ca0a5a727"
            className="object-contain aspect-square rounded-[64px] shadow-[0px_47px_13px_rgba(0,0,0,0)] w-[68px]"
            alt="Completion icon"
          />
          
          <h2 className="self-stretch mt-7 text-3xl tracking-tight leading-10 text-center text-white max-md:max-w-full">
            {currentStep.title}
          </h2>
          
          <Button 
            onClick={handleContinue}
            className="mt-7 w-full bg-blue-700 hover:bg-blue-600 text-base py-6"
          >
            {currentStep.buttonText}
          </Button>
        </div>
      </section>
    </main>
  );
}

export default Completion;
