
"use client";

import React from "react";
import Logo from "./Logo";
import BackgroundContainer from "./BackgroundContainer";
import WelcomeMessage from "./WelcomeMessage";
import LoginForm from "./LoginForm";

const MindMatrixLogin: React.FC = () => {
  return (
    <main className="flex overflow-hidden flex-col px-8 pt-2.5 pb-12 bg-white max-md:px-5">
      <Logo />
      <BackgroundContainer>
        <div className="flex flex-col w-full max-md:max-w-full">
          <WelcomeMessage />
          <LoginForm />
        </div>
      </BackgroundContainer>
    </main>
  );
};

export default MindMatrixLogin;
