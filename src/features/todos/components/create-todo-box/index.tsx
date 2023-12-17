import { Box, Button, TextField, Typography } from "@mui/material";
import { AddCircleOutlineOutlined } from "@mui/icons-material";

export const CreateTodoBox = () => {
  return (
    <Box>
      <TextField
        id="to-do-input"
        label="Create To Do"
        variant="outlined"
        sx={{ width: "100%" }}
        InputProps={{
          endAdornment: (
            <Button
              aria-label="delete"
              size="large"
              sx={{ px: 2 }}
              variant="contained"
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
