
import React from "react";

interface QuestionsStepProps {
  currentQuestion: number;
  totalQuestions: number;
  onOptionSelect: () => void;
}

const QuestionsStep: React.FC<QuestionsStepProps> = ({
  currentQuestion,
  totalQuestions,
  onOptionSelect
}) => {
  return (
    <div className="w-full space-y-5 mt-6">
      <div 
        className="flex overflow-hidden gap-10 items-start px-4 py-2 w-full rounded-md bg-lime-600 cursor-pointer"
        onClick={onOptionSelect}
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
          onClick={onOptionSelect}
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
  );
};

export default QuestionsStep;
