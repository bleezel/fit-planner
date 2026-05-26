import type { Components, Theme } from '@mui/material/styles';

const Dialog = (): Partial<Components<Theme>> => {
  return {
    MuiDialog: {
      styleOverrides: {
        paper: {
          backgroundImage: 'none',
          borderRadius: 12,
        },
      },
    },
  };
};

export default Dialog;
