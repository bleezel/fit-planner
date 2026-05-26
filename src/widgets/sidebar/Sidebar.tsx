import { useLocation, useNavigate } from 'react-router-dom';
import {
  Box,
  Drawer,
  List,
  ListItemButton,
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

export const SIDEBAR_WIDTH = 260;

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
    <Drawer
      variant="permanent"
      sx={{
        width: SIDEBAR_WIDTH,
        flexShrink: 0,
        display: { xs: 'none', md: 'block' },
        '& .MuiDrawer-paper': {
          width: SIDEBAR_WIDTH,
          boxSizing: 'border-box',
          bgcolor: 'background.paper',
          borderRight: '1px solid',
          borderColor: 'divider',
        },
      }}
    >
      <Box sx={{ p: 2.5, display: 'flex', alignItems: 'center', gap: 1 }}>
        <FitnessCenter sx={{ color: 'primary.main' }} />
        <Typography variant="h4">FitPlanner</Typography>
      </Box>

      <List sx={{ px: 1.5 }}>
        {navItems.map((item) => (
          <ListItemButton
            key={item.path}
            selected={location.pathname === item.path}
            onClick={() => navigate(item.path)}
            sx={{
              borderRadius: 2,
              mb: 0.5,
              '&.Mui-selected': {
                bgcolor: 'primary.main',
                color: 'primary.contrastText',
                '& .MuiListItemIcon-root': {
                  color: 'primary.contrastText',
                },
                '&:hover': {
                  bgcolor: 'primary.dark',
                },
              },
            }}
          >
            <ListItemIcon sx={{ minWidth: 40 }}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.label} />
          </ListItemButton>
        ))}
      </List>
    </Drawer>
  );
};
