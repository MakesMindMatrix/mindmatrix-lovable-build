
import React from "react";
import { ArrowLeft } from "lucide-react";

interface ResponseButtonProps {
  label: string;
}

const ResponseButton: React.FC<ResponseButtonProps> = ({ label }) => {
  return (
    <div className="bg-white/10 text-white p-3 rounded-lg flex justify-between items-center">
      <span>{label}</span>
      <ArrowLeft className="h-4 w-4 rotate-180" />
    </div>
  );
};

export default ResponseButton;
