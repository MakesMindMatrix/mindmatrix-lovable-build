
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { OnboardingHeader } from "./OnboardingHeader";
import { OnboardingInput } from "./OnboardingInput";
import { OnboardingButton } from "./OnboardingButton";

export const OnboardingNameForm: React.FC = () => {
  const [firstName, setFirstName] = useState("");
  const navigate = useNavigate();

  const handleContinue = () => {
    console.log("Continuing with name:", firstName);
    navigate("/user-registration/education-info");
  };

  return (
    <main className="flex overflow-hidden flex-col px-8 pt-2.5 pb-12 bg-white max-md:px-5">
      <OnboardingHeader
        logoSrc="/lovable-uploads/4c05d5c7-4d09-4958-98e1-8b1ca2d58173.png"
        title="MindMatrix"
      />

      <section className="flex relative flex-col items-start px-10 mt-3 w-full min-h-[732px] rounded-[40px] max-md:px-5 max-md:max-w-full">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d631192c018e2cf26adec813bbcc046519bd3b24"
          alt="Background"
          className="object-cover absolute inset-0 size-full rounded-[40px]"
        />

        <div className="flex relative flex-wrap gap-10 justify-between items-center max-w-full w-[877px]">
          <nav className="self-stretch pt-10 my-auto text-lg font-semibold tracking-tight leading-none text-white whitespace-nowrap pb-[642px] w-[50px] max-md:hidden max-md:pb-24">
            <button 
              onClick={() => navigate(-1)}
              className="overflow-hidden px-4 bg-blue-700 h-[50px] rounded-[100px] w-[50px]"
              aria-label="Go back"
            >
              􀄪
            </button>
          </nav>

          <div className="flex flex-col justify-center self-stretch py-16 my-auto font-medium min-w-60 w-[456px] max-md:max-w-full">
            <div className="max-md:max-w-full">
              <div className="flex flex-col w-full max-md:max-w-full">
                <div className="flex flex-col self-center max-w-full text-3xl tracking-tight leading-10 text-center text-white w-[344px]">
                  <img
                    src="/lovable-uploads/4c05d5c7-4d09-4958-98e1-8b1ca2d58173.png"
                    alt="Avatar"
                    className="object-contain self-center aspect-square rounded-[64px] shadow-[0px_47px_13px_rgba(0,0,0,0)] w-[68px]"
                  />
                  <h2 className="mt-7">
                    Awesome! <br />
                    What should i call you?
                  </h2>
                </div>

                <div className="mt-7 w-full leading-none max-md:max-w-full">
                  <OnboardingInput
                    label="First Name"
                    placeholder="Your preferred name"
                    value={firstName}
                    onChange={setFirstName}
                  />
                </div>
              </div>

              <div className="mt-64 max-md:mt-10">
                <OnboardingButton onClick={handleContinue}>
                  Let's continue
                </OnboardingButton>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

