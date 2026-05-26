import { useState } from 'react';
import { Box, Card, CardContent, Typography, Tabs, Tab } from '@mui/material';
import { FitnessCenter } from '@mui/icons-material';
import { LoginForm } from './LoginForm';
import { RegisterForm } from './RegisterForm';

export const LoginPage = () => {
  const [tab, setTab] = useState(0);

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'background.default',
        p: 2,
      }}
    >
      <Card sx={{ maxWidth: 420, width: '100%' }}>
        <CardContent sx={{ p: 4 }}>
          <Box sx={{ textAlign: 'center', mb: 3 }}>
            <FitnessCenter
              sx={{ fontSize: 48, color: 'primary.main', mb: 1 }}
            />
            <Typography variant="h3" gutterBottom>
              FitPlanner
            </Typography>
          </Box>

          <Tabs
            value={tab}
            onChange={(_, v) => setTab(v)}
            variant="fullWidth"
            sx={{ mb: 2 }}
          >
            <Tab label="Вход" />
            <Tab label="Регистрация" />
          </Tabs>

          {tab === 0 ? <LoginForm /> : <RegisterForm />}
        </CardContent>
      </Card>
    </Box>
  );
};
