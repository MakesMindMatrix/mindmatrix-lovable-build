
import React from "react";
import ChatMessage from "./ChatMessage";
import ChatOption from "./ChatOption";

const ChatInterface = () => {
  return (
    <div className="relative flex flex-col bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-6 w-full h-[calc(100vh-260px)] overflow-hidden">
      <div className="absolute top-2/4 left-2/4 z-0 max-w-full -translate-x-2/4 -translate-y-2/4 w-[742px]">
        <div className="gap-px w-full">
          <div className="flex flex-col w-full text-2xl font-medium tracking-tight leading-8 text-center text-white">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/6764a8bc52ff472aa18147d84536ab6a/a7209096f36c29aafc0addb4a66e4a9eca34ec0f?placeholderIfAbsent=true"
              className="object-contain self-center aspect-square rounded-full shadow-lg w-[68px]"
              alt="AI assistant"
            />
            <p className="mt-7">
              Hey there! 👋 Your mentor will be here shortly. In the meantime,
              let's do a quick recap on yesterday's topic: Prompt Engineering.
            </p>
          </div>

          <div className="flex flex-col mt-24 w-full min-h-[200px]">
            <div className="flex gap-4 items-center self-start text-lg font-semibold text-white">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/6764a8bc52ff472aa18147d84536ab6a/d059cae4cda5d64ebbb596d0be7f823c205d4b90?placeholderIfAbsent=true"
                className="object-contain shrink-0 w-4 aspect-square"
                alt="Select icon"
              />
              <p>Select to continue conversation</p>
            </div>

            <div className="mt-5 w-full text-base font-medium">
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
    </div>
  );
};

export default ChatInterface;
