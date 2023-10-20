import { ThemeProvider } from '@emotion/react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Toolbar from '@mui/material/Toolbar';
import { Avatar } from '../../elements/Avatar';
import { Horizontaldots } from '../../elements/icons';
import { colors } from '../../styles/colors';
import { Typography } from '../../elements/Typography';

import { theme } from '../../theme';

interface Props {
  firstName: string;
  lastName: string;
}

export const DesktopPostTitle = (props: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1, borderRadius: '50%' }}>
        <AppBar position="static" sx={{ backgroundColor: 'white' }}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              aria-label="menu"
              sx={{ mr: 2, color: colors.black }}
            >
              <ListItemIcon>
                <Avatar
                  src="https://yhstars.com/wp-content/uploads/2020/11/Aisha-Mian.jpg"
                  alt="profile"
                />
              </ListItemIcon>
              <Typography sx={{ fontWeight: 'Bold', flexGrow: 1 }}>
                {props.firstName} {props.lastName}
              </Typography>
            </IconButton>

            <IconButton
              size="large"
              edge="end"
              aria-label="more"
              sx={{ mr: 2, color: colors.black }}
            >
              {' '}
              <Horizontaldots />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
};
