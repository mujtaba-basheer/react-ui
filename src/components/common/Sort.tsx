import { ThemeProvider } from '@emotion/react';
import { Stack } from '@mui/material';
import { useState } from 'react';
import { Typography } from '../../elements/Typography';
import { ChevronDown } from '../../elements/icons';
import { theme } from '../../theme';
import { ContextMenu } from '../navigation/ContextMenu';

interface Options {
  label: string;
  key: string;
}
interface Props {
  options: Options[];
  onMenuItemClick: (key: string) => void;
  header?: string;
}

export const Sort = ({ options, onMenuItemClick, header }: Props) => {
  const [selected, setSelected] = useState<Options>(options[0]);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenuItemClick = (key: string) => {
    setSelected(options.find((option) => option.key === key) as Options);
    onMenuItemClick(key);
  };

  return (
    <ThemeProvider theme={theme}>
      <Stack
        width={'100%'}
        spacing={1}
        direction="row"
        alignItems="center"
        onClick={(event: any) => setAnchorEl(event.currentTarget)}
        sx={{ cursor: 'pointer' }}
      >
        <Typography
          className="interMedium14"
          sx={{ display: 'flex', alignItems: 'center' }}
        >
          {header}
          {selected.label}
        </Typography>
        <ChevronDown size="12px" />
      </Stack>
      <ContextMenu
        options={options}
        open={open}
        anchorEl={anchorEl}
        setAnchorEl={setAnchorEl}
        onClick={handleMenuItemClick}
      />
    </ThemeProvider>
  );
};
