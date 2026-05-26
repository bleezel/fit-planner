export type MockUser = {
  id: string;
  name: string;
  email: string;
  password: string;
  role: 'user' | 'admin';
};

export const mockUsers: MockUser[] = [
  {
    id: '1',
    name: 'Irina',
    email: 'irina@test.com',
    password: '123456',
    role: 'user',
  },
  {
    id: '2',
    name: 'Admin',
    email: 'admin@test.com',
    password: '123456',
    role: 'admin',
  },
];
