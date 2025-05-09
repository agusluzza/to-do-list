import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HeroUIProvider, ToastProvider } from "@heroui/react";
import App from "./App.tsx";
import "./index.css";
import { TasksProvider } from "./contexts/Task.context.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HeroUIProvider>
      <TasksProvider>
        <App />
      </TasksProvider>
      <ToastProvider />
    </HeroUIProvider>
  </StrictMode>
);
