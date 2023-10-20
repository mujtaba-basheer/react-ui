import { ThemeProvider } from '@emotion/react';
import { Box } from '@mui/material';
import Card from '@mui/material/Card';
import MuiCheckbox from '@mui/material/Checkbox';
import Stack from '@mui/material/Stack';
import { Avatar } from '../../elements/Avatar';
import { Typography } from '../../elements/Typography';
import { Heart, Heartfilled, Horizontaldots } from '../../elements/icons';
import { theme } from '../../theme';
interface Props {
  commentId: string;
  username: string;
  date: string;
  numLikes: number;
  comment: string;
  profilePic: string;
  onReply?: () => void;
  onLike?: (commentId: string) => void;
  onMenuItemClick?: (e: any) => void;
  onAvatarClick?: () => void;
  isLiked?: boolean;
  onLikeClick?: (e: boolean) => void;
}

export const SingleComment = (props: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <Card
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          height: 'auto',
          padding: 0,
          bgcolor: 'transparent',
          border: 'none',
          boxShadow: 'none',
          gap: 1
        }}
      >
        <Stack
          direction={'row'}
          alignItems={'start'}
          spacing={1}
          width={'100%'}
        >
          <Avatar
            src={props.profilePic}
            size={{ xs: 28, md: 38 }}
            alt="Profile Pic"
            onClick={() => props.onAvatarClick?.()}
          />
          <Box width={'100%'}>
            <Typography className="interSemibold13">
              {props.username}
              {'  '}
              <Typography className="interRegular13" sx={{ display: 'inline' }}>
                {props.comment}
              </Typography>
            </Typography>

            <Stack
              direction={'row'}
              alignItems={'center'}
              spacing={1}
              mt={'5px'}
            >
              <Typography className="interMedium12">
                {new Date(props.date).toLocaleDateString()}
              </Typography>
              <Typography className="interMedium12">
                {props.numLikes} {'Likes'}{' '}
              </Typography>
              <Box onClick={(e) => props.onReply?.()}>
                <Typography className="interMedium12">
                  {''} {'Reply'}{' '}
                </Typography>
              </Box>
              <Box onClick={(e) => props.onMenuItemClick?.(e)}>
                <Horizontaldots />
              </Box>
            </Stack>
          </Box>
        </Stack>
        <Box>
          <MuiCheckbox
            checked={props.isLiked}
            onChange={(e) => props.onLikeClick?.(e.target.checked)}
            icon={<Heart />}
            checkedIcon={<Heartfilled />}
            sx={{
              padding: '0',
              '& .MuiSvgIcon-root': {
                width: '1.25rem',
                height: '1.25rem'
              }
            }}
          />
        </Box>
      </Card>
    </ThemeProvider>
  );
};
