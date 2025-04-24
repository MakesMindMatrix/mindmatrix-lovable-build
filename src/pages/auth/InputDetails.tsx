
"use client";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/shared/Header";
import CareerSelectionDropdown from "@/components/auth/CareerSelectionDropdown";
import { Button } from "@/components/ui/button";

function InputDetails() {
  const navigate = useNavigate();

  const handleContinue = () => {
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
          <section className="self-stretch pt-40 pb-9 my-auto font-medium min-w-60 w-[458px] max-md:pt-24 max-md:max-w-full">
            <div className="max-md:max-w-full">
              <div className="flex flex-col w-full leading-none h-[415px] max-md:max-w-full">
                <div className="w-full max-md:max-w-full">
                  <div className="w-full max-md:max-w-full">
                    <label className="text-base text-white max-md:max-w-full">
                      *Select Career Aspirations
                    </label>
                    <CareerSelectionDropdown
                      label="Select your college"
                      placeholder={true}
                      iconUrl="https://cdn.builder.io/api/v1/image/assets/6764a8bc52ff472aa18147d84536ab6a/b780c6a227a0e47eb6f6716773e3fe4be6a5c5b9"
                    />
                  </div>
                </div>

                <h2 className="self-start mt-12 text-3xl tracking-tight leading-10 text-center text-white max-md:mt-10 max-md:max-w-full">
                  What are your top 3 preferred career focuses?
                </h2>

                <div className="mt-12 w-full text-base text-indigo-300 max-md:mt-10 max-md:max-w-full">
                  <CareerSelectionDropdown
                    label="Data Engineer (Highly Recommended)"
                    selected={true}
                    iconUrl="https://cdn.builder.io/api/v1/image/assets/6764a8bc52ff472aa18147d84536ab6a/b9149760592d45d7599b59188f75085d79cf369d"
                  />
                  <CareerSelectionDropdown
                    label="Select Career Focus"
                    placeholder={true}
                    iconUrl="https://cdn.builder.io/api/v1/image/assets/6764a8bc52ff472aa18147d84536ab6a/b780c6a227a0e47eb6f6716773e3fe4be6a5c5b9"
                    className="mt-4"
                  />
                  <CareerSelectionDropdown
                    label="Select Career Focus"
                    placeholder={true}
                    iconUrl="https://cdn.builder.io/api/v1/image/assets/6764a8bc52ff472aa18147d84536ab6a/b780c6a227a0e47eb6f6716773e3fe4be6a5c5b9"
                    className="mt-4"
                  />
                </div>
              </div>

              <Button 
                onClick={handleContinue} 
                className="w-full mt-20 bg-blue-700 hover:bg-blue-600 max-md:mt-10"
              >
                Exciting! <span className="font-semibold ml-1">Let's go</span>
              </Button>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}

export default InputDetails;
