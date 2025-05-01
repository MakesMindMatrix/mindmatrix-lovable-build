
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
    <div className="flex flex-col w-full">
      <div className="mb-6">
        <label
          htmlFor="firstName"
          className="block text-white text-base mb-2"
        >
          First Name
        </label>
        <input
          id="firstName"
          type="text"
          placeholder="Your preferred name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="w-full py-3 px-4 rounded-md bg-white/10 text-white border border-white/30 placeholder:text-white/50 focus:outline-none focus:border-white/50"
          autoComplete="off"
        />
      </div>
      <button
        onClick={handleContinue}
        className="w-full mt-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors font-medium disabled:opacity-70 disabled:cursor-not-allowed"
        disabled={!firstName.trim()}
      >
        Let's continue
      </button>
    </div>
  );
};

export default NameInputForm;
