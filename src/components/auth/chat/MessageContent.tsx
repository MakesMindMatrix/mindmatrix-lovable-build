
import React from "react";
import { useNavigate } from "react-router-dom";

export const MessageContent = () => {
  return (
    <article className="flex flex-col items-center self-stretch my-auto font-medium text-center text-white min-w-60 w-[456px] max-md:max-w-full">
      <ProfileImage />
      <GreetingMessage />
      <ResponseButton />
    </article>
  );
};

const ProfileImage = () => {
  return (
    <img
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/a26d7053ea464524bf89d4c4d1b45c6ca0a5a727"
      alt="Profile"
      className="object-contain aspect-square rounded-[64px] shadow-[0px_47px_13px_rgba(0,0,0,0)] w-[68px]"
    />
  );
};

const GreetingMessage = () => {
  return (
    <p className="self-stretch mt-7 text-3xl tracking-tight leading-10 max-md:max-w-full">
      <span>Lovely to meet you </span>
      <span className="font-semibold">Divyam</span>
      <span>.</span>
      <br />
      <span>Let's quickly know a bit about your education.</span>
    </p>
  );
};

const ResponseButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/education-form");
  };

  return (
    <div className="mt-7 max-w-full text-base leading-none w-[456px]">
      <button 
        onClick={handleClick}
        className="overflow-hidden px-16 py-3 w-full bg-blue-700 rounded-xl max-md:px-5 max-md:max-w-full"
      >
        Sure thing!
      </button>
    </div>
  );
};
