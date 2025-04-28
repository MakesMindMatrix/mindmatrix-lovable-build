
import React from 'react';
import { Widget } from "@/components/dashboard/widgets/Widget";
import { CheckCircle } from "lucide-react";

interface GoalTrackerWidgetProps {
  widget_id: string;
  widget_content: string;
  goals: {
    text: string;
    completed: boolean;
  }[];
}

const GoalTrackerWidget: React.FC<GoalTrackerWidgetProps> = ({ 
  widget_id, 
  widget_content,
  goals 
}) => {
  return (
    <Widget title="Your Learning Goals" className="mb-4">
      <p className="text-sm text-gray-600 mb-3">{widget_content}</p>
      <div className="space-y-3">
        {goals.map((goal, index) => (
          <div key={`${widget_id}-goal-${index}`} className="flex items-center">
            <CheckCircle className={`h-5 w-5 mr-2 ${goal.completed ? 'text-green-500' : 'text-gray-300'}`} />
            <p className="text-sm text-gray-700">{goal.text}</p>
          </div>
        ))}
      </div>
    </Widget>
  );
};

export default GoalTrackerWidget;
