
import React from "react";
import CourseCard from "./CourseCard";
import TabNavigation from "./TabNavigation";

const CourseList = () => {
  return (
    <div className="flex flex-col h-full">
      <TabNavigation />
      
      <div className="mt-8 px-4">
        <CourseCard 
          courseNumber="Course 1"
          title="Course Title"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          hours={2}
          sessions={7}
          iconType="document"
        />
        
        <div className="mt-6">
          <CourseCard 
            courseNumber="Course 2"
            title="Course Title"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            hours={2}
            sessions={7}
            iconType="lightbulb"
          />
        </div>
      </div>
    </div>
  );
};

export default CourseList;
