
import React, { useState } from "react";

const AssistantSection = () => {
  const [message, setMessage] = useState("");

  return (
    <aside className="text-base font-medium text-white min-w-60 w-[273px]">
      <div className="w-full">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/6764a8bc52ff472aa18147d84536ab6a/f4c6464062024ab495f1e9304c02f67f47bdf05b?placeholderIfAbsent=true"
          className="object-contain aspect-square rounded-[39px] shadow-[0px_29px_8px_rgba(0,0,0,0)] w-[42px]"
          alt="Assistant avatar"
        />
        <p className="mt-5 leading-5">
          These courses will help you upskill at the areas you are currently
          still yet to improve at
        </p>
        <div className="flex flex-col mt-5 w-full text-xs font-semibold">
          <div className="flex gap-2 items-start self-start text-base font-medium tracking-tight">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/6764a8bc52ff472aa18147d84536ab6a/e1c03d06eb6071d18d3412f7cfab1e980b41079a?placeholderIfAbsent=true"
              className="object-contain shrink-0 aspect-square w-[17px]"
              alt="Info icon"
            />
            <span>Select to continue conversation</span>
          </div>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/6764a8bc52ff472aa18147d84536ab6a/859686aa0cad9a0befbc6b8fe055a241ef7e77f9?placeholderIfAbsent=true"
            className="object-contain mt-2.5 w-full aspect-[250]"
            alt="Divider"
          />
          <div className="flex justify-between items-center mt-2.5 w-full group cursor-pointer">
            <button className="self-stretch text-left hover:text-blue-100 transition-colors">
              i want to know more
            </button>
            <div className="flex items-center justify-center w-6 h-6 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/6764a8bc52ff472aa18147d84536ab6a/0431db03881fdee31b0018efab9d6c46b52b7415?placeholderIfAbsent=true"
                className="object-contain w-4 h-4"
                alt="Send icon"
              />
            </div>
          </div>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/6764a8bc52ff472aa18147d84536ab6a/859686aa0cad9a0befbc6b8fe055a241ef7e77f9?placeholderIfAbsent=true"
            className="object-contain mt-2.5 w-full aspect-[250]"
            alt="Divider"
          />
          <div className="flex justify-between items-center mt-2.5 w-full group cursor-pointer">
            <button className="self-stretch text-left hover:text-blue-100 transition-colors">are you sure?</button>
            <div className="flex items-center justify-center w-6 h-6 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/6764a8bc52ff472aa18147d84536ab6a/0431db03881fdee31b0018efab9d6c46b52b7415?placeholderIfAbsent=true"
                className="object-contain w-4 h-4"
                alt="Send icon"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end px-7 mt-5 w-full text-xs text-neutral-900 max-md:pl-5">
          <div className="gap-2.5 self-stretch p-2.5 bg-white rounded-2xl">
            I want to know more
          </div>
        </div>
        <div className="mt-5 leading-none">Zuno is typing...</div>
        <div className="flex flex-col mt-5 mb-6 w-full rounded-3xl overflow-hidden shadow-sm bg-gray-700/20 backdrop-blur-sm">
          <input
            type="text"
            placeholder="Type something..."
            className="bg-transparent w-full p-4 outline-none text-white placeholder:text-gray-400"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <div className="flex justify-end p-2">
            <button className="flex items-center justify-center w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/6764a8bc52ff472aa18147d84536ab6a/115f6ddf53dfe57bf147bd39a16a20714f8425f8?placeholderIfAbsent=true"
                className="object-contain w-5 h-5"
                alt="Send message"
              />
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default AssistantSection;
