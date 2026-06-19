import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface UserData {
  nombre: string;
  email: string;
  telefono: string;
  direccion: string;
  password?: string;
  createdAt: string;
  estado?: string;
}

interface AuthState {
  currentUser: Omit<UserData, 'password'> | null;
  login: (email: string, password: string) => { success: boolean; message?: string };
  register: (user: Omit<UserData, 'createdAt'>) => { success: boolean; message?: string };
  logout: () => void;
}

export const useAuth = create<AuthState>()(
  persist(
    (set) => ({
      currentUser: null,

      login: (email, password) => {
        const usersStr = localStorage.getItem('rosquillasReyesUsers') || '[]';
        let users: UserData[] = [];
        try {
          users = JSON.parse(usersStr);
        } catch (e) {
          users = [];
        }

        const user = users.find(
          (u) => u.email.toLowerCase() === email.toLowerCase() && u.password === password
        );

        if (!user) {
          return { success: false, message: 'Correo o contraseña incorrectos.' };
        }

        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { password: _, ...userWithoutPassword } = user;
        set({ currentUser: userWithoutPassword });
        return { success: true };
      },

      register: (userData) => {
        const usersStr = localStorage.getItem('rosquillasReyesUsers') || '[]';
        let users: UserData[] = [];
        try {
          users = JSON.parse(usersStr);
        } catch (e) {
          users = [];
        }

        const exists = users.some(
          (u) => u.email.toLowerCase() === userData.email.toLowerCase()
        );

        if (exists) {
          return { success: false, message: 'El correo electrónico ya está registrado.' };
        }

        const newUser: UserData = {
          ...userData,
          createdAt: new Date().toLocaleDateString('es-ES'),
          estado: 'Activo'
        };

        users.push(newUser);
        localStorage.setItem('rosquillasReyesUsers', JSON.stringify(users));

        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { password: _, ...userWithoutPassword } = newUser;
        set({ currentUser: userWithoutPassword });
        return { success: true };
      },

      logout: () => {
        set({ currentUser: null });
      }
    }),
    {
      name: 'auth-rosquilla-reyes'
    }
  )
);
