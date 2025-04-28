
import React from "react";

const Logo: React.FC = () => {
  return (
    <header className="flex gap-2 items-center self-center text-2xl font-semibold tracking-tighter whitespace-nowrap text-slate-800">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/6764a8bc52ff472aa18147d84536ab6a/6123a99586b2f054f2b2ef0bbcceabe2370fa7e4?placeholderIfAbsent=true"
        alt="MindMatrix Logo"
        className="object-contain shrink-0 self-stretch my-auto aspect-[1.65] w-[38px]"
      />
      <h1 className="self-stretch my-auto">MindMatrix</h1>
    </header>
  );
};

export default Logo;
