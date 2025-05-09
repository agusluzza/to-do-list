import { ScrollShadow } from "@heroui/react";
import { useTasks } from "../hooks/useTasks";
import TaskItem from "./TaskItem";

export default function TaskList() {
  const { tasks, filter } = useTasks();

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "pending") return !task.completed;
    return true;
  });

  return (
    <ScrollShadow className="p-1 h-[320px]" size={20} hideScrollBar>
      {filteredTasks.map((task, index) => (
        <TaskItem key={index} task={task} />
      ))}
    </ScrollShadow>
  );
}
