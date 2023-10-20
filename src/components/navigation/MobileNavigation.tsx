import { List } from '@mui/material';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import { Badge } from '../../elements/Badge';
import { Icon, IconType } from '../../elements/icons';
import { colors } from '../../styles/colors';

export type MobileNavigationItem = {
  linkName: string;
  icon: IconType;
  onClick?: (e: React.MouseEvent) => void;
  unReadCount?: number;
};

interface MobileNavigationProps {
  items: MobileNavigationItem[];
}

const drawerWidth = 240;

export const MobileNavigation = ({ items }: MobileNavigationProps) => {
  const getIcon = (icon: IconType, unReadCount = 0) => {
    let iconElement: JSX.Element = <Icon name={icon} size="24px" />;
    return <Badge number={unReadCount}>{iconElement}</Badge>;
  };

  return (
    <>
      <CssBaseline />
      <Box component="nav" aria-label="mailbox folders">
        <List
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-evenly',
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            padding: '12px 12px 20px 12px',
            background: 'transparent',
            '& .MuiListItemButton-root:hover': {
              bgcolor: colors.lightgray[300],
              '&, & .MuiListItemIcon-root': {
                color: colors.black
              }
            }
          }}
        >
          {items.map((item, index) => (
            <ListItem key={index} disablePadding sx={{ width: 'auto', p: 0 }}>
              <ListItemButton
                sx={{
                  justifyContent: 'center',
                  width: 'auto',
                  p: 1,
                  borderRadius: 1
                }}
                onClick={item.onClick}
              >
                <ListItemIcon
                  sx={{
                    width: 'auto',
                    minWidth: 'auto',
                    color: colors.black
                  }}
                >
                  {getIcon(item.icon, item.unReadCount || 0)}
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </>
  );
};
