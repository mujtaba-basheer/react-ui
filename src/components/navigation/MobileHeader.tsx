import { ThemeProvider } from '@emotion/react';
import { Box, IconButton, Stack } from '@mui/material';
import { Badge } from '../../elements/Badge';
import { Logo } from '../../elements/Logo';
import { Typography } from '../../elements/Typography';
import { Horizontaldots, LeftArrow, Notification } from '../../elements/icons';
import { colors } from '../../styles/colors';
import { theme } from '../../theme';

interface MobileHeaderProps {
  notificationCount: number;
  onNotificationsClick?: () => unknown;
  state?: string;
  variant?: 'white' | 'reverse';
  title?: string;
}

export const MobileHeader = ({
  notificationCount = 0,
  state,
  variant,
  title,
  onNotificationsClick
}: MobileHeaderProps) => {
  const Home = () => {
    return (
      <Stack
        direction={'row'}
        width={'100%'}
        bgcolor={colors.white}
        padding={'20px 16px'}
        justifyContent={'space-between'}
        alignItems={'center'}
      >
        <Logo size={130.576} />

        <Box sx={{ cursor: 'pointer' }} onClick={onNotificationsClick}>
          <Badge number={notificationCount}>
            <Notification size="24px" />
          </Badge>
        </Box>
      </Stack>
    );
  };

  return (
    <ThemeProvider theme={theme}>
      {state === 'home' ? (
        <Home />
      ) : (
        <Stack
          direction={'row'}
          width={'100%'}
          bgcolor={variant === 'white' ? colors.white : 'transparent'}
          color={variant === 'white' ? colors.black : colors.white}
          padding={'20px 16px'}
          justifyContent={'space-between'}
          alignItems={'center'}
        >
          <IconButton>
            <LeftArrow
              color={variant === 'white' ? '#000' : '#fff'}
              size="24px"
            />
          </IconButton>
          <Typography className="interSemibold16">{title}</Typography>
          <IconButton>
            <Horizontaldots
              color={variant === 'white' ? '#000' : '#fff'}
              size="24px"
            />
          </IconButton>
        </Stack>
      )}
    </ThemeProvider>
  );
};
