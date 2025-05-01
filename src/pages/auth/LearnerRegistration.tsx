
"use client";
import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/shared/Header";
import GradientBackground from "@/components/database/ScreenEmotionTag/GradientBackground";
import { ChatStep } from "@/components/auth/registration/ChatStep";
import { motion, AnimatePresence } from "framer-motion";

// Import our components
import { StepType } from "@/components/auth/registration/types";
import { createRegistrationSteps } from "@/components/auth/registration/RegistrationSteps";
import NavigationControls from "@/components/auth/registration/NavigationControls";

const LearnerRegistration = () => {
  const navigate = useNavigate();
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<StepType[]>([]);
  const [name, setName] = useState("");
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const totalQuestions = 10;
  const containerRef = useRef<HTMLDivElement>(null);

  // Handle next step - moved this to the top to avoid the reference error
  const handleNextStep = () => {
    if (currentStepIndex < steps.length - 1) {
      // Add current step to completed steps
      setCompletedSteps(prev => [...prev, steps[currentStepIndex]]);
      
      // Move to next step
      setCurrentStepIndex(prevIndex => prevIndex + 1);
      
      // If current step is questions, update question counter
      if (steps[currentStepIndex].id === "questions" && currentQuestion < totalQuestions) {
        setCurrentQuestion(prev => prev + 1);
      }
    } else {
      // Registration complete, navigate to dashboard
      navigate("/dashboard-Day1");
    }
  };

  // Handle back button
  const handleBack = () => {
    if (completedSteps.length > 0) {
      // Remove the last step from completed steps
      const updatedCompletedSteps = [...completedSteps];
      updatedCompletedSteps.pop();
      setCompletedSteps(updatedCompletedSteps);
      
      // Go back one step
      setCurrentStepIndex(prevIndex => prevIndex - 1);
      
      // If going back from questions, update question counter
      if (steps[currentStepIndex].id === "questions" && currentQuestion > 1) {
        setCurrentQuestion(prev => prev - 1);
      }
    } else {
      // No more steps to go back to
      navigate(-1);
    }
  };

  // Create the registration steps
  const steps = createRegistrationSteps({
    handleNextStep,
    currentQuestion,
    totalQuestions,
    setName
  });

  // Scroll to bottom when new content is added
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [completedSteps, currentStepIndex]);

  const currentStep = steps[currentStepIndex];
  const showContinueButton = !currentStep.component;

  return (
    <main className="flex overflow-hidden flex-col px-8 pt-2.5 pb-12 bg-white h-screen max-md:px-5">
      <Header />
      <GradientBackground className="mt-3 flex-grow flex flex-col relative overflow-hidden rounded-[40px]">
        <NavigationControls 
          handleBack={handleBack}
          handleNextStep={handleNextStep}
          buttonText={currentStep.buttonText}
          showButton={showContinueButton}
        />

        {/* Chat Container */}
        <div 
          ref={containerRef}
          className="flex-grow flex flex-col overflow-y-auto px-4 md:px-8 py-20 max-w-3xl mx-auto w-full"
        >
          <AnimatePresence mode="wait">
            {/* Completed Steps */}
            {completedSteps.map((step, index) => (
              <motion.div
                key={`${step.id}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 0.7, y: 0 }}
                exit={{ opacity: 0, y: -50, scale: 0.8 }}
                transition={{ duration: 0.5 }}
                className="mb-8"
              >
                <ChatStep
                  title={step.title}
                  avatarSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/a26d7053ea464524bf89d4c4d1b45c6ca0a5a727"
                  isCompleted={true}
                >
                  {step.component}
                </ChatStep>
              </motion.div>
            ))}
            
            {/* Current Step */}
            <motion.div
              key={`current-${currentStep.id}`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              className="w-full"
            >
              <ChatStep 
                title={currentStep.title}
                avatarSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/a26d7053ea464524bf89d4c4d1b45c6ca0a5a727"
              >
                {currentStep.component || (
                  <button 
                    onClick={handleNextStep}
                    className="mt-7 w-full max-w-md mx-auto bg-blue-700 hover:bg-blue-600 text-white text-base py-6 rounded-xl"
                  >
                    {currentStep.buttonText}
                  </button>
                )}
              </ChatStep>
            </motion.div>
          </AnimatePresence>
        </div>
      </GradientBackground>
    </main>
  );
};

export default LearnerRegistration;
