
"use client";
import React, { useState } from "react";

type NameInputFormProps = {
  avatarSrc: string;
  onContinue?: (name: string) => void;
};

const NameInputForm: React.FC<NameInputFormProps> = ({
  avatarSrc,
  onContinue,
}) => {
  const [firstName, setFirstName] = useState("");

  const handleContinue = () => {
    if (firstName.trim() && onContinue) {
      onContinue(firstName.trim());
    }
  };

  return (
    <div className="flex flex-col justify-center w-full">
      <div className="w-full">
        <div className="flex flex-col w-full">
          <div className="mt-3 w-full leading-none">
            <div className="w-full">
              <label
                htmlFor="firstName"
                className="text-base text-white"
              >
                First Name
              </label>
              <input
                id="firstName"
                type="text"
                placeholder="Your preferred name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="overflow-hidden px-4 py-3 mt-3 w-full text-base text-white bg-white/10 rounded-md shadow-[0px_1px_30px_rgba(69,42,124,0.1)] placeholder:text-white/50"
                autoComplete="off"
              />
            </div>
          </div>
        </div>
        <button
          onClick={handleContinue}
          className="overflow-hidden px-16 py-3 mt-6 w-full text-base leading-none text-center text-white bg-blue-700 rounded-xl hover:bg-blue-600 transition-colors"
          disabled={!firstName.trim()}
        >
          Let's continue
        </button>
      </div>
    </div>
  );
};

export default NameInputForm;
