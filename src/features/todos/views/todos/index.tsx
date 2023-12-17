import { Grid } from "@mui/material";
import { CreateTodoBox } from "@/features/todos/components/create-todo-box";
import { TodosList } from "../../components/todos-list";

export const TodosView = () => {
  return (
    <Grid container>
      <Grid xs={12}>
        <CreateTodoBox />

        <TodosList />
      </Grid>
    </Grid>
  );
};
