
import React from "react";
import { Widget } from "../Widget";
import { Lightbulb } from "lucide-react";

export const TipWidget: React.FC = () => {
  return (
    <Widget className="bg-blue-50 border-blue-100">
      <div className="flex">
        <div className="bg-blue-100 rounded-full p-2 mr-3">
          <Lightbulb className="h-5 w-5 text-blue-600" />
        </div>
        <div>
          <h4 className="font-medium text-blue-700">Pro Tip</h4>
          <p className="text-sm text-blue-600 mt-1">
            Interact with Zuno daily to get personalized career guidance and track your progress.
          </p>
        </div>
      </div>
    </Widget>
  );
};
