/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-refresh/only-export-components */
import { ReactElement, createContext, useContext, useState } from 'react';
import { API } from './env';
import axios from 'axios';

type ContextType = {
  authenticated: boolean;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
};

const AuthContext = createContext<ContextType>({
  authenticated: false,
  login: (() => {
    console.log('out');
  }) as any,
  logout: (() => {}) as any,
});

export const AuthProvider = ({ children }: { children: ReactElement }) => {
  const [authenticated, setAuthenticated] = useState(false);

  const login = async (username: string, password: string) => {
    try {
      // Make a request to the server's /login endpoint
      const response = await axios.post(`${API}/auth/login`, {
        username,
        password,
      });

      if (response.status === 200) {
        const { token } = response.data;
        // Update the authentication state and store the token
        setAuthenticated(true);
        localStorage.setItem('token', token);
      } else {
        // Handle login failure, show error message, etc.
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  const logout = async () => {
    try {
      setAuthenticated(false);
      localStorage.removeItem('token');
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ authenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
