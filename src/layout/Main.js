import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../component/Header/Header';
import { DrawerProvider } from '../component/Drawer/DrawerContext';
import Drawer from '../component/Drawer/Drawer';

const Main = () => (
  <DrawerProvider>
    <div>
      <Header />
      <Outlet />
      <Drawer />
    </div>
  </DrawerProvider>
);

export default Main;
