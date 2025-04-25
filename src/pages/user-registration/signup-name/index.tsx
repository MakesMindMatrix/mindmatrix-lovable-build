
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
      <div className="flex flex-col items-center justify-center w-full">
        <NameInputForm
          avatarSrc="/lovable-uploads/4c05d5c7-4d09-4958-98e1-8b1ca2d58173.png"
          onContinue={handleContinue}
        />
      </div>
    </div>
  );
};

export default SignupName;
