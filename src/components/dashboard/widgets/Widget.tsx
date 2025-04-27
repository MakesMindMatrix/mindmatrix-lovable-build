
import React, { ReactNode } from "react";

interface WidgetProps {
  title?: string;
  children: ReactNode;
  className?: string;
}

export const Widget: React.FC<WidgetProps> = ({ title, children, className }) => {
  return (
    <div className={`bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden ${className}`}>
      {title && (
        <div className="border-b border-gray-200 px-4 py-3">
          <h3 className="font-medium text-gray-800">{title}</h3>
        </div>
      )}
      <div className="p-4">{children}</div>
    </div>
  );
};
