export interface Task {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

export type TaskStatus = "all" | "pending" | "completed";
