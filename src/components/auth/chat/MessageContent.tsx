
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
      src="/lovable-uploads/6748724c-657b-4d8f-b64b-b0a8ddcd0535.png"
      alt="Profile"
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
    <div className="mt-7 max-w-full text-base leading-none w-[456px]">
      <Button 
        onClick={onContinue} 
        className="w-full bg-blue-700 hover:bg-blue-600"
      >
        Sure thing!
      </Button>
    </div>
  );
};
