import { ThemeProvider } from '@emotion/react';
import { Box, IconButton, TableCell, TableRow } from '@mui/material';
import { Avatar } from '../../elements/Avatar';
import { Horizontaldots } from '../../elements/icons';
import { theme } from '../../theme';

interface Props {
  data: any;
  index: number;
  handleClick: (e: any) => void;
  menuOpen: boolean;
  hasActions?: boolean;
  circularImages?: boolean;
  imageKey?: string;
  headers: { icon: React.ReactNode | string; title: string; key: string }[];
}

export const DesktopTableRow = ({
  data,
  index,
  handleClick,
  menuOpen,
  hasActions,
  circularImages,
  imageKey,
  headers
}: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <TableRow key={index} className="interRegular14">
        {headers.map((item, index) => {
          return (
            <TableCell align="left" key={`table-cell${index}`}>
              {index === 0 ? (
                <Box
                  display="flex"
                  alignItems="center"
                  gap={1}
                  sx={{
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap'
                  }}
                >
                  {imageKey &&
                    (circularImages ? (
                      <Avatar src={data[imageKey]} />
                    ) : (
                      // eslint-disable-next-line jsx-a11y/alt-text
                      <img
                        src={data[imageKey]}
                        style={{
                          width: '40px',
                          height: '40px',
                          objectFit: 'cover',
                          borderRadius: '3px'
                        }}
                      />
                    ))}
                  {data[item.key]}
                </Box>
              ) : (
                data[item.key]
              )}
            </TableCell>
          );
        })}
        {hasActions && (
          <TableCell align="left" className="action-col">
            <IconButton
              aria-controls={menuOpen ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={menuOpen ? 'true' : undefined}
              onClick={handleClick}
            >
              <Horizontaldots />
            </IconButton>
          </TableCell>
        )}
      </TableRow>
    </ThemeProvider>
  );
};
