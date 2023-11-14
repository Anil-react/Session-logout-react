// AutoLogoutNotification.js
import React, { useEffect } from 'react';
import { useAuth } from './AuthContext';

const AutoLogoutNotification = () => {
  const { isAuthenticated, logout, loginTime } = useAuth();

  useEffect(() => {
    let timer;

    if (isAuthenticated) {
      const timeoutDuration = 2 * 60 * 1000; // 2 minutes
      const notificationDuration = 1 * 60 * 1000; // 1 minute

      const elapsed = new Date().getTime() - loginTime;
      const remainingTime = timeoutDuration - elapsed;

      if (remainingTime > 0) {
        timer = setTimeout(() => {
          // Notify user about session expiry 1 minute before
          alert('Your session will expire in 1 minute. Please save your work.');
        }, remainingTime - notificationDuration);

        setTimeout(() => {
          // Logout user after 2 minutes
          logout();
          alert('Your session has expired. Please log in again.');
        }, remainingTime);
      }
    }

    return () => clearTimeout(timer);
  }, [isAuthenticated, logout, loginTime]);

  return null;
};

export default AutoLogoutNotification;
