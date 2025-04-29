
export interface ProgramCardBase {
  program_image: string;
  program_title: string;
  program_description: string;
  program_tag: "AEC" | "Minor Degree" | "Certification";
  theme_color: string;
  modules_count: number;
  duration_weeks: number;
  views_count: number;
}

export interface EnrolledProgramCard extends ProgramCardBase {
  progress_percent: number;
  completed_modules: number;
  in_progress_modules: number;
  earned_points: number;
}

export interface UnenrolledProgramCard extends ProgramCardBase {}

export const getProgramThemeColor = (programTag: "AEC" | "Minor Degree" | "Certification"): string => {
  switch (programTag) {
    case "AEC":
      return "from-purple-500 to-indigo-600";
    case "Minor Degree":
      return "from-blue-500 to-cyan-600";
    case "Certification":
      return "from-green-500 to-emerald-600";
    default:
      return "from-purple-500 to-indigo-600";
  }
};

export const getProgramTagColor = (programTag: "AEC" | "Minor Degree" | "Certification"): string => {
  switch (programTag) {
    case "AEC":
      return "bg-purple-500";
    case "Minor Degree":
      return "bg-blue-500";
    case "Certification":
      return "bg-green-500";
    default:
      return "bg-purple-500";
  }
};
