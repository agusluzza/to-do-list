import { Button, Input } from "@heroui/react";
import type { FormEvent } from "react";
import type { Task } from "../shared/types";
import { useTasks } from "../hooks/useTasks";

export default function TaskForm() {
  const { tasks, setTasks, revalidateData } = useTasks();

  const handleAddTask = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const title = (
      form.elements.namedItem("title") as HTMLInputElement
    ).value.trim();
    const description = (
      form.elements.namedItem("description") as HTMLInputElement
    ).value.trim();
    if (!title) return;

    const newTask: Task = {
      id: Date.now(),
      title,
      description,
      completed: false,
    };

    localStorage.setItem("tasks", JSON.stringify([...tasks, newTask]));
    setTasks(revalidateData());
    form.reset();
  };

  return (
    <form onSubmit={handleAddTask} className="flex flex-col gap-3">
      <Input
        isRequired
        errorMessage="Debes ingresar un título"
        label="Título"
        name="title"
        placeholder="Ingresa un título"
        type="text"
      />
      <Input
        label="Descripción"
        name="description"
        placeholder="Ingresa una descripción"
        type="text"
      />
      <Button
        className="w-[60%] mx-auto font-semibold"
        disableRipple
        type="submit"
        variant="solid"
        color="primary"
      >
        Agregar
      </Button>
    </form>
  );
}
