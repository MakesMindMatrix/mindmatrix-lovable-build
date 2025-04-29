
import React from "react";
import { ArrowRight, Square } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface CourseSession {
  id: number;
  title: string;
}

interface CourseTask {
  id: number;
  title: string;
}

interface ExpandedCourseCardProps {
  courseId: number;
  title: string;
  points: number;
  taskCount: number;
  sessions: CourseSession[];
  tasks: CourseTask[];
  onClose?: () => void;
}

const ExpandedCourseCard: React.FC<ExpandedCourseCardProps> = ({
  courseId,
  title,
  points,
  taskCount,
  sessions,
  tasks,
  onClose,
}) => {
  return (
    <div className="bg-blue-500/90 rounded-lg p-6 text-white w-full animate-fade-in">
      {/* Course Badge and Title */}
      <div className="mb-4">
        <Badge className="bg-blue-600/60 text-white border border-white/40 mb-2">
          Course {courseId}
        </Badge>
        <h2 className="text-2xl font-medium">{title}</h2>
        
        <div className="flex items-center space-x-4 mt-2 text-sm">
          <div className="flex items-center">
            <div className="bg-white/20 w-2 h-2 rounded-full mr-2"></div>
            <span>{points} PTS</span>
          </div>
          <div className="flex items-center">
            <div className="bg-white/20 w-2 h-2 rounded-full mr-2"></div>
            <span>{taskCount} Tasks</span>
          </div>
        </div>
      </div>
      
      {/* Sessions */}
      <div className="flex gap-2 mb-6">
        {sessions.map((session) => (
          <Button 
            key={session.id}
            variant="secondary" 
            className="bg-white/20 hover:bg-white/30 text-white rounded-full text-sm"
          >
            {session.title}
          </Button>
        ))}
        <Button 
          variant="secondary" 
          className="bg-white/20 hover:bg-white/30 text-white rounded-full text-sm"
        >
          Quiz
        </Button>
        <Button 
          variant="secondary" 
          className="bg-white/20 hover:bg-white/30 text-white rounded-full text-sm px-3"
        >
          A+
        </Button>
      </div>
      
      {/* Course Content/Tasks List */}
      <div className="space-y-0">
        <CourseTaskItem title="Pre Read Doc" />
        <CourseTaskItem title="Pre Session Doc" />
        <CourseTaskItem title="Live Tutorial" />
        <CourseTaskItem title="Post Session Ref" />
        
        <div className="border-t border-white/20 my-2"></div>
        
        {tasks.map((task) => (
          <CourseTaskItem key={task.id} title={task.title} />
        ))}
        
        <CourseTaskItem title="Assessment" />
      </div>
    </div>
  );
};

interface CourseTaskItemProps {
  title: string;
}

const CourseTaskItem: React.FC<CourseTaskItemProps> = ({ title }) => {
  return (
    <div className="flex items-center justify-between py-3 border-b border-white/20 last:border-b-0">
      <span className="text-white">{title}</span>
      <Button variant="ghost" size="icon" className="rounded-full bg-white/20 hover:bg-white/30 text-white h-6 w-6">
        <ArrowRight className="h-3 w-3" />
      </Button>
    </div>
  );
};

export default ExpandedCourseCard;
