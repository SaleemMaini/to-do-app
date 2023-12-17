import { Box, BoxProps, styled } from "@mui/material";

export const TodoItemWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  cursor: "pointer",
  ":hover": {
    backgroundColor: theme.palette.background.paper,
  },
}));
