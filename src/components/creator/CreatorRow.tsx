import { ThemeProvider } from '@emotion/react';
import { Box, Stack } from '@mui/material';
import { Avatar } from '../../elements/Avatar';
import { PillButton } from '../../elements/PillButton';
import { Typography } from '../../elements/Typography';
import { Cards, Lock, Subscription } from '../../elements/icons';
import { theme } from '../../theme';

interface CreatorRowProps {
  firstName: string;
  lastName: string;
  userName: string;
  profilePic: string;
  subPrice: number;
  publicPostCount: number;
  privatePostCount: number;
  showPillButton?: boolean;
  onClick?: (id?: string) => unknown;
  onSubscription?: () => unknown;
}

export const CreatorRow = ({
  firstName,
  lastName,
  userName,
  profilePic,
  subPrice,
  publicPostCount,
  privatePostCount,
  showPillButton,
  onClick,
  onSubscription
}: CreatorRowProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Stack
        width={'100%'}
        direction={'row'}
        justifyContent={'space-between'}
        alignItems={'center'}
      >
        <Stack direction={'row'} gap={'12px'} alignItems={'center'}>
          <Box sx={{ cursor: 'pointer' }}>
            <Avatar
              src={profilePic}
              size={80}
              alt="profilePic"
              onClick={() => onClick?.()}
            />
          </Box>
          <Stack gap={'8px'}>
            <Box onClick={() => onClick?.()} sx={{ cursor: 'pointer' }}>
              <Typography className="interSemibold16">
                {firstName} {lastName}
              </Typography>
              <Typography className="interRegular14">@{userName}</Typography>
            </Box>

            <Stack direction={'row'} gap={'12px'}>
              <Stack direction={'row'} gap={'4px'}>
                <Cards />
                <Typography className="interMedium12">
                  {publicPostCount}
                </Typography>
              </Stack>
              <Stack direction={'row'} gap={'4px'}>
                <Lock />
                <Typography className="interMedium12">
                  {privatePostCount}
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        </Stack>

        {showPillButton && (
          <Box>
            <PillButton
              text={
                <>
                  Subscribe&nbsp;
                  <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                    from ${subPrice}/mo
                  </Box>
                </>
              }
              icon={<Subscription />}
              onClick={() => onSubscription?.()}
            />
          </Box>
        )}
      </Stack>
    </ThemeProvider>
  );
};
