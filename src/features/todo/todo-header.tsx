import { useState } from "react";
import Modal from "../../components/modal";
import TodoForm from "./todo-form";

const TodoHeader = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      <div className="container-header-todo">
        <button>sign in / sign up</button>
        <p>Todo List Project</p>
        <button className="btn-create-todo" onClick={() => setOpen(true)}>
          Create Todo
        </button>
      </div>
      <Modal open={open} onClose={() => setOpen(false)} title="Create Task">
        <TodoForm />
      </Modal>
    </>
  );
};
export default TodoHeader;
