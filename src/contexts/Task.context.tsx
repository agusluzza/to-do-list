import {
  createContext,
  useEffect,
  useState,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from "react";
import type { Task, TaskStatus } from "../shared/types";
import { addToast } from "@heroui/react";

interface TaskContextProps {
  filter: TaskStatus;
  setFilter: Dispatch<SetStateAction<TaskStatus>>;
  tasks: Task[];
  setTasks: Dispatch<SetStateAction<Task[]>>;
  revalidateData: () => Task[];
}

export const TaskContext = createContext<TaskContextProps>(
  {} as TaskContextProps
);

type Props = {
  children: ReactNode;
};

export function TasksProvider({ children }: Props) {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState<TaskStatus>("all");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        localStorage.setItem("tasks", JSON.stringify([...data]));
        const stored = localStorage.getItem("tasks");
        if (stored) setTasks(JSON.parse(stored));
      })
      .catch((err) => {
        addToast({
          title: err.message,
          description: "Ups, hubo un error al obtener la lista de tareas",
          color: "danger",
        });
      });
  }, []);

  const revalidateData = () => {
    const getLocalData = localStorage.getItem("tasks");
    return getLocalData ? JSON.parse(getLocalData) : [];
  };

  return (
    <TaskContext.Provider
      value={{
        filter,
        setFilter,
        tasks,
        setTasks,
        revalidateData,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}
