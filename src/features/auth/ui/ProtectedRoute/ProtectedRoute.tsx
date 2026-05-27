import { Navigate, Outlet } from 'react-router-dom';
import { useAuthStore, selectIsAuthenticated } from '@/features/auth/model';
import { ROUTES } from '@/shared/constants/routes';

export const ProtectedRoute = () => {
  const isAuthenticated = useAuthStore(selectIsAuthenticated);

  if (!isAuthenticated) {
    return <Navigate to={ROUTES.LOGIN} replace />;
  }

  return <Outlet />;
};
