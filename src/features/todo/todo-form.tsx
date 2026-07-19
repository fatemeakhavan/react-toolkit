import { useState } from "react";
import { useTodo } from "../../provider/todo-provider";

const TodoForm = () => {
  const [input, setInput] = useState<string>("");
  const { addTask } = useTodo();

  const handleAddTask = () => {
    if (!input.trim()) return;

    addTask(input);
    setInput("");
  };

  return (
    <div className="container-todo-form">
      <p>Add ToDo Form</p>

      <div className="container-input-todo">
        <input
          name="task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleAddTask}>Add todo</button>
      </div>
    </div>
  );
};
export default TodoForm;
