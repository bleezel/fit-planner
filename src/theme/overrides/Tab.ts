import type { Components, Theme } from '@mui/material/styles';

const Tab = (): Partial<Components<Theme>> => {
  return {
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 500,
        },
      },
    },
  };
};

export default Tab;
