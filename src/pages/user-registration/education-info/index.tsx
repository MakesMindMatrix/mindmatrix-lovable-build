
import React from "react";
import EducationForm from "@/components/auth/EducationForm";
import BackButton from "@/components/auth/BackButton";

const EducationInfo = () => {
  return (
    <div className="flex relative flex-wrap gap-10 justify-between items-center max-w-full w-[877px]">
      <BackButton />
      <div className="flex flex-col items-center w-full">
        <img
          src="/lovable-uploads/64e43bf3-655b-4e99-917f-18bca2bc4254.png"
          alt="Education Info"
          className="object-contain aspect-square rounded-[64px] shadow-[0px_47px_13px_rgba(0,0,0,0)] w-[68px] mb-5"
        />
        <h2 className="text-3xl font-medium text-center mb-10">
          Lovely to meet you!<br />
          Let's quickly know a bit about your education.
        </h2>
        <EducationForm />
      </div>
    </div>
  );
};

export default EducationInfo;
