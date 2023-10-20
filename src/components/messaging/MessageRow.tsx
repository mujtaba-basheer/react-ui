import { ThemeProvider } from '@emotion/react';
import { Box } from '@mui/material';
import { Avatar } from '../../elements/Avatar';
import { Badge } from '../../elements/Badge';
import { Typography } from '../../elements/Typography';
import { colors } from '../../styles/colors';
import { theme } from '../../theme';

interface Props {
  channelId: string;
  name: string;
  message: string;
  time: string;
  photo: string;
  unread: boolean;
  revenue: number;
  onClick: (channelId: string) => void;
}

export const MessageRow = (props: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        key={props.channelId}
        display={'flex'}
        alignItems={'center'}
        gap={1}
        width={'100%'}
        onClick={() => props.onClick(props.channelId)}
        sx={{
          '&:not(:first-child)': {
            marginTop: { xs: 0, md: '8px' }
          },
          '&:hover': {
            background: colors.lightgray[200]
          },
          '&:not(:last-child)': {
            borderBottom: { xs: `1px solid ${colors.lightgray[400]}`, md: 0 }
          },
          cursor: 'pointer',
          borderRadius: { xs: 0, md: '4px' }
        }}
      >
        <Box>
          <Avatar src={props.photo} />
        </Box>
        <Box flex={1}>
          <Box
            display={'flex'}
            alignItems={'center'}
            justifyContent={'space-between'}
          >
            <Typography className="interSemibold13">
              {props.name} ${props.revenue}
            </Typography>
            <Typography className="interMedium12">{props.time}</Typography>
          </Box>
          <Box
            display={'flex'}
            alignItems={'center'}
            justifyContent={'space-between'}
          >
            <Typography className="interRegular13">
              <Box className="text-truncate" width={180}>
                {props.message}
              </Box>
            </Typography>
            <Box position={'relative'} left={-5}>
              {props.unread && <Badge variant="dot" />}
            </Box>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};
