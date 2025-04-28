
"use client";
import React from "react";

interface ChatOptionProps {
  text: string;
}

const ChatOption: React.FC<ChatOptionProps> = ({ text }) => {
  return (
    <div className="mt-4 w-full">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/6764a8bc52ff472aa18147d84536ab6a/137fefc9427bdef345618e04fc68d60e0835909e"
        className="object-contain max-w-full aspect-[1000] w-[736px]"
        alt="Divider"
      />
      <div className="flex flex-wrap gap-10 justify-between items-center mt-4 w-full whitespace-nowrap max-md:max-w-full">
        <span className="self-stretch my-auto">{text}</span>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/6764a8bc52ff472aa18147d84536ab6a/57048ba5d5e29173d0664c4e0f01b7e0b2e6ee98"
          className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square rounded-[100px]"
          alt="Select option"
        />
      </div>
    </div>
  );
};

export default ChatOption;
