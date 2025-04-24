
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
    { id: "A", text: "Select your career goal" },
    { id: "B", text: "Select your career goal" },
    { id: "C", text: "Select your career goal" },
    { id: "D", text: "Select your career goal" },
  ];

  return (
    <main className="flex min-h-screen flex-col bg-gradient-to-br from-blue-50 to-indigo-50">
      <Header />
      <div className="flex-1 px-4 py-8">
        <div className="mx-auto max-w-4xl relative">
          <button
            onClick={handleBack}
            className="absolute left-4 top-4 p-3 bg-blue-600 rounded-full text-white hover:bg-blue-700 transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>

          <div className="mt-20 mx-auto max-w-2xl">
            <div className="bg-white/30 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-white/50">
              <div className="flex flex-col items-center space-y-8">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-indigo-400 flex items-center justify-center">
                  <img
                    src="/lovable-uploads/c5571586-34ef-4c81-a307-34f01491be8f.png"
                    alt="Question icon"
                    className="w-10 h-10"
                  />
                </div>

                <h2 className="text-2xl font-medium text-center text-white max-w-lg">
                  {question}
                </h2>

                <div className="w-full">
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span className="text-white">Question {currentQuestion}</span>
                    <span className="text-white/70">of {totalQuestions}</span>
                  </div>
                  <div className="w-full h-1.5 bg-white/30 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-blue-600 transition-all duration-300"
                      style={{ width: `${(currentQuestion / totalQuestions) * 100}%` }}
                    />
                  </div>
                </div>

                <div className="w-full space-y-4">
                  {options.map((option) => (
                    <button
                      key={option.id}
                      className="w-full flex items-center space-x-4 p-4 rounded-md text-left transition-all hover:bg-white/10 border border-white/20 backdrop-blur-sm group"
                    >
                      <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-sm font-medium text-gray-600 shrink-0">
                        {option.id}
                      </span>
                      <span className="text-white text-base font-medium">{option.text}</span>
                    </button>
                  ))}
                </div>

                <Button
                  onClick={handleContinue}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 rounded-xl text-base font-medium"
                >
                  Continue
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Questions;

