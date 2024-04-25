import React from 'react';
import { Outlet } from 'react-router-dom';
import { NavBar } from './Navbar';

export const Layout: React.FC = () => {
  const electron = (window as any).electron;
  return (
    <div
      className="mx-auto max-w-4xl"
      style={{ maxWidth: '100%', margin: '0' }}
    >
      <NavBar />
      <div className="py-2 px-6">
        <Outlet />
      </div>
    </div>
  );
};
