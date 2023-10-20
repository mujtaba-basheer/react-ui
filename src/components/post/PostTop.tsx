import { ThemeProvider } from '@emotion/react';
import { Box, IconButton } from '@mui/material';
import { Avatar } from '../../elements/Avatar';
import { Typography } from '../../elements/Typography';
import { Horizontaldots } from '../../elements/icons';
import { theme } from '../../theme';
import { colors } from '../../styles/colors';

interface Props {
  avatarSrc?: string;
  avatarSize?: number;
  onOptionsClick?: () => void;
  onAvatarClick?: () => void;
  posterName: string;
  options?: {
    label: string;
    value: string;
    onClick?: () => void;
  }[];
}

export const PostTop = ({
  options,
  avatarSrc,
  avatarSize,
  onOptionsClick,
  posterName,
  onAvatarClick
}: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 1
        }}
      >
        <Box
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            cursor: 'pointer'
          }}
          onClick={onAvatarClick}
        >
          <Avatar src={avatarSrc} size={avatarSize} />
          <Typography className="interSemibold14">{posterName}</Typography>
        </Box>
        {options && (
          <IconButton
            onClick={onOptionsClick}
            sx={{
              color: colors.black
            }}
          >
            <Horizontaldots />
          </IconButton>
        )}
      </Box>
    </ThemeProvider>
  );
};
