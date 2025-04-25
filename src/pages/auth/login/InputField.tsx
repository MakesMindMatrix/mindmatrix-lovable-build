
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
    <div className="flex flex-col gap-[17px] items-start w-full">
      <label className="text-[15px] font-medium leading-[125%] text-white">
        {label}
      </label>
      <div className="relative flex items-center w-full px-[15px] py-3 rounded-[5px] border-[3px] border-white/50 bg-gradient-to-r from-white/20 to-white/[0.04] shadow-[0px_1.197px_29.915px_rgba(69,42,124,0.1)] backdrop-blur-[35px]">
        <input
          type="text"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full text-base font-medium leading-[125%] text-[#9BB4E8] bg-transparent outline-none"
        />
      </div>
    </div>
  );
};

export default InputField;
