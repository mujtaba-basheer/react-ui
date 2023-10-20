import { Box, IconButton, Input } from '@mui/material';

import { ThemeProvider } from '@emotion/react';
import { Typography } from '../../elements/Typography';
import { Send } from '../../elements/icons';
import { colors } from '../../styles/colors';
import { theme } from '../../theme';

interface Props {}

export const FanMessageInput = (props: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <Box width={'100%'}>
        <Box
          display={'flex'}
          alignItems={'center'}
          minWidth={280}
          gap={1}
          width={'100%'}
          mb={'2px'}
        >
          <Box
            flex={1}
            bgcolor={colors.lightgray[200]}
            borderRadius={'4px'}
            height={40}
          >
            <Input
              disableUnderline={true}
              placeholder="Write a comment..."
              inputProps={{
                underline: {
                  '&::before': {
                    borderBottom: 0,
                    background: 'red'
                  }
                },
                sx: {
                  '&::placeholder': {
                    color: colors.black,
                    fontSize: '14px',
                    fontWeight: 400
                  }
                }
              }}
              sx={{
                width: '100%',
                height: '100%',
                border: 0,
                background: colors.lightgray[200],
                px: '12px',
                fontSize: '14px',
                borderRadius: '4px'
              }}
            />
          </Box>
          <Box
            bgcolor={colors.black}
            width={40}
            height={40}
            borderRadius={'50%'}
          >
            <IconButton
              sx={{
                width: '100%',
                height: '100%',
                '& svg': {
                  width: '16px',
                  height: '16px'
                }
              }}
            >
              <Send color="#fff" />
            </IconButton>
          </Box>
        </Box>
        <Typography className="interSemibold12">$4.00</Typography>
      </Box>
    </ThemeProvider>
  );
};
