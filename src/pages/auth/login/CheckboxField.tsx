
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
    <label className="flex gap-2.5 items-center cursor-pointer">
      <Checkbox 
        checked={checked}
        onCheckedChange={onChange}
        className="border-2 border-white data-[state=checked]:border-white data-[state=checked]:bg-blue-700"
      />
      <span className="text-base font-medium text-white">{label}</span>
    </label>
  );
};

export default CheckboxField;
