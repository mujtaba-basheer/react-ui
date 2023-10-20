import { ThemeProvider } from '@emotion/react';
import { Box, CardMedia, SxProps, Theme } from '@mui/material';
import { theme } from '../theme';
import { PillButton } from './PillButton';

interface Props {
  alt?: string;
  src: string;
  height?: string | number;
  width?: string | number;
  className?: string;
  isFree?: boolean;
  sx?: SxProps<Theme>;
  onUnlockMedia?: () => unknown;
}

export const PostThumbnail = ({
  alt = 'fanfix',
  src,
  height = 'auto',
  width = '100%',
  className,
  isFree = true,
  sx,
  onUnlockMedia
}: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          position: 'relative'
        }}
      >
        {!isFree && (
          <PillButton
            onClick={onUnlockMedia}
            variant="unlock"
            text="Unlock Media"
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)'
            }}
          />
        )}
        <CardMedia
          src={src}
          title={alt}
          component="img"
          sx={{
            width: width,
            height: height,
            ...sx
          }}
          className={className}
        />
      </Box>
    </ThemeProvider>
  );
};
