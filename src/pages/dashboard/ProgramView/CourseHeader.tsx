
import React from "react";

const CourseHeader = () => {
  return (
    <header className="flex justify-between items-center px-8 py-5 mb-4 w-full bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
      <div className="flex gap-3 items-center text-2xl font-semibold text-white whitespace-nowrap">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/6764a8bc52ff472aa18147d84536ab6a/5b5a1f5399c1519e1ccd244f78dfc2595e3a405b?placeholderIfAbsent=true"
          className="object-contain shrink-0 w-7 aspect-square"
          alt="Courses icon"
        />
        <h2>AI Fundamentals: Session 2</h2>
      </div>
      <div className="flex gap-6 items-center">
        <div className="flex gap-2 items-center text-base font-semibold text-white whitespace-nowrap">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/6764a8bc52ff472aa18147d84536ab6a/a4ba139652b15adf4d03ac79649a9b62769a3ccc?placeholderIfAbsent=true"
            className="object-contain shrink-0 w-5 aspect-square rounded-full"
            alt="Points icon"
          />
          <span>50 Pts</span>
        </div>
        <div className="flex gap-2 items-center">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/6764a8bc52ff472aa18147d84536ab6a/f63db8f10c8719ce549382e9dba7d6e797429ada?placeholderIfAbsent=true"
            className="object-contain w-5 aspect-square rounded-full"
            alt="Time icon"
          />
          <span className="text-base font-semibold text-white">
            1hr 30min
          </span>
        </div>
        <div className="flex gap-2 items-center text-base font-semibold text-white">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/6764a8bc52ff472aa18147d84536ab6a/31ffbdae95c64f4ae5fcd983a6635cc95fe48406?placeholderIfAbsent=true"
            className="object-contain shrink-0 w-5 aspect-square rounded-full"
            alt="Completion icon"
          />
          <span>0/4 completed</span>
        </div>
      </div>
    </header>
  );
};

export default CourseHeader;
