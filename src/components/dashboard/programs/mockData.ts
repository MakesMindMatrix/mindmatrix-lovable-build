
// Course data type
export interface Course {
  id: number;
  title: string;
  description: string;
  hours: number;
  sessions: number;
  badge: string;
  points?: number;
  taskCount?: number;
  courseSessions?: { id: number; title: string }[];
  courseTasks?: { id: number; title: string }[];
}

// Mentor data type
export interface Mentor {
  name: string;
  role: string;
  avatar: string;
  experience: string;
  workHistory: string;
  expertise: string[];
  about: string;
}

// Mock mentor data
export const mentor: Mentor = {
  name: "Sushmita Arora",
  role: "Senior Front end Developer",
  avatar: "/lovable-uploads/39611135-2d47-4f62-9b08-c1778217f3b4.png",
  experience: "10+ years in Web Development",
  workHistory: "Google, Microsoft, Freelance",
  expertise: ["Frontend Architecture", "UI/UX Implementation", "JavaScript Frameworks"],
  about: "Sarah is a passionate web developer with over a decade of experience building websites and applications. She specializes in frontend technologies and loves teaching beginners the fundamentals of web development."
};

// Mock courses data
export const courses: Course[] = [
  {
    id: 1,
    title: "Title Header",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    hours: 2,
    sessions: 3,
    badge: "Course 1",
    points: 50,
    taskCount: 18,
    courseSessions: [
      { id: 1, title: "Session 1" },
      { id: 2, title: "Session 2" },
      { id: 3, title: "Session 3" }
    ],
    courseTasks: [
      { id: 1, title: "Task 1" },
      { id: 2, title: "Task 2" }
    ]
  },
  {
    id: 2,
    title: "Course Title",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    hours: 2,
    sessions: 3,
    badge: "Course 2",
    points: 40,
    taskCount: 15,
    courseSessions: [
      { id: 1, title: "Session 1" },
      { id: 2, title: "Session 2" },
      { id: 3, title: "Session 3" }
    ],
    courseTasks: [
      { id: 1, title: "Task 1" },
      { id: 2, title: "Task 2" }
    ]
  }
];
