
import React from "react";

const Logo: React.FC = () => {
  return (
    <header className="flex gap-2 items-center self-start text-2xl font-medium tracking-tighter whitespace-nowrap text-neutral-900">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/6764a8bc52ff472aa18147d84536ab6a/16e9e3ef491b1b0a0b48e6c74515ba2598b9dae9?placeholderIfAbsent=true"
        alt="MindMatrix Logo"
        className="object-contain shrink-0 self-stretch my-auto aspect-[1.65] w-[38px]"
      />
      <h1 className="self-stretch my-auto">MindMatrix</h1>
    </header>
  );
};

export default Logo;
