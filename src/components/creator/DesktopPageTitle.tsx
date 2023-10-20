import { ThemeProvider } from '@emotion/react';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import { Typography } from '../../elements/Typography';
import { Horizontaldots, LeftArrow } from '../../elements/icons';
import { colors } from '../../styles/colors';
import { theme } from '../../theme';

interface Props {
  options?: {
    label: string;
    value: string;
    onClick?: () => void;
  }[];
  title: string;
  onBackClick?: () => void;
  onOptionClick?: (value: string) => void;
}

export const DesktopPageTitle = ({
  options,
  title,
  onBackClick,
  onOptionClick
}: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <AppBar
        position="static"
        sx={{
          width: '100%',
          background: colors.white,
          boxShadow: 'unset',
          padding: '12px'
        }}
      >
        <Toolbar
          sx={{
            paddingLeft: '0 !important',
            paddingRight: '0 !important'
          }}
        >
          <Stack
            spacing={2}
            direction={'row'}
            justifyContent={'space-between'}
            sx={{ width: '100%' }}
          >
            <Stack flexDirection={'row'} gap={'10px'} alignItems={'center'}>
              <IconButton
                size="large"
                edge="start"
                aria-label="menu"
                onClick={onBackClick}
                sx={{ color: colors.black, padding: 1 }}
              >
                <LeftArrow />
              </IconButton>

              <Typography
                className="interSemibold20"
                sx={{ color: colors.black }}
              >
                {title}
              </Typography>
            </Stack>
            {options && (
              <IconButton
                size="large"
                edge="end"
                aria-label="more"
                onClick={() => onOptionClick && onOptionClick('')}
                sx={{ color: colors.black, padding: 1 }}
              >
                <Horizontaldots />
              </IconButton>
            )}
          </Stack>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};
