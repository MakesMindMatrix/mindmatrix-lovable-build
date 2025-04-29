
import React from "react";

interface TabButtonProps {
  icon: React.ReactNode;
  label: string;
}

const TabButton: React.FC<TabButtonProps> = ({ icon, label }) => {
  return (
    <button className="flex items-center justify-center px-4 hover:bg-blue-800/90">
      {icon}
      <span className="ml-2">{label}</span>
    </button>
  );
};

export default TabButton;
