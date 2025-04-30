
import React from "react";

const CourseHeader = () => {
  return (
    <header className="flex overflow-hidden flex-col justify-center px-8 py-5 w-full bg-blue-700 rounded-3xl border-2 border-solid border-neutral-300 shadow-[0px_828px_232px_rgba(0,0,0,0)] max-md:px-5 max-md:max-w-full">
      <div className="flex flex-wrap gap-10 justify-between items-center w-full max-w-[1141px] max-md:max-w-full">
        <div className="flex gap-3 items-end self-stretch my-auto text-2xl font-semibold text-white whitespace-nowrap">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/6764a8bc52ff472aa18147d84536ab6a/5b5a1f5399c1519e1ccd244f78dfc2595e3a405b?placeholderIfAbsent=true"
            className="object-contain shrink-0 w-7 aspect-square"
            alt="Courses icon"
          />
          <h2>Courses</h2>
        </div>
        <div className="flex gap-8 items-center self-stretch my-auto min-w-60">
          <div className="flex gap-2.5 items-center self-stretch my-auto text-base font-semibold text-white whitespace-nowrap">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/6764a8bc52ff472aa18147d84536ab6a/a4ba139652b15adf4d03ac79649a9b62769a3ccc?placeholderIfAbsent=true"
              className="object-contain shrink-0 self-stretch my-auto w-5 aspect-[0.95] rounded-[134px]"
              alt="Points icon"
            />
            <span className="self-stretch my-auto">50Pts</span>
          </div>
          <div className="flex gap-2.5 items-center self-stretch my-auto">
            <div className="flex gap-2.5 items-center self-stretch my-auto w-5">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/6764a8bc52ff472aa18147d84536ab6a/f63db8f10c8719ce549382e9dba7d6e797429ada?placeholderIfAbsent=true"
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
              src="https://cdn.builder.io/api/v1/image/assets/6764a8bc52ff472aa18147d84536ab6a/31ffbdae95c64f4ae5fcd983a6635cc95fe48406?placeholderIfAbsent=true"
              className="object-contain shrink-0 self-stretch my-auto w-5 aspect-[0.95] rounded-[134px]"
              alt="Completion icon"
            />
            <span className="self-stretch my-auto">0/4 completed</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default CourseHeader;
