import type { Components, Theme } from '@mui/material/styles';

const Button = (): Partial<Components<Theme>> => {
  return {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
          borderRadius: 10,
        },
        sizeSmall: ({ theme }) => ({
          padding: theme.spacing(0, 1.5),
          height: 30,
        }),
        sizeMedium: ({ theme }) => ({
          padding: theme.spacing(0, 2),
          height: 36,
        }),
        sizeLarge: ({ theme }) => ({
          padding: theme.spacing(0, 2.5),
          height: 42,
        }),
      },
    },
  };
};

export default Button;
