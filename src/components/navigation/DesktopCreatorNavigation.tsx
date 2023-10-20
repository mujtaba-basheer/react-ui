import { ThemeProvider } from '@emotion/react';
import { Box, Divider, Stack } from '@mui/material';
import { Avatar } from '../../elements/Avatar';
import { Badge } from '../../elements/Badge';
import { Logo } from '../../elements/Logo';
import { PillButton } from '../../elements/PillButton';
import { Typography } from '../../elements/Typography';
import { Cards, Live, Messageblast, Notification } from '../../elements/icons';
import { colors } from '../../styles/colors';
import { theme } from '../../theme';
import { DesktopCreatorMenu } from './DesktopCreatorMenu';

export interface NavigationItem {
  title: string;
  path: string;
}

export interface DesktopCreatorNavigationProps {
  onRouteChange: (path: string) => any;
  onNewPost: () => any;
  onMessageBlast: () => any;
  onLiveStream: () => any;
  onNotificationsClick: () => any;
  NavigationItems: NavigationItem[];
  name: string;
  imageURL: string;
  notificationCount: number;
  messagesCount: number;
}

export const DesktopCreatorNavigation = ({
  onRouteChange,
  onNewPost,
  onMessageBlast,
  onLiveStream,
  onNotificationsClick,
  NavigationItems,
  name,
  imageURL,
  messagesCount,
  notificationCount
}: DesktopCreatorNavigationProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Stack
        position={'fixed'}
        width={'100%'}
        alignItems={'center'}
        zIndex={1000}
        bgcolor={'#fff'}
      >
        <Box width={'100%'} maxWidth={'1180px'}>
          <Stack
            direction={'row'}
            justifyContent={'space-between'}
            sx={{ padding: { xs: '20px 16px 20px 16px' } }}
          >
            <Logo size={130.576} />

            <Stack
              direction={'row'}
              alignItems={'center'}
              sx={{ color: colors.black }}
              gap={'20px'}
            >
              <Box sx={{ cursor: 'pointer' }} onClick={onNotificationsClick}>
                <Badge number={notificationCount}>
                  <Notification size="24px" />
                </Badge>
              </Box>

              <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                <Stack direction={'row'} alignItems={'center'} gap={'8px'}>
                  <Avatar size={28} src={imageURL} alt="NavigationProfile" />
                  <Typography className="interSemibold14">{name}</Typography>
                </Stack>
              </Box>
            </Stack>
          </Stack>

          <Divider sx={{ display: { xs: 'none', md: 'block' } }} />

          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            <Stack direction={'row'} justifyContent={'space-between'}>
              <DesktopCreatorMenu
                NavigationItems={NavigationItems}
                messagesCount={messagesCount}
                onRouteChange={onRouteChange}
              />

              <Stack
                direction={'row'}
                gap={'8px'}
                padding={'17px 0px 17px 0px'}
              >
                <PillButton
                  onClick={onNewPost}
                  text="New Post"
                  icon={<Cards />}
                />
                <PillButton
                  onClick={onMessageBlast}
                  text="Message Blast"
                  icon={<Messageblast />}
                />
                <PillButton
                  onClick={onLiveStream}
                  text="Live Stream"
                  icon={<Live />}
                />
              </Stack>
            </Stack>
          </Box>
        </Box>
      </Stack>
    </ThemeProvider>
  );
};
