
import React from "react";

const WelcomeMessage: React.FC = () => {
  return (
    <div className="flex flex-col items-center w-full text-3xl font-medium tracking-tight leading-10 text-center text-white max-md:max-w-full">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/6764a8bc52ff472aa18147d84536ab6a/6db881f7310ae5c98c8fa0be93aa9d3b39b64df3?placeholderIfAbsent=true"
        alt="User avatar"
        className="object-contain aspect-square rounded-[64px] shadow-[0px_47px_13px_rgba(0,0,0,0)] w-[68px]"
      />
      <p className="mt-7 max-md:max-w-full">
        <em>Welcome</em> Back to <strong>MindMatrix</strong>, enter your
        username and password to continue.
      </p>
    </div>
  );
};

export default WelcomeMessage;
