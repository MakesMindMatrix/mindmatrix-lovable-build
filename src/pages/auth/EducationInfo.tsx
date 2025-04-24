
import React from "react";
import EducationForm from "@/components/auth/EducationForm";
import BackButton from "@/components/auth/BackButton";

const EducationInfo = () => {
  return (
    <div className="relative flex flex-col items-center w-full">
      <div className="absolute top-8 left-8">
        <BackButton />
      </div>
      <EducationForm />
    </div>
  );
};

export default EducationInfo;
