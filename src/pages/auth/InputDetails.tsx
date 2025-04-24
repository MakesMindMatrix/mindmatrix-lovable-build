
"use client";
import * as React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/shared/Header";
import { Button } from "@/components/ui/button";

function InputDetails() {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleContinue = () => {
    // You can add validation or store the input value if needed
    // For now, we'll just navigate to the next screen
    navigate("/next-screen"); // Replace with actual next route
  };

  return (
    <main className="flex overflow-hidden flex-col px-8 pt-2.5 pb-12 bg-white max-md:px-5">
      <Header />
      <section className="flex relative flex-col items-start px-10 mt-3 w-full min-h-[732px] rounded-[40px] max-md:px-5 max-md:max-w-full">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d631192c018e2cf26adec813bbcc046519bd3b24"
          alt="Background gradient"
          className="object-cover absolute inset-0 size-full rounded-[40px]"
        />
        <div className="flex relative flex-wrap gap-10 justify-between items-center max-w-full w-[876px]">
          <div className="self-stretch pt-40 pb-20 my-auto font-medium min-w-60 w-[456px] max-md:pt-24 max-md:max-w-full">
            <div className="w-full max-w-md mx-auto">
              <label
                htmlFor="custom-input"
                className="block text-base font-medium text-white mb-4"
              >
                Tell us something unique about yourself
              </label>
              <div className="relative">
                <input
                  id="custom-input"
                  type="text"
                  value={inputValue}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 text-indigo-300 rounded-md shadow-[0px_1px_30px_rgba(69,42,124,0.1)] bg-transparent border-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter something unique"
                />
              </div>
              {inputValue && (
                <p className="mt-1 text-sm text-gray-300">
                  Current value: {inputValue}
                </p>
              )}
            </div>
            <Button 
              onClick={handleContinue} 
              className="w-full mt-9 bg-blue-700 hover:bg-blue-600"
              disabled={!inputValue}
            >
              All set <span className="font-semibold ml-1">What's Next?</span>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default InputDetails;
