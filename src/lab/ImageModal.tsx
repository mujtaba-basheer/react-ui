import * as React from "react";
import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const StyledPaper = styled(Paper)`
  background-color: rgba(0, 0, 0, 0.6);
  max-width: revert;
  width: 1200px;
`;

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export interface ImageModalProps {
  children: React.ReactNode;
  open: boolean;
  onClose?: () => void;
}

export const ImageModal = ({ children, open, onClose }: ImageModalProps) => {
  return (
    <div>
      <Dialog
        fullScreen
        open={open}
        onClose={onClose}
        TransitionComponent={Transition}
        PaperComponent={StyledPaper}
      >
        <Box sx={{ position: "absolute", zIndex: "999", top: "0", right: "0" }}>
          <Box sx={{ textAlign: "right", m: "20px 20px 0 0 " }}>
            <IconButton
              edge="end"
              onClick={() => {
                onClose?.();
              }}
              aria-label="close"
              sx={{ color: "#fff" }}
            >
              <CloseIcon sx={{ width: "24px", height: "24px" }} />
            </IconButton>
          </Box>
        </Box>
        <Box>{children}</Box>
      </Dialog>
    </div>
  );
};
