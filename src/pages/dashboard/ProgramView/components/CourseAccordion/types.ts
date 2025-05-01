
export interface CourseSession {
  id: number;
  title: string;
  components: CourseComponent[];
}

export interface CourseComponent {
  id: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface CourseAccordionProps {
  isCourseExpanded: boolean;
  toggleCourseCard: () => void;
  currentSession: number;
  toggleSession: (sessionId: number) => void;
  useGlassLayout?: boolean;
  onComponentClick?: (sessionId: number, component: string) => void;
}
