
import React from "react";
import { Button } from "@/components/ui/button";

interface MessageContentProps {
  onContinue: () => void;
  userName?: string;
}

export const MessageContent = ({ onContinue, userName = "there" }: MessageContentProps) => {
  return (
    <article className="flex flex-col items-center self-stretch my-auto font-medium text-center text-white min-w-60 w-[456px] max-md:max-w-full">
      <ProfileImage />
      <GreetingMessage userName={userName} />
      <ResponseButton onContinue={onContinue} />
    </article>
  );
};

const ProfileImage = () => {
  return (
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/a26d7053ea464524bf89d4c4d1b45c6ca0a5a727"
        alt="App icon"
        className="object-contain aspect-square rounded-[64px] shadow-[0px_47px_13px_rgba(0,0,0,0)] w-[68px]"
      />
  );
};

const GreetingMessage = ({ userName }: { userName?: string }) => {
  return (
    <p className="self-stretch mt-7 text-3xl tracking-tight leading-10 max-md:max-w-full">
      <span>Lovely to meet you </span>
      <span className="font-semibold">{userName}</span>
      <span>.</span>
      <br />
      <span>Let's quickly know a bit about your education.</span>
    </p>
  );
};

const ResponseButton = ({ onContinue }: { onContinue: () => void }) => {
  return (
    // w-full mt-64 px-16 py-3 text-base text-center text-white bg-blue-700 rounded-xl hover:bg-blue-600 transition-colors
    <button 
      onClick={onContinue} 
      className="mt-7 max-w-full text-base leading-none w-[456px] px-16 h-12 text-center text-white bg-blue-700 rounded-xl hover:bg-blue-600 transition-colors"
    >
      Sure thing!
    </button>
  );
};
