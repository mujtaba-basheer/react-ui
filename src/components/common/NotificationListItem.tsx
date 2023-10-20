import { ThemeProvider } from '@emotion/react';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Stack from '@mui/material/Stack';
import { Avatar } from '../../elements/Avatar';
import { Badge } from '../../elements/Badge';
import { Typography } from '../../elements/Typography';
import { ChevronRight } from '../../elements/icons';
import { colors } from '../../styles/colors';
import { theme } from '../../theme';

interface NotificationListItemProps {
  firstName: string;
  lastName: string;
  message: string;
  avatar: string;
  unRead?: boolean;
  onClick?: () => void;
}

export const NotificationListItem = ({
  firstName,

  lastName,
  unRead,
  message,
  avatar,
  onClick
}: NotificationListItemProps) => {
  return (
    <ThemeProvider theme={theme}>
      <List component={'ul'} sx={{ p: 0, m: 0 }}>
        <ListItem alignItems="center" sx={{ width: '100%' }}>
          <Stack
            flexDirection={'row'}
            alignItems={'center'}
            justifyContent={'space-between'}
            width={'100%'}
          >
            <Stack flexDirection={'row'} alignItems={'center'} gap={1}>
              <Avatar alt={avatar} size={28} src={avatar} />

              <Typography className="interSemibold13">
                {firstName} {lastName}
                <Typography
                  className="interRegular13"
                  sx={{ display: 'inline' }}
                >
                  {' '}
                  {message}
                </Typography>
              </Typography>
            </Stack>
            <Stack
              flexDirection={'row'}
              alignItems={'center'}
              justifyContent={'flex-end'}
              gap={1}
            >
              <IconButton
                sx={{ color: colors.black }}
                onClick={() => onClick?.()}
              >
                {unRead && <Badge variant="dot" />} &nbsp; &nbsp;{' '}
                <ChevronRight />
              </IconButton>
            </Stack>
          </Stack>
        </ListItem>
      </List>
    </ThemeProvider>
  );
};
