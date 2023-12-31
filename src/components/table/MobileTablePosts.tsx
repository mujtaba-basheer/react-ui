import List from '@mui/material/List';
import { useState } from 'react';
import { ContextMenu } from '../navigation/ContextMenu';
import { MobileTableRowPost } from './MobileTableRowPost';
interface Props {
  data: any[];
  options?: {
    label: string;
    key: string;
  }[];
  onMenuItemClick?: (key: string, index: number) => void;
}
export const MobileTablePosts = (props: Props) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [index, setIndex] = useState(0);
  const open = Boolean(anchorEl);
  const handleClick = (event: any, index: number) => {
    setAnchorEl(event.currentTarget);
    setIndex(index);
  };
  return (
    <>
      <List sx={{ width: '100%' }}>
        {props.data.map((item, index) => {
          return (
            <MobileTableRowPost
              key={index}
              data={item}
              handleClick={(e) => handleClick(e, index)}
            />
          );
        })}
      </List>

      <ContextMenu
        options={props.options ?? []}
        open={open}
        anchorEl={anchorEl}
        setAnchorEl={setAnchorEl}
        onClick={(e: string) => props.onMenuItemClick?.(e, index)}
        lastItemIsAlert
      />
    </>
  );
};
