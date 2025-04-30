
import React from "react";

const UserProfile = () => {
  return (
    <div className="mt-6 w-full">
      <div className="flex flex-col w-full">
        <div className="flex gap-2 items-center self-start">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/6764a8bc52ff472aa18147d84536ab6a/e72854f98fd9e6b04cb52c641f55f966edc06127?placeholderIfAbsent=true"
            className="object-contain shrink-0 self-stretch my-auto aspect-square rounded-[100px] w-[35px]"
            alt="User profile"
          />
          <div className="self-stretch my-auto w-[102px]">
            <h3 className="text-base font-semibold">Ankit Narayan</h3>
            <p className="text-xs font-medium">Ankit@mma.io</p>
          </div>
        </div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/6764a8bc52ff472aa18147d84536ab6a/4b0f9001058adb4562c3095b1a114adf03726127?placeholderIfAbsent=true"
          className="object-contain mt-5 w-[191px]"
          alt="Divider"
        />
      </div>
      <p className="px-5 mt-2.5 max-w-full text-xs font-medium w-[147px] max-md:pl-5">
        © 2025 Mindmatrix.io
      </p>
    </div>
  );
};

export default UserProfile;
