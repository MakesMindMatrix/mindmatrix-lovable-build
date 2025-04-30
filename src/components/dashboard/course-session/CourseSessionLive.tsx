
import React from "react";
import { useLocation } from "react-router-dom";
import Desktop121 from "./Desktop121";
import GradientBackground from "@/components/database/ScreenEmotionTag/GradientBackground";

const CourseSessionLive = () => {
  const location = useLocation();
  const courseData = location.state?.courseData || {
    program: "Energy Management in Electric Vehicles",
    course: "Introduction to Electric Vehicles",
    session: "Session 1",
    title: "Live Class-Web Development Fundamentals",
    courseTitle: "Web Development Fundamentals"
  };

  return (
    <div className="w-full h-[calc(100vh-72px)]">
      <GradientBackground className="absolute inset-0">
        <Desktop121 />
      </GradientBackground>
    </div>
  );
};

export default CourseSessionLive;
