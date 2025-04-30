
import React from "react";
import { CourseSessionLive } from "@/components/dashboard/course-session";
import Desktop from "@/components/dashboard/day1/Desktop";

const CourseSessionLivePage = () => {
  return (
    <Desktop activeTab="programs" simplified>
      <CourseSessionLive />
    </Desktop>
  );
};

export default CourseSessionLivePage;
