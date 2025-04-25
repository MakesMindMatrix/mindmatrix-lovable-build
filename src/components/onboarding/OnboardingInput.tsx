
import React from "react";

type OnboardingInputProps = {
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
};

export const OnboardingInput: React.FC<OnboardingInputProps> = ({
  label,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <div className="w-full">
      <label className="text-base text-white block">{label}</label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="overflow-hidden px-4 py-3 mt-4 w-full text-base text-indigo-300 rounded-md shadow-[0px_1px_30px_rgba(69,42,124,0.1)] focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

