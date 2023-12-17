import { Dialog, DialogTitle, IconButton } from "@mui/material";
import { ReactNode } from "react";
import CloseIcon from "@mui/icons-material/Close";

type Props = {
  isOpen: boolean;
  children: ReactNode;
  title: string;
  onClose: () => void;
};
export const CustomDialog = (props: Props) => {
  // ** Props
  const { children, isOpen, onClose, title } = props;

  return (
    <Dialog onClose={onClose} open={isOpen}>
      {/* Title */}
      <DialogTitle sx={{ m: 0, p: 2 }} id="dialog-title">
        {title}
      </DialogTitle>
      <IconButton
        aria-label="close"
        onClick={onClose}
        sx={{
          position: "absolute",
          right: 8,
          top: 8,
          color: (theme) => theme.palette.grey[500],
        }}
      >
        <CloseIcon />
      </IconButton>
      {children}
    </Dialog>
  );
};
