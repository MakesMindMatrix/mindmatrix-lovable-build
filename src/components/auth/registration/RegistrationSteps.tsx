
import React from "react";
import { StepType } from "./types";
import NameInputForm from "@/components/auth/NameInputForm";
import EducationForm from "@/components/auth/EducationForm";
import CareerSelectionDropdown from "@/components/auth/CareerSelectionDropdown";
import { Button } from "@/components/ui/button";
import QuestionsStep from "./QuestionsStep";

interface RegistrationStepsProps {
  handleNextStep: () => void;
  currentQuestion: number;
  totalQuestions: number;
  setName: (name: string) => void;
}

export const createRegistrationSteps = ({ 
  handleNextStep, 
  currentQuestion, 
  totalQuestions,
  setName
}: RegistrationStepsProps): StepType[] => {
  return [
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
        <QuestionsStep 
          currentQuestion={currentQuestion} 
          totalQuestions={totalQuestions}
          onOptionSelect={handleNextStep}
        />
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
};
