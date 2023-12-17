import { Todo } from "@/features/todos/types/to-do";
import { Box, Checkbox, Typography } from "@mui/material";

type Props = {
  todo: Todo;
};
export const TodoItem = (props: Props) => {
  // ** Props
  const { todo } = props;

  // ** Variables
  const { title, checked, description } = todo;

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItem: "center",
        px: 4,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Checkbox checked={checked} />
        <Typography>{title}</Typography>
      </Box>

      <Typography>{description}</Typography>

      {/* Actions */}
    </Box>
  );
};
