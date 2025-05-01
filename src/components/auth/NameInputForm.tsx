
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
    navigate("/education-info");
  };

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-[456px] text-white">
      <img
        src={avatarSrc}
        alt="Welcome avatar"
        className="w-[68px] h-[68px] object-contain rounded-[64px]"
      />
      
      <h2 className="mt-7 text-3xl font-medium tracking-tight text-center text-white">
        Awesome! <br />
        What should i call you?
      </h2>
      
      <div className="w-full mt-7">
        <label htmlFor="firstName" className="text-base block text-white">
          First Name
        </label>
        <input
          id="firstName"
          type="text"
          placeholder="Your preferred name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="w-full mt-4 px-4 py-3 text-base text-white rounded-md bg-transparent shadow-[0px_1px_30px_rgba(69,42,124,0.1)] placeholder-white/60"
        />
      </div>
      
      <button
        onClick={handleContinue}
        className="w-full mt-64 px-16 py-3 text-base text-center text-white bg-blue-700 rounded-xl hover:bg-blue-600 transition-colors"
      >
        Let's continue
      </button>
    </div>
  );
};

export default NameInputForm;
