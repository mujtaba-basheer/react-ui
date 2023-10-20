import { Box, Stack } from '@mui/material';
import * as React from 'react';
import { Badge } from '../../elements/Badge';
import { Typography } from '../../elements/Typography';
import { colors } from '../../styles/colors';

interface NavigationItem {
  title: string;
  path: string;
}

interface DesktopCreatorMenuProps {
  NavigationItems: NavigationItem[];
  messagesCount: number;
  onRouteChange: (path: string) => unknown;
}

export const DesktopCreatorMenu = ({
  NavigationItems,
  messagesCount,
  onRouteChange
}: DesktopCreatorMenuProps) => {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(-1);

  const handleItemClick = (index: number, path: string) => {
    setSelectedItemIndex(index);
    onRouteChange(path);
  };

  return (
    <Stack direction={'row'} gap={'8px'} padding={'17px 0px 17px 0px'}>
      {NavigationItems?.map((item, index) => (
        <Box
          bgcolor={
            selectedItemIndex === index ? colors.lightgray[200] : 'transparent'
          }
          borderRadius={32}
          key={index}
          padding={'7px 16px 7px 16px'}
          onClick={() => handleItemClick(index, item.path)}
          sx={{ cursor: 'pointer' }}
        >
          {item.title === 'Messages' ? (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <Typography className="interMedium14">{item.title}</Typography>
              <Badge number={messagesCount} />
            </Box>
          ) : (
            <Typography className="interMedium14">{item.title}</Typography>
          )}
        </Box>
      ))}
    </Stack>
  );
};
