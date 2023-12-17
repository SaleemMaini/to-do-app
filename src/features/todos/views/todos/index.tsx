import { Grid } from "@mui/material";
import { CreateTodoBox } from "@/features/todos/components/create-todo-box";
import { TodosList } from "../../components/todos-list";
import { TodosWrapper } from "./styled";
import { TodoInfoDialog } from "../../components/todo-info-dialog";
import { EditTodoDialog } from "../../components/edit-todo-dialog";

export const TodosView = () => {
  return (
    <>
      <TodoInfoDialog />
      <EditTodoDialog />

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
