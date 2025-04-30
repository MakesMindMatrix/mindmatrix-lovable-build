
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
          <div className="self-stretch my-auto">
            <h3 className="text-base font-semibold text-white">Ankit Narayan</h3>
            <p className="text-xs font-medium text-white/70">Ankit@mma.io</p>
          </div>
        </div>
        <div className="border-t border-white/20 mt-4 pt-2"></div>
      </div>
      <p className="mt-2.5 text-xs font-medium text-white/60">
        © 2025 Mindmatrix.io
      </p>
    </div>
  );
};

export default UserProfile;
