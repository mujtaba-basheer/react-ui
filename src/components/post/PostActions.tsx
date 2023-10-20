import { ThemeProvider } from '@emotion/react';
import { Box } from '@mui/material';
import MuiCheckbox from '@mui/material/Checkbox';
import { PillButton } from '../../elements/PillButton';
import { Typography } from '../../elements/Typography';
import {
  Circlemoney,
  Comment,
  Heart,
  Heartfilled,
  Message
} from '../../elements/icons';
import { theme } from '../../theme';

interface Props {
  numLikes: number;
  numComments: number;
  isLiked?: boolean;
  onLikeClick?: (e: boolean) => void;
  onCommentClick?: () => void;
  onTipClick?: () => void;
  onMessageClick?: () => void;
}

export const PostActions: React.FC<Props> = (props: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <Box
          sx={{
            display: 'inline-flex',
            alignItems: 'flex-start',
            gap: '0.75rem'
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              color: 'primary.main'
            }}
          >
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
            <Typography
              className="interMedium12"
              sx={{
                fontSize: '0.75rem'
              }}
            >
              {props.numLikes}
            </Typography>
          </Box>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.25rem',
              mr: '0.75rem',
              color: 'primary.main'
            }}
          >
            <MuiCheckbox
              checked={true}
              icon={<Comment />}
              checkedIcon={<Comment />}
              onClick={props.onCommentClick}
              sx={{
                padding: '0',
                '& .MuiSvgIcon-root': {
                  width: '1.25rem',
                  height: '1.25rem'
                }
              }}
            />
            <Typography
              className="interMedium12"
              sx={{
                fontSize: '0.75rem'
              }}
            >
              {props.numComments}
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: 'inline-flex',
            alignItems: 'flex-start',
            gap: '0.75rem'
          }}
        >
          <PillButton
            text="Message"
            size="small"
            variant="primary"
            icon={<Message />}
            onClick={props.onMessageClick}
          />
          <PillButton
            text="Tip"
            size="small"
            variant="primary"
            icon={<Circlemoney />}
            onClick={props.onTipClick}
          />
        </Box>
      </Box>
    </ThemeProvider>
  );
};
