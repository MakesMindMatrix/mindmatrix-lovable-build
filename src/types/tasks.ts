
// Define task status types
export type TaskStatus = "Not Started" | "Inprogress" | "Completed";

// Define task interface
export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  points: number;
  type: string;
  startDate: string;
  completed?: boolean;
}
