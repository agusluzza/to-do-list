import { useState } from "react";
import { MoonIcon, SunIcon } from "lucide-react";
import { Card, CardBody, CardHeader, Divider, Switch } from "@heroui/react";
import TaskForm from "./components/TaskForm";
import FilterButtons from "./components/FilterButtons";

export default function App() {
  const [theme, setTheme] = useState("light");

  return (
    <main
      className={`mx-auto p-0 sm:px-12 flex justify-center min-h-screen ${
        theme === "dark" ? "bg-[#222225]" : "bg-white"
      } ${theme}`}
    >
      <Card
        shadow="md"
        radius="lg"
        className="p-2 sm:p-6 max-w-[500px] w-full container"
      >
        <CardHeader>
          <h1 className="sm:text-center w-full mx-auto text-2xl font-bold">
            To Do List
          </h1>
          <Switch
            endContent={<MoonIcon />}
            size="md"
            startContent={<SunIcon />}
            onChange={() => {
              if (theme === "dark") {
                setTheme("light");
              } else {
                setTheme("dark");
              }
            }}
          />
        </CardHeader>
        <CardBody>
          <TaskForm />
          <Divider className="my-4 w-[80%] mx-auto" />
          <FilterButtons />
        </CardBody>
      </Card>
    </main>
  );
}
