
"use client";
import React from "react";
import ChatMessage from "./ChatMessage";
import ChatOption from "./ChatOption";

const ChatInterface = () => {
  return (
    <div className="flex overflow-hidden relative flex-col items-start px-32 mt-2.5 w-full text-white bg-blue-200 rounded-2xl h-[735px] max-md:px-5 max-md:max-w-full">
      <div className="flex z-0 self-stretch w-full min-h-[735px] max-md:max-w-full" />

      <div className="absolute top-2/4 left-2/4 z-0 max-w-full -translate-x-2/4 -translate-y-2/4 w-[742px]">
        <div className="gap-px -mb-1 w-full max-md:max-w-full">
          <div className="flex flex-col -mb-1 w-full text-2xl font-medium tracking-tight leading-8 text-center max-md:max-w-full">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/6764a8bc52ff472aa18147d84536ab6a/a7209096f36c29aafc0addb4a66e4a9eca34ec0f?placeholderIfAbsent=true"
              className="object-contain self-center -mb-1 aspect-square rounded-[64px] shadow-[0px_47px_13px_rgba(0,0,0,0)] w-[68px]"
              alt="AI assistant"
            />
            <p className="mt-7 max-md:max-w-full">
              Hey there! 👋 Your mentor will be here shortly. In the meantime,
              let's do a quick recap on yesterday's topic: Prompt Engineering.
            </p>
          </div>

          <div className="flex flex-col mt-24 w-full min-h-[200px] max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-4 items-center self-start text-lg font-semibold">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/6764a8bc52ff472aa18147d84536ab6a/d059cae4cda5d64ebbb596d0be7f823c205d4b90?placeholderIfAbsent=true"
                className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
                alt="Select icon"
              />
              <p className="self-stretch my-auto">
                Select to continue conversation
              </p>
            </div>

            <div className="mt-5 w-full text-base font-medium max-md:max-w-full">
              <ChatOption text="Yes, let's go!" />
              <ChatOption text="Can we do a quick quiz instead?" />
              <ChatOption text="Wait, what's Prompt Engineering again?" />
            </div>
          </div>
        </div>
      </div>

      <ChatMessage
        avatarSrc="https://cdn.builder.io/api/v1/image/assets/6764a8bc52ff472aa18147d84536ab6a/55f2bc87e461ea0c1c38df416dd63d922b76ba35?placeholderIfAbsent=true"
        message="Mentor will join in a few minutes. Let's do a quick recap while you wait!"
        subtext="Expected to start in 15 minutes... ⏳"
        isNotification={true}
      />

      <div className="flex absolute bottom-3.5 z-0 flex-col items-center max-w-full text-base right-[219px] text-zinc-400 w-[766px]">
        <div className="flex overflow-hidden flex-col px-5 pt-5 pb-3 w-full rounded-3xl bg-slate-600 rotate-[4.5911985324664784e-10rad] shadow-[0px_1px_30px_rgba(69,42,124,0.1)] max-md:max-w-full">
          <input
            type="text"
            placeholder="Type something..."
            className="self-start bg-transparent border-none outline-none rotate-[-4.5911985324664784e-10rad] w-full"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/6764a8bc52ff472aa18147d84536ab6a/a3076426fe4c99d006fea89160a084f1f30ca051?placeholderIfAbsent=true"
            className="object-contain self-end mt-3.5 w-9 aspect-square rounded-[100px] shadow-[0px_1px_30px_rgba(69,42,124,0.1)]"
            alt="Send message"
          />
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
