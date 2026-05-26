import { CssBaseline } from '@mui/material';
import {
  ThemeProvider as MUIThemeProvider,
  StyledEngineProvider,
  createTheme,
} from '@mui/material/styles';

import ComponentsOverrides from './overrides';
import palette from './palette';
import typography from './typography';

export const ThemeProvider = ({ children }: React.PropsWithChildren) => {
  const theme = createTheme({
    palette,
    typography,
    shape: {
      borderRadius: 10,
    },
  });

  theme.components = ComponentsOverrides();

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  );
};

export default ThemeProvider;
