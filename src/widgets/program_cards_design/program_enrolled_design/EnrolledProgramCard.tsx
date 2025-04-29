
import React from "react";
import { EnrolledProgramCard as EnrolledProgramCardType } from "../types";
import CourseCard from "./CourseCard";

interface ProgramCardProps {
  program: EnrolledProgramCardType;
}

const EnrolledProgramCard: React.FC<ProgramCardProps> = ({ program }) => {
  return <CourseCard program={program} />;
};

export default EnrolledProgramCard;
