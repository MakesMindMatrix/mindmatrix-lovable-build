
"use client";
import * as React from "react";
import Header from "@/components/shared/Header";
import CareerSelectionDropdown from "@/components/auth/CareerSelectionDropdown";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

function InputDetails() {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate("/skill-scan");
  };

  const handleBack = () => {
    navigate(-1);
  };

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

        <div className="relative flex flex-col items-center mt-40 w-full max-w-[458px] z-10 max-md:mt-24">
          <div className="w-full mb-12">
            <label className="block text-base text-white mb-2">
              *Select Career Aspirations
            </label>
            <CareerSelectionDropdown
              label="Select your college"
              placeholder={true}
              iconUrl="https://cdn.builder.io/api/v1/image/assets/6764a8bc52ff472aa18147d84536ab6a/b780c6a227a0e47eb6f6716773e3fe4be6a5c5b9"
            />
          </div>

          <h2 className="text-3xl font-medium tracking-tight leading-10 text-center text-white mb-12 max-md:text-2xl">
            What are your top 3 preferred career focuses?
          </h2>

          <div className="w-full space-y-4 mb-20">
            <CareerSelectionDropdown
              label="Data Engineer (Highly Recommended)"
              selected={true}
              iconUrl="https://cdn.builder.io/api/v1/image/assets/6764a8bc52ff472aa18147d84536ab6a/b9149760592d45d7599b59188f75085d79cf369d"
            />
            <CareerSelectionDropdown
              label="Select Career Focus"
              placeholder={true}
              iconUrl="https://cdn.builder.io/api/v1/image/assets/6764a8bc52ff472aa18147d84536ab6a/b780c6a227a0e47eb6f6716773e3fe4be6a5c5b9"
            />
            <CareerSelectionDropdown
              label="Select Career Focus"
              placeholder={true}
              iconUrl="https://cdn.builder.io/api/v1/image/assets/6764a8bc52ff472aa18147d84536ab6a/b780c6a227a0e47eb6f6716773e3fe4be6a5c5b9"
            />
          </div>

          <Button 
            onClick={handleContinue}
            className="w-full bg-blue-700 hover:bg-blue-600 text-base py-6"
          >
            Exciting! <span className="font-semibold ml-1">Let's go</span>
          </Button>
        </div>
      </section>
    </main>
  );
}

export default InputDetails;
