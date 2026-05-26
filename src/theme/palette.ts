import type { ThemeOptions } from '@mui/material';

const palette: ThemeOptions['palette'] = {
  mode: 'light',
  primary: {
    main: '#7da85c',
    light: '#a3c585',
    dark: '#5c8a3c',
    contrastText: '#ffffff',
  },
  secondary: {
    main: '#519657',
    light: '#81c784',
    dark: '#357a3a',
    contrastText: '#ffffff',
  },
  background: {
    default: '#f5f7f2',
    paper: '#ffffff',
  },
  text: {
    primary: '#1a2e1a',
    secondary: '#5f6d5f',
  },
  divider: 'rgba(125, 168, 92, 0.15)',
  error: {
    main: '#d32f2f',
    light: '#ef5350',
    dark: '#c62828',
  },
  warning: {
    main: '#ed6c02',
    light: '#ff9800',
    dark: '#e65100',
  },
  success: {
    main: '#2e7d32',
    light: '#4caf50',
    dark: '#1b5e20',
  },
  info: {
    main: '#0288d1',
    light: '#03a9f4',
    dark: '#01579b',
  },
};

export default palette;
