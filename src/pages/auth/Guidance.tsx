
"use client";
import * as React from "react";
import Header from "@/components/shared/Header";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Guidance() {
  const navigate = useNavigate();

  const handleContinue = () => {
    // Further navigation can be added later
    navigate("/");
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

        <div className="relative flex flex-col justify-center items-center mt-40 w-full max-w-[456px] z-10 max-md:mt-24">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a26d7053ea464524bf89d4c4d1b45c6ca0a5a727"
            className="object-contain aspect-square rounded-[64px] shadow-[0px_47px_13px_rgba(0,0,0,0)] w-[68px]"
            alt="Guidance icon"
          />
          
          <h2 className="self-stretch mt-7 text-3xl tracking-tight leading-10 text-center text-white max-md:max-w-full">
            No pressure! This helps me guide you better. Just choose what feels
            most right.
          </h2>
          
          <Button 
            onClick={handleContinue}
            className="mt-7 w-full bg-blue-700 hover:bg-blue-600 text-base py-6"
          >
            Continue
          </Button>
        </div>
      </section>
    </main>
  );
}

export default Guidance;
