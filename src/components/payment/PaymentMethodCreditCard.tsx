import { ThemeProvider } from '@emotion/react';
import { Box } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { Typography } from '../../elements/Typography';
import { PaymentIcon } from '../../elements/icons';
import { ChevronRight } from '../../elements/icons/ChevronRight';
import { colors } from '../../styles/colors';
import { theme } from '../../theme';
interface Props {
  cardType: string;
  cardNum: number;
  cardExpiration: string;
}

export const PaymentMethodCreditCard = (props: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          background: colors.white,
          border: `1px solid ${colors.lightgray[500]}`,
          borderRadius: '4px',
          display: 'flex',
          alignItems: 'center',
          gap: 1,
          padding: 2,
          width: '100%'
        }}
      >
        <Box>
          <PaymentIcon icon="visa" />
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flex: 1
          }}
        >
          <Box>
            <Typography className="interSemibold14">
              {'Card ending in '}
              {props.cardNum}
            </Typography>
            <Typography className="interRegular13">
              {'Expires '}
              {props.cardExpiration}
            </Typography>
          </Box>

          <IconButton
            size="large"
            edge="end"
            aria-label="more"
            sx={{ color: colors.black, padding: '4px' }}
          >
            <ChevronRight />
          </IconButton>
        </Box>
      </Box>
    </ThemeProvider>
  );
};
