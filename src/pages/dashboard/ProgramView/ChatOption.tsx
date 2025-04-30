
import React from "react";

interface ChatOptionProps {
  text: string;
}

const ChatOption: React.FC<ChatOptionProps> = ({ text }) => {
  return (
    <>
      <div className="border-t border-white/20 my-3"></div>
      <div className="flex justify-between items-center w-full">
        <button className="text-white hover:text-white/80 text-left">{text}</button>
        <div className="flex justify-center items-center w-6 h-6 rounded-full bg-white/20 hover:bg-white/30">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/6764a8bc52ff472aa18147d84536ab6a/0431db03881fdee31b0018efab9d6c46b52b7415?placeholderIfAbsent=true"
            className="w-4 h-4"
            alt="Select option"
          />
        </div>
      </div>
    </>
  );
};

export default ChatOption;
