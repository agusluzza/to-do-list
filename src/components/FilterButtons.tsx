import { Tab, Tabs } from "@heroui/react";
import TaskList from "./TaskList";
import { useTasks } from "../hooks/useTasks";

export default function FilterButtons() {
  const { setFilter } = useTasks();
  return (
    <Tabs
      aria-label="Options"
      onSelectionChange={(e) => setFilter(e)}
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
