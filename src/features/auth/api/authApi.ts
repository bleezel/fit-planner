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

type RegisterParams = {
  name: string;
  email: string;
  password: string;
};

type AuthResponse = {
  user: AuthUser;
  token: string;
};

export const authApi = {
  login: async (params: LoginParams): Promise<AuthResponse> => {
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

  register: async (params: RegisterParams): Promise<AuthResponse> => {
    await delay(800);

    const exists = mockUsers.find((u) => u.email === params.email);
    if (exists) {
      throw new Error('Пользователь с таким email уже существует');
    }

    const newUser = {
      id: String(mockUsers.length + 1),
      name: params.name,
      email: params.email,
      password: params.password,
      role: 'user' as const,
    };

    mockUsers.push(newUser);

    const { password: _, ...user } = newUser;
    return {
      user,
      token: `mock-token-${user.id}-${Date.now()}`,
    };
  },
};
