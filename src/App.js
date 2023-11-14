// App.js
import React from 'react';
import { AuthProvider } from './AuthContext';
import AutoLogoutNotification from './AutoLogoutNotification';
import ExampleComponent from './ExampleComponent';

const App = () => {
  return (
    <AuthProvider>
      <AutoLogoutNotification />
      <ExampleComponent />
    </AuthProvider>
  );
};

export default App;
