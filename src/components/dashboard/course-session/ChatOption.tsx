
import React from "react";

interface ChatOptionProps {
  text: string;
}

const ChatOption: React.FC<ChatOptionProps> = ({ text }) => {
  return (
    <>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/6764a8bc52ff472aa18147d84536ab6a/bda94c83f667c8709ce43270030f0108605399a2?placeholderIfAbsent=true"
        className="object-contain w-full aspect-[1000]"
        alt="Divider"
      />
      <div className="flex flex-wrap gap-10 justify-between items-center mt-4 w-full max-md:max-w-full">
        <button className="self-stretch my-auto text-left">{text}</button>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/6764a8bc52ff472aa18147d84536ab6a/0431db03881fdee31b0018efab9d6c46b52b7415?placeholderIfAbsent=true"
          className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square rounded-[100px]"
          alt="Select option"
        />
      </div>
    </>
  );
};

export default ChatOption;
