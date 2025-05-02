
export interface CourseAccordionProps {
  isCourseExpanded: boolean;
  toggleCourseCard: () => void;
  currentSession: number;
  toggleSession: (sessionId: number) => void;
  useGlassLayout?: boolean;
  onComponentClick?: (sessionId: number, componentId: string) => void;
  currentComponent?: string;
}

export interface SessionComponent {
  id: string;
  title: string;
  type: "main" | "sub";
  subComponents?: SessionSubComponent[];
}

export interface SessionSubComponent {
  id: string;
  title: string;
  type: "sub";
}

export interface Session {
  id: number;
  title: string;
  components: SessionComponent[];
}

export interface SessionItemProps {
  session: Session;
  expandedSessions: Record<number, boolean>;
  toggleExpandSession: (sessionId: number) => void;
  handleComponentClick: (sessionId: number, componentId: string) => void;
  currentComponent?: string;
}

export interface CourseSession {
  id: number;
  title: string;
  components: {
    id: string;
    title: string;
    type: "main" | "sub";
    icon?: React.ElementType;
    subComponents?: {
      id: string;
      title: string;
      type: "sub";
    }[];
  }[];
}
