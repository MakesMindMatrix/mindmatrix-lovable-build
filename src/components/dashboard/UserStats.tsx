
import React from "react";

const UserStats: React.FC = () => {
  return (
    <div className="flex gap-6 items-center self-stretch my-auto min-w-60 max-md:max-w-full">
      <div className="flex gap-6 items-center self-stretch my-auto min-w-60 max-md:max-w-full">
        <div className="flex gap-8 items-center self-stretch my-auto min-w-60">
          <div className="flex gap-2.5 items-center self-stretch my-auto text-base font-semibold text-white whitespace-nowrap">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/6764a8bc52ff472aa18147d84536ab6a/0315102b42bc5f70c214f445e097bc92cf89e5f6?placeholderIfAbsent=true"
              alt="Points icon"
              className="object-contain shrink-0 self-stretch my-auto w-5 aspect-[0.95] rounded-[134px]"
            />
            <span className="self-stretch my-auto">50Pts</span>
          </div>
          <div className="flex gap-2.5 items-center self-stretch my-auto">
            <div className="flex gap-2.5 items-center self-stretch my-auto w-5">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/6764a8bc52ff472aa18147d84536ab6a/df849400a4c5924a5fa4b7a8e98a1cf985f8d515?placeholderIfAbsent=true"
                alt="Time icon"
                className="object-contain self-stretch my-auto w-5 aspect-[0.95] rounded-[134px]"
              />
            </div>
            <span className="self-stretch my-auto text-base font-semibold text-white">
              1hr30min
            </span>
          </div>
          <div className="flex gap-2.5 items-center self-stretch my-auto text-base font-semibold text-white">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/6764a8bc52ff472aa18147d84536ab6a/a5fa20b24c2ce16afb93a215dcd70bbb7abed004?placeholderIfAbsent=true"
              alt="Completion icon"
              className="object-contain shrink-0 self-stretch my-auto w-5 aspect-[0.95] rounded-[134px]"
            />
            <span className="self-stretch my-auto">0/4 completed</span>
          </div>
        </div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/6764a8bc52ff472aa18147d84536ab6a/cd1ba95f379203244c9e3f857b6fca3674f72f63?placeholderIfAbsent=true"
          alt="User profile"
          className="object-contain shrink-0 self-stretch my-auto aspect-square rounded-[100px] w-[45px]"
        />
      </div>
    </div>
  );
};

export default UserStats;
