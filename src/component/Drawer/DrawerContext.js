import React, { createContext, useContext, useState, useCallback } from 'react';

const DrawerContext = createContext(null);

export const DrawerProvider = ({ children }) => {
  const [state, setState] = useState({ open: false, url: '', title: '' });

  const openDrawer = useCallback((url, title) => {
    setState({ open: true, url, title });
  }, []);

  const closeDrawer = useCallback(() => {
    setState((s) => ({ ...s, open: false }));
  }, []);

  return (
    <DrawerContext.Provider value={{ ...state, openDrawer, closeDrawer }}>
      {children}
    </DrawerContext.Provider>
  );
};

export const useDrawer = () => {
  const ctx = useContext(DrawerContext);
  if (!ctx) throw new Error('useDrawer must be used within DrawerProvider');
  return ctx;
};
