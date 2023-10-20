import {
  Box,
  CssBaseline,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import { Avatar } from '../../elements/Avatar';
import { Badge } from '../../elements/Badge';
import { Logo } from '../../elements/Logo';
import { PillButton } from '../../elements/PillButton';
import { DollarSign, Icon, IconType, Message } from '../../elements/icons';
import { colors } from '../../styles/colors';

export type DesktopFanNavigationItem = {
  linkName: string;
  icon: IconType;
  onClick?: (e: React.MouseEvent) => void;
  unReadCount?: number;
};

export interface DesktopFanNavigationProps {
  handleMessage?: (e: React.MouseEvent) => void;
  handleTip?: (e: React.MouseEvent) => void;
  avatar?: string;
  items: DesktopFanNavigationItem[];
}

const drawerWidth = 240;
export const DesktopFanNavigation = ({
  handleMessage,
  handleTip,
  items,
  avatar
}: DesktopFanNavigationProps) => {
  const getIcon = (icon: IconType, avatar = '/static/images/avatar/1.jpg') => {
    if (icon === 'Account')
      return <Avatar alt="Remy Sharp" src={avatar} size="31px" />;
    else return <Icon name={icon} size="24px" />;
  };

  const drawer = (
    <List
      sx={{
        display: { xs: 'flex', md: 'inline' },
        position: { xs: 'fixed', md: 'unset' },
        width: { xs: '100%', md: 'auto' },
        '& .MuiListItemButton-root:hover': {
          bgcolor: `${colors.lightgray[300]}`,
          '&, & .MuiListItemIcon-root': {
            color: 'black'
          }
        }
      }}
    >
      {items.map((text, index) => (
        <ListItem key={index} disablePadding>
          <ListItemButton
            sx={{ justifyContent: 'center' }}
            onClick={(e) => text.onClick && text.onClick(e)}
          >
            <ListItemIcon
              sx={{
                minWidth: 'auto',
                marginRight: { xs: 0, md: 2 },
                display: { xs: 'none', md: 'block' }
              }}
            >
              {getIcon(text.icon, avatar)}
            </ListItemIcon>
            <ListItemText
              primary={text.linkName}
              sx={{ display: { xs: 'none', md: 'block' } }}
            />
            {text.unReadCount && text.unReadCount > 0 && (
              <ListItemText
                primary={<Badge number={text.unReadCount} />}
                sx={{
                  display: { xs: 'none', md: 'block' },
                  marginLeft: { xs: 0, md: 4 }
                }}
              />
            )}
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );

  return (
    <>
      <CssBaseline />
      <Box
        component="nav"
        sx={{
          width: { sm: drawerWidth },
          flexShrink: { sm: 0 }
        }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="permanent"
          sx={{
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: { xs: '100%', md: drawerWidth },
              height: { xs: 'auto', md: '100%' },
              background: colors.white,
              border: 0
            }
          }}
          open
        >
          <Box
            paddingY={5}
            paddingX={3}
            sx={{ display: { xs: 'none', md: 'block' } }}
          >
            <Logo size={164} />
          </Box>
          <Box paddingX={'12px'}>{drawer}</Box>
          {/* Buttons Wrapper*/}
          <Box
            paddingY={5}
            paddingX={3}
            sx={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: '100%',
              display: { xs: 'none', md: 'block' }
            }}
          >
            <PillButton
              text={'Message'}
              icon={<Message />}
              variant="primary"
              size="large"
              sx={{ width: '192px', innerHeight: '40px' }}
              onClick={(e) => handleMessage && handleMessage(e)}
            />
            <Box sx={{ marginTop: '12px' }}>
              <PillButton
                text={'Tip'}
                icon={<DollarSign />}
                variant="primary"
                size="large"
                sx={{ width: '192px', innerHeight: '40px' }}
                onClick={(e) => handleTip && handleTip(e)}
              />
            </Box>
          </Box>
        </Drawer>
      </Box>
    </>
  );
};
