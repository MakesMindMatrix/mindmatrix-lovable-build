
export interface CourseAccordionProps {
  isCourseExpanded: boolean;
  toggleCourseCard: () => void;
  currentSession?: number;
  toggleSession?: (sessionId: number) => void;
  useGlassLayout?: boolean;
  onComponentClick?: (sessionId: number, componentId: string) => void;
  currentComponent?: string;  // Added this property to track the current component
}

export interface SessionItemProps {
  session: {
    id: number;
    title: string;
    components: {
      id: string;
      title: string;
    }[];
  };
  expandedSessions: Record<number, boolean>;
  toggleExpandSession: (sessionId: number) => void;
  handleComponentClick: (sessionId: number, componentId: string) => void;
  currentComponent?: string;  // Added this property
}
