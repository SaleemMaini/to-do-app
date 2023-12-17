import { DialogContent, Grid, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store";
import { selectTodo, toggleTodoInfoDialog } from "@/store/todos";

import { CustomDialog } from "@/components/dialog";

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
    <CustomDialog
      onClose={handleClose}
      isOpen={todoInfoDialogIsOpen}
      title={title}
    >
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
    </CustomDialog>
  );
};
