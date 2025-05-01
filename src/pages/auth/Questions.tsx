
import React, { useState } from "react";
import AuthLayout from "@/components/auth/AuthLayout";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

function Questions() {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const totalQuestions = 10;
  const [selectedOption, setSelectedOption] = useState("");

  const handleContinue = () => {
    if (currentQuestion < totalQuestions) {
      setCurrentQuestion(prev => prev + 1);
      setSelectedOption(""); // Reset selected option for next question
    } else {
      navigate("/completion");
    }
  };

  const handleOptionSelect = (optionId: string) => {
    setSelectedOption(optionId);
    // Auto-advance to next question after a brief delay
    setTimeout(() => {
      if (currentQuestion < totalQuestions) {
        setCurrentQuestion(prev => prev + 1);
        setSelectedOption(""); // Reset selection for next question
      } else {
        navigate("/completion");
      }
    }, 500);
  };

  // Example question data
  const question = "You are working on a very important group project and your teammate isn't working what would you do?";
  
  // Example options
  const options = [
    { id: "A", text: "Talk to them directly about the issue" },
    { id: "B", text: "Talk to the professor/manager about the issue" },
    { id: "C", text: "Do their work for them to ensure the project succeeds" },
    { id: "D", text: "Find a new teammate" },
  ];

  return (
    <AuthLayout>
      <div className="flex flex-col w-full max-w-[520px] rounded-3xl relative">
        {/* Glass card background */}
        <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-3xl border border-white/20" />
        
        <div className="flex flex-col items-center px-10 py-8 relative z-10">
          {/* Question icon */}
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a26d7053ea464524bf89d4c4d1b45c6ca0a5a727"
            className="w-16 h-16 object-contain rounded-[64px]"
            alt="Question icon"
          />
          
          {/* Question text */}
          <h2 className="mt-6 text-xl font-medium tracking-tight text-center text-white">
            {question}
          </h2>

          {/* Question counter and progress bar */}
          <div className="flex flex-col w-full mt-10">
            <div className="flex items-center justify-end gap-1 text-base font-semibold">
              <span className="text-white">Question {currentQuestion}</span>
              <span className="text-indigo-200">of {totalQuestions}</span>
            </div>
            <div className="flex h-1.5 mt-4 w-full overflow-hidden rounded-full">
              <div 
                className="h-full bg-blue-600" 
                style={{ width: `${(currentQuestion / totalQuestions) * 100}%` }}
              />
              <div 
                className="h-full bg-white/30" 
                style={{ width: `${100 - (currentQuestion / totalQuestions) * 100}%` }}
              />
            </div>
          </div>

          {/* Answer options */}
          <div className="mt-6 w-full">
            {options.map((option) => (
              <div
                key={option.id}
                className={`flex items-center gap-4 px-5 py-4 w-full rounded-md ${
                  option.id !== "A" ? "mt-3" : ""
                } ${
                  selectedOption === option.id 
                    ? "bg-green-600 border-green-500" 
                    : "bg-white/10 backdrop-blur-sm border border-white/20"
                } cursor-pointer transition-all duration-200 hover:bg-white/20 hover:border-white/40`}
                onClick={() => handleOptionSelect(option.id)}
              >
                <div className={`flex items-center justify-center w-7 h-7 text-xs font-bold bg-white rounded-full ${
                  selectedOption === option.id ? "text-green-600" : "text-neutral-600"
                }`}>
                  {option.id}
                </div>
                <div className="text-base font-medium leading-none text-white">
                  {option.text}
                </div>
              </div>
            ))}
          </div>

          {/* Continue button */}
          <Button 
            onClick={handleContinue}
            className="w-full mt-6 py-5 bg-blue-600 hover:bg-blue-700 text-white text-base rounded-md font-medium"
          >
            Continue
          </Button>
        </div>
      </div>
    </AuthLayout>
  );
}

export default Questions;
