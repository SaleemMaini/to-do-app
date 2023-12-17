import { todos } from "@/data/todos";
import { TodoItem } from "./todo-item";
import { Box } from "@mui/material";

export const TodosList = () => {
  return (
    <Box sx={{ mt: 2 }}>
      {todos.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} />;
      })}
    </Box>
  );
};
