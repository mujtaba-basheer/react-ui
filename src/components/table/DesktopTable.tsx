import { ThemeProvider } from '@emotion/react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import { useState } from 'react';
import { theme } from '../../theme';
import { ContextMenu } from '../navigation/ContextMenu';
import { DesktopTableHeader } from './DesktopTableHeader';
import { DesktopTableRow } from './DesktopTableRow';

export type Direction = 'asc' | 'desc';

interface Props {
  headers: { icon: React.ReactNode | string; title: string; key: string }[];
  hasActions?: boolean;
  data: any[];
  circularImages?: boolean;
  imageKey?: string;
  options?: {
    label: string;
    key: string;
  }[];
  onMenuItemClick?: (key: string, index: number) => void;
  onSort?: (key: string, direction: Direction) => void;
  sortedColumn?: string;
  sortableHeaders?: string[];
}

export const DesktopTable = (props: Props) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [index, setIndex] = useState(0);
  const open = Boolean(anchorEl);
  const handleClick = (event: any, index: number) => {
    setAnchorEl(event.currentTarget);
    setIndex(index);
  };

  return (
    <ThemeProvider theme={theme}>
      <TableContainer>
        <Table aria-label="simple table">
          <DesktopTableHeader
            headers={props.headers}
            hasActions={props.hasActions}
            onSort={props.onSort}
            sortedColumn={props.sortedColumn}
            sortableHeaders={props.sortableHeaders}
          />
          <TableBody>
            {props.data.map((row: any, index: number) => {
              return (
                <>
                  {
                    <DesktopTableRow
                      key={`row-${index}`}
                      index={index}
                      data={row}
                      handleClick={(e) => handleClick(e, index)}
                      menuOpen={open}
                      hasActions={props.hasActions}
                      circularImages={props.circularImages}
                      imageKey={props.imageKey}
                      headers={props.headers}
                    />
                  }
                </>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <ContextMenu
        options={props.options ?? []}
        open={open}
        anchorEl={anchorEl}
        setAnchorEl={setAnchorEl}
        onClick={(e: string) => props.onMenuItemClick?.(e, index)}
        lastItemIsAlert
      />
    </ThemeProvider>
  );
};
