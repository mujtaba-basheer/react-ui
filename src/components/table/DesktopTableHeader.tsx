import { ThemeProvider } from '@emotion/react';
import { TableCell, TableSortLabel } from '@mui/material';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import React from 'react';
import { theme } from '../../theme';

export type Direction = 'asc' | 'desc';

export interface Header {
  icon: React.ReactNode | string | any;
  title: string;
  key: string;
}

interface TableProps {
  headers: Header[];
  sortableHeaders?: string[];
  hasActions?: boolean;
  onSort?: (key: string, direction: Direction) => void;
  sortedColumn?: string;
}

interface HeadCellProps {
  index: number;
  item: Header;
  active: boolean;
  onSort?: (key: string, direction: Direction) => void;
  sortable?: boolean;
}

const HeadCell = ({ index, item, active, onSort, sortable }: HeadCellProps) => {
  const [direction, setDirection] = React.useState<Direction>('asc');
  return (
    <TableCell align="left" key={index}>
      {sortable ? (
        <TableSortLabel
          active={active}
          direction={direction}
          onClick={() => {
            setDirection(direction === 'asc' ? 'desc' : 'asc');
            onSort?.(item.key, direction);
          }}
        >
          {item.icon}&nbsp;&nbsp;{item.title}
        </TableSortLabel>
      ) : (
        <>
          {item.icon}&nbsp;&nbsp;{item.title}
        </>
      )}
    </TableCell>
  );
};

export const DesktopTableHeader = (props: TableProps) => {
  const { headers, hasActions, onSort, sortedColumn } = props;
  return (
    <ThemeProvider theme={theme}>
      <TableHead>
        <TableRow>
          {headers.map((item, index) => {
            return (
              <HeadCell
                key={index}
                index={index}
                active={sortedColumn === item.key}
                item={item}
                onSort={onSort}
                sortable={props.sortableHeaders?.includes(item.key)}
              />
            );
          })}
          {hasActions && <TableCell align="left"></TableCell>}
        </TableRow>
      </TableHead>
    </ThemeProvider>
  );
};
