import { todos } from "@/data/todos";
import { TodoItem } from "./todo-item";

export const TodosList = () => {
  return (
    <>
      {todos.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} />;
      })}
    </>
  );
};
