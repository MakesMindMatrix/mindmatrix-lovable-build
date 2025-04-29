
import React from "react";
import { Clock, Layers, Users } from "lucide-react";

interface CourseCardProps {
  courseNumber: string;
  title: string;
  description: string;
}

const CourseCard: React.FC<CourseCardProps> = ({
  courseNumber,
  title,
  description,
}) => {
  return (
    <article className="flex flex-col justify-center p-5 font-medium text-white bg-blue-400 rounded-3xl min-w-60 shadow-[0px_1px_30px_rgba(69,42,124,0.1)] w-full">
      <div className="flex flex-col w-full p-4">
        <div className="flex flex-col w-full">
          <span className="gap-2.5 self-start px-2.5 py-1 text-xs leading-loose bg-white/10 rounded-[100px] mb-2">
            {courseNumber}
          </span>
          <h3 className="text-xl font-medium leading-tight mb-4">{title}</h3>
        </div>
        <p className="text-sm leading-5 mb-4 text-white/90">{description}</p>
        <div className="flex gap-5 items-center mt-2 mb-4 text-sm">
          <div className="flex items-center gap-1.5">
            <Clock size={16} className="text-white/90" />
            <span>2 Hours</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span>7 Sessions</span>
          </div>
        </div>
        <button className="self-start px-5 py-2 text-sm font-medium bg-white rounded-full text-blue-500 hover:bg-white/90 transition-colors">
          View Course
        </button>
      </div>
    </article>
  );
};

export default CourseCard;
