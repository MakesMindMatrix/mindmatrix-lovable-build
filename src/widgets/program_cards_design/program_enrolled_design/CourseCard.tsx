
import React from "react";
import CourseHeader from "./CourseHeader";
import CourseProgress from "./CourseProgress";
import { CourseData } from "./types";
import { EnrolledProgramCard as EnrolledProgramCardType } from "../types";

interface CourseCardProps {
  program: EnrolledProgramCardType;
}

const CourseCard: React.FC<CourseCardProps> = ({ program }) => {
  // Transform the program data to match CourseData structure
  const courseData: CourseData = {
    tag: program.program_tag,
    title: program.program_title,
    description: program.program_description,
    coverImage: program.program_image,
    modules: program.modules_count,
    weeks: program.duration_weeks,
    enrollments: program.views_count,
    progress: {
      percentComplete: program.progress_percent,
      completed: program.completed_modules,
      inProgress: program.in_progress_modules,
      pointsEarned: program.earned_points,
    },
  };

  return (
    <section className="w-full max-w-[340px]">
      <CourseHeader
        tag={courseData.tag}
        title={courseData.title}
        description={courseData.description}
        coverImage={courseData.coverImage}
        modules={courseData.modules}
        weeks={courseData.weeks}
        enrollments={courseData.enrollments}
      />
      <CourseProgress
        percentComplete={courseData.progress.percentComplete}
        completed={courseData.progress.completed}
        inProgress={courseData.progress.inProgress}
        pointsEarned={courseData.progress.pointsEarned}
      />
    </section>
  );
};

export default CourseCard;
