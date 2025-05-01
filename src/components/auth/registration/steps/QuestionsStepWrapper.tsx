
import React from "react";
import { ChatStep } from "../ChatStep";
import QuestionsStep from "../QuestionsStep";

interface QuestionsStepWrapperProps {
  currentQuestion: number;
  totalQuestions: number;
  onOptionSelect: () => void;
}

const QuestionsStepWrapper: React.FC<QuestionsStepWrapperProps> = ({ 
  currentQuestion, 
  totalQuestions, 
  onOptionSelect 
}) => {
  return (
    <ChatStep 
      title="You are working on a very important group project and your teammate isn't working what would you do?"
      avatarSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/a26d7053ea464524bf89d4c4d1b45c6ca0a5a727"
    >
      <QuestionsStep 
        currentQuestion={currentQuestion} 
        totalQuestions={totalQuestions}
        onOptionSelect={onOptionSelect}
      />
    </ChatStep>
  );
};

export default QuestionsStepWrapper;
