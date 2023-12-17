import { Box, BoxProps, styled } from "@mui/material";

export const TodoItemWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  border: "1px solid #ccc",
  borderRadius: "5px",
  margin: "3px 0",

  ":hover": {
    backgroundColor: theme.palette.background.paper,
  },
}));
