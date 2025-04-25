
import React from "react";
import NameInputForm from "@/components/auth/NameInputForm";
import BackButton from "@/components/auth/BackButton";

const SignupName = () => {
  const handleContinue = (name: string) => {
    console.log(`Continuing with name: ${name}`);
  };

  return (
    <div className="flex relative flex-wrap gap-10 justify-between items-center max-w-full w-[877px]">
      <BackButton />
      <NameInputForm
        avatarSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/a26d7053ea464524bf89d4c4d1b45c6ca0a5a727"
        onContinue={handleContinue}
      />
    </div>
  );
};

export default SignupName;
