import { Box, Button, TextField, Typography } from "@mui/material";
import { AddCircleOutlineOutlined } from "@mui/icons-material";
import todos, { createTodo } from "@/store/todos";
import { useState } from "react";
import { Todo } from "../../types/to-do";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store";

export const CreateTodoBox = () => {
  // ** States
  const [todoTitle, setTodoTitle] = useState<string>("");

  // ** Hooks
  const dispatch = useDispatch<AppDispatch>();

  // ** Handlers
  const handelClickCreateTodoBtn = () => {
    const newTodoData: Todo = {
      title: todoTitle,
      checked: false,
      id: Math.random(),
      createdAt: new Date(),
    };

    dispatch(createTodo(newTodoData));
    setTodoTitle("");
  };

  return (
    <Box>
      <TextField
        id="to-do-input"
        label="Create To Do"
        variant="outlined"
        sx={{ width: "100%" }}
        value={todoTitle}
        onChange={(e) => setTodoTitle(e.target.value)}
        InputProps={{
          endAdornment: (
            <Button
              aria-label="delete"
              size="large"
              sx={{ px: 2 }}
              variant="contained"
              onClick={handelClickCreateTodoBtn}
              disabled={!todoTitle}
              color="success"
            >
              <AddCircleOutlineOutlined sx={{ mr: 0.5 }} />
              <Typography variant="button">Create</Typography>
            </Button>
          ),
        }}
      />
    </Box>
  );
};
