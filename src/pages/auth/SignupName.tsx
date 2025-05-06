
import React, { useState } from "react";
import AuthLayout from "@/components/auth/AuthLayout";
import NameInputForm from "@/components/auth/NameInputForm";
import { useNavigate } from "react-router-dom";

const SignupName = () => {
  const navigate = useNavigate();
  
  const handleContinue = (name: string) => {
    console.log(`Continuing with name: ${name}`);
    navigate("/name-welcome", { state: { userName: name } });
  };

  return (
    <AuthLayout>
      <NameInputForm
        avatarSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/a26d7053ea464524bf89d4c4d1b45c6ca0a5a727"
        onContinue={handleContinue}
      />
    </AuthLayout>
  );
};

export default SignupName;
