
import React from "react";
import UserStats from "./UserStats";

const Header: React.FC = () => {
  return (
    <header className="flex items-center px-8 py-3.5 w-full bg-blue-700 rounded-3xl max-md:px-5 max-md:max-w-full">
      <div className="flex flex-wrap flex-1 shrink gap-10 justify-between items-center self-stretch my-auto w-full basis-0 min-w-60 max-md:max-w-full">
        <div className="flex gap-3 items-end self-stretch my-auto text-2xl font-semibold text-white whitespace-nowrap">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/6764a8bc52ff472aa18147d84536ab6a/d89c21cb31b1fa4db769be3d289a68f2ef379589?placeholderIfAbsent=true"
            alt="Home icon"
            className="object-contain shrink-0 w-7 aspect-square"
          />
          <h2>Home</h2>
        </div>
        <UserStats />
      </div>
    </header>
  );
};

export default Header;
