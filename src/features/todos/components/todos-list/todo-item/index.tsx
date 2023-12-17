import { Todo } from "@/features/todos/types/to-do";
import { Box, Checkbox, IconButton, Stack, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import { TodoItemWrapper } from "./style";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store";
import {
  deleteTodo,
  editTodo,
  selectTodo,
  toggleEditTodoDialog,
  toggleTodoInfoDialog,
  toggleTodoStatus,
} from "@/store/todos";
import ArchiveIcon from "@mui/icons-material/Archive";
import UnarchiveIcon from "@mui/icons-material/Unarchive";

type Props = {
  todo: Todo;
};
export const TodoItem = (props: Props) => {
  // ** Props
  const { todo } = props;

  // ** Hooks
  const dispatch = useDispatch<AppDispatch>();

  // ** Variables
  const { id, title, checked, description, archiveAt } = todo;

  // ** Handlers
  const handleClickViewTodoBtn = () => {
    dispatch(selectTodo(todo));
    dispatch(toggleTodoInfoDialog());
  };

  const handleClickEditTodoBtn = () => {
    dispatch(selectTodo(todo));
    dispatch(toggleEditTodoDialog());
  };

  const handleClickDeleteTodoBtn = () => {
    dispatch(deleteTodo({ id }));
  };

  const handleClickArchiveTodoBtn = () => {
    dispatch(
      editTodo({
        ...todo,
        archiveAt: archiveAt ? undefined : new Date(),
      })
    );
  };

  return (
    <TodoItemWrapper>
      <Stack direction="row" alignItems="center">
        <Checkbox
          checked={checked}
          sx={{ mr: 1 }}
          onChange={() => dispatch(toggleTodoStatus({ id }))}
        />
        <Typography variant="subtitle2">{title}</Typography>
      </Stack>

      <Typography>{description}</Typography>

      {/* Actions */}
      <Stack direction="row">
        {/* Open */}
        <IconButton aria-label="open" onClick={handleClickViewTodoBtn}>
          <OpenInFullIcon />
        </IconButton>

        {/* Edit */}
        <IconButton aria-label="edit" onClick={handleClickEditTodoBtn}>
          <EditIcon />
        </IconButton>

        {/* Archive */}
        <IconButton
          aria-label="archive"
          onClick={handleClickArchiveTodoBtn}
          color={archiveAt ? "info" : "default"}
        >
          {archiveAt ? <UnarchiveIcon /> : <ArchiveIcon />}
        </IconButton>

        {/* Delete */}
        <IconButton
          aria-label="delete"
          onClick={handleClickDeleteTodoBtn}
          color="error"
        >
          <DeleteIcon />
        </IconButton>
      </Stack>
    </TodoItemWrapper>
  );
};
