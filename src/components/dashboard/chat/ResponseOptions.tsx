
import React from "react";
import { Button } from "@/components/ui/button";

interface ResponseOptionsProps {
  options: string[];
  onSelect: (option: string) => void;
}

export const ResponseOptions: React.FC<ResponseOptionsProps> = ({ options, onSelect }) => {
  return (
    <div className="flex flex-col space-y-2 py-2 mb-4">
      {options.map((option, index) => (
        <Button
          key={index}
          variant="outline"
          className="justify-start text-left hover:bg-blue-50 hover:text-blue-700 hover:border-blue-200"
          onClick={() => onSelect(option)}
        >
          {option}
        </Button>
      ))}
    </div>
  );
};
