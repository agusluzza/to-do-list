import { Tab, Tabs } from "@heroui/react";
import type { TaskStatus } from "../shared/types";
import { useTasks } from "../hooks/useTasks";
import TaskList from "./TaskList";

export default function FilterButtons() {
  const { setFilter } = useTasks();
  return (
    <Tabs
      aria-label="Options"
      onSelectionChange={(e) => setFilter(e as TaskStatus)}
      className="mx-auto tracking-tighter font-medium"
    >
      {["all", "pending", "completed"].map((f) => (
        <Tab
          key={f}
          title={
            f === "all" ? "Todo" : f === "pending" ? "Pendiente" : "Completado"
          }
        >
          <TaskList />
        </Tab>
      ))}
    </Tabs>
  );
}
