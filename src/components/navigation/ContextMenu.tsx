import { ThemeProvider } from '@emotion/react';
import { IconButton, List, ListItem, Menu } from '@mui/material';
import { useState } from 'react';
import { Typography } from '../../elements/Typography';
import { Horizontaldots } from '../../elements/icons';
import { colors } from '../../styles/colors';
import { theme } from '../../theme';
import { MobilePanel } from './MobilePanel';

interface Props {
  options: { label: string; key: string }[];
  open: boolean;
  onClick: (key: string) => unknown;
  anchorEl: any;
  setAnchorEl: any;
  lastItemIsAlert?: boolean;
}

export const ContextMenu = (props: Props) => {
  const { options, onClick, open, anchorEl, setAnchorEl, lastItemIsAlert } =
    props;

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <MobilePanel
        sx={{ display: { md: 'none' } }}
        options={options}
        open={open}
        onClose={handleClose}
        onClick={onClick}
        lastItemIsAlert={lastItemIsAlert}
      />
      <Menu
        id="context-menu"
        sx={{
          display: { xs: 'none', md: 'block' },
          '& #ul-menu': {
            padding: 0
          }
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              boxShadow: '0px 10px 20px 0px rgba(0, 0, 0, 0.05)',
              borderRadius: '4px',
              border: `1px solid ${colors.lightgray[600]}`
            }
          }
        }}
        MenuListProps={{
          // 'aria-labelledby': 'basic-button',
          id: 'ul-menu'
        }}
      >
        <List
          sx={{
            minWidth: '160px',
            padding: 1,
            borderRadius: '4px',
            overflow: 'hidden'
          }}
        >
          {options.map((item, index) => (
            <ListItem
              onClick={() => onClick(item.key)}
              key={item.key}
              sx={{
                '&:not(:last-child)': { marginBottom: '4px' },
                '&:hover': { background: colors.lightgray[200] },
                padding: '4px 6px',
                borderRadius: '2px',
                overflow: 'hidden',
                cursor: 'pointer'
              }}
            >
              <Typography
                sx={{
                  color:
                    lastItemIsAlert && index === options.length - 1
                      ? colors.attentionOrange
                      : 'inherit'
                }}
                className="interSemibold14"
              >
                {item.label}
              </Typography>
            </ListItem>
          ))}
        </List>
      </Menu>
    </ThemeProvider>
  );
};

export const ShowMobileMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (key: string) => {
    console.log(key);
  };

  return (
    <>
      <IconButton
        sx={{
          color: colors.black
        }}
        onClick={(event: any) => setAnchorEl(event.currentTarget)}
      >
        <Horizontaldots />
      </IconButton>

      <ContextMenu
        options={[
          {
            label: 'Edit',
            key: 'edit'
          },
          {
            label: 'Delete',
            key: 'Delete'
          }
        ]}
        open={open}
        anchorEl={anchorEl}
        setAnchorEl={setAnchorEl}
        onClick={handleClick}
        lastItemIsAlert
      />
    </>
  );
};
