import * as React from 'react';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import Fab from '@mui/material/Fab';
import { theme } from '../../theme';

import { ThemeProvider } from '@emotion/react';
import { MenuList } from '@mui/material';
import { PillButton } from '../../elements/PillButton';
import { Cards, Close, Live, Messageblast, Plus } from '../../elements/icons';

interface Props {
  onNewPost?: () => unknown;
  onMessageBlast?: () => unknown;
  onLiveStream?: () => unknown;
}

export const MobileActionMenu = ({
  onLiveStream,
  onMessageBlast,
  onNewPost
}: Props) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClose = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(open ? null : event.currentTarget);
  };

  return (
    <ThemeProvider theme={theme}>
      <Fab
        sx={{
          ml: 2,
          position: 'fixed',
          zIndex: '99999',
          bottom: '90px',
          right: '20px'
        }}
        aria-label="add"
        onClick={handleClose}
      >
        {open ? <Close color="#000" /> : <Plus color="#000" />}
      </Fab>

      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        sx={{ background: 'rgba(0, 0, 0, 0.50)' }}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              padding: 0,
              background: 'transparent',
              overflow: 'visible',
              textAlign: 'right',
              mt: -1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1
              }
            }
          }
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
      >
        <MenuList
          sx={{
            '& .MuiMenuItem-root': {
              justifyContent: 'flex-end',
              padding: '6px 0px'
            }
          }}
        >
          <MenuItem>
            <PillButton
              onClick={() => {
                onNewPost?.();
                setAnchorEl(null);
              }}
              text="New Post"
              icon={<Cards />}
            />
          </MenuItem>
          <MenuItem>
            <PillButton
              onClick={() => {
                onMessageBlast?.();
                setAnchorEl(null);
              }}
              text="Message Blast"
              icon={<Messageblast />}
            />
          </MenuItem>
          <MenuItem>
            <PillButton
              onClick={() => {
                onLiveStream?.();
                setAnchorEl(null);
              }}
              text="Live Stream"
              icon={<Live />}
            />
          </MenuItem>
        </MenuList>
      </Menu>
    </ThemeProvider>
  );
};
