import { Navigate, Outlet } from 'react-router-dom';
import { useAuthStore } from '../model/useAuthStore';
import { selectIsAuthenticated } from '../model/selectors';
import { ROUTES } from '@/shared/constants/routes';

export const ProtectedRoute = () => {
  const isAuthenticated = useAuthStore(selectIsAuthenticated);

  if (!isAuthenticated) {
    return <Navigate to={ROUTES.LOGIN} replace />;
  }

  return <Outlet />;
};
