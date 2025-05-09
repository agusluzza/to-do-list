import { useContext } from "react";
import { TaskContext } from "../contexts/Task.context";

export function useTasks() {
  return useContext(TaskContext);
}
