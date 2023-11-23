// AuthContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [loginTime, setLoginTime] = useState(null);

  useEffect(() => {
    // Check local storage for existing authentication state
    const storedAuth = localStorage.getItem('auth');
    if (storedAuth) {
      const { isAuthenticated, loginTime } = JSON.parse(storedAuth);
      setAuthenticated(isAuthenticated);
      setLoginTime(loginTime);
    }
  }, []);

  const login = () => {
    setAuthenticated(true);
    setLoginTime(new Date().getTime());
    localStorage.setItem(
      'auth',
      JSON.stringify({ isAuthenticated: true, loginTime: new Date().getTime() })
    );
  };

  const logout = () => {
    setAuthenticated(false);
    setLoginTime(null);
    localStorage.removeItem('auth');
  };
    
  const contextValue = {
    isAuthenticated,
    login,
    logout,
    loginTime,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
