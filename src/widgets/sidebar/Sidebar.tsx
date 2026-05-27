import { useLocation, useNavigate } from 'react-router-dom';
import {
  Box,
  List,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import {
  Dashboard,
  FitnessCenter,
  Restaurant,
  TrendingUp,
  Person,
} from '@mui/icons-material';
import { ROUTES } from '@/shared/constants/routes';
import { StyledDrawer, NavItem } from './styles';

export { SIDEBAR_WIDTH } from './styles';

const navItems = [
  { label: 'Dashboard', path: ROUTES.DASHBOARD, icon: <Dashboard /> },
  { label: 'Тренировки', path: ROUTES.TRAINING, icon: <FitnessCenter /> },
  { label: 'Питание', path: ROUTES.NUTRITION, icon: <Restaurant /> },
  { label: 'Прогресс', path: ROUTES.PROGRESS, icon: <TrendingUp /> },
  { label: 'Профиль', path: ROUTES.PROFILE, icon: <Person /> },
];

export const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <StyledDrawer variant="permanent">
      <Box sx={{ p: 2.5, display: 'flex', alignItems: 'center', gap: 1 }}>
        <FitnessCenter sx={{ color: 'primary.main' }} />
        <Typography variant="h4">FitPlanner</Typography>
      </Box>

      <List sx={{ px: 1.5 }}>
        {navItems.map((item) => (
          <NavItem
            key={item.path}
            selected={location.pathname === item.path}
            onClick={() => navigate(item.path)}
          >
            <ListItemIcon sx={{ minWidth: 40 }}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.label} />
          </NavItem>
        ))}
      </List>
    </StyledDrawer>
  );
};
