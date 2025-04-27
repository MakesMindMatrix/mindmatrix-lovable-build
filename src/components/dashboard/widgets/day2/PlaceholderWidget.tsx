
import React from "react";
import { Widget } from "../Widget";

export const PlaceholderWidget: React.FC = () => {
  return (
    <Widget title="Coming Soon">
      <p className="text-gray-500 text-sm">
        Additional widgets will be available after Day 1 completion.
      </p>
    </Widget>
  );
};
