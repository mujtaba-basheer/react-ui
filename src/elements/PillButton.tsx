import { ThemeProvider } from "@emotion/react";
import LoadingButton from "@mui/lab/LoadingButton";
import { SxProps, Theme } from "@mui/material";
import { Unlock } from "../elements/icons";
import { theme } from "../theme";

interface Props {
  fullWidth?: boolean;
  text: string | React.ReactNode;
  icon?: React.ReactNode;
  disabled?: boolean;
  className?: string;
  type?: "button" | "submit";
  loading?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  variant?: "primary" | "secondary" | "text" | "unlock";
  color?: "black" | "gray";
  size?: "small" | "medium" | "large";
  sx?: SxProps<Theme>;
  background?: string;
  backgroundHover?: string;
}

export const PillButton = (props: Props) => {
  const muiButtonType = () => {
    switch (props.variant) {
      case "primary" || "unlock":
        return "contained";
      case "secondary":
        return "outlined";
      case "text":
        return "text";
      default:
        return "contained";
    }
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <LoadingButton
          fullWidth={props.fullWidth}
          loading={props.loading}
          disabled={props.disabled}
          loadingPosition={
            props.variant === "unlock" || props.icon ? "start" : undefined
          }
          startIcon={props.variant === "unlock" ? <Unlock /> : props.icon}
          variant={muiButtonType()}
          type={props.type || "button"}
          onClick={(e) => props.onClick && props.onClick(e)}
          size={props.size || "medium"}
          sx={{
            ...props.sx,
            ...(props.variant === "unlock"
              ? {
                  background: props.background || "rgba(0, 0, 0, 0.30)",
                  "&:hover": {
                    background: props.backgroundHover || "rgba(0, 0, 0, 0.30)",
                  },
                }
              : {}),
          }}
        >
          {props.text || "Text"}
        </LoadingButton>
      </ThemeProvider>
    </>
  );
};
