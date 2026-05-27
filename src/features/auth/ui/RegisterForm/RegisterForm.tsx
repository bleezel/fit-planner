import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  TextField,
  Button,
  Alert,
  InputAdornment,
  IconButton,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useForm } from 'react-hook-form';
import { useAuthStore } from '@/features/auth/model';
import { authApi } from '@/features/auth/api';
import { ROUTES } from '@/shared/constants/routes';

type RegisterFormValues = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export const RegisterForm = () => {
  const navigate = useNavigate();
  const login = useAuthStore((s) => s.login);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RegisterFormValues>({
    defaultValues: { name: '', email: '', password: '', confirmPassword: '' },
  });

  const password = watch('password');

  const onSubmit = async (data: RegisterFormValues) => {
    setError('');
    setLoading(true);
    try {
      const result = await authApi.register({
        name: data.name,
        email: data.email,
        password: data.password,
      });
      login(result.user, result.token);
      navigate(ROUTES.DASHBOARD, { replace: true });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Ошибка регистрации');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}

      <Box component="form" onSubmit={handleSubmit(onSubmit)}>
        <TextField
          label="Имя"
          fullWidth
          margin="normal"
          autoComplete="name"
          {...register('name', {
            required: 'Введите имя',
            minLength: { value: 2, message: 'Минимум 2 символа' },
          })}
          error={!!errors.name}
          helperText={errors.name?.message}
        />

        <TextField
          label="Email"
          fullWidth
          margin="normal"
          autoComplete="email"
          {...register('email', {
            required: 'Введите email',
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: 'Некорректный email',
            },
          })}
          error={!!errors.email}
          helperText={errors.email?.message}
        />

        <TextField
          label="Пароль"
          type={showPassword ? 'text' : 'password'}
          fullWidth
          margin="normal"
          autoComplete="new-password"
          {...register('password', {
            required: 'Введите пароль',
            minLength: { value: 6, message: 'Минимум 6 символов' },
          })}
          error={!!errors.password}
          helperText={errors.password?.message}
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowPassword((v) => !v)}
                    edge="end"
                    size="small"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            },
          }}
        />

        <TextField
          label="Подтвердите пароль"
          type={showPassword ? 'text' : 'password'}
          fullWidth
          margin="normal"
          autoComplete="new-password"
          {...register('confirmPassword', {
            required: 'Подтвердите пароль',
            validate: (value) =>
              value === password || 'Пароли не совпадают',
          })}
          error={!!errors.confirmPassword}
          helperText={errors.confirmPassword?.message}
        />

        <Button
          type="submit"
          variant="contained"
          fullWidth
          size="large"
          disabled={loading}
          sx={{ mt: 3 }}
        >
          {loading ? 'Регистрация...' : 'Зарегистрироваться'}
        </Button>
      </Box>
    </>
  );
};
