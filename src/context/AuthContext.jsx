import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Check if user is logged in from localStorage
    const userData = localStorage.getItem('krishi_mitra_user');
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  const login = (email, password) => {
    setLoading(true);
    
    // Simulate API call
    return new Promise((resolve) => {
      setTimeout(() => {
        const userData = {
          id: '1',
          name: 'Demo Farmer',
          email: email,
          location: 'Akola, Maharashtra',
          role: 'farmer'
        };
        
        setUser(userData);
        localStorage.setItem('krishi_mitra_user', JSON.stringify(userData));
        setLoading(false);
        resolve(userData);
      }, 1000);
    });
  };

  const register = (userData) => {
    setLoading(true);
    
    return new Promise((resolve) => {
      setTimeout(() => {
        const newUser = {
          id: Date.now().toString(),
          name: userData.name,
          email: userData.email,
          location: userData.location,
          role: 'farmer'
        };
        
        setUser(newUser);
        localStorage.setItem('krishi_mitra_user', JSON.stringify(newUser));
        setLoading(false);
        resolve(newUser);
      }, 1000);
    });
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('krishi_mitra_user');
  };

  const value = {
    user,
    login,
    register,
    logout,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
