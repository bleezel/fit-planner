import type { Components, Theme } from '@mui/material/styles';

const Card = (): Partial<Components<Theme>> => {
  return {
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          borderRadius: 12,
          border: '1px solid',
          borderColor: 'rgba(125, 168, 92, 0.15)',
        },
      },
    },
  };
};

export default Card;
