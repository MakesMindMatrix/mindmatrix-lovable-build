
import React from "react";
import { Widget } from "../Widget";
import { CheckCircle } from "lucide-react";

export const GoalWidget: React.FC = () => {
  return (
    <Widget title="Your Learning Goals" className="mb-4">
      <div className="space-y-3">
        <div className="flex items-center">
          <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
          <p className="text-sm text-gray-700">Complete Day 1 orientation</p>
        </div>
        <div className="flex items-center">
          <CheckCircle className="h-5 w-5 text-gray-300 mr-2" />
          <p className="text-sm text-gray-700">Set up your career objectives</p>
        </div>
        <div className="flex items-center">
          <CheckCircle className="h-5 w-5 text-gray-300 mr-2" />
          <p className="text-sm text-gray-700">Take your first skill assessment</p>
        </div>
      </div>
    </Widget>
  );
};
