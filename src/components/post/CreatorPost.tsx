import { ThemeProvider } from '@emotion/react';
import { Box } from '@mui/material';
import { theme } from '../../theme';
import { PostActions } from './PostActions';
import { PostBody } from './PostBody';
import { PostCaption } from './PostCaption';
import { PostSlider } from './PostSlider';
import { PostTop } from './PostTop';

export interface DesktopPostProps {
  id: string;
  avatarImage: string;
  username: string;
  caption: string;
  likeCount: number;
  commentCount: number;
  onLikeClick?: () => unknown;
  onCommentClick?: () => unknown;
  onOptionsClick?: () => unknown;
  onTipClick?: () => unknown;
  onMessageClick?: () => unknown;
  onPostAvatarClick?: () => unknown;
  onUnlockMedia?: () => unknown;
  isLiked?: boolean;
  assets: {
    id: string;
    url: string;
    isFree: boolean;
  }[];
  options?: {
    label: string;
    value: string;
    onClick?: () => void;
  }[];
}

export const CreatorPost = ({
  id,
  avatarImage,
  username,
  caption,
  likeCount,
  commentCount,
  onCommentClick,
  onLikeClick,
  onOptionsClick,
  onTipClick,
  onMessageClick,
  onPostAvatarClick,
  assets,
  isLiked,
  options,
  onUnlockMedia
}: DesktopPostProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          width: '100%',
          display: 'inline-flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: '0.75rem'
        }}
      >
        <PostTop
          posterName={username}
          avatarSrc={avatarImage}
          onOptionsClick={onOptionsClick}
          options={options}
          onAvatarClick={onPostAvatarClick}
        />
        {assets.length === 0 ? (
          <PostBody body={caption} />
        ) : (
          <>
            <PostCaption caption={caption} />
            <PostSlider id={id} assets={assets} onUnlockMedia={onUnlockMedia} />
          </>
        )}
        <PostActions
          isLiked={isLiked}
          numLikes={likeCount}
          numComments={commentCount}
          onCommentClick={onCommentClick}
          onLikeClick={onLikeClick}
          onTipClick={onTipClick}
          onMessageClick={onMessageClick}
        />
      </Box>
    </ThemeProvider>
  );
};
