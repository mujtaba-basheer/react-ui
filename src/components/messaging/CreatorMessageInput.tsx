import { Box, IconButton, Input } from '@mui/material';

import { ThemeProvider } from '@emotion/react';
import { Plus, Send } from '../../elements/icons';
import { FileUploader } from '../../extras/FileUploader';
import { colors } from '../../styles/colors';
import { theme } from '../../theme';

interface Props {}

export const CreatorMessageInput = (props: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <Box display={'flex'} alignItems={'center'} gap={1} width={'100%'}>
        <Box
          bgcolor={colors.lightgray[200]}
          width={40}
          height={40}
          borderRadius={'4px'}
        >
          <IconButton
            sx={{
              cursor: 'pointer',
              width: '100%',
              height: '100%',
              '& svg': {
                width: '16px',
                height: '16px'
              }
            }}
          >
            <Plus color="#000" />
            <FileUploader onSubmit={(files) => console.log(files)} />
          </IconButton>
        </Box>
        <Box
          flex={1}
          bgcolor={colors.lightgray[200]}
          borderRadius={'4px'}
          sx={{ height: '40px' }}
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
        <Box bgcolor={colors.black} width={40} height={40} borderRadius={'50%'}>
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
    </ThemeProvider>
  );
};
