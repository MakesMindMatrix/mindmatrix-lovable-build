
import React from "react";
import { useNavigate } from "react-router-dom";
import ActionButton from "./ActionButton";

const SignupForm = () => {
  const navigate = useNavigate();

  const handleEmailSignup = () => {
    navigate("/register");
  };

  return (
    <div className="relative mb-0 max-w-full w-[456px] max-md:mb-2.5">
      <div className="flex flex-col items-center w-full max-md:max-w-full">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a26d7053ea464524bf89d4c4d1b45c6ca0a5a727"
          alt="App icon"
          className="object-contain aspect-square rounded-[64px] shadow-[0px_47px_13px_rgba(0,0,0,0)] w-[68px]"
        />
        <h2 className="self-stretch mt-7 text-3xl font-medium tracking-tight leading-10 text-center max-md:max-w-full">
          Let's{" "}
          <em className="not-italic" style={{ fontStyle: "italic" }}>
            start
          </em>{" "}
          by creating your account
        </h2>
        <div className="mt-7 max-w-full text-base leading-none w-[346px]">
          <ActionButton
            icon="https://cdn.builder.io/api/v1/image/assets/TEMP/123d52e9f916c7e130d22894e0de7ae96543459d"
            text="Continue with Email"
            variant="medium"
            onClick={handleEmailSignup}
          />
          <ActionButton
            text="Continue with Google"
            variant="semibold"
            className="mt-2.5"
          />
        </div>
      </div>
      <p className="mt-20 text-xl leading-none text-center max-md:mt-10 max-md:max-w-full">
        <span>Already have an account?</span>{" "}
        <button className="font-semibold underline">Log in</button>
      </p>
    </div>
  );
};

export default SignupForm;
