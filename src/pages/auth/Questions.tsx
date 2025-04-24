
"use client";
import * as React from "react";
import Header from "@/components/shared/Header";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Questions() {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = React.useState(1);
  const totalQuestions = 10;

  const handleContinue = () => {
    if (currentQuestion < totalQuestions) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      navigate("/completion");
    }
  };

  const handleBack = () => {
    if (currentQuestion > 1) {
      setCurrentQuestion(prev => prev - 1);
    } else {
      navigate(-1);
    }
  };

  // Example question data - in a real app, you would have an array of questions
  const question = "You are working on a very important group project and your teammate isn't working what would you do?";
  
  // Example options
  const options = [
    { id: "A", text: "Talk to them directly about the issue", isSelected: true },
    { id: "B", text: "Talk to the professor/manager about the issue" },
    { id: "C", text: "Do their work for them to ensure the project succeeds" },
    { id: "D", text: "Find a new teammate" },
  ];

  return (
    <main className="flex overflow-hidden flex-col px-8 pt-2.5 pb-12 bg-white min-h-screen max-md:px-5">
      <Header />
      <section className="flex relative flex-col items-center px-10 mt-3 w-full min-h-[732px] rounded-[40px] max-md:px-5 max-md:max-w-full">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d631192c018e2cf26adec813bbcc046519bd3b24"
          alt="Background gradient"
          className="object-cover absolute inset-0 size-full rounded-[40px]"
        />
        
        <button
          onClick={handleBack}
          className="absolute left-8 top-8 p-3 bg-blue-700 rounded-full text-white hover:bg-blue-600 transition-colors"
        >
          <ArrowLeft className="h-5 w-5" />
        </button>

        <div className="relative flex flex-col justify-center items-center mt-20 w-full max-w-[522px] z-10 max-md:mt-16">
          <div className="flex overflow-hidden flex-col justify-center px-0.5 py-8 rounded-3xl w-full shadow-[0px_1px_30px_rgba(69,42,124,0.1)]">
            <div className="flex flex-col items-center">
              <div className="flex flex-col max-w-full text-2xl font-medium tracking-tight leading-8 text-center text-white w-[456px]">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/a26d7053ea464524bf89d4c4d1b45c6ca0a5a727"
                  className="object-contain self-center aspect-square rounded-[64px] shadow-[0px_47px_13px_rgba(0,0,0,0)] w-[68px]"
                  alt="Question icon"
                />
                <h2 className="mt-8 max-md:max-w-full">{question}</h2>
              </div>

              <div className="flex flex-col self-stretch mt-9 w-full">
                <div className="flex flex-wrap gap-1 items-center self-end max-w-full text-base font-semibold tracking-tight leading-none text-center w-[492px]">
                  <div className="self-stretch my-auto text-white">
                    Question {currentQuestion}
                  </div>
                  <div className="self-stretch my-auto text-indigo-200">
                    of {totalQuestions}
                  </div>
                </div>
                <div className="flex flex-wrap mt-4 w-full">
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

              <div className="mt-9 max-w-full w-[456px]">
                {options.map((option) => (
                  <div
                    key={option.id}
                    className={`flex overflow-hidden gap-10 items-start px-4 py-2 w-full rounded-md ${option.id !== "A" ? "mt-5" : ""} ${option.isSelected ? "bg-lime-600" : "shadow-[0px_1px_30px_rgba(69,42,124,0.1)]"} cursor-pointer`}
                  >
                    <div className="self-start px-2.5 w-7 h-7 text-xs font-bold whitespace-nowrap bg-white rounded-full text-neutral-600 flex items-center justify-center">
                      {option.id}
                    </div>
                    <div
                      className={`flex-auto my-auto text-base font-medium leading-none ${option.isSelected ? "text-center" : ""} text-white`}
                    >
                      {option.text}
                    </div>
                  </div>
                ))}
              </div>

              <Button 
                onClick={handleContinue}
                className="mt-9 max-w-full text-base font-medium leading-none text-center text-white whitespace-nowrap bg-blue-700 rounded-xl w-[456px] py-6"
              >
                Continue
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Questions;
