"use client";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

type NameInputFormProps = {
  avatarSrc: string;
  onContinue?: (name: string) => void;
};

const NameInputForm: React.FC<NameInputFormProps> = ({
  avatarSrc,
  onContinue,
}) => {
  const [firstName, setFirstName] = useState("");
  const navigate = useNavigate();

  const handleContinue = () => {
    if (onContinue) {
      onContinue(firstName);
    }
    navigate("/registration/education-info");
  };

  return (
    <section className="flex flex-col justify-center self-stretch py-16 my-auto font-medium min-w-60 w-[456px] max-md:max-w-full">
      <div className="max-md:max-w-full">
        <div className="flex flex-col w-full max-md:max-w-full">
          <div className="flex flex-col self-center max-w-full text-3xl tracking-tight leading-10 text-center text-white w-[344px]">
            <img
              src={avatarSrc}
              alt="Welcome avatar"
              className="object-contain self-center aspect-square rounded-[64px] shadow-[0px_47px_13px_rgba(0,0,0,0)] w-[68px]"
            />
            <h2 className="mt-7">
              Awesome! <br />
              What should i call you?
            </h2>
          </div>
          <div className="mt-7 w-full leading-none max-md:max-w-full">
            <div className="w-full max-md:max-w-full">
              <label
                htmlFor="firstName"
                className="text-base text-white max-md:max-w-full"
              >
                First Name
              </label>
              <input
                id="firstName"
                type="text"
                placeholder="Your preferred name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="overflow-hidden px-4 py-3 mt-4 w-full text-base text-indigo-300 rounded-md rotate-[2.7755575615628914e-17rad] shadow-[0px_1px_30px_rgba(69,42,124,0.1)] max-md:pr-5 max-md:max-w-full"
              />
            </div>
          </div>
        </div>
        <button
          onClick={handleContinue}
          className="overflow-hidden px-16 py-3 mt-64 w-full text-base leading-none text-center text-white bg-blue-700 rounded-xl max-md:px-5 max-md:mt-10 max-md:max-w-full"
        >
          Let's continue
        </button>
      </div>
    </section>
  );
};

export default NameInputForm;
