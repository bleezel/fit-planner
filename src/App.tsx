import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ThemeProvider from './theme';
import { LoginPage } from './features/auth/ui/LoginPage';
import { ProtectedRoute } from './features/auth/ui/ProtectedRoute';
import { ROUTES } from './shared/constants/routes';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path={ROUTES.LOGIN} element={<LoginPage />} />
          <Route element={<ProtectedRoute />}>
            <Route path={ROUTES.DASHBOARD} element={<div>Dashboard</div>} />
          </Route>
          <Route path="*" element={<Navigate to={ROUTES.LOGIN} replace />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
