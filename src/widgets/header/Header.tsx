import { AppBar, Toolbar, Typography, IconButton, Box } from '@mui/material';
import { Logout } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useAuthStore, selectUser } from '@/features/auth/model';
import { ROUTES } from '@/shared/constants/routes';
import { SIDEBAR_WIDTH } from '@/widgets/sidebar';

export const Header = () => {
  const user = useAuthStore(selectUser);
  const logout = useAuthStore((s) => s.logout);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate(ROUTES.LOGIN, { replace: true });
  };

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        width: { md: `calc(100% - ${SIDEBAR_WIDTH}px)` },
        ml: { md: `${SIDEBAR_WIDTH}px` },
        bgcolor: 'background.paper',
        borderBottom: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Toolbar>
        <Box sx={{ flexGrow: 1 }} />
        <Typography variant="body2" color="text.secondary" sx={{ mr: 1 }}>
          {user?.name}
        </Typography>
        <IconButton onClick={handleLogout} size="small" color="default">
          <Logout fontSize="small" />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
