
import React from 'react';
import { Widget } from "@/components/dashboard/widgets/Widget";
import { Progress } from "@/components/ui/progress";

interface SkillProgressWidgetProps {
  widget_id: string;
  widget_content: string;
  skills: {
    name: string;
    progress: number;
  }[];
}

const SkillProgressWidget: React.FC<SkillProgressWidgetProps> = ({ 
  widget_id, 
  widget_content,
  skills 
}) => {
  return (
    <Widget title="Skill Progress Tracker" className="mb-4">
      <p className="text-sm text-gray-600 mb-3">{widget_content}</p>
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <div key={`${widget_id}-skill-${index}`} className="space-y-1">
            <div className="flex justify-between">
              <p className="text-sm font-medium">{skill.name}</p>
              <p className="text-sm text-gray-500">{skill.progress}%</p>
            </div>
            <Progress value={skill.progress} />
          </div>
        ))}
      </div>
    </Widget>
  );
};

export default SkillProgressWidget;
