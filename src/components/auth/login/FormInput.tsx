
"use client";

import React from "react";

interface FormInputProps {
  label: string;
  placeholder: string;
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormInput: React.FC<FormInputProps> = ({
  label,
  placeholder,
  type = "text",
  value,
  onChange,
}) => {
  return (
    <div className="font-medium leading-none min-h-20 w-full">
      <label className="text-base text-white block">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="overflow-hidden px-4 py-3 mt-4 w-full text-base text-indigo-300 rounded-md shadow-[0px_1px_30px_rgba(69,42,124,0.1)] max-md:pr-5 max-md:max-w-full"
      />
    </div>
  );
};

export default FormInput;
