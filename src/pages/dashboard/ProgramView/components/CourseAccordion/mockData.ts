
import { Book, FileText, Video, ListTodo, ClipboardCheck } from "lucide-react";
import { CourseSession } from "./types";

// Course sessions data
export const sessions: CourseSession[] = [
  {
    id: 1,
    title: "Introduction to Electric Vehicles",
    components: [
      { id: "learning", title: "Learning Module", icon: Book },
      { id: "preread", title: "Pre-read Doc", icon: FileText },
      { id: "tutorial", title: "Tutorial", icon: Video },
      { id: "tasks", title: "Post Session Tasks", icon: ListTodo },
      { id: "assessment", title: "Post Session Assessment", icon: ClipboardCheck }
    ]
  },
  {
    id: 2,
    title: "EV Battery Technology",
    components: [
      { id: "learning", title: "Learning Module", icon: Book },
      { id: "preread", title: "Pre-read Doc", icon: FileText },
      { id: "tutorial", title: "Tutorial", icon: Video },
      { id: "tasks", title: "Post Session Tasks", icon: ListTodo },
      { id: "assessment", title: "Post Session Assessment", icon: ClipboardCheck }
    ]
  },
  {
    id: 3,
    title: "EV Motors and Drivetrains",
    components: [
      { id: "learning", title: "Learning Module", icon: Book },
      { id: "preread", title: "Pre-read Doc", icon: FileText },
      { id: "tutorial", title: "Tutorial", icon: Video },
      { id: "tasks", title: "Post Session Tasks", icon: ListTodo },
      { id: "assessment", title: "Post Session Assessment", icon: ClipboardCheck }
    ]
  },
  {
    id: 4,
    title: "EV Charging Systems",
    components: [
      { id: "learning", title: "Learning Module", icon: Book },
      { id: "preread", title: "Pre-read Doc", icon: FileText },
      { id: "tutorial", title: "Tutorial", icon: Video },
      { id: "tasks", title: "Post Session Tasks", icon: ListTodo },
      { id: "assessment", title: "Post Session Assessment", icon: ClipboardCheck }
    ]
  },
  {
    id: 5,
    title: "EV Market & Future Trends",
    components: [
      { id: "learning", title: "Learning Module", icon: Book },
      { id: "preread", title: "Pre-read Doc", icon: FileText },
      { id: "tutorial", title: "Tutorial", icon: Video },
      { id: "tasks", title: "Post Session Tasks", icon: ListTodo },
      { id: "assessment", title: "Post Session Assessment", icon: ClipboardCheck }
    ]
  },
];
