
import React from "react";
import AuthLayout from "@/components/auth/AuthLayout";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

function Guidance() {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate("/questions");
  };

  return (
    <AuthLayout>
      <div className="flex flex-col items-center justify-center w-full max-w-[456px] text-white">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a26d7053ea464524bf89d4c4d1b45c6ca0a5a727"
          className="w-[68px] h-[68px] object-contain rounded-[64px]"
          alt="Guidance icon"
        />
        
        <h2 className="mt-7 text-3xl tracking-tight leading-10 text-center">
          No pressure! This helps me<br />guide you better. Just choose<br />what feels most right.
        </h2>
        
        <Button 
          onClick={handleContinue}
          className="w-full mt-7 py-3 bg-blue-700 hover:bg-blue-600 text-base"
        >
          Continue
        </Button>
      </div>
    </AuthLayout>
  );
}

export default Guidance;
