
import React from "react";
import { ChatStep } from "../ChatStep";
import EducationForm from "@/components/auth/EducationForm";

interface EducationStepProps {
  onContinue: () => void;
}

const EducationStep: React.FC<EducationStepProps> = ({ onContinue }) => {
  return (
    <ChatStep 
      title="Tell me about your education"
      avatarSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/a26d7053ea464524bf89d4c4d1b45c6ca0a5a727"
      showTitle={false}
    >
      <EducationForm />
    </ChatStep>
  );
};

export default EducationStep;
