import { useLocation, useNavigate } from 'react-router-dom';
import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import {
  Dashboard,
  FitnessCenter,
  Restaurant,
  TrendingUp,
  Person,
} from '@mui/icons-material';
import { ROUTES } from '@/shared/constants/routes';

const navItems = [
  { label: 'Главная', path: ROUTES.DASHBOARD, icon: <Dashboard /> },
  { label: 'Тренировки', path: ROUTES.TRAINING, icon: <FitnessCenter /> },
  { label: 'Питание', path: ROUTES.NUTRITION, icon: <Restaurant /> },
  { label: 'Прогресс', path: ROUTES.PROGRESS, icon: <TrendingUp /> },
  { label: 'Профиль', path: ROUTES.PROFILE, icon: <Person /> },
];

export const MobileNavigation = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const currentIndex = navItems.findIndex(
    (item) => item.path === location.pathname,
  );

  return (
    <Paper
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        display: { xs: 'block', md: 'none' },
        zIndex: 1100,
      }}
      elevation={8}
    >
      <BottomNavigation
        value={currentIndex}
        onChange={(_, newValue) => navigate(navItems[newValue].path)}
        showLabels
        sx={{ bgcolor: 'background.paper' }}
      >
        {navItems.map((item) => (
          <BottomNavigationAction
            key={item.path}
            label={item.label}
            icon={item.icon}
          />
        ))}
      </BottomNavigation>
    </Paper>
  );
};
