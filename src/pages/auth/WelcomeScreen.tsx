import React from "react";
import { useNavigate } from "react-router-dom";
import LogoIcon from "@/components/shared/LogoIcon";
import { Button } from "@/components/ui/button";

const WelcomeScreen: React.FC = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate("/signup");
  };

  return (
    <main className="flex relative flex-col justify-center items-center mx-auto w-full max-w-none h-screen bg-white max-md:max-w-[991px] max-sm:max-w-screen-sm">
      <header className="flex absolute top-2.5 gap-2 items-center max-sm:hidden">
        <div className="flex justify-center items-center h-[23px] w-[38px]">
          <LogoIcon />
        </div>
        <h1 className="text-2xl font-semibold tracking-tighter text-slate-800">
          MindMatrix
        </h1>
      </header>

      <section className="flex justify-center items-center size-full">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/f23640c294c87b94017d825ab00a9dcb7bbe4494?placeholderIfAbsent=true"
          className="absolute left-8 h-[88%] rounded-[40px] top-[50px] w-[95.5%] max-md:h-[85%] max-md:w-[90%] max-sm:w-full max-sm:h-4/5"
          alt="Background"
        />

        <div className="flex absolute flex-col gap-8 items-center bg-black bg-opacity-0 h-[258px] top-[287px] w-[456px] z-[1] max-md:p-5 max-md:h-auto max-md:w-[90%] max-sm:p-5 max-sm:w-full max-sm:h-auto">
          <div className="flex flex-col gap-1.5 items-center w-full">
            <h2 className="text-3xl font-bold tracking-tight text-center text-white">
              Hello, I'm Zuno.
            </h2>
            <p className="text-base tracking-tight text-center text-white">
              I'm your personal career buddy. Welcome to MindMatrix, where
              your career gets smarter every day!
            </p>
          </div>

          <Button
            onClick={handleContinue}
            className="w-[456px] max-md:w-[90%] max-sm:w-full bg-blue-700 hover:bg-blue-800"
            size="lg"
          >
            Continue
          </Button>
        </div>
      </section>
    </main>
  );
};

export default WelcomeScreen;
