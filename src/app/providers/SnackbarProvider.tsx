import { SnackbarProvider as NotistackProvider, closeSnackbar } from 'notistack';
import { IconButton } from '@mui/material';
import { Close } from '@mui/icons-material';
import type { ReactNode } from 'react';

export const SnackbarProvider = ({ children }: { children: ReactNode }) => (
  <NotistackProvider
    maxSnack={3}
    autoHideDuration={3000}
    anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
    action={(snackbarId) => (
      <IconButton size="small" color="inherit" onClick={() => closeSnackbar(snackbarId)}>
        <Close fontSize="small" />
      </IconButton>
    )}
  >
    {children}
  </NotistackProvider>
);
