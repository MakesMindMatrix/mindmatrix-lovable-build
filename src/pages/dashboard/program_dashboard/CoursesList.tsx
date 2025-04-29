
import React from "react";
import CourseCard from "./CourseCard";

const CoursesList = () => {
  return (
    <section className="flex flex-col min-w-60 w-[445px] max-md:max-w-full">
      <nav className="self-end max-w-full text-xs font-medium leading-loose whitespace-nowrap w-[387px] mb-4">
        <div className="flex flex-wrap items-center gap-0.5 w-full max-w-[387px]">
          <button className="py-1 px-6 text-indigo-300 hover:text-white transition-colors">
            Mentor
          </button>
          <button className="py-1 px-6 text-white border-b-2 border-white">
            Courses
          </button>
        </div>
      </nav>
      <div className="mt-4 w-full max-md:max-w-full">
        <div className="w-full max-md:max-w-full space-y-5">
          <CourseItem 
            courseNumber="Course 1"
            title="Course Title"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <CourseItem 
            courseNumber="Course 2"
            title="Course Title"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
        </div>
      </div>
    </section>
  );
};

const CourseItem = ({ courseNumber, title, description }) => {
  return (
    <div className="flex gap-4 items-start w-full">
      <div className="flex justify-center items-center p-3 bg-slate-400 rounded-full shadow-[0px_1px_30px_rgba(69,42,124,0.1)] w-[42px] h-[42px] mt-1">
        <span className="text-white font-medium">{courseNumber.charAt(courseNumber.length - 1)}</span>
      </div>
      <CourseCard
        courseNumber={courseNumber}
        title={title}
        description={description}
      />
    </div>
  );
};

export default CoursesList;
