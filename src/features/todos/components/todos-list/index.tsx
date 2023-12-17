import { TodoItem } from "./todo-item";
import { Box } from "@mui/material";
import { RootState } from "@/store";
import { useSelector } from "react-redux";
import { Todo } from "../../types/to-do";

export const TodosList = () => {
  // ** Store
  const { todos 
  } = useSelector((state: RootState) => state.todos);

  return (
    <Box sx={{ mt: 2 }}>
      {todos.map((todo: Todo) => {
        return <TodoItem key={todo.id} todo={todo} />;
      })}
    </Box>
  );
};
