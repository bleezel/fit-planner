import type { ThemeOptions } from '@mui/material';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';
import '@fontsource/jetbrains-mono/400.css';
import '@fontsource/jetbrains-mono/500.css';

const typography: ThemeOptions['typography'] = {
  fontFamily: 'Inter, sans-serif, system-ui',
  fontWeightRegular: 400,
  fontWeightMedium: 600,
  fontWeightBold: 700,
  h1: {
    fontSize: '2rem',
    lineHeight: 1.25,
    fontWeight: 700,
    letterSpacing: '-0.015em',
  },
  h2: {
    fontSize: '1.5rem',
    lineHeight: 1.33,
    fontWeight: 700,
    letterSpacing: '-0.01em',
  },
  h3: {
    fontSize: '1.25rem',
    lineHeight: 1.4,
    fontWeight: 600,
  },
  h4: {
    fontSize: '1.125rem',
    lineHeight: 1.33,
    fontWeight: 600,
  },
  h5: {
    fontSize: '1rem',
    lineHeight: 1.5,
    fontWeight: 600,
  },
  h6: {
    fontSize: '0.875rem',
    lineHeight: 1.43,
    fontWeight: 600,
  },
  body1: {
    fontSize: '1rem',
    lineHeight: 1.5,
    fontWeight: 400,
  },
  body2: {
    fontSize: '0.875rem',
    lineHeight: 1.43,
    fontWeight: 400,
  },
  caption: {
    fontSize: '0.75rem',
    lineHeight: 1.33,
    fontWeight: 400,
  },
  overline: {
    fontSize: '0.688rem',
    lineHeight: 1.45,
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: '0.14em',
  },
} as const;

export default typography;
