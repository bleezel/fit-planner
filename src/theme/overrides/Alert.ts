import type { Components, Theme } from '@mui/material/styles';

const Alert = (): Partial<Components<Theme>> => {
  return {
    MuiAlert: {
      styleOverrides: {
        root: {
          borderRadius: 10,
        },
      },
    },
  };
};

export default Alert;
