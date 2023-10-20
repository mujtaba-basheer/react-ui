import { ThemeProvider } from '@emotion/react';
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton
} from '@mui/material';
import { colors } from '../../styles/colors';

import { theme } from '../../theme';

import { Typography } from '../../elements/Typography';

import { Stack } from '@mui/material';
import { Avatar } from '../../elements/Avatar';
import { PillButton } from '../../elements/PillButton';
import {
  Cards,
  Circlemoney,
  Horizontaldots,
  Lock,
  Message,
  Subscription
} from '../../elements/icons';

export interface ProfileHeaderProps {
  bioText: string;
  firstName: string;
  lastName: string;
  userName: string;
  profilePic: string;
  totalPosts: number;
  totalFollowers?: number;
  onMessage: () => unknown;
  onTip?: () => unknown;
  onSubscribe?: () => unknown;
  isSubscribed?: boolean;
  onOptionsClick?: () => unknown;
}

export const ProfileHeader = ({
  profilePic,
  firstName,
  lastName,
  userName,
  bioText,
  onMessage,
  onTip,
  onSubscribe,
  totalPosts,
  totalFollowers,
  isSubscribed,
  onOptionsClick
}: ProfileHeaderProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Card
          sx={{
            position: 'relative',
            borderRadius: 0,
            boxShadow: 'unset',
            padding: { xs: '92px 16px 16px 16px', md: '160px 20px 20px 20px' }
          }}
          className="desktop-profile-header"
        >
          <CardMedia
            image={
              'https://www.myglobalviewpoint.com/wp-content/uploads/2021/12/Best-Travel-Blogs-Featured-Image-1170x677.jpg'
            }
            title={'Contemplative Reptile'}
            component="img"
            sx={{
              position: 'absolute',
              top: 0,
              right: 0,
              width: '100%',
              height: '100%',
              borderRadius: '4px'
            }}
          />
          <IconButton
            onClick={onOptionsClick}
            sx={{
              color: colors.lightgray[300],
              position: 'absolute',
              top: 0,
              right: 0
            }}
          >
            <Horizontaldots />
          </IconButton>
          <CardContent
            className="card-content"
            sx={{
              position: 'relative',
              p: 0
            }}
            style={{ padding: 0 }}
          >
            <Card
              className="flex-center-start "
              sx={{
                display: 'flex',
                justifyContent: 'start',
                alignItems: 'center',
                backgroundColor: 'transparent',
                borderRadius: 0,
                boxShadow: 'unset',
                gap: '20px'
              }}
            >
              <Avatar
                src={profilePic}
                size={{ xs: 80, md: 120 }}
                alt="Profile Picture"
              />

              <Box
                sx={{ display: 'flex', flexDirection: 'column', p: 0 }}
                style={{ padding: 0 }}
              >
                <CardContent
                  style={{ padding: 0 }}
                  sx={{
                    flex: '1 0 auto',
                    color: colors.white
                  }}
                  className="card-content"
                >
                  <Box sx={{ bottom: 0, pb: 0, pl: '0' }}>
                    <Typography className="interSemibold24">
                      {firstName} {lastName}
                    </Typography>
                    <Typography className="interRegular14 ">
                      @{userName}
                    </Typography>
                    <Stack
                      direction={'row'}
                      spacing={'12px'}
                      alignItems={'center'}
                      mt={1}
                    >
                      <Box>
                        <Stack
                          direction={'row'}
                          spacing={'4px'}
                          alignItems={'center'}
                        >
                          <Cards />
                          <Typography className="interMedium12">
                            {totalPosts}
                          </Typography>
                        </Stack>
                      </Box>
                      <Box>
                        <Stack
                          direction={'row'}
                          spacing={'4px'}
                          alignItems={'center'}
                        >
                          <Lock />
                          <Typography className="interMedium12">
                            {totalFollowers}
                          </Typography>
                        </Stack>
                      </Box>
                    </Stack>
                  </Box>
                </CardContent>
              </Box>
            </Card>
          </CardContent>
        </Card>
        <Card
          sx={{
            background: 'transparent',
            boxShadow: 'unset',
            borderRadius: 0,
            padding: { xs: '0 16px', md: 0 }
          }}
        >
          <CardContent sx={{ padding: 0 }}>
            <CardActions sx={{ px: 0, py: '20px' }}>
              {!isSubscribed && (
                <PillButton
                  text="Subscribe from $6/mo"
                  variant="primary"
                  icon={<Subscription />}
                  size="medium"
                  onClick={() => onSubscribe?.()}
                />
              )}
              <PillButton
                text="Message"
                variant="primary"
                icon={<Message />}
                size="medium"
                onClick={() => onMessage?.()}
              />
              <PillButton
                text="Tip"
                variant="primary"
                icon={<Circlemoney />}
                size="medium"
                onClick={() => onTip?.()}
              />
            </CardActions>
            <Typography className="interRegular14">{bioText}</Typography>
          </CardContent>
          <hr
            style={{
              border: 'none',
              height: '1px',
              backgroundColor: '#E5E5E5',
              margin: '20px 0'
            }}
          />
        </Card>
      </Box>
    </ThemeProvider>
  );
};
