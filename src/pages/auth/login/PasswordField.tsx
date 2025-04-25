
import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

interface PasswordFieldProps {
  label: string;
  value: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PasswordField: React.FC<PasswordFieldProps> = ({
  label,
  value,
  placeholder,
  onChange,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex flex-col gap-4 items-start w-full">
      <label className="text-base font-medium leading-5 text-white">
        {label}
      </label>
      <div className="flex relative items-center w-full">
        <input
          type={showPassword ? "text" : "password"}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="px-4 py-3 w-full text-base font-medium leading-5 text-indigo-300 rounded-md border-solid backdrop-blur-[35px] border-[3px] border-white border-opacity-50 shadow-[0px_1.197px_29.915px_rgba(69,42,124,0.1)] bg-transparent"
        />
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute right-4"
          aria-label={showPassword ? "Hide password" : "Show password"}
        >
          {showPassword ? (
            <EyeOff className="h-5 w-5 text-white" />
          ) : (
            <Eye className="h-5 w-5 text-white" />
          )}
        </button>
      </div>
    </div>
  );
};

export default PasswordField;
