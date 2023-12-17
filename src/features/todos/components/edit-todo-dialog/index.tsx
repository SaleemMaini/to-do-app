import { DialogContent, Grid, TextField, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store";
import { selectTodo, toggleEditTodoDialog } from "@/store/todos";

import { CustomDialog } from "@/components/dialog";
import { useEffect, useState } from "react";

export const EditTodoDialog = () => {
  // ** States
  const [titleFieldValue, setTitleFieldValue] = useState<string>("");
  const [descriptionFieldValue, setDescriptionFieldValue] =
    useState<string>("");

  // ** Store
  const { editTodoDialogIsOpen, selectedTodo } = useSelector(
    (state: RootState) => state.todos
  );

  // ** Hooks
  const dispatch = useDispatch<AppDispatch>();

  // ** Handlers
  useEffect(() => {
    if (selectedTodo && editTodoDialogIsOpen) {
      setTitleFieldValue(selectedTodo.title);
      setDescriptionFieldValue(selectedTodo.description || "");
    }
  }, [editTodoDialogIsOpen, selectedTodo]);

  const handleClose = () => {
    dispatch(selectTodo(null));
    dispatch(toggleEditTodoDialog());
  };

  const handleChangeTitleField = (e: any) => {
    setTitleFieldValue(e.target.value);
  };

  const handleChangeDescriptionField = (e: any) => {
    setDescriptionFieldValue(e.target.value);
  };

  if (!selectedTodo) {
    return null;
  }

  // ** Vars
  const { title, description } = selectedTodo;

  return (
    <CustomDialog
      onClose={handleClose}
      isOpen={editTodoDialogIsOpen}
      title="Edit"
    >
      <DialogContent>
        <Grid container spacing={2}>
          {/* Title */}
          <Grid item xs={12}>
            <Typography variant="subtitle2">Title:</Typography>

            <TextField
              sx={{ width: "100%" }}
              value={titleFieldValue}
              onChange={handleChangeTitleField}
            />
          </Grid>

          {/* Description */}
          <Grid item xs={12}>
            <Typography variant="subtitle2">Description:</Typography>
            <TextField
              multiline
              sx={{ width: "100%" }}
              rows={5}
              value={descriptionFieldValue}
              onChange={handleChangeDescriptionField}
            />
          </Grid>
        </Grid>
      </DialogContent>
    </CustomDialog>
  );
};
