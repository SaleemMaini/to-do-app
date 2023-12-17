import { Grid } from "@mui/material";
import { CreateTodoBox } from "@/features/todos/components/create-todo-box";
import { TodosList } from "../../components/todos-list";
import { TodosWrapper } from "./styled";
import { TodoInfoDialog } from "../../components/todo-info-dialog";

export const TodosView = () => {
  return (
    <>
      <TodoInfoDialog />

      <Grid container>
        <Grid xs={12}>
          <TodosWrapper>
            <CreateTodoBox />
            <TodosList />
          </TodosWrapper>
        </Grid>
      </Grid>
    </>
  );
};
