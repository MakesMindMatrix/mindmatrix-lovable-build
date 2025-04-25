
import React from "react";

interface InputFieldProps {
  label: string;
  value: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  value,
  placeholder,
  onChange,
}) => {
  return (
    <div className="flex flex-col gap-4 items-start w-full">
      <label className="text-base font-medium leading-5 text-white">
        {label}
      </label>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="relative px-4 py-3 w-full text-base font-medium leading-5 text-indigo-300 rounded-md border-solid backdrop-blur-[35px] border-[3px] border-white border-opacity-50 shadow-[0px_1.197px_29.915px_rgba(69,42,124,0.1)] bg-transparent"
      />
    </div>
  );
};

export default InputField;
