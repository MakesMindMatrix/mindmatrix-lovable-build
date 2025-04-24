
import React from "react";
import LogoIcon from "./LogoIcon";

const Header = () => {
  return (
    <header className="flex gap-2 items-center self-center text-2xl font-semibold tracking-tighter whitespace-nowrap text-slate-800">
      <div className="object-contain shrink-0 self-stretch my-auto aspect-[1.65] w-[38px]">
        <LogoIcon />
      </div>
      <h1 className="self-stretch my-auto">MindMatrix</h1>
    </header>
  );
};

export default Header;
