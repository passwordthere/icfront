import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export const Layout: React.FC = () => {
  const electron = (window as any).electron;
  return (
    <div>
      <p>This is our layout. 123@{electron.homeDir()}</p>
      <p>{electron.osVersion()}</p>
      <p>{electron.arch()}</p>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/work">Work</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};
