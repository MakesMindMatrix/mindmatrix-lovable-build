
import React from "react";

type OnboardingHeaderProps = {
  logoSrc: string;
  title: string;
};

export const OnboardingHeader: React.FC<OnboardingHeaderProps> = ({
  logoSrc,
  title,
}) => {
  return (
    <header className="flex gap-2 items-center self-center text-2xl font-semibold tracking-tighter whitespace-nowrap text-slate-800">
      <img
        src={logoSrc}
        alt={`${title} logo`}
        className="object-contain shrink-0 self-stretch my-auto aspect-[1.65] w-[38px]"
      />
      <h1 className="self-stretch my-auto">{title}</h1>
    </header>
  );
};

