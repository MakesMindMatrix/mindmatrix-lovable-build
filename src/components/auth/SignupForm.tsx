
import React from "react";
import { useNavigate } from "react-router-dom";
import ActionButton from "./ActionButton";

const SignupForm = () => {
  const navigate = useNavigate();

  const handleEmailSignup = () => {
    navigate("/signup2");
  };

  return (
    <div className="relative mb-0 max-w-full w-[456px] max-md:mb-2.5">
      <div className="flex flex-col items-center w-full max-md:max-w-full">
        <img
          src="/lovable-uploads/5979fb09-c85b-404e-b4cd-0073bc0eb0bf.png"
          alt="App icon"
          className="object-contain aspect-square rounded-[64px] w-[68px]"
        />
        <h2 className="self-stretch mt-7 text-3xl font-medium tracking-tight leading-10 text-center text-white max-md:max-w-full">
          Let's{" "}
          <em className="not-italic font-semibold" style={{ fontStyle: "italic" }}>
            start
          </em>{" "}
          by creating your account
        </h2>
        <div className="mt-7 max-w-full w-[346px] space-y-4">
          <ActionButton
            icon="https://cdn.builder.io/api/v1/image/assets/TEMP/123d52e9f916c7e130d22894e0de7ae96543459d"
            text="Continue with Email"
            variant="medium"
            onClick={handleEmailSignup}
          />
          <ActionButton
            text="Continue with Google"
            icon="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
            variant="semibold"
          />
        </div>
      </div>
      <p className="mt-20 text-xl leading-none text-center text-white max-md:mt-10 max-md:max-w-full">
        <span>Already have an account?</span>{" "}
        <button className="font-semibold underline">Log in</button>
      </p>
    </div>
  );
};

export default SignupForm;
