
import React from "react";

const Sidebar = () => {
  return (
    <aside className="self-stretch my-auto w-[43px] max-md:hidden">
      <div className="w-full">
        <div className="w-full">
          <div className="flex overflow-hidden flex-col justify-center p-px w-full">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/6764a8bc52ff472aa18147d84536ab6a/6f57eda035506c522fe70bf8c8b04d15157a0bd5?placeholderIfAbsent=true"
              className="object-contain aspect-[2.05] w-[41px]"
              alt="Logo"
            />
          </div>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/6764a8bc52ff472aa18147d84536ab6a/ea5596b34e872f4b821ee3a8b4415436f8b07993?placeholderIfAbsent=true"
            className="object-contain mt-24 aspect-[0.33] w-[43px] max-md:mt-10"
            alt="Navigation divider"
          />
        </div>
        <button className="flex overflow-hidden gap-2.5 items-center p-4 mt-20 bg-white rounded-xl h-[43px] w-[43px] max-md:mt-10">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/6764a8bc52ff472aa18147d84536ab6a/b0f784536a25393dbcdb4c300fea32f7f150990c?placeholderIfAbsent=true"
            className="object-contain self-stretch my-auto aspect-square w-[13px]"
            alt="Navigation icon"
          />
        </button>
      </div>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/6764a8bc52ff472aa18147d84536ab6a/6e309c6bcc258ebd718a34754a6227a5284df872?placeholderIfAbsent=true"
        className="object-contain mt-80 aspect-[0.5] w-[43px] max-md:mt-10"
        alt="Bottom navigation element"
      />
    </aside>
  );
};

export default Sidebar;
