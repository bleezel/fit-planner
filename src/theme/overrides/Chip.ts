import { alpha, type Components, type Theme } from '@mui/material/styles';

const Chip = (): Partial<Components<Theme>> => {
  return {
    MuiChip: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: theme.shape.borderRadius,
          fontSize: '0.688rem',
          fontWeight: 600,
          lineHeight: 1,
          letterSpacing: '0.01em',
        }),
        filled: {
          border: 'none',
        },
        colorPrimary: ({ theme }) => ({
          color: theme.palette.primary.light,
          backgroundColor: alpha(theme.palette.primary.main, 0.14),
        }),
        colorSecondary: ({ theme }) => ({
          color: theme.palette.secondary.light,
          backgroundColor: alpha(theme.palette.secondary.main, 0.14),
        }),
        colorSuccess: ({ theme }) => ({
          color: theme.palette.success.light,
          backgroundColor: alpha(theme.palette.success.light, 0.14),
        }),
        colorError: ({ theme }) => ({
          color: theme.palette.error.light,
          backgroundColor: alpha(theme.palette.error.light, 0.14),
        }),
        colorWarning: ({ theme }) => ({
          color: theme.palette.warning.light,
          backgroundColor: alpha(theme.palette.warning.light, 0.14),
        }),
        colorInfo: ({ theme }) => ({
          color: theme.palette.info.light,
          backgroundColor: alpha(theme.palette.info.light, 0.14),
        }),
      },
    },
  };
};

export default Chip;
