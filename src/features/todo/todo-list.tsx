import { useTodo } from "../../provider/todo-provider";
import TodoTask from "./todo-task";

const TodoList = () => {
  const { list } = useTodo();
  return (
    <div className="container-todo-list">
      {list.map((item) => (
        <TodoTask data={item} key={item.id} />
      ))}
    </div>
  );
};

export default TodoList;
