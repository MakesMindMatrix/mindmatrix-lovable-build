
import React from "react";
import { ArrowLeft, Clock, Square } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Course {
  id: number;
  title: string;
  description: string;
  hours: number;
  sessions: number;
  badge: string;
  points?: number;
  taskCount?: number;
  courseSessions?: { id: number; title: string }[];
  courseTasks?: { id: number; title: string }[];
}

interface CourseCardProps {
  course: Course;
  isExpanded: boolean;
  onViewCourse: (courseId: number) => void;
}

const CourseCard: React.FC<CourseCardProps> = ({ 
  course, 
  isExpanded, 
  onViewCourse 
}) => {
  if (isExpanded) {
    return (
      <div className="bg-white/10 rounded-lg border border-white/20 p-6">
        {/* Back button */}
        <div className="flex justify-end mb-4">
          <Button 
            variant="ghost" 
            size="icon" 
            className="rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white"
            onClick={() => onViewCourse(course.id)}
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </div>
        
        {/* Course Badge and Title */}
        <div className="mb-4">
          <div className="bg-white/20 text-white px-3 py-1 rounded-full text-xs inline-block mb-2">
            {course.badge}
          </div>
          <h2 className="text-xl text-white font-medium">{course.title}</h2>
          
          <div className="flex items-center space-x-4 mt-2 text-sm">
            <div className="flex items-center">
              <div className="bg-white/20 w-2 h-2 rounded-full mr-2"></div>
              <span className="text-white">{course.points} PTS</span>
            </div>
            <div className="flex items-center">
              <div className="bg-white/20 w-2 h-2 rounded-full mr-2"></div>
              <span className="text-white">{course.taskCount} Tasks</span>
            </div>
          </div>
        </div>
        
        {/* Sessions */}
        <div className="flex gap-2 mb-6">
          {course.courseSessions?.map((session) => (
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
          
          {course.courseTasks?.map((task) => (
            <CourseTaskItem key={task.id} title={task.title} />
          ))}
          
          <CourseTaskItem title="Assessment" />
        </div>
      </div>
    );
  }

  // Non-expanded view remains mostly the same
  return (
    <div className="bg-white/10 rounded-lg border border-white/20 p-6">
      <div className="mb-2">
        <span className="text-white bg-white/20 px-3 py-1 rounded-full text-xs">
          {course.badge}
        </span>
      </div>
      <h2 className="text-xl text-white font-medium mb-2">{course.title}</h2>
      <p className="text-white/80 text-sm mb-4">{course.description}</p>
      
      <div className="flex items-center space-x-6 mb-4">
        <div className="flex items-center space-x-2">
          <Clock className="w-5 h-5 text-white/70" />
          <span className="text-white">{course.hours} Hours</span>
        </div>
        <div className="flex items-center space-x-2">
          <Square className="w-5 h-5 text-white/70" />
          <span className="text-white">{course.sessions} Sessions</span>
        </div>
      </div>
      
      <Button 
        variant="outline" 
        className="bg-white/10 text-white border-white/30 hover:bg-white/20"
        onClick={() => onViewCourse(course.id)}
      >
        View Course
      </Button>
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
        <Square className="h-3 w-3" />
      </Button>
    </div>
  );
};

export default CourseCard;
