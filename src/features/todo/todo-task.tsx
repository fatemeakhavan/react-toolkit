import { useTodo, type ITodoItem } from "../../provider/todo-provider";

const TodoTask = ({ data }: { data: ITodoItem }) => {
  const { doneTask, removeTask } = useTodo();
  return (
    <div className="container-task" id={`task-item-${data?.id}`}>
      <p>{data?.task}</p>
      <div>
        <button onClick={() => removeTask(data?.id)}>remove</button>
        <input
          type="checkbox"
          checked={data?.done}
          onChange={() => doneTask(data?.id)}
        />
      </div>
    </div>
  );
};

export default TodoTask;
