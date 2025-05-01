
"use client";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/shared/Header";
import GradientBackground from "@/components/database/ScreenEmotionTag/GradientBackground";
import { AnimatePresence } from "framer-motion";
import NavigationControls from "@/components/auth/registration/NavigationControls";

// Import all individual step components
import NameStep from "@/components/auth/registration/steps/NameStep";
import EducationStep from "@/components/auth/registration/steps/EducationStep";
import CareerStep from "@/components/auth/registration/steps/CareerStep";
import SkillScanStep from "@/components/auth/registration/steps/SkillScanStep";
import GuidanceStep from "@/components/auth/registration/steps/GuidanceStep";
import QuestionsStepWrapper from "@/components/auth/registration/steps/QuestionsStepWrapper";
import CompletionStep from "@/components/auth/registration/steps/CompletionStep";

const LearnerRegistration = () => {
  const navigate = useNavigate();
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [name, setName] = useState("");
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const totalQuestions = 10;

  // Handle next step
  const handleNextStep = () => {
    if (currentStepIndex < 8) { // 8 is the last step index (total of 9 steps)
      // Move to next step with animation
      setCurrentStepIndex(prevIndex => prevIndex + 1);
      
      // If current step is questions, update question counter
      if (currentStepIndex === 5 && currentQuestion < totalQuestions) {
        setCurrentQuestion(prev => prev + 1);
      }
    } else {
      // Registration complete, navigate to dashboard
      navigate("/dashboard-Day1");
    }
  };

  // Handle back button
  const handleBack = () => {
    if (currentStepIndex > 0) {
      // Go back one step
      setCurrentStepIndex(prevIndex => prevIndex - 1);
      
      // If going back from questions, update question counter
      if (currentStepIndex === 6 && currentQuestion > 1) {
        setCurrentQuestion(prev => prev - 1);
      }
    } else {
      // No more steps to go back to
      navigate(-1);
    }
  };

  // Define which step is currently active
  const renderCurrentStep = () => {
    switch (currentStepIndex) {
      case 0:
        return <NameStep onContinue={(name) => { 
          setName(name);
          handleNextStep();
        }} />;
      case 1:
        return <EducationStep onContinue={handleNextStep} />;
      case 2:
        return <CareerStep onContinue={handleNextStep} />;
      case 3:
        return <SkillScanStep onContinue={handleNextStep} />;
      case 4:
        return <GuidanceStep onContinue={handleNextStep} />;
      case 5:
        return (
          <QuestionsStepWrapper 
            currentQuestion={currentQuestion} 
            totalQuestions={totalQuestions} 
            onOptionSelect={handleNextStep} 
          />
        );
      case 6:
        return (
          <CompletionStep 
            onContinue={handleNextStep} 
            title="Great job! Now, the real journey begins. I've captured everything I need to create your personalized path."
            buttonText="Continue" 
          />
        );
      case 7:
        return (
          <CompletionStep 
            onContinue={handleNextStep} 
            title="You've just taken the first step toward building your career. I'll be here for you to help you grow every day!"
            buttonText="Continue" 
          />
        );
      case 8:
        return (
          <CompletionStep 
            onContinue={handleNextStep} 
            title="Let me take you inside"
            buttonText="I'm ready Zuno!" 
          />
        );
      default:
        return null;
    }
  };

  // Button text for current step - only used for steps without their own CTA
  const getButtonText = () => {
    const texts = ["Let's continue", "All set! What's Next?", "Exciting! Let's go", 
                   "Continue", "Continue", "Continue", "Continue", "Continue", "I'm ready Zuno!"];
    return texts[currentStepIndex] || "Continue";
  };

  // Determine if we should show the default button (for steps without their own CTA)
  const showDefaultButton = () => {
    // Steps with index 0, 1, 2, 5 have their own buttons
    return ![0, 1, 2, 5].includes(currentStepIndex);
  };

  return (
    <main className="flex overflow-hidden flex-col px-8 pt-2.5 pb-12 bg-white h-screen max-md:px-5">
      <Header />
      <GradientBackground className="mt-3 flex-grow flex flex-col relative overflow-hidden rounded-[40px]">
        <NavigationControls 
          handleBack={handleBack}
          handleNextStep={handleNextStep}
          buttonText={getButtonText()}
          showButton={showDefaultButton()}
        />

        {/* Chat Container - Center Vertically and Horizontally */}
        <div className="flex-grow flex items-center justify-center px-4 md:px-8 overflow-hidden w-full">
          <div className="w-full max-w-3xl mx-auto relative">
            <AnimatePresence mode="wait">
              <div key={`step-${currentStepIndex}`} className="w-full">
                {renderCurrentStep()}
              </div>
            </AnimatePresence>
          </div>
        </div>
      </GradientBackground>
    </main>
  );
};

export default LearnerRegistration;
