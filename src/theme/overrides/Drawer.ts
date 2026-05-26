import type { Components, Theme } from '@mui/material/styles';

const Drawer = (): Partial<Components<Theme>> => {
  return {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundImage: 'none',
          borderRadius: 0,
        },
      },
    },
  };
};

export default Drawer;
