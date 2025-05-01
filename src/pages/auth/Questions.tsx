
import React, { useState } from "react";
import AuthLayout from "@/components/auth/AuthLayout";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

function Questions() {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const totalQuestions = 10;

  const handleContinue = () => {
    if (currentQuestion < totalQuestions) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      navigate("/completion");
    }
  };

  // Example question data
  const question = "You are working on a very important group project and your teammate isn't working what would you do?";
  
  // Example options
  const options = [
    { id: "A", text: "Talk to them directly about the issue", isSelected: true },
    { id: "B", text: "Talk to the professor/manager about the issue" },
    { id: "C", text: "Do their work for them to ensure the project succeeds" },
    { id: "D", text: "Find a new teammate" },
  ];

  return (
    <AuthLayout>
      <div className="flex flex-col w-full max-w-[520px] bg-transparent rounded-3xl p-8">
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center text-center">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/a26d7053ea464524bf89d4c4d1b45c6ca0a5a727"
              className="w-[68px] h-[68px] object-contain rounded-[64px]"
              alt="Question icon"
            />
            <h2 className="mt-8 text-2xl font-medium tracking-tight leading-8 text-white">
              {question}
            </h2>
          </div>

          <div className="flex flex-col w-full mt-9">
            <div className="flex items-center justify-end gap-1 text-base font-semibold">
              <div className="text-white">
                Question {currentQuestion}
              </div>
              <div className="text-indigo-200">
                of {totalQuestions}
              </div>
            </div>
            <div className="flex h-1.5 mt-4 w-full">
              <div 
                className="h-full bg-blue-700" 
                style={{ width: `${(currentQuestion / totalQuestions) * 100}%` }}
              />
              <div 
                className="h-full bg-indigo-200" 
                style={{ width: `${100 - (currentQuestion / totalQuestions) * 100}%` }}
              />
            </div>
          </div>

          <div className="mt-9 w-full max-w-[456px]">
            {options.map((option) => (
              <div
                key={option.id}
                className={`flex items-center gap-10 px-4 py-2 w-full rounded-md ${
                  option.id !== "A" ? "mt-5" : ""
                } ${
                  option.isSelected ? "bg-lime-600" : "shadow-[0px_1px_30px_rgba(69,42,124,0.1)]"
                } cursor-pointer`}
              >
                <div className="flex items-center justify-center w-7 h-7 text-xs font-bold bg-white rounded-full text-neutral-600">
                  {option.id}
                </div>
                <div
                  className={`text-base font-medium leading-none ${
                    option.isSelected ? "text-center" : ""
                  } text-white`}
                >
                  {option.text}
                </div>
              </div>
            ))}
          </div>

          <Button 
            onClick={handleContinue}
            className="w-full mt-9 py-6 bg-blue-700 hover:bg-blue-600 text-base"
          >
            Continue
          </Button>
        </div>
      </div>
    </AuthLayout>
  );
}

export default Questions;
