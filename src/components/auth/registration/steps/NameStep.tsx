
import React from "react";
import { motion } from "framer-motion";
import { ChatStep } from "../ChatStep";
import NameInputForm from "@/components/auth/NameInputForm";

interface NameStepProps {
  onContinue: (name: string) => void;
}

const NameStep: React.FC<NameStepProps> = ({ onContinue }) => {
  return (
    <ChatStep 
      title="Awesome! What should I call you?"
      avatarSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/a26d7053ea464524bf89d4c4d1b45c6ca0a5a727"
    >
      <NameInputForm 
        avatarSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/a26d7053ea464524bf89d4c4d1b45c6ca0a5a727"
        onContinue={onContinue}
      />
    </ChatStep>
  );
};

export default NameStep;
