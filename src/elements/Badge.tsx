import { ThemeProvider } from '@emotion/react';
import MuiBadge from '@mui/material/Badge';
import { theme } from '../theme';

interface Props {
  children?: React.ReactNode;
  number?: number;
  variant?: 'dot' | 'standard';
}

export const Badge = (props: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <MuiBadge
        badgeContent={props.number}
        variant={props.variant || 'standard'}
        max={99}
      >
        {props.children}
      </MuiBadge>
    </ThemeProvider>
  );
};
