
import React from "react";
import Header from "@/components/shared/Header";
import NameInputForm from "@/components/auth/NameInputForm";
import BackButton from "@/components/auth/BackButton";

const SignupName = () => {
  const handleContinue = (name: string) => {
    console.log(`Continuing with name: ${name}`);
  };

  return (
    <main className="flex overflow-hidden flex-col px-8 pt-2.5 pb-12 bg-white max-md:px-5">
      <Header />
      <section className="flex relative flex-col items-start px-10 mt-3 w-full min-h-[732px] rounded-[40px] max-md:px-5 max-md:max-w-full">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d631192c018e2cf26adec813bbcc046519bd3b24"
          alt="Background"
          className="object-cover absolute inset-0 size-full"
        />
        <div className="flex relative flex-wrap gap-10 justify-between items-center max-w-full w-[877px]">
          <BackButton />
          <NameInputForm
            avatarSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/a26d7053ea464524bf89d4c4d1b45c6ca0a5a727"
            onContinue={handleContinue}
          />
        </div>
      </section>
    </main>
  );
};

export default SignupName;
