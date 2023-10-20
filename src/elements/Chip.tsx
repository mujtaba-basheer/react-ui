import { ThemeProvider } from '@emotion/react';
import MuiChip from '@mui/material/Chip';
import { useEffect } from 'react';
import { colors } from '../styles/colors';
import { theme } from '../theme';
import { Typography } from './Typography';

interface Props {
  label: string;
  onClick?: () => void;
  variant: 'light' | 'dark' | 'black';
}

export const Chip = (props: Props) => {
  useEffect(() => {});

  return (
    <ThemeProvider theme={theme}>
      <MuiChip
        sx={{
          borderRadius: '4px',
          backgroundColor:
            props.variant === 'light'
              ? colors.lightgray[200]
              : props.variant === 'dark'
              ? 'rgba(0, 0, 0, 0.30)'
              : colors.black,
          color: props.variant === 'light' ? colors.black : colors.white
        }}
        className="interBold10"
        onClick={props.onClick}
        label={<Typography className="interBold12">{props.label} </Typography>}
      />
    </ThemeProvider>
  );
};
