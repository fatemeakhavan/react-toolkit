import { createContext, useContext, useState, type ReactNode } from "react";

export interface ITodoItem {
  task: string;
  id: number;
  done: boolean;
}

export interface ITodoContext {
  addTask: (task: string) => void;
  removeTask: (id: number) => void;
  doneTask: (id: number) => void;
  list: ITodoItem[];
}

const todoContext = createContext<ITodoContext | undefined>(undefined);

export default function TodoProvider({ children }: { children: ReactNode }) {
  const [list, setList] = useState<ITodoItem[]>([]);

  const addTask = (task: string) => {
    setList((prev) => [...prev, { task, id: Date.now(), done: false }]);
  };

  const removeTask = (id: number) => {
    const element = document.getElementById(`task-item-${id}`);

    if (element) {
      element.classList.add("animation-remove");

      element.addEventListener(
        "animationend",
        () => {
          setList((prev) => prev.filter((item) => item.id !== id));
        },
        { once: true },
      );
    }
  };

  const doneTask = (id: number) => {
    setList((prev) =>
      prev.map((item) => (item.id === id ? { ...item, done: true } : item)),
    );
  };

  return (
    <todoContext.Provider value={{ list, addTask, removeTask, doneTask }}>
      {children}
    </todoContext.Provider>
  );
}

export const useTodo = () => {
  const context = useContext(todoContext);
  if (!context) {
    throw new Error("useTodo must be used in TodoProvider ");
  }

  return context;
};
