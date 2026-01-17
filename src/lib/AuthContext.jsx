import React, { createContext, useState, useContext, useEffect } from 'react';
// Base44 removed: use local offline API (no auth redirects).
import { appParams } from '@/lib/app-params';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoadingAuth, setIsLoadingAuth] = useState(true);
  const [isLoadingPublicSettings, setIsLoadingPublicSettings] = useState(true);
  const [authError, setAuthError] = useState(null);
  const [appPublicSettings, setAppPublicSettings] = useState(null); // Contains only { id, public_settings }

  useEffect(() => {
    checkAppState();
  }, []);

  const checkAppState = async () => {
    try {
      setIsLoadingPublicSettings(true);
      setAuthError(null);
      
      // Base44 removed: skip API calls, work offline
      // Set default public settings for offline mode
      setAppPublicSettings({
        id: appParams.appId,
        public_settings: {}
      });
      
      // Check if user is authenticated (using localStorage token if available)
      if (appParams.token) {
        await checkUserAuth();
      } else {
        setIsLoadingAuth(false);
        setIsAuthenticated(false);
      }
      setIsLoadingPublicSettings(false);
    } catch (error) {
      console.error('Unexpected error:', error);
      setAuthError({
        type: 'unknown',
        message: error.message || 'An unexpected error occurred'
      });
      setIsLoadingPublicSettings(false);
      setIsLoadingAuth(false);
    }
  };

  const checkUserAuth = async () => {
    try {
      // Base44 removed: use localStorage token for offline auth
      setIsLoadingAuth(true);
      
      // If token exists, create a mock user object for offline mode
      if (appParams.token) {
        const mockUser = {
          id: 'local_user',
          email: 'user@localhost',
          role: 'user',
          // Add any other user properties needed by the app
        };
        setUser(mockUser);
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
      setIsLoadingAuth(false);
    } catch (error) {
      console.error('User auth check failed:', error);
      setIsLoadingAuth(false);
      setIsAuthenticated(false);
    }
  };

  const logout = (shouldRedirect = true) => {
    setUser(null);
    setIsAuthenticated(false);
    
    // Base44 removed: clear localStorage tokens
    try {
      localStorage.removeItem('base44_access_token');
      localStorage.removeItem('token');
      localStorage.removeItem('access_token');
    } catch (error) {
      console.error('Failed to clear tokens:', error);
    }
    
    if (shouldRedirect) {
      // Redirect to home page
      window.location.href = '/';
    }
  };

  const navigateToLogin = () => {
    // Base44 removed: redirect to home page instead of login
    window.location.href = '/';
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      isAuthenticated, 
      isLoadingAuth,
      isLoadingPublicSettings,
      authError,
      appPublicSettings,
      logout,
      navigateToLogin,
      checkAppState
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
