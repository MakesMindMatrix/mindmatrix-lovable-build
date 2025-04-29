
export interface CourseProgress {
  percentComplete: number;
  completed: number;
  inProgress: number;
  pointsEarned: number;
}

export interface CourseData {
  tag: "AEC" | "Minor Degree" | "Certification";
  title: string;
  description: string;
  coverImage: string;
  modules: number;
  weeks: number;
  enrollments: number;
  progress: CourseProgress;
}
