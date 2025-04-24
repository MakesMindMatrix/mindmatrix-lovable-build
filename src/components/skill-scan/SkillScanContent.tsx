
import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const SkillScanContent = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate("/skill-scan"); // We'll add this route later
  };

  return (
    <section className="flex flex-col justify-center self-stretch py-56 my-auto font-medium text-center text-white min-w-60 w-[456px] max-md:py-24 max-md:max-w-full">
      <div className="flex flex-col items-center max-md:max-w-full">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/6764a8bc52ff472aa18147d84536ab6a/a26d7053ea464524bf89d4c4d1b45c6ca0a5a727"
          className="object-contain aspect-square rounded-[64px] shadow-[0px_47px_13px_rgba(0,0,0,0)] w-[68px]"
          alt="Skill scan icon"
        />
        <h2 className="mt-7 text-3xl tracking-tight leading-10">
          Let's do a quick skill scan to understand your starting point.
        </h2>
        <div className="mt-7 max-w-full text-base leading-none whitespace-nowrap w-[456px]">
          <Button 
            onClick={handleContinue}
            className="w-full bg-blue-700 hover:bg-blue-600 text-base py-6"
          >
            Continue
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SkillScanContent;
