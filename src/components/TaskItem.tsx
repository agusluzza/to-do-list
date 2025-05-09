import { Button, Card, CardBody, CardFooter, CardHeader } from "@heroui/react";
import { CheckIcon, TrashIcon } from "lucide-react";
import type { Task } from "../shared/types";
import { useTasks } from "../hooks/useTasks";

type Props = {
  task: Task;
};

export default function TaskItem({ task }: Props) {
  const { tasks, setTasks, revalidateData } = useTasks();
  const handleDelete = (id: number) => {
    localStorage.setItem(
      "tasks",
      JSON.stringify([...tasks.filter((task) => task.id !== id)])
    );
    setTasks(revalidateData());
  };

  const toggleComplete = (id: number) => {
    localStorage.setItem(
      "tasks",
      JSON.stringify([
        ...tasks.map((task) =>
          task.id === id ? { ...task, completed: !task.completed } : task
        ),
      ])
    );
    setTasks(revalidateData());
  };

  return (
    <Card className="mb-3" shadow="sm">
      <CardHeader className="pt-3 pb-0 font-semibold">{task.title}</CardHeader>
      {task.description && (
        <CardBody className="py-0">
          <div className="flex flex-col text-foreground-500">
            <p>{task.description}</p>
          </div>
        </CardBody>
      )}
      <CardFooter className="pt-2 gap-4 flex justify-end">
        <Button
          color="success"
          variant={task.completed ? "solid" : "ghost"}
          size="sm"
          disableRipple
          onPress={() => toggleComplete(task.id)}
        >
          {task.completed ? (
            <div className="flex gap-2 items-center">
              Finalizado
              <CheckIcon className="size-4" />
            </div>
          ) : (
            "Finalizar"
          )}
        </Button>
        <Button
          color="danger"
          variant="flat"
          size="sm"
          disableRipple
          onPress={() => handleDelete(task.id)}
        >
          <TrashIcon className="size-4" />
        </Button>
      </CardFooter>
    </Card>
  );
}
