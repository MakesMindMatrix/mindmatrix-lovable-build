
import React from "react";
import CourseProgressCard from "./CourseProgressCard";
import { Layers, Clock, Users } from "lucide-react";

const CurrentlyViewingSection = () => {
  return (
    <section className="min-w-60 w-full">
      <div className="w-full">
        <div className="flex flex-col w-full">
          <div className="flex gap-3.5 items-center self-start text-xl font-semibold leading-10 text-white">
            <div className="flex shrink-0 self-stretch my-auto w-2.5 bg-indigo-300 rounded-md h-[26px]" />
            <h2 className="self-stretch my-auto">Currently Viewing</h2>
          </div>
          <div className="mt-5 w-full">
            <CourseCard />
            <CourseProgressCard />
          </div>
        </div>
      </div>
    </section>
  );
};

const CourseCard = () => {
  return (
    <article className="flex flex-col justify-center items-start pt-0 pb-4 w-full bg-gradient-to-r from-orange-300 to-orange-400 rounded-3xl shadow-[0px_1px_30px_rgba(69,42,124,0.1)] overflow-hidden">
      <div className="relative w-full">
        <div className="relative w-full h-40 overflow-hidden">
          <img
            src="/lovable-uploads/ac462153-e730-4ad4-82db-b019514b8834.png"
            className="object-cover w-full h-full"
            alt="Course background"
          />
          <div className="absolute top-3 right-3 bg-orange-500 rounded-full px-3 py-1 text-xs font-medium text-white">
            AEC
          </div>
        </div>
        
        <div className="p-6 pt-4 text-white">
          <h3 className="text-2xl font-medium mb-4">Introduction to Circuit Design</h3>
          <p className="text-sm mb-6">
            Learn the core technologies that power the web. this course covers
            everything from basic Learn the core technologies that power the
            web. this course covers everything from basic,
          </p>
          
          <div className="flex gap-5 items-center mt-4">
            <div className="flex items-center gap-1.5">
              <Layers size={18} className="text-white" />
              <span className="text-sm">12 Modules</span>
            </div>
            
            <div className="flex items-center gap-1.5">
              <Clock size={18} className="text-white" />
              <span className="text-sm">8 Weeks</span>
            </div>
            
            <div className="flex items-center gap-1.5">
              <Users size={18} className="text-white" />
              <span className="text-sm">280</span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default CurrentlyViewingSection;
