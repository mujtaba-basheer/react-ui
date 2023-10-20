import { ThemeProvider } from '@emotion/react';
import { Table, TableBody } from '@mui/material';
import { theme } from '../../theme';
import { BasicTableRow } from './BasicTableRow';

interface Props {
  data: {
    label: string;
    value: string;
  }[];
}

export const BasicTable = ({ data }: Props) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Table aria-label="simple table" sx={{ width: '100%' }}>
          <TableBody>
            {data.map((item, index) => {
              return <BasicTableRow label={item.label} value={item.value} />;
            })}
          </TableBody>
        </Table>
      </ThemeProvider>
    </>
  );
};
