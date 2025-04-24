
import React from "react";
import { Eye, EyeOff } from "lucide-react";

interface FormFieldProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  type: string;
  readOnly?: boolean;
}

const FormField: React.FC<FormFieldProps> = ({
  label,
  value,
  onChange,
  placeholder,
  type,
  readOnly = false,
}) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const isPassword = type === "password";

  return (
    <div className="flex flex-col items-start gap-[17px] relative self-stretch w-full flex-[0_0_auto]">
      <label className="relative self-stretch mt-[-1.00px] font-medium text-white text-[15px] tracking-[0] leading-[18.8px]">
        {label}
      </label>
      <div className="relative self-stretch w-full">
        <input
          type={isPassword && showPassword ? "text" : type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          readOnly={readOnly}
          className="w-full h-11 rounded-[5px] px-4 text-[#9bb4e8] font-medium text-base leading-5 border-none shadow-[0px_1.2px_29.92px_#442a7c1a] backdrop-blur-[35px] backdrop-brightness-[100%] [background:linear-gradient(105deg,rgba(255,255,255,0.2)_0%,rgba(255,255,255,0.04)_100%)]"
        />
        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-3 text-white"
          >
            {showPassword ? (
              <EyeOff className="h-5 w-5" />
            ) : (
              <Eye className="h-5 w-5" />
            )}
          </button>
        )}
      </div>
    </div>
  );
};

export default FormField;
