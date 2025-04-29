
import React, { useState } from "react";
import { ChatInterface } from "@/components/dashboard/chat/ChatInterface";

const AssistantSection = () => {
  const [message, setMessage] = useState("");

  return (
    <aside className="text-base font-medium text-white min-w-60 w-full h-full flex flex-col">
      <div className="flex-1 overflow-hidden flex flex-col">
        {/* Assistant avatar and intro */}
        <div className="mb-4">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/6764a8bc52ff472aa18147d84536ab6a/f4c6464062024ab495f1e9304c02f67f47bdf05b?placeholderIfAbsent=true"
            className="object-contain aspect-square rounded-[39px] shadow-[0px_29px_8px_rgba(0,0,0,0)] w-[42px]"
            alt="Assistant avatar"
          />
          <p className="mt-5 leading-5">
            These courses will help you upskill at the areas you are currently
            still yet to improve at
          </p>
        </div>

        {/* Conversation section */}
        <div className="flex-1 overflow-hidden flex flex-col">
          <div className="flex gap-2 items-start self-start text-base font-medium tracking-tight mb-2">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/6764a8bc52ff472aa18147d84536ab6a/e1c03d06eb6071d18d3412f7cfab1e980b41079a?placeholderIfAbsent=true"
              className="object-contain shrink-0 aspect-square w-[17px]"
              alt="Info icon"
            />
            <span>Select to continue conversation</span>
          </div>
          
          {/* Option 1 */}
          <div className="mb-3">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/6764a8bc52ff472aa18147d84536ab6a/859686aa0cad9a0befbc6b8fe055a241ef7e77f9?placeholderIfAbsent=true"
              className="object-contain w-full aspect-[250]"
              alt="Divider"
            />
            <div className="flex justify-between items-center mt-2.5 w-full">
              <button className="self-stretch my-auto">
                I want to know more
              </button>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/6764a8bc52ff472aa18147d84536ab6a/0431db03881fdee31b0018efab9d6c46b52b7415?placeholderIfAbsent=true"
                className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square rounded-[100px]"
                alt="Send icon"
              />
            </div>
          </div>
          
          {/* Option 2 */}
          <div className="mb-3">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/6764a8bc52ff472aa18147d84536ab6a/859686aa0cad9a0befbc6b8fe055a241ef7e77f9?placeholderIfAbsent=true"
              className="object-contain w-full aspect-[250]"
              alt="Divider"
            />
            <div className="flex justify-between items-center mt-2.5 w-full">
              <button className="self-stretch my-auto">Are you sure?</button>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/6764a8bc52ff472aa18147d84536ab6a/0431db03881fdee31b0018efab9d6c46b52b7415?placeholderIfAbsent=true"
                className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square rounded-[100px]"
                alt="Send icon"
              />
            </div>
          </div>
          
          {/* User message */}
          <div className="flex flex-col items-end px-7 mt-3 w-full text-xs text-neutral-900">
            <div className="gap-2.5 self-stretch p-2.5 bg-white rounded-2xl">
              I want to know more
            </div>
          </div>
          
          {/* Typing indicator */}
          <div className="mt-5 leading-none">Zuno is typing...</div>
        </div>
      </div>
      
      {/* Fixed input section at the bottom */}
      <div className="mt-auto mb-6 w-full">
        <div className="flex flex-col justify-center items-end p-5 w-full rounded-3xl shadow-[0px_1px_30px_rgba(69,42,124,0.1)] text-zinc-400 bg-white/20 backdrop-blur-sm">
          <input
            type="text"
            placeholder="Type something..."
            className="bg-transparent w-full outline-none"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/6764a8bc52ff472aa18147d84536ab6a/115f6ddf53dfe57bf147bd39a16a20714f8425f8?placeholderIfAbsent=true"
              className="object-contain mt-3.5 w-9 aspect-square rounded-[100px] shadow-[0px_1px_30px_rgba(69,42,124,0.1)]"
              alt="Send message"
            />
          </button>
        </div>
      </div>
    </aside>
  );
};

export default AssistantSection;
