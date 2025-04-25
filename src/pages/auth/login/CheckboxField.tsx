
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
    <label className="flex items-center space-x-2 cursor-pointer">
      <Checkbox
        checked={checked}
        onCheckedChange={onChange}
        className="border-white/20 bg-white/10 data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600"
      />
      <span className="text-sm text-white">{label}</span>
    </label>
  );
};

export default CheckboxField;
