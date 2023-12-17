import {
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { Todo } from "../../types/to-do";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store";
import { selectTodo, toggleTodoInfoDialog } from "@/store/todos";
import CloseIcon from "@mui/icons-material/Close";

export const TodoInfoDialog = () => {
  // ** Store
  const { todoInfoDialogIsOpen, selectedTodo } = useSelector(
    (state: RootState) => state.todos
  );

  // ** Hooks
  const dispatch = useDispatch<AppDispatch>();

  // ** Handlers
  const handleClose = () => {
    dispatch(selectTodo(null));
    dispatch(toggleTodoInfoDialog());
  };

  if (!selectedTodo) {
    return null;
  }

  // ** Vars
  const { title, createdAt, description, finishedAt, archiveAt } = selectedTodo;

  return (
    <Dialog onClose={handleClose} open={todoInfoDialogIsOpen}>
      {/* Title */}
      <DialogTitle sx={{ m: 0, p: 2 }} id="dialog-title">
        {title}
      </DialogTitle>

      <IconButton
        aria-label="close"
        onClick={handleClose}
        sx={{
          position: "absolute",
          right: 8,
          top: 8,
          color: (theme) => theme.palette.grey[500],
        }}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent>
        <Grid container spacing={2}>
          {/* Created At */}
          <Grid item xs={12}>
            <Typography variant="subtitle2">Created At:</Typography>
            <Typography>{createdAt?.toLocaleString()}</Typography>
          </Grid>

          {/* Description */}
          {description ? (
            <Grid item xs={12}>
              <Typography variant="subtitle2">Description:</Typography>
              <Typography>{description}</Typography>
            </Grid>
          ) : null}

          {/* Finished At */}
          {finishedAt ? (
            <Grid item xs={12}>
              <Typography variant="subtitle2">Finished At:</Typography>
              <Typography>{finishedAt.toLocaleString()}</Typography>
            </Grid>
          ) : null}

          {/* archive At */}
          {archiveAt ? (
            <Grid item xs={12}>
              <Typography variant="subtitle2">Archive At:</Typography>
              <Typography>{archiveAt.toLocaleString()}</Typography>
            </Grid>
          ) : null}
        </Grid>
      </DialogContent>
    </Dialog>
  );
};
