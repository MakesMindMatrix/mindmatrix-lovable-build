
import React from "react";

const ProgramHeader = () => {
  return (
    <header className="flex flex-wrap items-center px-8 py-3.5 w-full bg-blue-700 rounded-3xl max-md:px-5 max-md:max-w-full">
      <div className="flex gap-3 items-end self-stretch my-auto text-2xl font-semibold text-white whitespace-nowrap">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/6764a8bc52ff472aa18147d84536ab6a/5b5a1f5399c1519e1ccd244f78dfc2595e3a405b?placeholderIfAbsent=true"
          className="object-contain shrink-0 w-7 aspect-square"
          alt="Programs icon"
        />
        <h1>Programs</h1>
      </div>
      <div className="flex gap-6 items-center self-stretch my-auto ml-auto min-w-60 max-md:max-w-full">
        <div className="flex gap-8 items-center self-stretch my-auto min-w-60">
          <div className="flex gap-2.5 items-center self-stretch my-auto text-base font-semibold text-white whitespace-nowrap">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/6764a8bc52ff472aa18147d84536ab6a/d9260a43631bdac4186a5a0ab0fb6b228684b6bd?placeholderIfAbsent=true"
              className="object-contain shrink-0 self-stretch my-auto w-5 aspect-[0.95] rounded-[134px]"
              alt="Points icon"
            />
            <span className="self-stretch my-auto">50Pts</span>
          </div>
          <div className="flex gap-2.5 items-center self-stretch my-auto">
            <div className="flex gap-2.5 items-center self-stretch my-auto w-5">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/6764a8bc52ff472aa18147d84536ab6a/2c7e1a9816461d981b07f4d532b2b1acf5cce991?placeholderIfAbsent=true"
                className="object-contain self-stretch my-auto aspect-square rounded-[134px] w-[21px]"
                alt="Time icon"
              />
            </div>
            <span className="self-stretch my-auto text-base font-semibold text-white">
              1hr30min
            </span>
          </div>
          <div className="flex gap-2.5 items-center self-stretch my-auto text-base font-semibold text-white">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/6764a8bc52ff472aa18147d84536ab6a/9544e01e7ee2c2bcd0add4d1d99fa65942f908d9?placeholderIfAbsent=true"
              className="object-contain shrink-0 self-stretch my-auto w-5 aspect-[0.95] rounded-[134px]"
              alt="Completion icon"
            />
            <span className="self-stretch my-auto">0/4 completed</span>
          </div>
        </div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/6764a8bc52ff472aa18147d84536ab6a/ef7f11232ca79c8e2fd9745d994f8e4e7a91c338?placeholderIfAbsent=true"
          className="object-contain shrink-0 self-stretch my-auto aspect-square rounded-[100px] w-[45px]"
          alt="User profile"
        />
      </div>
    </header>
  );
};

export default ProgramHeader;
