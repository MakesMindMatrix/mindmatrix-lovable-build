
"use client";
import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/shared/Header";
import GradientBackground from "@/components/database/ScreenEmotionTag/GradientBackground";
import { ChatStep } from "@/components/auth/registration/ChatStep";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import NameInputForm from "@/components/auth/NameInputForm";
import EducationForm from "@/components/auth/EducationForm";
import CareerSelectionDropdown from "@/components/auth/CareerSelectionDropdown";
import { motion, AnimatePresence } from "framer-motion";

// Type for registration steps
type StepType = {
  id: string;
  title: string;
  component: React.ReactNode;
  buttonText: string;
};

const LearnerRegistration = () => {
  const navigate = useNavigate();
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<StepType[]>([]);
  const [name, setName] = useState("");
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const totalQuestions = 10;
  const containerRef = useRef<HTMLDivElement>(null);

  // Define all the registration steps
  const steps: StepType[] = [
    {
      id: "name",
      title: "Awesome! What should I call you?",
      component: (
        <NameInputForm 
          avatarSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/a26d7053ea464524bf89d4c4d1b45c6ca0a5a727"
          onContinue={(name) => {
            setName(name);
            handleNextStep();
          }}
        />
      ),
      buttonText: "Let's continue"
    },
    {
      id: "education",
      title: "Tell me about your education",
      component: (
        <EducationForm />
      ),
      buttonText: "All set! What's Next?"
    },
    {
      id: "career",
      title: "What are your top 3 preferred career focuses?",
      component: (
        <div className="w-full space-y-4 mb-8">
          <div className="w-full mb-8">
            <label className="block text-base text-white mb-2">
              *Select Career Aspirations
            </label>
            <CareerSelectionDropdown
              label="Select your college"
              placeholder={true}
              iconUrl="https://cdn.builder.io/api/v1/image/assets/6764a8bc52ff472aa18147d84536ab6a/b780c6a227a0e47eb6f6716773e3fe4be6a5c5b9"
            />
          </div>
          <CareerSelectionDropdown
            label="Data Engineer (Highly Recommended)"
            selected={true}
            iconUrl="https://cdn.builder.io/api/v1/image/assets/6764a8bc52ff472aa18147d84536ab6a/b9149760592d45d7599b59188f75085d79cf369d"
          />
          <CareerSelectionDropdown
            label="Select Career Focus"
            placeholder={true}
            iconUrl="https://cdn.builder.io/api/v1/image/assets/6764a8bc52ff472aa18147d84536ab6a/b780c6a227a0e47eb6f6716773e3fe4be6a5c5b9"
          />
          <CareerSelectionDropdown
            label="Select Career Focus"
            placeholder={true}
            iconUrl="https://cdn.builder.io/api/v1/image/assets/6764a8bc52ff472aa18147d84536ab6a/b780c6a227a0e47eb6f6716773e3fe4be6a5c5b9"
          />
        </div>
      ),
      buttonText: "Exciting! Let's go"
    },
    {
      id: "skill-scan",
      title: "Let's do a quick skill scan to understand your starting point.",
      component: null,
      buttonText: "Continue"
    },
    {
      id: "guidance",
      title: "No pressure! This helps me guide you better. Just choose what feels most right.",
      component: null,
      buttonText: "Continue"
    },
    {
      id: "questions",
      title: "You are working on a very important group project and your teammate isn't working what would you do?",
      component: (
        <div className="w-full space-y-5 mt-6">
          <div 
            className="flex overflow-hidden gap-10 items-start px-4 py-2 w-full rounded-md bg-lime-600 cursor-pointer"
            onClick={handleNextStep}
          >
            <div className="self-start px-2.5 w-7 h-7 text-xs font-bold whitespace-nowrap bg-white rounded-full text-neutral-600 flex items-center justify-center">
              A
            </div>
            <div className="flex-auto my-auto text-base font-medium text-center text-white">
              Talk to them directly about the issue
            </div>
          </div>
          {["B", "C", "D"].map(option => (
            <div
              key={option}
              className="flex overflow-hidden gap-10 items-start px-4 py-2 w-full rounded-md shadow-[0px_1px_30px_rgba(69,42,124,0.1)] cursor-pointer"
              onClick={handleNextStep}
            >
              <div className="self-start px-2.5 w-7 h-7 text-xs font-bold whitespace-nowrap bg-white rounded-full text-neutral-600 flex items-center justify-center">
                {option}
              </div>
              <div className="flex-auto my-auto text-base font-medium leading-none text-white">
                {option === "B" ? "Talk to the professor/manager about the issue" : 
                 option === "C" ? "Do their work for them to ensure the project succeeds" : 
                 "Find a new teammate"}
              </div>
            </div>
          ))}
          
          <div className="flex flex-wrap gap-1 items-center mt-6 text-base font-semibold tracking-tight leading-none text-center">
            <div className="self-stretch my-auto text-white">
              Question {currentQuestion}
            </div>
            <div className="self-stretch my-auto text-indigo-200">
              of {totalQuestions}
            </div>
          </div>
          <div className="flex flex-wrap mt-2 w-full">
            <div 
              className="flex shrink-0 h-1.5 bg-blue-700" 
              style={{ width: `${(currentQuestion / totalQuestions) * 100}%` }}
            />
            <div 
              className="flex shrink-0 max-w-full h-1.5 bg-indigo-200" 
              style={{ width: `${100 - (currentQuestion / totalQuestions) * 100}%` }}
            />
          </div>
        </div>
      ),
      buttonText: "Continue"
    },
    {
      id: "completion",
      title: "Great job! Now, the real journey begins. I've captured everything I need to create your personalized path.",
      component: null,
      buttonText: "Continue"
    },
    {
      id: "completion-2",
      title: "You've just taken the first step toward building your career. I'll be here for you to help you grow every day!",
      component: null,
      buttonText: "Continue"
    },
    {
      id: "completion-3",
      title: "Let me take you inside",
      component: null,
      buttonText: "I'm ready Zuno!"
    }
  ];

  // Handle next step
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

  // Scroll to bottom when new content is added
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [completedSteps, currentStepIndex]);

  const currentStep = steps[currentStepIndex];

  return (
    <main className="flex overflow-hidden flex-col px-8 pt-2.5 pb-12 bg-white h-screen max-md:px-5">
      <Header />
      <GradientBackground className="mt-3 flex-grow flex flex-col relative overflow-hidden rounded-[40px]">
        {/* Back Button */}
        <button
          onClick={handleBack}
          className="absolute left-8 top-8 p-3 bg-blue-700 rounded-full text-white hover:bg-blue-600 transition-colors z-10"
        >
          <ArrowLeft className="h-5 w-5" />
        </button>

        {/* Chat Container */}
        <div 
          ref={containerRef}
          className="flex-grow flex flex-col overflow-y-auto px-4 md:px-8 py-20 max-w-3xl mx-auto w-full"
        >
          <AnimatePresence>
            {/* Completed Steps */}
            {completedSteps.map((step, index) => (
              <motion.div
                key={`${step.id}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
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
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <ChatStep 
                title={currentStep.title}
                avatarSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/a26d7053ea464524bf89d4c4d1b45c6ca0a5a727"
              >
                {currentStep.component || (
                  <Button 
                    onClick={handleNextStep}
                    className="mt-7 w-full max-w-md mx-auto bg-blue-700 hover:bg-blue-600 text-base py-6"
                  >
                    {currentStep.buttonText}
                  </Button>
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
