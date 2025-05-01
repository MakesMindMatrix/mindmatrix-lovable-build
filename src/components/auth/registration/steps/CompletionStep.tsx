
import React from "react";
import { ChatStep } from "../ChatStep";
import { Button } from "@/components/ui/button";

interface CompletionStepProps {
  onContinue: () => void;
  title: string;
  buttonText: string;
}

const CompletionStep: React.FC<CompletionStepProps> = ({ onContinue, title, buttonText }) => {
  return (
    <ChatStep 
      title={title}
      avatarSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/a26d7053ea464524bf89d4c4d1b45c6ca0a5a727"
    >
      <Button 
        onClick={onContinue}
        className="mt-7 w-full max-w-md mx-auto bg-blue-700 hover:bg-blue-600 text-base py-6 rounded-xl"
      >
        {buttonText}
      </Button>
    </ChatStep>
  );
};

export default CompletionStep;
