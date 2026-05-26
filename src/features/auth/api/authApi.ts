import { delay } from '@/shared/api/delay';
import { mockUsers } from '@/mocks/users';

export type AuthUser = {
  id: string;
  name: string;
  email: string;
  role: 'user' | 'admin';
};

type LoginParams = {
  email: string;
  password: string;
};

type LoginResponse = {
  user: AuthUser;
  token: string;
};

export const authApi = {
  login: async (params: LoginParams): Promise<LoginResponse> => {
    await delay(800);

    const found = mockUsers.find(
      (u) => u.email === params.email && u.password === params.password,
    );

    if (!found) {
      throw new Error('Неверный email или пароль');
    }

    const { password: _, ...user } = found;
    return {
      user,
      token: `mock-token-${user.id}-${Date.now()}`,
    };
  },
};
