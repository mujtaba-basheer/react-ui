import { Box } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { Typography } from '../elements/Typography';
import { Close } from '../elements/icons';
import { colors } from '../styles/colors';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(0)
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1)
  }
}));

export interface ModalProps {
  title?: string;
  children: React.ReactNode;
  open: boolean;
  onClose?: () => void;
  size?: 'small' | 'medium' | 'large';
  closeOnBackdropClick?: boolean;
}

export const Modal = ({
  title,
  children,
  open,
  onClose,
  closeOnBackdropClick = true,
  // setOpen,
  size
}: ModalProps) => {
  const [visibility, setVisibility] = useState(open);
  useEffect(() => setVisibility(open), [open]);

  const sizePresets = (size: any) => {
    switch (size) {
      case 'small':
        return { width: '360px', boxP: '20px' };
      case 'medium':
        return { width: '680px', boxP: '40px' };
      case 'large':
        return { width: '1180px', boxP: '40px' };
      default:
        return { width: '680px', boxP: '40px' };
    }
  };

  return visibility ? (
    <BootstrapDialog
      maxWidth="sm"
      sx={{
        '& .MuiDialog-container': {
          justifyContent: { xs: 'flex-end', sm: 'center' },
          alignItems: { xs: 'end', sm: 'center' },

          '& .MuiPaper-root': {
            width: '100%',
            maxWidth: {
              xs: '100%',
              sm: sizePresets(size).width
            },
            height: { xs: '100%', sm: 'auto' },
            minHeight: '100px',
            maxHeight: { xs: '90dvh', sm: 'auto' },
            boxShadow: 'unset',
            margin: { xs: '0', sm: 4 },
            borderRadius: { xs: 0, sm: '8px' }
          }
        }
      }}
      aria-labelledby="customized-dialog-title"
      open={visibility}
      onClose={(reason: string) => {
        // setOpen?.(open);
        if (reason === 'backdropClick' && !closeOnBackdropClick) return;
        onClose?.();
      }}
    >
      <Box
        sx={{
          height: '100%',
          p: { xs: 2, sm: sizePresets(size).boxP }
        }}
      >
        <IconButton
          aria-label="close"
          onClick={() => {
            setVisibility(false);
            onClose?.();
          }}
          sx={{
            position: 'absolute',
            right: 3,
            top: 3,
            width: '30px',
            height: '30px',
            color: colors.grayText
          }}
        >
          <Close size={'20px'} />
        </IconButton>

        {title && (
          <DialogTitle sx={{ m: 0, p: 0 }} id="customized-dialog-title">
            <Typography className="interSemibold20">{title}</Typography>
          </DialogTitle>
        )}

        <DialogContent>
          <Box
            sx={{
              mt: { xs: '16px', md: 0 },
              pb: { xs: '16px ', md: 0 }
            }}
          >
            {children}
          </Box>
        </DialogContent>
      </Box>
    </BootstrapDialog>
  ) : (
    <></>
  );
};
