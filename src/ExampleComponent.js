// ExampleComponent.js
import React from 'react';
import { useAuth } from './AuthContext';

const ExampleComponent = () => {
  const { isAuthenticated, login, logout } = useAuth();

  return (
    <div>
      {isAuthenticated ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <button onClick={login}>Login</button>
      )}
    </div>
  );
};

export default ExampleComponent;
