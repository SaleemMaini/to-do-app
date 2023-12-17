import { Todo } from "@/features/todos/types/to-do";
import { Box, Checkbox, IconButton, Stack, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import { TodoItemWrapper } from "./style";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store";
import { selectTodo, toggleTodoInfoDialog } from "@/store/todos";

type Props = {
  todo: Todo;
};
export const TodoItem = (props: Props) => {
  // ** Props
  const { todo } = props;

  // ** Hooks
  const dispatch = useDispatch<AppDispatch>();

  // ** Variables
  const { title, checked, description } = todo;

  // ** Handlers
  const handleClickViewTodoBtn = () => {
    dispatch(selectTodo(todo));
    dispatch(toggleTodoInfoDialog());
  };

  return (
    <TodoItemWrapper>
      <Stack direction="row" alignItems="center">
        <Checkbox checked={checked} sx={{ mr: 1 }} />
        <Typography variant="subtitle2">{title}</Typography>
      </Stack>

      <Typography>{description}</Typography>

      {/* Actions */}
      <Stack direction="row" spacing={1}>
        {/* Open */}
        <IconButton aria-label="open" onClick={handleClickViewTodoBtn}>
          <OpenInFullIcon />
        </IconButton>

        {/* Edit */}
        <IconButton aria-label="delete">
          <EditIcon />
        </IconButton>

        {/* Delete */}
        <IconButton aria-label="delete">
          <DeleteIcon />
        </IconButton>
      </Stack>
    </TodoItemWrapper>
  );
};
