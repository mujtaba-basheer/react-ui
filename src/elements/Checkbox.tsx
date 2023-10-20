import { ThemeProvider } from '@emotion/react';
import MuiCheckbox from '@mui/material/Checkbox';
import { theme } from '../theme';

interface Props {
  isChecked?: boolean;
  onChange?: (e: boolean) => void;
}

export const Checkbox = (props: Props) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <MuiCheckbox
          checked={props.isChecked}
          sx={{ p: 0 }}
          onChange={(e) => props.onChange?.(e.target.checked)}
        />
      </ThemeProvider>
    </>
  );
};
