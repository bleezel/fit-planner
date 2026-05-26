import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ThemeProvider from './theme';
import { QueryProvider } from './app/providers/QueryProvider';
import { LoginPage } from './features/auth/ui/LoginPage';
import { ProtectedRoute } from './features/auth/ui/ProtectedRoute';
import { AppLayout } from './widgets/app-layout/AppLayout';
import { TrainingPage } from './features/training-program/ui/TrainingPage';
import { ROUTES } from './shared/constants/routes';

function App() {
  return (
    <ThemeProvider>
      <QueryProvider>
        <BrowserRouter>
          <Routes>
            <Route path={ROUTES.LOGIN} element={<LoginPage />} />
            <Route element={<ProtectedRoute />}>
              <Route element={<AppLayout />}>
                <Route path={ROUTES.DASHBOARD} element={<div>Dashboard — заглушка</div>} />
                <Route path={ROUTES.TRAINING} element={<TrainingPage />} />
                <Route path={ROUTES.NUTRITION} element={<div>Питание — заглушка</div>} />
                <Route path={ROUTES.PROGRESS} element={<div>Прогресс — заглушка</div>} />
                <Route path={ROUTES.PROFILE} element={<div>Профиль — заглушка</div>} />
              </Route>
            </Route>
            <Route path="*" element={<Navigate to={ROUTES.LOGIN} replace />} />
          </Routes>
        </BrowserRouter>
      </QueryProvider>
    </ThemeProvider>
  );
}

export default App;
