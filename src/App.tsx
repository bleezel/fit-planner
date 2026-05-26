import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ThemeProvider from './theme';
import { LoginPage } from './features/auth/ui/LoginPage';
import { ProtectedRoute } from './features/auth/ui/ProtectedRoute';
import { AppLayout } from './widgets/app-layout/AppLayout';
import { ROUTES } from './shared/constants/routes';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path={ROUTES.LOGIN} element={<LoginPage />} />
          <Route element={<ProtectedRoute />}>
            <Route element={<AppLayout />}>
              <Route path={ROUTES.DASHBOARD} element={<div>Dashboard — заглушка</div>} />
              <Route path={ROUTES.TRAINING} element={<div>Тренировки — заглушка</div>} />
              <Route path={ROUTES.NUTRITION} element={<div>Питание — заглушка</div>} />
              <Route path={ROUTES.PROGRESS} element={<div>Прогресс — заглушка</div>} />
              <Route path={ROUTES.PROFILE} element={<div>Профиль — заглушка</div>} />
            </Route>
          </Route>
          <Route path="*" element={<Navigate to={ROUTES.LOGIN} replace />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
