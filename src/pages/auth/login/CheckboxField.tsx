
import React from "react";
import { Checkbox } from "@/components/ui/checkbox";

interface CheckboxFieldProps {
  label: string;
  checked: boolean;
  onChange: () => void;
}

const CheckboxField: React.FC<CheckboxFieldProps> = ({
  label,
  checked,
  onChange,
}) => {
  return (
    <label className="flex gap-[10px] items-center cursor-pointer">
      <div className="w-[18px] h-[18px] bg-white rounded-[2px]">
        <Checkbox 
          checked={checked}
          onCheckedChange={onChange}
          className="data-[state=checked]:bg-[#012FFF] data-[state=checked]:border-[#012FFF]"
        />
      </div>
      <span className="text-[15px] font-medium text-white">{label}</span>
    </label>
  );
};

export default CheckboxField;
